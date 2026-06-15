import FileTreeRaw from "$lib/components/magic/file-tree/file-tree.svelte?raw";
import FolderRaw from "$lib/components/magic/file-tree/folder.svelte?raw";
import FileRaw from "$lib/components/magic/file-tree/file.svelte?raw";
import CollapseButtonRaw from "$lib/components/magic/file-tree/collapse-button.svelte?raw";
import IndexTs from "$lib/components/magic/file-tree/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "file-tree",
	title: "File Tree",
	description:
		"An interactive file tree component with expandable folders, selectable files, and smooth animations.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "File Tree",
	description:
		"Learn how to create interactive file tree components in Svelte with expandable folders and animations.",
	keywords: [
		"Svelte",
		"File Tree",
		"Svelte 5 Animations",
		"Animation",
		"Web Design",
		"Tree View",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "file-tree.svelte",
			filecode: FileTreeRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "folder.svelte",
			filecode: FolderRaw,
			lang: "svelte",
		},
		{
			filename: "file.svelte",
			filecode: FileRaw,
			lang: "svelte",
		},
		{
			filename: "collapse-button.svelte",
			filecode: CollapseButtonRaw,
			lang: "svelte",
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── file-tree/
                ├── file-tree.svelte
                ├── folder.svelte
                ├── file.svelte
                ├── collapse-button.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "file-tree.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "Tree",
			desc: "The root tree container component.",
			props: [
				{
					name: "initialSelectedId",
					type: "string",
					default: "undefined",
					description: "Initial selected item ID",
				},
				{
					name: "initialExpandedItems",
					type: "string[]",
					default: "[]",
					description: "Initial expanded items",
				},
				{
					name: "elements",
					type: "TreeViewElement[]",
					default: "undefined",
					description: "Tree elements data",
				},
				{
					name: "indicator",
					type: "boolean",
					default: "true",
					description: "Show indicator line",
				},
				{
					name: "dir",
					type: "'rtl' | 'ltr'",
					default: "'ltr'",
					description: "Text direction",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes",
				},
			],
		},
		{
			name: "Folder",
			desc: "A folder component that can contain files and other folders.",
			props: [
				{
					name: "element",
					type: "string",
					default: "required",
					description: "Folder name/label",
				},
				{
					name: "value",
					type: "string",
					default: "required",
					description: "Unique value for this folder",
				},
				{
					name: "isSelectable",
					type: "boolean",
					default: "true",
					description: "Whether the folder is selectable",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes",
				},
			],
		},
		{
			name: "File",
			desc: "A file component that can be selected.",
			props: [
				{
					name: "value",
					type: "string",
					default: "required",
					description: "Unique value for this file",
				},
				{
					name: "isSelectable",
					type: "boolean",
					default: "true",
					description: "Whether the file is selectable",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes",
				},
			],
		},
		{
			name: "CollapseButton",
			desc: "A button to expand or collapse all folders.",
			props: [
				{
					name: "elements",
					type: "TreeViewElement[]",
					default: "required",
					description: "Tree elements to expand/collapse",
				},
				{
					name: "expandAll",
					type: "boolean",
					default: "false",
					description: "Whether to expand all on mount",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes",
				},
			],
		},
	],
	installBlock,
};
