import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(rootDir, "static", "component-manifest.json");
const siteUrl = "https://sv-animations.vercel.app";

const collections = [
	{
		key: "magic",
		registryPath: "registry.json",
		documentationPath: "/magic/docs/components",
		registryPathname: "/r",
	},
	{
		key: "spell",
		registryPath: "spell-registry.json",
		documentationPath: "/spell",
		registryPathname: "/s",
	},
	{
		key: "fancy",
		registryPath: "fancy-components.json",
		documentationPath: "/fancy",
		registryPathname: "/f",
	},
];

function requireNonEmptyString(value, field, itemName, collection) {
	if (typeof value !== "string" || value.trim() === "") {
		throw new Error(`${collection}/${itemName} must have a non-empty ${field}.`);
	}

	return value.trim();
}

function requireStringArray(value, field, itemName, collection) {
	if (!Array.isArray(value) || value.length === 0) {
		throw new Error(`${collection}/${itemName} must have at least one ${field} entry.`);
	}

	const entries = value.map((entry) => requireNonEmptyString(entry, field, itemName, collection));
	const uniqueEntries = [...new Set(entries)];

	if (uniqueEntries.length !== entries.length) {
		throw new Error(`${collection}/${itemName} has duplicate ${field} entries.`);
	}

	return entries;
}

function optionalStringArray(value, field, itemName, collection) {
	if (value === undefined) {
		return [];
	}

	if (!Array.isArray(value)) {
		throw new Error(`${collection}/${itemName} must use an array for ${field}.`);
	}

	return value.map((entry) => requireNonEmptyString(entry, field, itemName, collection));
}

function toManifestItem(item, collection) {
	const name = requireNonEmptyString(item.name, "name", "unknown", collection.key);

	return {
		name,
		title: requireNonEmptyString(item.title, "title", name, collection.key),
		description: requireNonEmptyString(item.description, "description", name, collection.key),
		documentationUrl: `${siteUrl}${collection.documentationPath}/${name}`,
		registryUrl: `${siteUrl}${collection.registryPathname}/${name}.json`,
		dependencies: optionalStringArray(item.dependencies, "dependencies", name, collection.key),
		categories: requireStringArray(
			item.meta?.categories,
			"meta.categories",
			name,
			collection.key,
		),
	};
}

async function generateManifest() {
	const manifest = {};

	for (const collection of collections) {
		const registryFile = path.join(rootDir, collection.registryPath);
		const registry = JSON.parse(await fs.readFile(registryFile, "utf8"));

		if (!Array.isArray(registry.items)) {
			throw new Error(`${collection.registryPath} must contain an items array.`);
		}

		const names = new Set();
		manifest[collection.key] = registry.items.map((item) => {
			const manifestItem = toManifestItem(item, collection);

			if (names.has(manifestItem.name)) {
				throw new Error(`${collection.key} contains duplicate item "${manifestItem.name}".`);
			}

			names.add(manifestItem.name);
			return manifestItem;
		});
	}

	return `${JSON.stringify(manifest, null, "\t")}\n`;
}

const generatedManifest = await generateManifest();

if (process.argv.includes("--check")) {
	let currentManifest;

	try {
		currentManifest = await fs.readFile(outputPath, "utf8");
	} catch (error) {
		if (error?.code === "ENOENT") {
			throw new Error("component-manifest.json is missing. Run pnpm manifest:generate.");
		}

		throw error;
	}

	if (currentManifest !== generatedManifest) {
		throw new Error("component-manifest.json is stale. Run pnpm manifest:generate.");
	}

	console.log("component-manifest.json is up to date.");
} else {
	await fs.writeFile(outputPath, generatedManifest);
	console.log(`Generated ${path.relative(rootDir, outputPath)}.`);
}
