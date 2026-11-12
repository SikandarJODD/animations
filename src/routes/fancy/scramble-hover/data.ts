import IndexTsRaw from "#lib/components/fancy/scramble-hover/index.ts?raw";
import ScrambleHoverRaw from "#lib/components/fancy/scramble-hover/scramble-hover.svelte?raw";
import type { Example } from "#lib/types/examples.js";
import type { SEO } from "#lib/types/seo.js";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import NewCharsExample from "./examples/new-chars-example.svelte";
import PositionExample from "./examples/position-example.svelte";
import Preview from "./examples/preview.svelte";
import PreviewRaw from "./examples/preview.svelte?raw";
import SpecialSymbolsExample from "./examples/special-symbols-example.svelte";
import NewCharsExampleRaw from "./examples/new-chars-example.svelte?raw";
import PositionExampleRaw from "./examples/position-example.svelte?raw";
import SpecialSymbolsExampleRaw from "./examples/special-symbols-example.svelte?raw";
import { FANCY_OG_IMAGES, FANCY_TITLE_TEMPLATE } from "../seo";

export const meta: ComponentMeta = {
	id: "scramble-hover",
	title: "Scramble Hover",
	description:
		"Scramble text on hover with sequential or iterative reveals and custom character sets.",
	category: "fancy",
	badge: "new",
};

const seo: SEO = {
	title: "Scramble Hover",
	description:
		"Learn how to use the Scramble Hover Fancy component in Svelte for hover-triggered text scrambling and reveal sequences.",
	titleTemplate: FANCY_TITLE_TEMPLATE,
	images: FANCY_OG_IMAGES,
	keywords: [
		"Scramble Hover",
		"Svelte Fancy Components",
		"Fancy Components",
		"Svelte 5",
		"Motion SV",
		"Hover Text Effect",
		"Scramble Text",
		"Interactive Text",
	],
};

const installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "scramble-hover.svelte",
			filecode: ScrambleHoverRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── fancy/
            └── scramble-hover/
                ├── scramble-hover.svelte
                └── index.ts`,
};

let examples: Example[] = [
	{
		name: "New Characters Example",
		preview: NewCharsExample,
		code: {
			filename: "new-chars-example.svelte",
			filecode: NewCharsExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
	{
		name: "Special Symbols Example",
		preview: SpecialSymbolsExample,
		code: {
			filename: "special-symbols-example.svelte",
			filecode: SpecialSymbolsExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
	{
		name: "Position Example",
		preview: PositionExample,
		code: {
			filename: "position-example.svelte",
			filecode: PositionExampleRaw,
			lang: "svelte",
		},
		previewClass: "p-0",
	},
];

export const data: ComponentDoc = {
	...meta,
	seo,
	installBlock,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewRaw,
		lang: "svelte",
	},
	previewClass: "p-0",
	usage: {
		code: {
			filename: "usage.svelte",
			filecode: `<script lang="ts">
	import { ScrambleHover } from "#lib/components/fancy/scramble-hover/index.js";
</script>

<button
	type="button"
	class="group flex items-center gap-3 rounded-xl border bg-neutral-950 px-5 py-4 font-mono text-sm text-white"
>
	<span class="size-2 rounded-full bg-emerald-400 transition-shadow group-hover:shadow-[0_0_12px_#34d399]"></span>
	<ScrambleHover
		text="OPEN TRANSMISSION"
		sequential
		revealDirection="center"
		scrambleSpeed={35}
		characters={"01<>/{}[]"}
		scrambledClass="text-emerald-400"
		class="tracking-[0.16em]"
	/>
</button>`,
			lang: "svelte",
		},
	},
	examples,
	props: [
		{
			props: [
				{
					name: "text",
					type: "string",
					required: true,
					description: "Source text shown when idle and revealed again after scrambling.",
				},
				{
					name: "scrambleSpeed",
					type: "number",
					default: "50",
					description:
						"Interval in milliseconds between scramble updates while hovering.",
				},
				{
					name: "maxIterations",
					type: "number",
					default: "10",
					description:
						"Maximum number of random refresh cycles used when `sequential` is disabled.",
				},
				{
					name: "sequential",
					type: "boolean",
					default: "false",
					description:
						"Reveals one character position at a time instead of running a fixed number of scramble passes.",
				},
				{
					name: "revealDirection",
					type: '"start" | "end" | "center"',
					default: '"start"',
					description: "Direction used for sequential reveals.",
				},
				{
					name: "useOriginalCharsOnly",
					type: "boolean",
					default: "false",
					description:
						"Restricts scrambling to characters already present in the source text.",
				},
				{
					name: "characters",
					type: "string",
					default: '"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"',
					description: "Character pool used when generating random scramble symbols.",
				},
				{
					name: "scrambledClass",
					type: "string",
					default: "undefined",
					description:
						"Classes applied only to character positions that are currently scrambled.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "undefined",
					description: "Classes merged onto the rendered motion span.",
				},
			],
		},
	],
};
