import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const GROUPS = {
	magic: path.join(rootDir, "src", "routes", "magic", "docs", "components"),
	spell: path.join(rootDir, "src", "routes", "spell"),
	fancy: path.join(rootDir, "src", "routes", "fancy"),
};

const STRING_ONLY_CLASS_DOCS = new Set(["magic/icon-cloud"]);

function printUsage() {
	console.log(`Usage:
  pnpm data:normalize -- --group <magic|spell|fancy> <component-id>...
  pnpm data:normalize -- --group <magic|spell|fancy> <component-id>... --write
  pnpm data:normalize -- --group <magic|spell|fancy> --all
  pnpm data:normalize -- --all

Examples:
  pnpm data:normalize -- --group magic line-shadow-text arc-timeline
  pnpm data:normalize -- --group magic line-shadow-text arc-timeline --write
  pnpm data:normalize -- --all
  pnpm data:normalize -- --all --write`);
}

function parseArgs(argv) {
	const options = {
		all: false,
		componentIds: [],
		group: undefined,
		help: false,
		write: false,
	};

	for (let index = 0; index < argv.length; index += 1) {
		const argument = argv[index];
		if (argument === "--") continue;

		if (argument === "--help" || argument === "-h") {
			options.help = true;
			continue;
		}

		if (argument === "--all") {
			options.all = true;
			continue;
		}

		if (argument === "--write") {
			options.write = true;
			continue;
		}

		if (argument === "--group") {
			const group = argv[index + 1];
			if (!group || group.startsWith("--") || !(group in GROUPS)) {
				throw new Error("--group requires one of: magic, spell, fancy.");
			}
			options.group = group;
			index += 1;
			continue;
		}

		if (argument.startsWith("--")) {
			throw new Error(`Unknown option "${argument}".`);
		}

		options.componentIds.push(argument);
	}

	if (options.all && options.componentIds.length > 0) {
		throw new Error("Use either --all or component IDs, not both.");
	}

	if (options.componentIds.length > 0 && !options.group) {
		throw new Error("--group is required when selecting component IDs.");
	}

	if (!options.help && !options.all && options.componentIds.length === 0) {
		throw new Error("Provide component IDs or use --all.");
	}

	return options;
}

async function getComponentIds(group) {
	const entries = await fs.readdir(GROUPS[group], { withFileTypes: true });
	const componentIds = [];

	for (const entry of entries) {
		if (!entry.isDirectory()) continue;

		try {
			await fs.access(path.join(GROUPS[group], entry.name, "data.ts"));
			componentIds.push(entry.name);
		} catch {
			// A route directory without component data is not a normalization target.
		}
	}

	return componentIds.sort((left, right) => left.localeCompare(right));
}

async function resolveTargets(options) {
	const groups = options.group ? [options.group] : Object.keys(GROUPS);
	const targets = [];

	for (const group of groups) {
		const availableIds = await getComponentIds(group);
		const componentIds = options.all ? availableIds : options.componentIds;

		for (const componentId of componentIds) {
			if (!availableIds.includes(componentId)) {
				throw new Error(`Component "${componentId}" was not found in the ${group} group.`);
			}

			targets.push({
				componentId,
				filePath: path.join(GROUPS[group], componentId, "data.ts"),
				group,
			});
		}
	}

	return targets;
}

function unwrapExpression(node) {
	let current = node;

	while (
		current &&
		(ts.isAsExpression(current) ||
			ts.isSatisfiesExpression(current) ||
			ts.isParenthesizedExpression(current))
	) {
		current = current.expression;
	}

	return current;
}

function getProperty(object, name) {
	return object.properties.find((property) => {
		if (!ts.isPropertyAssignment(property)) return false;
		if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) {
			return property.name.text === name;
		}

		return false;
	});
}

function getObjectProperty(object, name) {
	const property = getProperty(object, name);
	if (!property || !ts.isPropertyAssignment(property)) return undefined;
	return unwrapExpression(property.initializer);
}

function getStringProperty(object, name) {
	const value = getObjectProperty(object, name);
	return value && ts.isStringLiteralLike(value) ? value : undefined;
}

function findDataObject(sourceFile) {
	for (const statement of sourceFile.statements) {
		if (!ts.isVariableStatement(statement)) continue;

		for (const declaration of statement.declarationList.declarations) {
			if (!ts.isIdentifier(declaration.name) || declaration.name.text !== "data") continue;

			const initializer =
				declaration.initializer && unwrapExpression(declaration.initializer);
			if (initializer && ts.isObjectLiteralExpression(initializer)) return initializer;
		}
	}

	return undefined;
}

