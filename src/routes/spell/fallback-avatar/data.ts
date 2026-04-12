import FallbackAvatarRaw from "$lib/components/spell/fallback-avatar/fallback-avatar.svelte?raw";
import IndexTsRaw from "$lib/components/spell/fallback-avatar/index.ts?raw";
import UtilsRaw from "$lib/components/spell/fallback-avatar/utils.ts?raw";
import WebGLRaw from "$lib/components/spell/fallback-avatar/webgl.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import SizeExample from "./examples/size-example.svelte";
import SizeExampleRaw from "./examples/size-example.svelte?raw";
import AnimatedExample from "./examples/animated-example.svelte";
import AnimatedExampleRaw from "./examples/animated-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "fallback-avatar",
	title: "Fallback Avatar",
	description:
		"A seeded avatar canvas that renders a deterministic color composition with hover-only animation and a built-in 2D fallback.",
	category: "spell",
};

const seo: SEO = {
	title: "Fallback Avatar",
	description:
		"Learn how to use the Fallback Avatar spell component in Svelte, including deterministic seeded rendering, size control, and hover-only animation.",
	keywords: [
		"Svelte Spell UI",
		"Fallback Avatar",
		"Svelte Avatar",
		"WebGL Avatar",
		"Canvas Avatar",
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
		{
			filename: "utils.ts",
			filecode: UtilsRaw,
			lang: "typescript",
		},
		{
			filename: "webgl.ts",
			filecode: WebGLRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── fallback-avatar/
                ├── fallback-avatar.svelte
                ├── index.ts
                ├── utils.ts
                └── webgl.ts`,
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
			name: "Size",
			description:
				"Use the same seeded avatar across multiple size values when you need tiny inline chips, default profile dots, or larger hero accents.",
			preview: SizeExample,
			code: {
				filename: "size-example.svelte",
				filecode: SizeExampleRaw,
				lang: "svelte",
			},
		},
		{
			name: "Animated",
			description:
				"Compare hover-enabled rendering with a static variant when you want motion only in emphasis-heavy surfaces.",
			preview: AnimatedExample,
			code: {
				filename: "animated-example.svelte",
				filecode: AnimatedExampleRaw,
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
					description:
						"The seed used to derive the avatar composition, color palette, and motion anchors.",
				},
				{
					name: "size",
					type: "number",
					default: "32",
					description: "Controls the rendered avatar size in CSS pixels.",
				},
				{
					name: "animated",
					type: "boolean",
					default: "true",
					description: "Enables the hover-only animation loop for the avatar surface.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Custom classes merged onto the root canvas element.",
				},
				{
					name: "style",
					type: "string",
					default: "undefined",
					description: "Inline styles appended to the root canvas element.",
				},
			],
		},
	],
};
