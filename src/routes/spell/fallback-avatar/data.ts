import FallbackAvatarRaw from "$lib/components/spell/fallback-avatar/fallback-avatar.svelte?raw";
import IndexTsRaw from "$lib/components/spell/fallback-avatar/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizesExample from "./examples/sizes-example.svelte";
import SizesExampleRaw from "./examples/sizes-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "fallback-avatar",
	title: "Fallback Avatar",
	description:
		"A procedurally generated avatar using WebGL. Each name produces a unique animated gradient — no images required.",
	category: "spell",
};

const seo: SEO = {
	title: "Fallback Avatar",
	description:
		"A procedurally generated avatar component for Svelte that uses WebGL to render unique animated gradients based on a name string.",
	keywords: [
		"Svelte",
		"Avatar",
		"Fallback Avatar",
		"Spell",
		"Svelte Animations",
		"WebGL",
		"Procedural",
	],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "fallback-avatar.svelte",
			filecode: FallbackAvatarRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: [],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── fallback-avatar/
                ├── fallback-avatar.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [
		{
			name: "Sizes",
			preview: SizesExample,
			code: {
				filename: "sizes-example.svelte",
				filecode: SizesExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "name",
					type: "string",
					required: true,
				},
				{
					name: "size",
					type: "number",
					default: "32",
				},
				{
					name: "animated",
					type: "boolean",
					default: "true",
				},
				{
					name: "class",
					type: "string | undefined",
					default: "undefined",
				},
			],
		},
	],
};
