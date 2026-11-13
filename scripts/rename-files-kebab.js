import { existsSync, readdirSync, renameSync, statSync } from "node:fs";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";

function toKebabCase(value) {
	return value
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
		.replace(/([a-z\d])([A-Z])/g, "$1-$2")
		.replace(/([A-Za-z])(\d)/g, "$1-$2")
		.replace(/(\d)([A-Za-z])/g, "$1-$2")
		.replace(/[_\s]+/g, "-")
		.replace(/[^A-Za-z\d-]+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "")
		.toLowerCase();
}

function collectFiles(folder) {
	const files = [];

	for (const entry of readdirSync(folder, { withFileTypes: true })) {
		if (entry.name.startsWith(".")) continue;

		const path = join(folder, entry.name);

		if (entry.isDirectory()) files.push(...collectFiles(path));
		if (entry.isFile()) files.push(path);
	}

	return files;
}

function getTargetPath(path) {
	const filename = basename(path);
	const extension = extname(filename);
	const stem = filename.slice(0, filename.length - extension.length);

	// Leave framework-reserved and already kebab-case filenames alone.
	if (!/[A-Z_\s]/.test(stem) || /^[+[(]/.test(stem)) return path;

	const kebabStem = toKebabCase(stem);
	return kebabStem ? join(dirname(path), `${kebabStem}${extension.toLowerCase()}`) : path;
}

function findGitRoot(folder) {
	const result = spawnSync("git", ["-C", folder, "rev-parse", "--show-toplevel"], {
		encoding: "utf8",
	});

	return result.status === 0 ? result.stdout.trim() : undefined;
}

function getTrackedFiles(gitRoot) {
	if (!gitRoot) return new Set();

	const result = spawnSync("git", ["-C", gitRoot, "ls-files", "-z"], { encoding: "utf8" });
	if (result.status !== 0) return new Set();

	return new Set(
		result.stdout
			.split("\0")
			.filter(Boolean)
			.map((path) => resolve(gitRoot, path))
	);
}

function assertNoCollisions(renames) {
	const targets = new Set();

	for (const { from, to } of renames) {
		const targetKey = to.toLowerCase();
		if (targets.has(targetKey)) throw new Error(`Multiple files would become ${to}`);
		targets.add(targetKey);

		const sourceName = basename(from);
		const targetName = basename(to);
		const conflictingName = readdirSync(dirname(from)).find(
			(name) => name !== sourceName && name.toLowerCase() === targetName.toLowerCase()
		);

		if (conflictingName) {
			throw new Error(`${from} would collide with ${join(dirname(from), conflictingName)}`);
		}
	}
}

function moveFile(from, to, tracked, gitRoot, index) {
	const temporary = join(dirname(from), `.kebab-rename-${process.pid}-${index}.tmp`);

	if (tracked && gitRoot) {
		for (const [source, destination] of [
			[from, temporary],
			[temporary, to],
		]) {
			const result = spawnSync("git", ["-C", gitRoot, "mv", source, destination], {
				encoding: "utf8",
			});

			if (result.status !== 0) throw new Error(result.stderr.trim() || `Could not rename ${source}`);
		}
		return;
	}

	renameSync(from, temporary);
	renameSync(temporary, to);
}

function printUsage() {
	console.log(`Usage:
  pnpm files:kebab -- <folder>          Preview renames
  pnpm files:kebab -- <folder> --write  Apply renames

Example:
  pnpm files:kebab -- src/lib/components --write`);
}

function run(argv = process.argv.slice(2)) {
	if (argv.includes("--help") || argv.includes("-h")) {
		printUsage();
		return;
	}

	const write = argv.includes("--write");
	const positional = argv.filter((argument) => !argument.startsWith("--"));

	if (positional.length !== 1) {
		printUsage();
		process.exitCode = 1;
		return;
	}

	const folder = resolve(positional[0]);
	if (!existsSync(folder) || !statSync(folder).isDirectory()) {
		throw new Error(`Folder not found: ${folder}`);
	}

	const renames = collectFiles(folder)
		.map((from) => ({ from, to: getTargetPath(from) }))
		.filter(({ from, to }) => from !== to);

	assertNoCollisions(renames);

	if (renames.length === 0) {
		console.log("All filenames are already kebab-case.");
		return;
	}

	const gitRoot = findGitRoot(folder);
	const trackedFiles = getTrackedFiles(gitRoot);
	const displayRoot = gitRoot ?? process.cwd();

	for (const [index, { from, to }] of renames.entries()) {
		console.log(`${relative(displayRoot, from)} -> ${relative(displayRoot, to)}`);
		if (write) moveFile(from, to, trackedFiles.has(from), gitRoot, index);
	}

	console.log(`\n${write ? "Renamed" : "Would rename"} ${renames.length} file(s).`);
	if (!write) console.log("Run again with --write to apply.");
}

try {
	run();
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
}
