import ArcTimelineRaw from "$lib/components/magic/arc-timeline/arc-timeline.svelte?raw";
import IndexTs from "$lib/components/magic/arc-timeline/index.ts?raw";
import TypesTs from "$lib/components/magic/arc-timeline/types.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import ProductRoadmap from "./examples/product-roadmap.svelte";
import ProductRoadmapCode from "./examples/product-roadmap.svelte?raw";

export const meta: ComponentMeta = {
	id: "arc-timeline",
	title: "Arc Timeline",
	description:
		"A curved timeline that rotates through milestone steps with clickable markers, icons, and configurable spacing.",
	category: "animation",
};

const examples: Example[] = [
	{
		name: "Product Roadmap",
		preview: ProductRoadmap,
		code: {
			filename: "product-roadmap.svelte",
			filecode: ProductRoadmapCode,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Arc Timeline",
	description:
		"Learn how to build rotating milestone timelines in Svelte with custom icons, grouped steps, and configurable arc spacing.",
	keywords: [
		"Svelte",
		"Arc Timeline",
		"Svelte 5 Animations",
		"Timeline",
		"Milestones",
		"Lucide Icons",
	],
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "arc-timeline.svelte",
			filecode: ArcTimelineRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "types.ts",
			filecode: TypesTs,
			lang: "typescript",
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	folderStructure: `src/
  lib/
    components/
      magic/
        arc-timeline/
          arc-timeline.svelte
          types.ts
          index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "ArcTimeline",
			desc: "The root timeline container that renders grouped milestone steps around a rotating arc.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes applied to the root container.",
				},
				{
					name: "ref",
					type: "HTMLDivElement | null",
					default: "null",
					description: "Optional bindable reference to the root timeline element.",
				},
				{
					name: "data",
					type: "ArcTimelineItem[]",
					default: "required",
					description: "Timeline groups and steps rendered around the arc.",
				},
				{
					name: "arcConfig",
					type: "ArcTimelineArcConfig",
					default: "{}",
					description: "Overrides for circle size and line spacing.",
				},
				{
					name: "defaultActiveStep",
					type: "ArcTimelineDefaultActiveStep",
					default: "{}",
					description: "Initial active milestone selected when the component mounts.",
				},
			],
		},
		{
			name: "ArcTimelineItem",
			desc: "A timeline group with a shared time label and one or more steps.",
			props: [
				{
					name: "time",
					type: "ArcTimelineRenderable",
					default: "required",
					description:
						"Label rendered above the first step in the group. Accepts a snippet or primitive value.",
				},
				{
					name: "steps",
					type: "ArcTimelineStep[]",
					default: "required",
					description: "Milestone steps associated with the group.",
				},
			],
		},
		{
			name: "ArcTimelineStep",
			desc: "A single milestone marker rendered on the arc.",
			props: [
				{
					name: "icon",
					type: "ArcTimelineRenderable",
					default: "required",
					description: "Icon marker content. Accepts a snippet or primitive value.",
				},
				{
					name: "content",
					type: "ArcTimelineRenderable",
					default: "required",
					description:
						"Step description shown for the active marker. Accepts a snippet or primitive value.",
				},
			],
		},
		{
			name: "ArcTimelineArcConfig",
			desc: "Controls the geometry and spacing of the arc.",
			props: [
				{
					name: "circleWidth",
					type: "number",
					default: "5000",
					description: "Diameter of the invisible circle used to position the arc lines.",
				},
				{
					name: "angleBetweenMinorSteps",
					type: "number",
					default: "0.35",
					description: "Rotation increment in degrees between minor placeholder lines.",
				},
				{
					name: "lineCountFillBetweenSteps",
					type: "number",
					default: "10",
					description: "Number of placeholder lines inserted between adjacent steps.",
				},
				{
					name: "boundaryPlaceholderLinesCount",
					type: "number",
					default: "50",
					description:
						"Number of placeholder lines rendered before the first step and after the last step.",
				},
			],
		},
		{
			name: "ArcTimelineDefaultActiveStep",
			desc: "Selects the milestone that should be active on first render.",
			props: [
				{
					name: "time",
					type: 'ArcTimelineItem["time"]',
					default: "data[0]?.time",
					description:
						"Time group to activate. Primitive labels like strings are the most practical for matching.",
				},
				{
					name: "stepIndex",
					type: "number",
					default: "0",
					description: "Index of the step within the matching time group.",
				},
			],
		},
	],
	installBlock,
};
