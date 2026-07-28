import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT_DIR = process.cwd();
const COMPONENTS_ROOT = path.join(ROOT_DIR, "src", "lib", "components");
const ROUTES_ROOT = path.join(ROOT_DIR, "src", "routes");

const LANGUAGE_BY_EXTENSION = {
	".css": "css",
	".js": "javascript",
	".json": "json",
	".md": "markdown",
	".svelte": "svelte",
	".ts": "typescript",
};

function isDirectExecution(moduleUrl) {
	if (!process.argv[1]) {
		return false;
	}

	return path.resolve(process.argv[1]) === fileURLToPath(moduleUrl);
}

function toPosixPath(value) {
	return value.split(path.sep).join("/");
}

function toKebabCase(value) {
	return value
		.trim()
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.replace(/[^a-zA-Z0-9]+/g, "-")
		.replace(/-{2,}/g, "-")
		.replace(/^-|-$/g, "")
		.toLowerCase();
}

function capitalize(value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
}

function toPascalCase(value) {
	return toKebabCase(value).split("-").filter(Boolean).map(capitalize).join("");
}

function humanizeSlug(value) {
	return toKebabCase(value).split("-").filter(Boolean).map(capitalize).join(" ");
}

function normalizeRouteName(value) {
	const normalized = toKebabCase(value);

	if (!normalized) {
		throw new Error(`Invalid route name "${value}".`);
	}

	return normalized;
}