function splitDisplayName(value) {
	return value
		.replace(/[_-]+/g, " ")
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
		.replace(/([a-z])([A-Z])/g, "$1 $2")
		.replace(/([A-Za-z])(\d)/g, "$1 $2")
		.replace(/(\d)([A-Z][a-z])/g, "$1 $2")
		.replace(/\s+/g, " ")
		.trim();
}

function addReplacement(replacements, sourceFile, node, value, description) {
	replacements.push({
		description,
		end: node.getEnd(),
		start: node.getStart(sourceFile),
		value: JSON.stringify(value),
	});
}

function collectReplacements(sourceFile, target) {
	const dataObject = findDataObject(sourceFile);
	if (!dataObject) throw new Error(`${target.filePath} does not export a data object.`);

	const props = getObjectProperty(dataObject, "props");
	if (!props) return [];
	if (!ts.isArrayLiteralExpression(props)) {
		throw new Error(`Expected data.props to be an array in ${target.filePath}.`);
	}

	const replacements = [];
	const keepStringClass = STRING_ONLY_CLASS_DOCS.has(`${target.group}/${target.componentId}`);

	for (const element of props.elements) {
		const table = unwrapExpression(element);
		if (!table || !ts.isObjectLiteralExpression(table)) continue;

		const tableName = getStringProperty(table, "name");
		if (tableName) {
			const nextName = splitDisplayName(tableName.text);
			if (nextName !== tableName.text) {
				addReplacement(
					replacements,
					sourceFile,
					tableName,
					nextName,
					`display name: ${tableName.text} -> ${nextName}`
				);
			}
		}

		const propDefinitions = getObjectProperty(table, "props");
		if (!propDefinitions || !ts.isArrayLiteralExpression(propDefinitions)) continue;

		for (const propElement of propDefinitions.elements) {
			const prop = unwrapExpression(propElement);
			if (!prop || !ts.isObjectLiteralExpression(prop)) continue;
			if (getStringProperty(prop, "name")?.text !== "class" || keepStringClass) continue;

			const type = getStringProperty(prop, "type");
			if (
				!type ||
				!["string", "string | undefined", "ClassValue | undefined"].includes(type.text)
			) {
				continue;
			}

			addReplacement(
				replacements,
				sourceFile,
				type,
				"ClassValue",
				`class type: ${type.text} -> ClassValue`
			);
		}
	}

	return replacements;
}

function applyReplacements(source, replacements) {
	return [...replacements]
		.sort((left, right) => right.start - left.start)
		.reduce(
			(result, replacement) =>
				result.slice(0, replacement.start) +
				replacement.value +
				result.slice(replacement.end),
			source
		);
}

async function normalizeTarget(target, write) {
	const source = await fs.readFile(target.filePath, "utf8");
	const sourceFile = ts.createSourceFile(
		target.filePath,
		source,
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TS
	);

	if (sourceFile.parseDiagnostics.length > 0) {
		const diagnostic = sourceFile.parseDiagnostics[0];
		throw new Error(
			`Could not parse ${target.filePath}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, " ")}`
		);
	}

	const replacements = collectReplacements(sourceFile, target);
	if (write && replacements.length > 0) {
		await fs.writeFile(target.filePath, applyReplacements(source, replacements));
	}

	return replacements;
}

async function run() {
	const options = parseArgs(process.argv.slice(2));
	if (options.help) {
		printUsage();
		return;
	}

	const targets = await resolveTargets(options);
	let changedFiles = 0;
	let changeCount = 0;

	for (const target of targets) {
		const replacements = await normalizeTarget(target, options.write);
		if (replacements.length === 0) continue;

		changedFiles += 1;
		changeCount += replacements.length;
		console.log(path.relative(rootDir, target.filePath));
		for (const replacement of replacements) {
			console.log(`  ${replacement.description}`);
		}
	}

	if (changeCount === 0) {
		console.log(`No changes needed in ${targets.length} data file(s).`);
		return;
	}

	console.log(
		`\n${options.write ? "Updated" : "Would update"} ${changeCount} value(s) in ${changedFiles} file(s).`
	);
	if (!options.write) console.log("Run again with --write to apply these changes.");
}

try {
	await run();
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
}
