import MagicCardRaw from "$lib/components/magic/magic-card/magic-card.svelte?raw";
import IndexTs from "$lib/components/magic/magic-card/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import GradientShowcase from "./examples/gradient-showcase.svelte";
import GradientShowcaseRaw from "./examples/gradient-showcase.svelte?raw";
import CardGrid from "./examples/card-grid.svelte";
import CardGridRaw from "./examples/card-grid.svelte?raw";
import PricingCard from "./examples/pricing-card.svelte";
import PricingCardRaw from "./examples/pricing-card.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "magic-card",
	title: "Magic Card",
	description:
		"A spotlight effect that follows your mouse cursor and highlights borders on hover.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Gradient Showcase",
		description: "Magic cards with different gradient color combinations.",
		preview: GradientShowcase,
		code: {
			filename: "gradient-showcase.svelte",
			filecode: GradientShowcaseRaw,
			lang: "svelte",
		},
	},
	{
		name: "Card Grid",
		description: "Display multiple magic cards in a responsive grid layout.",
		preview: CardGrid,
		code: {
			filename: "card-grid.svelte",
			filecode: CardGridRaw,
			lang: "svelte",
		},
	},
	{
		name: "Pricing Cards",
		description: "Use magic cards to create attractive pricing cards.",
		preview: PricingCard,
		code: {
			filename: "pricing-card.svelte",
			filecode: PricingCardRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Magic Card",
	description:
		"Learn how to create Magic Card effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Magic Card", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "magic-card.svelte",
			filecode: MagicCardRaw,
			lang: "svelte",
			isExpand: true,
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
            └── magic-card/
                ├── magic-card.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: [
		{
			filename: "magic-card.svelte",
			filecode: PreviewCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
			hideLines: true,
			highlight: [2],
		},
	],
	// examples,
	seo,
	props: [
		{
			name: "MagicCard",
			desc: "A component for Magic Card.",
			props: [
				{
					name: "children",
					type: "Snippet",
					default: "",
					description: "Card content.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes.",
				},
				{
					name: "gradientSize",
					type: "number",
					default: "200",
					description: "Size of the gradient circle.",
				},
				{
					name: "gradientColor",
					type: "string",
					default: '"#262626"',
					description: "Color of the gradient overlay.",
				},
				{
					name: "gradientOpacity",
					type: "number",
					default: "0.8",
					description: "Opacity of the gradient overlay.",
				},
				{
					name: "gradientFrom",
					type: "string",
					default: '"#9E7AFF"',
					description: "Starting color of the border gradient.",
				},
				{
					name: "gradientTo",
					type: "string",
					default: '"#FE8BBB"',
					description: "Ending color of the border gradient.",
				},
			],
		},
	],
	installBlock,
};
