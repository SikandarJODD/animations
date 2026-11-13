#!/usr/bin/env node

import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LIVE_MANIFEST = "https://sv-animations.vercel.app/component-manifest.json";
const PROJECT_MANIFEST = resolve("static/component-manifest.json");
const REPOSITORY_MANIFEST = fileURLToPath(
	new URL("../../../static/component-manifest.json", import.meta.url)
);
const COLLECTIONS = new Set(["magic", "spell", "fancy"]);
const MOTION_TAGS = new Set(["static", "subtle", "medium-motion", "high-motion"]);

function usage() {
	return `Usage:
  node find-components.mjs --query <text> [options]

Options:
  --manifest <url-or-path>  Manifest source. Defaults to local, then live.
  --collection <name>       magic, spell, or fancy
  --tag <category>          Required category. Repeat for multiple categories.
  --motion <level>          static, subtle, medium-motion, or high-motion
  --limit <number>          Number of matches to return. Defaults to 3, maximum 10.
  --json                    Print JSON instead of readable text.
  --help                    Show this message.`;
}

function parseArgs(argv) {
	const options = {
		manifest: undefined,
		query: "",
		collection: undefined,
		tags: [],
		motion: undefined,
		limit: 3,
		json: false,
	};

	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (argument === "--help") return { help: true };
		if (argument === "--json") {
			options.json = true;
			continue;
		}

		const value = argv[index + 1];
		if (!value || value.startsWith("--")) {
			throw new Error(`${argument} requires a value.`);
		}

		switch (argument) {
			case "--manifest":
				options.manifest = value;
				break;
			case "--query":
				options.query = value;
				break;
			case "--collection":
				options.collection = value.toLowerCase();
				break;
			case "--tag":
				options.tags.push(value.toLowerCase());
				break;
			case "--motion":
				options.motion = value.toLowerCase();
				break;
			case "--limit":
				options.limit = Number.parseInt(value, 10);
				break;
			default:
				throw new Error(`Unknown option: ${argument}`);
		}
		index += 1;
	}

	if (options.collection && !COLLECTIONS.has(options.collection)) {
		throw new Error("--collection must be magic, spell, or fancy.");
	}
	if (options.motion && !MOTION_TAGS.has(options.motion)) {
		throw new Error("--motion must be static, subtle, medium-motion, or high-motion.");
	}
	if (!Number.isInteger(options.limit) || options.limit < 1 || options.limit > 10) {
		throw new Error("--limit must be an integer from 1 to 10.");
	}
	if (!options.query && !options.collection && !options.tags.length && !options.motion) {
		throw new Error("Provide --query or at least one filter.");
	}

	return options;
}

async function loadManifest(source) {
	if (!source) {
		for (const localManifest of [PROJECT_MANIFEST, REPOSITORY_MANIFEST]) {
			try {
				await access(localManifest);
				source = localManifest;
				break;
			} catch {
				continue;
			}
		}
		source ??= LIVE_MANIFEST;
	}
	if (/^https?:\/\//.test(source)) {
		const response = await fetch(source);
		if (!response.ok) {
			throw new Error(`Manifest request failed with ${response.status}.`);
		}
		return response.json();
	}
	return JSON.parse(await readFile(source, "utf8"));
}

function tokenize(value) {
	return value
		.toLowerCase()
		.split(/[^a-z0-9-]+/)
		.filter((token) => token.length > 1);
}

function scoreComponent(component, queryTokens) {
	const name = component.name.toLowerCase();
	const title = component.title.toLowerCase();
	const description = component.description.toLowerCase();
	const categories = component.categories.map((category) => category.toLowerCase());
	let score = 0;
	const matched = new Set();

	for (const token of queryTokens) {
		if (name === token || title === token) score += 12;
		if (name.includes(token) || title.includes(token)) score += 7;
		if (categories.some((category) => category === token)) score += 9;
		else if (categories.some((category) => category.includes(token))) score += 5;
		if (description.includes(token)) score += 2;

		if (
			name.includes(token) ||
			title.includes(token) ||
			description.includes(token) ||
			categories.some((category) => category.includes(token))
		) {
			matched.add(token);
		}
	}

	return { score, matched: [...matched] };
}

function flattenManifest(manifest) {
	return Object.entries(manifest).flatMap(([collection, components]) => {
		if (!COLLECTIONS.has(collection) || !Array.isArray(components)) return [];
		return components.map((component) => ({ ...component, collection }));
	});
}

function findComponents(manifest, options) {
	const queryTokens = tokenize(options.query);
	return flattenManifest(manifest)
		.filter((component) => !options.collection || component.collection === options.collection)
		.filter((component) => options.tags.every((tag) => component.categories.includes(tag)))
		.filter((component) => !options.motion || component.categories.includes(options.motion))
		.map((component) => ({ ...component, ...scoreComponent(component, queryTokens) }))
		.filter((component) => !queryTokens.length || component.matched.length > 0)
		.sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
		.slice(0, options.limit);
}

function printReadable(results) {
	if (!results.length) {
		console.log("No components matched the supplied criteria.");
		return;
	}

	for (const [index, component] of results.entries()) {
		console.log(`${index + 1}. ${component.title} (${component.collection})`);
		console.log(`   ${component.description}`);
		console.log(`   Categories: ${component.categories.join(", ")}`);
		console.log(`   Dependencies: ${component.dependencies.join(", ") || "none"}`);
		if (component.matched.length)
			console.log(`   Query matches: ${component.matched.join(", ")}`);
		console.log(`   Docs: ${component.documentationUrl}`);
		console.log(`   Registry: ${component.registryUrl}`);
	}
}

async function main() {
	try {
		const options = parseArgs(process.argv.slice(2));
		if (options.help) {
			console.log(usage());
			return;
		}

		const manifest = await loadManifest(options.manifest);
		const results = findComponents(manifest, options);
		if (options.json) console.log(JSON.stringify(results, null, 2));
		else printReadable(results);
	} catch (error) {
		console.error(error instanceof Error ? error.message : String(error));
		console.error(usage());
		process.exitCode = 1;
	}
}

await main();
