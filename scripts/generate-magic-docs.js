import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
process.chdir(rootDir);

const GROUP_CONFIG = {
	magic: {
		componentsDir: path.join(rootDir, "src", "routes", "magic", "docs", "components"),
		importBase: "$lib/components/magic",
		moduleBase: "/src/routes/magic/docs/components",
		registryPrefix: "r",
	},
	spell: {
		componentsDir: path.join(rootDir, "src", "routes", "spell"),
		importBase: "$lib/components/spell",
		moduleBase: "/src/routes/spell",
		registryPrefix: "s",
	},
	fancy: {
		componentsDir: path.join(rootDir, "src", "routes", "fancy"),
		importBase: "$lib/components/fancy",
		moduleBase: "/src/routes/fancy",
		registryPrefix: "f",
	},
};

function printUsage() {
	console.log(`Usage:
  pnpm docs:components -- --group <magic|spell|fancy> --all
  pnpm docs:components -- --group <magic|spell|fancy> --after <component-id> --count <number>
  pnpm docs:components -- --group <magic|spell|fancy> <component-id> <component-id> ...
  pnpm docs:components -- --group <magic|spell|fancy> --list
  pnpm docs:components -- --group <magic|spell|fancy> --after <component-id> --count <number> --dry-run

Examples:
  pnpm docs:components -- --group magic --after animated-list --count 10
  pnpm docs:components -- --group spell animated-checkbox badge
  pnpm docs:components -- --group fancy --all
  pnpm docs:components -- --group magic --list
  pnpm docs:components -- --group spell --after badge --count 5 --dry-run

Shortcut scripts:
  pnpm docs:magic -- --all
  pnpm docs:spell -- animated-checkbox badge
  pnpm docs:fancy -- --all
`);
}

function parseArgs(argv) {
	const options = {
		all: false,
		after: undefined,
		componentIds: [],
		count: undefined,
		dryRun: false,
		group: "magic",
		help: false,
		list: false,
	};

	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];

		if (argument === "--help" || argument === "-h") {
			options.help = true;
			continue;
		}

		if (argument === "--all") {
			options.all = true;
			continue;
		}

		if (argument === "--dry-run") {
			options.dryRun = true;
			continue;
		}

		if (argument === "--list") {
			options.list = true;
			continue;
		}

		if (argument === "--group") {
			const value = argv[index + 1];
			if (!value || value.startsWith("--")) {
				throw new Error("--group requires one of: magic, spell, fancy.");
			}
			if (!(value in GROUP_CONFIG)) {
				throw new Error(`Unknown group "${value}". Use magic, spell, or fancy.`);
			}
			options.group = value;
			index += 1;
			continue;
		}

		if (argument === "--after" || argument === "--start-after") {
			const value = argv[index + 1];
			if (!value || value.startsWith("--")) {
				throw new Error(`${argument} requires a component id.`);
			}
			options.after = value;
			index += 1;
			continue;
		}

		if (argument === "--count") {
			const value = argv[index + 1];
			if (!value || value.startsWith("--")) {
				throw new Error("--count requires a numeric value.");
			}
			const parsed = Number.parseInt(value, 10);
			if (!Number.isInteger(parsed) || parsed <= 0) {
				throw new Error("--count must be a positive integer.");
			}
			options.count = parsed;
			index += 1;
			continue;
		}

		if (argument.startsWith("--")) {
			throw new Error(`Unknown option "${argument}".`);
		}

		options.componentIds.push(argument);
	}

	return options;
}

async function getAllComponentIds(groupConfig) {
	const entries = await fs.readdir(groupConfig.componentsDir, { withFileTypes: true });
	const componentIds = [];

	for (const entry of entries) {
		if (!entry.isDirectory()) {
			continue;
		}

		const dataPath = path.join(groupConfig.componentsDir, entry.name, "data.ts");

		try {
			await fs.access(dataPath);
			componentIds.push(entry.name);
		} catch {
			continue;
		}
	}

	return componentIds.sort((left, right) => left.localeCompare(right));
}

function pickTargets(allComponentIds, options) {
	if (options.list) {
		return [];
	}

	if (options.componentIds.length > 0) {
		return options.componentIds;
	}

	if (options.all) {
		return allComponentIds;
	}

	if (options.after) {
		const index = allComponentIds.indexOf(options.after);
		if (index === -1) {
			throw new Error(`Component "${options.after}" was not found.`);
		}

		const nextItems = allComponentIds.slice(index + 1);
		return options.count ? nextItems.slice(0, options.count) : nextItems;
	}

	throw new Error("Provide component ids, or use --all, or use --after with --count.");
}

