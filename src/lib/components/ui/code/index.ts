import Snippet from "./code-snippet.svelte";
import File from "./code-file.svelte";
import FileBrowser from "./code-file-browser.svelte";
import Frame from "./code-frame.svelte";

export {
	Snippet,
	File,
	FileBrowser,
	Frame,
	Snippet as CodeSnippet,
	File as CodeFile,
	FileBrowser as CodeFileBrowser,
	Frame as CodeFrame,
};

export type { CodeBlock } from "./types.js";
