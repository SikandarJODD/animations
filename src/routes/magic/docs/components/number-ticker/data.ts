import NumberTickerRaw from "$lib/components/magic/number-ticker/number-ticker.svelte?raw";
import IndexTs from "$lib/components/magic/number-ticker/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import NumberPickerStartValue from "./examples/number-picker-start-value.svelte";
import NumberPickerStartValueCode from "./examples/number-picker-start-value.svelte?raw";
import NumberTickerDecimal from "./examples/number-ticker-decimal.svelte";
import NumberTickerDecimalCode from "./examples/number-ticker-decimal.svelte?raw";
import NumberPickerPrefixSuffix from "./examples/number-ticker-prefix-suffix.svelte";
import NumberPickerPrefixSuffixCode from "./examples/number-ticker-prefix-suffix.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "number-ticker",
	title: "Number Ticker",
	description: "Animate numbers to count up or down to a target number",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "With Decimal Places",
		preview: NumberTickerDecimal,
		code: {
			filename: "number-ticker.svelte",
			filecode: NumberTickerDecimalCode,
			lang: "svelte",
		},
	},
	{
		name: "With Start Value",
		preview: NumberPickerStartValue,
		code: {
			filename: "number-ticker.svelte",
			filecode: NumberPickerStartValueCode,
			lang: "svelte",
		},
	},
	{
		name: "With Prefix and Suffix",
		preview: NumberPickerPrefixSuffix,
		code: {
			filename: "number-ticker.svelte",
			filecode: NumberPickerPrefixSuffixCode,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Number Ticker",
	description:
		"Learn how to create Number Ticker effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Number Ticker", "Svelte 5 Animations", "Animation", "Web Design"],
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "number-ticker.svelte",
			filecode: NumberTickerRaw,
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
            └── number-ticker/
                ├── number-ticker.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "number-ticker.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "NumberTicker",
			desc: "A component for animating numbers to count up or down to a target value.",
			props: [
				{
					name: "value",
					type: "number",
					default: "undefined",
					description: "The target number to animate to.",
				},
				{
					name: "startValue",
					type: "number",
					default: "0",
					description: "The starting number for the animation.",
				},
				{
					name: "direction",
					type: '"up" | "down"',
					default: '"up"',
					description: "The direction of the animation.",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Delay before starting the animation in seconds.",
				},
				{
					name: "decimalPlaces",
					type: "number",
					default: "0",
					description: "Number of decimal places to display.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply.",
				},
				{
					name: "prefix",
					type: "string",
					default: '""',
					description: "Prefix to display before the number.",
				},
				{
					name: "suffix",
					type: "string",
					default: '""',
					description: "Suffix to display after the number.",
				},
			],
		},
	],
	installBlock,
};