function toPascalCase(value) {
	return value
		.split("-")
		.filter(Boolean)
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join("");
}

function toTitleCaseFromFile(fileName) {
	const baseName = fileName.replace(/\.svelte$/i, "");
	return baseName
		.split(/[-_]/g)
		.filter(Boolean)
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join(" ");
}

function escapeTableCell(value) {
	return String(value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function normalizeDefaultValue(prop) {
	if (prop.required && (prop.default === undefined || prop.default === "")) {
		return "required";
	}

	if (prop.default === undefined || prop.default === "") {
		return "-";
	}

	return prop.default;
}

function toCodeBlocks(code) {
	if (!code) {
		return [];
	}

	return Array.isArray(code) ? code : [code];
}

function renderCodeFence(block) {
	return `\`\`\`${block.lang || ""}\n${String(block.filecode).trim()}\n\`\`\``;
}

function renderCodeBlockGroup(blocks) {
	if (blocks.length === 0) {
		return "";
	}

	if (blocks.length === 1) {
		return renderCodeFence(blocks[0]);
	}

	return blocks
		.map((block) => [`#### ${block.filename}`, "", renderCodeFence(block)].join("\n"))
		.join("\n\n");
}

function getRegistryInstallLines(componentId, groupConfig, packages = []) {
	const registryUrl = `https://sv-animations.vercel.app/${groupConfig.registryPrefix}/${componentId}.json`;
	const packageList = packages.join(" ");
	const lines = ["# npm", `npx shadcn-svelte@latest add ${registryUrl}`];

	if (packageList) {
		lines.push(`npm install ${packageList}`);
	}

	lines.push("", "# yarn", `npx shadcn-svelte@latest add ${registryUrl}`);
	if (packageList) {
		lines.push(`yarn add ${packageList}`);
	}

	lines.push("", "# pnpm", `pnpm dlx shadcn-svelte@latest add ${registryUrl}`);
	if (packageList) {
		lines.push(`pnpm add ${packageList}`);
	}

	lines.push("", "# bun", `bun x shadcn-svelte@latest add ${registryUrl}`);
	if (packageList) {
		lines.push(`bun add ${packageList}`);
	}

	return lines;
}

function buildUsageText(componentId, propsTables, groupConfig) {
	const allProps = propsTables.flatMap((table) => table.props ?? []);
	const propNames = new Set(allProps.map((prop) => prop.name));

	if (propNames.has("containerRef") && propNames.has("fromRef") && propNames.has("toRef")) {
		return "Bind the shared container and the endpoint elements, then pass those refs into the component to draw the effect between them.";
	}

	if (propNames.has("items") && propNames.has("children")) {
		return "Pass an `items` array and render each item through the `children` snippet. Use `delay` to control how quickly new entries appear.";
	}

	if (propNames.has("children")) {
		return "Import the component and wrap the content you want it to affect. Adjust the optional props to tune the visual behavior.";
	}

	return `Import \`${toPascalCase(componentId)}\` from \`${groupConfig.importBase}/${componentId}\` and pass the props you need for your use case.`;
}

async function getFallbackExamples(componentId, componentData, groupConfig) {
	const examplesDir = path.join(groupConfig.componentsDir, componentId, "examples");
	let files = [];

	try {
		files = await fs.readdir(examplesDir);
	} catch {
		return [];
	}

	const likelyExamples = files
		.filter((file) => file.endsWith(".svelte") && file !== "preview.svelte")
		.filter((file) => {
			const baseName = file.replace(/\.svelte$/i, "");
			return baseName.includes("example") || baseName.startsWith(componentId);
		});

	const fallbackExamples = [];
	for (const fileName of likelyExamples) {
		const filePath = path.join(examplesDir, fileName);
		const filecode = await fs.readFile(filePath, "utf8");
		fallbackExamples.push({
			name: toTitleCaseFromFile(fileName),
			code: {
				filename: fileName,
				filecode,
				lang: "svelte",
			},
		});
	}

	if (fallbackExamples.length > 0) {
		return fallbackExamples;
	}

	const previewBlocks = toCodeBlocks(componentData.previewCode);
	if (previewBlocks.length === 0) {
		return [];
	}

	return [
		{
			name: "Default Example",
			code: previewBlocks,
		},
	];
}

function renderPropsSection(propsTables) {
	if (!propsTables || propsTables.length === 0) {
		return ["## Props", "", "No documented props."].join("\n");
	}

	const lines = ["## Props", ""];
	const shouldShowSubheadings = propsTables.length > 1;

	for (const table of propsTables) {
		if (shouldShowSubheadings && table.name) {
			lines.push(`### ${table.name}`, "");
		}

		if (table.desc) {
			lines.push(table.desc, "");
		}

		lines.push("| Prop | Type | Default | Description |");
		lines.push("| --- | --- | --- | --- |");

		for (const prop of table.props ?? []) {
			lines.push(
				`| \`${escapeTableCell(prop.name)}\` | \`${escapeTableCell(prop.type || "-")}\` | \`${escapeTableCell(normalizeDefaultValue(prop))}\` | ${escapeTableCell(prop.description || "-")} |`
			);
		}

		lines.push("");
	}

	while (lines[lines.length - 1] === "") {
		lines.pop();
	}

	return lines.join("\n");
}

function buildMarkdown(componentId, componentData, examples, groupConfig) {
	const previewBlocks = toCodeBlocks(componentData.previewCode);
	const propsTables = componentData.props ?? [];
	const usageText = buildUsageText(componentId, propsTables, groupConfig);
	const installLines = getRegistryInstallLines(
		componentId,
		groupConfig,
		componentData.installBlock?.packages ?? []
	);
	const lines = [
		`# ${componentData.title}`,
		"",
		componentData.description,
		"",
		"## Installation",
		"",
		"```bash",
		...installLines,
		"```",
		"",
		"## Preview",
		"",
		renderCodeBlockGroup(previewBlocks),
		"",
		"## Examples",
		"",
	];

	if (examples.length === 0) {
		lines.push("No examples documented.", "");
	} else {
		examples.forEach((example, index) => {
			lines.push(`### ${index + 1}. ${example.name}`, "");
			if (example.description) {
				lines.push(example.description, "");
			}
			lines.push(renderCodeBlockGroup(toCodeBlocks(example.code)), "");
		});
	}

	lines.push("## Usage", "", usageText, "");

	if (componentData.installBlock?.tailwind) {
		lines.push(
			"If the component depends on global CSS, add the following styles:",
			"",
			renderCodeFence(componentData.installBlock.tailwind),
			""
		);
	}

	lines.push(renderPropsSection(propsTables), "");

	return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}

async function loadComponentData(server, componentId, groupConfig) {
	const modulePath = `${groupConfig.moduleBase}/${componentId}/data.ts`;
	const loadedModule = await server.ssrLoadModule(modulePath);

	if (!loadedModule?.data) {
		throw new Error(`No "data" export found for component "${componentId}".`);
	}

	return loadedModule.data;
}

async function generateDocs(componentIds, groupConfig, options) {
	const server = await createServer({
		appType: "custom",
		logLevel: "error",
		server: { middlewareMode: true },
	});

	try {
		for (const componentId of componentIds) {
			const componentData = await loadComponentData(server, componentId, groupConfig);
			const examples =
				componentData.examples && componentData.examples.length > 0
					? componentData.examples
					: await getFallbackExamples(componentId, componentData, groupConfig);

			const markdown = buildMarkdown(componentId, componentData, examples, groupConfig);
			const outputPath = path.join(groupConfig.componentsDir, componentId, "docs.md");

			if (options.dryRun) {
				console.log(`[dry-run] Would update ${path.relative(rootDir, outputPath)}`);
				continue;
			}

			await fs.writeFile(outputPath, `${markdown.trim()}\n`, "utf8");
			console.log(`Updated ${path.relative(rootDir, outputPath)}`);
		}
	} finally {
		await server.close();
	}
}

async function main() {
	const options = parseArgs(process.argv.slice(2));

	if (options.help) {
		printUsage();
		return;
	}

	const groupConfig = GROUP_CONFIG[options.group];
	const allComponentIds = await getAllComponentIds(groupConfig);

	if (options.list) {
		for (const componentId of allComponentIds) {
			console.log(componentId);
		}
		return;
	}

	const targetIds = pickTargets(allComponentIds, options);

	if (targetIds.length === 0) {
		console.log("No components matched the requested selection.");
		return;
	}

	await generateDocs(targetIds, groupConfig, options);
}

main().catch((error) => {
	console.error(error.message);
	process.exitCode = 1;
});