function normalizeSourceOverride(value) {
	const normalized = value
		.trim()
		.replace(/\\/g, "/")
		.replace(/^src\/lib\/components\//, "")
		.replace(/^\/+|\/+$/g, "");

	if (!normalized) {
		throw new Error("Source path cannot be empty.");
	}

	return normalized;
}

function looksLikeSourcePath(value) {
	return value.includes("/") || value.includes("\\");
}

function normalizeSpecInput(spec) {
	if (!spec || typeof spec !== "object") {
		throw new Error("Each route spec must be an object.");
	}

	let sourceOverride = spec.sourceOverride
		? normalizeSourceOverride(spec.sourceOverride)
		: undefined;
	let routeName = spec.routeName?.trim();

	if (!sourceOverride && routeName && looksLikeSourcePath(routeName)) {
		sourceOverride = normalizeSourceOverride(routeName);
		routeName = path.posix.basename(sourceOverride);
	}

	if (!routeName && sourceOverride) {
		routeName = path.posix.basename(sourceOverride);
	}

	if (!routeName) {
		throw new Error("A route name or source path is required.");
	}

	return {
		routeName,
		sourceOverride,
		exportOverride: spec.exportOverride?.trim() || undefined,
	};
}

function parseRouteSpecString(spec) {
	const trimmed = spec.trim();

	if (!trimmed) {
		throw new Error("Route specs cannot be empty.");
	}

	const [routePart, mappingPart] = trimmed.split("=", 2);

	if (!mappingPart) {
		return normalizeSpecInput({ routeName: routePart });
	}

	const exportSeparatorIndex = mappingPart.lastIndexOf("@");
	const hasExplicitExport = exportSeparatorIndex !== -1;

	return normalizeSpecInput({
		routeName: routePart,
		sourceOverride: hasExplicitExport
			? mappingPart.slice(0, exportSeparatorIndex)
			: mappingPart,
		exportOverride: hasExplicitExport ? mappingPart.slice(exportSeparatorIndex + 1) : undefined,
	});
}

async function pathExists(targetPath) {
	try {
		await fs.access(targetPath);
		return true;
	} catch {
		return false;
	}
}

async function listDirectoryEntries(directoryPath) {
	const entries = await fs.readdir(directoryPath, { withFileTypes: true });
	return entries.sort((left, right) => left.name.localeCompare(right.name));
}

async function walkDirectories(rootDirectory, callback) {
	const entries = await listDirectoryEntries(rootDirectory);

	for (const entry of entries) {
		if (!entry.isDirectory()) {
			continue;
		}

		const fullPath = path.join(rootDirectory, entry.name);
		await callback(fullPath, entry.name);
		await walkDirectories(fullPath, callback);
	}
}

async function findSourceCandidates(routeSlug) {
	const candidates = [];

	await walkDirectories(COMPONENTS_ROOT, async (directoryPath, directoryName) => {
		if (toKebabCase(directoryName) !== routeSlug) {
			return;
		}

		if (!(await pathExists(path.join(directoryPath, "index.ts")))) {
			return;
		}

		candidates.push(toPosixPath(path.relative(COMPONENTS_ROOT, directoryPath)));
	});

	return candidates.sort((left, right) => left.localeCompare(right));
}

async function resolveSourceDirectory(spec, routeSlug) {
	if (spec.sourceOverride) {
		const sourceDirectory = path.join(COMPONENTS_ROOT, spec.sourceOverride);

		if (!(await pathExists(sourceDirectory))) {
			throw new Error(
				`Source path "${spec.sourceOverride}" does not exist under src/lib/components.`
			);
		}

		if (!(await pathExists(path.join(sourceDirectory, "index.ts")))) {
			throw new Error(`Source path "${spec.sourceOverride}" must contain an index.ts file.`);
		}

		return {
			relativePath: spec.sourceOverride,
			directoryPath: sourceDirectory,
		};
	}

	const candidates = await findSourceCandidates(routeSlug);

	if (candidates.length === 0) {
		throw new Error(
			`Could not resolve a component source for "${routeSlug}". Pass --source or use a source path directly.`
		);
	}

	if (candidates.length > 1) {
		throw new Error(
			[
				`Component name "${routeSlug}" is ambiguous. Provide an explicit source path.`,
				...candidates.map((candidate) => `- ${candidate}`),
			].join("\n")
		);
	}

	return {
		relativePath: candidates[0],
		directoryPath: path.join(COMPONENTS_ROOT, candidates[0]),
	};
}

async function collectSourceFiles(sourceDirectory) {
	const collectedFiles = [];

	async function walk(currentDirectory) {
		const entries = await listDirectoryEntries(currentDirectory);

		for (const entry of entries) {
			const fullPath = path.join(currentDirectory, entry.name);

			if (entry.isDirectory()) {
				await walk(fullPath);
				continue;
			}

			collectedFiles.push(toPosixPath(path.relative(sourceDirectory, fullPath)));
		}
	}

	await walk(sourceDirectory);

	return collectedFiles.sort((left, right) => left.localeCompare(right));
}

function parseExportNames(indexFileContents) {
	const exportNames = new Set();
	const exportBlockPattern = /export\s*\{([\s\S]*?)\}/g;

	for (const match of indexFileContents.matchAll(exportBlockPattern)) {
		const items = match[1].split(",");

		for (const item of items) {
			const cleaned = item.replace(/\/\/.*$/gm, "").trim();

			if (!cleaned || cleaned.startsWith("type ")) {
				continue;
			}

			const exportName = cleaned.includes(" as ")
				? cleaned
						.split(/\s+as\s+/)
						.at(-1)
						?.trim()
				: cleaned.split(/\s+/).at(-1)?.trim();

			if (exportName) {
				exportNames.add(exportName);
			}
		}
	}

	return exportNames;
}

async function resolveComponentExport({
	sourceDirectory,
	sourceRelativePath,
	routeTitlePascal,
	exportOverride,
}) {
	const indexFilePath = path.join(sourceDirectory, "index.ts");
	const indexFileContents = await fs.readFile(indexFilePath, "utf8");
	const exportNames = parseExportNames(indexFileContents);
	const sourcePascal = toPascalCase(path.basename(sourceRelativePath));
	const preferredExports = [];

	if (exportOverride) {
		preferredExports.push(exportOverride);
	}

	preferredExports.push(routeTitlePascal);

	if (!preferredExports.includes(sourcePascal)) {
		preferredExports.push(sourcePascal);
	}

	preferredExports.push("Root");

	const exportName = preferredExports.find((candidate) => exportNames.has(candidate));

	if (!exportName) {
		throw new Error(
			[
				`Could not resolve an export for "${sourceRelativePath}".`,
				`Expected one of: ${preferredExports.join(", ")}`,
				`Available exports: ${[...exportNames].sort().join(", ") || "(none found)"}`,
			].join("\n")
		);
	}

	return {
		exportName,
		localName: routeTitlePascal,
	};
}

function getImportStatement(sourceRelativePath, exportName, localName) {
	const importPath = `$lib/components/${sourceRelativePath}`;

	if (exportName === localName) {
		return `import { ${localName} } from "${importPath}";`;
	}

	return `import { ${exportName} as ${localName} } from "${importPath}";`;
}

function toRawImportVariable(relativeFilePath) {
	const extension = path.extname(relativeFilePath).slice(1);
	const withoutExtension = relativeFilePath.slice(
		0,
		Math.max(0, relativeFilePath.length - path.extname(relativeFilePath).length)
	);

	return `${toPascalCase(withoutExtension)}${toPascalCase(extension)}Raw`;
}

function getLanguageForFile(relativeFilePath) {
	return LANGUAGE_BY_EXTENSION[path.extname(relativeFilePath)] ?? undefined;
}

function createTreeNode(name, isFile = false) {
	return {
		children: new Map(),
		isFile,
		name,
	};
}

function buildFolderStructure(sourceRelativePath, sourceFiles) {
	const root = createTreeNode("src");
	const baseSegments = ["lib", "components", ...sourceRelativePath.split("/")];

	function addPath(segments, isFile = false) {
		let currentNode = root;

		for (const [index, segment] of segments.entries()) {
			const isLeaf = index === segments.length - 1;

			if (!currentNode.children.has(segment)) {
				currentNode.children.set(segment, createTreeNode(segment, isLeaf && isFile));
			}

			currentNode = currentNode.children.get(segment);

			if (isLeaf) {
				currentNode.isFile = isFile;
			}
		}
	}

	addPath(baseSegments);

	for (const filePath of sourceFiles) {
		addPath([...baseSegments, ...filePath.split("/")], true);
	}

	const lines = ["src/"];

	function renderNode(node, prefix = "") {
		const children = [...node.children.values()].sort((left, right) => {
			if (left.isFile !== right.isFile) {
				return left.isFile ? 1 : -1;
			}

			return left.name.localeCompare(right.name);
		});

		children.forEach((child, index) => {
			const isLast = index === children.length - 1;
			const connector = isLast ? "`-- " : "|-- ";
			lines.push(`${prefix}${connector}${child.name}${child.isFile ? "" : "/"}`);

			if (!child.isFile) {
				renderNode(child, `${prefix}${isLast ? "    " : "|   "}`);
			}
		});
	}

	renderNode(root);

	return lines.join("\n");
}

function getRouteInfo(sourceRelativePath, routeSlug) {
	const segments = sourceRelativePath.split("/").filter(Boolean);
	const [library = "components", ...rest] = segments;
	const sourceParents = rest.slice(0, -1);
	const installPathPrefix = library === "spell" ? "s" : library === "fancy" ? "f" : "r";

	const routeDirectory =
		library === "magic"
			? path.join(ROUTES_ROOT, "magic", "docs", "components", ...sourceParents, routeSlug)
			: path.join(ROUTES_ROOT, library, ...sourceParents, routeSlug);

	return {
		installPathPrefix,
		library,
		routeDirectory,
	};
}

function renderPageSvelte(installPathPrefix) {
	return `<script lang="ts">
\timport ComponentDocPage from "$lib/components/docs/base/ComponentDocPage.svelte";
\timport { data } from "./data";
</script>

<ComponentDocPage
\tid={data.id}
\ttitle={data.title}
\tdescription={data.description}
\tseo={data.seo}
\tinstallPathPrefix=${JSON.stringify(installPathPrefix)}
\tpreview={data.preview}
\tpreviewCode={data.previewCode}
\tpreviewClass={data.previewClass}
\tinstallCodeBlocks={data.installBlock?.installCode}
\tinstallPackages={data.installBlock?.packages}
\tinstallFolderStructure={data.installBlock?.folderStructure}
\tinstallTailwindCode={data.installBlock?.tailwind}
\tusage={data.usage}
\texamples={data.examples}
\tpropsTables={data.props}
/>
`;
}

function renderPageTs() {
	return `export let prerender = true;
`;
}

function renderLlmsServerTs() {
	return `import type { RequestHandler } from "./$types";
import docs from "../docs.md?raw";

export const prerender = true;

export const GET: RequestHandler = async () => {
\treturn new Response(docs, {
\t\theaders: {
\t\t\t"Content-Type": "text/plain; charset=utf-8",
\t\t\t"Cache-Control": "public, max-age=3600",
\t\t},
\t});
};
`;
}

function renderPreviewSvelte() {
	return "";
}

function renderDocsMarkdown({ importStatement, title, localName }) {
	return `# ${title}

Starter docs for ${title}.

## Usage

\`\`\`svelte
<script lang="ts">
  ${importStatement}
</script>

<${localName} />
\`\`\`

## Notes

- Replace this placeholder with real usage details.
- Add examples, props, and caveats as needed.
`;
}

function renderDataTs({
	description,
	folderStructure,
	installCodeBlocks,
	installCodeImports,
	library,
	seoDescription,
	slug,
	title,
}) {
	const installCodeValue =
		installCodeBlocks.length === 1
			? installCodeBlocks[0]
			: `[\n${installCodeBlocks.map((block) => `\t\t${block}`).join(",\n")}\n\t]`;

	return `${installCodeImports.join("\n")}

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
\tid: ${JSON.stringify(slug)},
\ttitle: ${JSON.stringify(title)},
\tdescription: ${JSON.stringify(description)},
\tcategory: ${JSON.stringify(library)},
};

const seo: SEO = {
\ttitle: ${JSON.stringify(title)},
\tdescription: ${JSON.stringify(seoDescription)},
\tkeywords: ["Svelte", ${JSON.stringify(title)}, ${JSON.stringify(capitalize(library))}],
};

const installBlock: InstallComponentDocs = {
\tpackages: [],
\tinstallCode: ${installCodeValue},
\tfolderStructure: ${JSON.stringify(folderStructure)},
};

export const data: ComponentDoc = {
\t...meta,
\tpreview: Preview,
\tpreviewCode: {
\t\tfilename: "preview.svelte",
\t\tfilecode: PreviewCodeRaw,
\t\tlang: "svelte",
\t\thideLines: true,
\t},
\tinstallBlock,
\texamples: [],
\tseo,
\tprops: [],
};
`;
}

function buildInstallCodeImports(sourceRelativePath, sourceFiles) {
	return sourceFiles.map((filePath) => {
		const variableName = toRawImportVariable(filePath);
		return `import ${variableName} from "$lib/components/${sourceRelativePath}/${filePath}?raw";`;
	});
}

function buildInstallCodeBlocks(sourceFiles) {
	return sourceFiles.map((filePath, index) => {
		const language = getLanguageForFile(filePath);
		const parts = [
			"{",
			`filename: ${JSON.stringify(filePath)},`,
			`filecode: ${toRawImportVariable(filePath)},`,
		];

		if (language) {
			parts.push(`lang: ${JSON.stringify(language)},`);
		}

		if (index === 0) {
			parts.push("isExpand: true,");
		}

		parts.push("}");

		return parts.join(" ");
	});
}

function buildGeneratedFiles(routePlan) {
	const examplesDirectory = path.join(routePlan.routeDirectory, "examples");
	const llmsDirectory = path.join(routePlan.routeDirectory, "llms.txt");
	const installCodeImports = buildInstallCodeImports(
		routePlan.sourceRelativePath,
		routePlan.sourceFiles
	);
	const installCodeBlocks = buildInstallCodeBlocks(routePlan.sourceFiles);

	return [
		{
			contents: renderPageSvelte(routePlan.installPathPrefix),
			filePath: path.join(routePlan.routeDirectory, "+page.svelte"),
		},
		{
			contents: renderPageTs(),
			filePath: path.join(routePlan.routeDirectory, "+page.ts"),
		},
		{
			contents: renderDataTs({
				description: routePlan.description,
				folderStructure: routePlan.folderStructure,
				installCodeBlocks,
				installCodeImports,
				library: routePlan.library,
				seoDescription: routePlan.seoDescription,
				slug: routePlan.slug,
				title: routePlan.title,
			}),
			filePath: path.join(routePlan.routeDirectory, "data.ts"),
		},
		{
			contents: renderDocsMarkdown({
				importStatement: getImportStatement(
					routePlan.sourceRelativePath,
					routePlan.exportName,
					routePlan.localName
				),
				localName: routePlan.localName,
				title: routePlan.title,
			}),
			filePath: path.join(routePlan.routeDirectory, "docs.md"),
		},
		{
			contents: renderLlmsServerTs(),
			filePath: path.join(llmsDirectory, "+server.ts"),
		},
		{
			contents: renderPreviewSvelte(),
			filePath: path.join(examplesDirectory, "preview.svelte"),
		},
	];
}

async function buildRoutePlan(spec, options) {
	const slug = normalizeRouteName(spec.routeName);
	const title = humanizeSlug(slug);
	const localName = toPascalCase(slug);
	const source = await resolveSourceDirectory(spec, slug);
	const routeInfo = getRouteInfo(source.relativePath, slug);

	if ((await pathExists(routeInfo.routeDirectory)) && !options.force) {
		throw new Error(
			`Route "${toPosixPath(path.relative(ROOT_DIR, routeInfo.routeDirectory))}" already exists. Re-run with --force to overwrite generated files.`
		);
	}

	const sourceFiles = await collectSourceFiles(source.directoryPath);

	if (sourceFiles.length === 0) {
		throw new Error(`Source component "${source.relativePath}" does not contain any files.`);
	}

	const resolvedExport = await resolveComponentExport({
		exportOverride: spec.exportOverride,
		routeTitlePascal: localName,
		sourceDirectory: source.directoryPath,
		sourceRelativePath: source.relativePath,
	});

	const description = `TODO: document ${title}.`;
	const seoDescription = `TODO: add an SEO description for ${title}.`;
	const folderStructure = buildFolderStructure(source.relativePath, sourceFiles);

	return {
		description,
		exportName: resolvedExport.exportName,
		files: [],
		folderStructure,
		installPathPrefix: routeInfo.installPathPrefix,
		library: routeInfo.library,
		localName,
		routeDirectory: routeInfo.routeDirectory,
		seoDescription,
		slug,
		sourceFiles,
		sourceRelativePath: source.relativePath,
		title,
	};
}

function validateUniqueRouteNames(specs) {
	const seenSlugs = new Map();

	for (const spec of specs) {
		const slug = normalizeRouteName(spec.routeName);

		if (seenSlugs.has(slug)) {
			throw new Error(
				`Route name "${spec.routeName}" conflicts with "${seenSlugs.get(slug)}" after normalization.`
			);
		}

		seenSlugs.set(slug, spec.routeName);
	}
}

async function writeGeneratedFiles(files) {
	for (const file of files) {
		await fs.mkdir(path.dirname(file.filePath), { recursive: true });
		await fs.writeFile(file.filePath, file.contents, "utf8");
	}
}

function printDryRun(routePlans) {
	console.log("Dry run: no files were written.");

	for (const routePlan of routePlans) {
		console.log(`\n[${routePlan.slug}]`);
		console.log(`source: ${routePlan.sourceRelativePath}`);
		console.log(`export: ${routePlan.exportName} -> ${routePlan.localName}`);
		console.log(`route: ${toPosixPath(path.relative(ROOT_DIR, routePlan.routeDirectory))}`);

		for (const file of routePlan.files) {
			console.log(`- ${toPosixPath(path.relative(ROOT_DIR, file.filePath))}`);
		}
	}
}

export async function generateRoutes(specInputs, options = {}) {
	const normalizedSpecs = specInputs.map(normalizeSpecInput);
	validateUniqueRouteNames(normalizedSpecs);

	const routePlans = [];

	for (const spec of normalizedSpecs) {
		const routePlan = await buildRoutePlan(spec, {
			dryRun: Boolean(options.dryRun),
			force: Boolean(options.force),
		});

		routePlan.files = buildGeneratedFiles(routePlan);
		routePlans.push(routePlan);
	}

	if (options.dryRun) {
		printDryRun(routePlans);
		return { routePlans };
	}

	for (const routePlan of routePlans) {
		await writeGeneratedFiles(routePlan.files);
		console.log(
			`Created route ${toPosixPath(path.relative(ROOT_DIR, routePlan.routeDirectory))}`
		);
	}

	return { routePlans };
}

function printBatchUsage() {
	console.log(`Usage:
  pnpm create:routes fancy/animated-gradient-svg
  pnpm create:routes spell/badge magic/backlight
  pnpm create:routes custom-slug=fancy/animated-gradient-svg@AnimatedGradientSvg

Options:
  --force    Overwrite generated files for existing routes
  --dry-run  Print the planned changes without writing files
  --help     Show this message
`);
}

export function parseBatchCliArgs(argv) {
	const specs = [];
	const options = {
		dryRun: false,
		force: false,
		help: false,
	};

	for (const argument of argv) {
		if (argument === "--dry-run") {
			options.dryRun = true;
			continue;
		}

		if (argument === "--force") {
			options.force = true;
			continue;
		}

		if (argument === "--help" || argument === "-h") {
			options.help = true;
			continue;
		}

		if (argument.startsWith("--")) {
			throw new Error(`Unknown option "${argument}".`);
		}

		specs.push(parseRouteSpecString(argument));
	}

	if (!options.help && specs.length === 0) {
		throw new Error("At least one route spec is required.");
	}

	return { options, specs };
}

export async function runBatchCli(argv = process.argv.slice(2)) {
	const { options, specs } = parseBatchCliArgs(argv);

	if (options.help) {
		printBatchUsage();
		return;
	}

	await generateRoutes(specs, options);
}

if (isDirectExecution(import.meta.url)) {
	runBatchCli().catch((error) => {
		console.error(error.message);
		process.exitCode = 1;
	});
}
