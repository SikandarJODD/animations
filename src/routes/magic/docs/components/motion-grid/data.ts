import MotionGridRaw from "$lib/components/magic/motion-grid/motion-grid.svelte?raw";
import MotionGridCellsRaw from "$lib/components/magic/motion-grid/motion-grid-cells.svelte?raw";
import UseMotionGridContextRaw from "$lib/components/magic/motion-grid/use-motion-grid-context.svelte.ts?raw";
import TypesRaw from "$lib/components/magic/motion-grid/types.ts?raw";
import IndexTs from "$lib/components/magic/motion-grid/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import StateFramesCode from "./examples/state-frames.ts?raw";

import ManualStateSwitcherExample from "./examples/manual-state-switcher.svelte";
import ManualStateSwitcherExampleRaw from "./examples/manual-state-switcher.svelte?raw";
import CustomCellPropsExample from "./examples/custom-cell-props.svelte";
import CustomCellPropsExampleRaw from "./examples/custom-cell-props.svelte?raw";
import ChildRenderPropExample from "./examples/child-render-prop.svelte";
import ChildRenderPropExampleRaw from "./examples/child-render-prop.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "motion-grid",
	title: "Motion Grid",
	description: "A frame-based 2D grid animation primitive with active/inactive cell states.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "Manual State Switcher",
		preview: ManualStateSwitcherExample,
		code: {
			filename: "manual-state-switcher.svelte",
			filecode: ManualStateSwitcherExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Custom Cell Props",
		preview: CustomCellPropsExample,
		code: {
			filename: "custom-cell-props.svelte",
			filecode: CustomCellPropsExampleRaw,
			lang: "svelte",
		},
	},
	{
		name: "Child Render Prop",
		preview: ChildRenderPropExample,
		code: {
			filename: "child-render-prop.svelte",
			filecode: ChildRenderPropExampleRaw,
			lang: "svelte",
		},
	},
];

const seo: SEO = {
	title: "Motion Grid",
	description:
		"Learn how to create frame-based grid animations in Svelte using MotionGrid and MotionGridCells.",
	keywords: ["Svelte", "Motion Grid", "Svelte 5 Animations", "Animation", "Motion SV", "Grid"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "motion-grid.svelte",
			filecode: MotionGridRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "motion-grid-cells.svelte",
			filecode: MotionGridCellsRaw,
			lang: "svelte",
		},
		{
			filename: "use-motion-grid-context.svelte.ts",
			filecode: UseMotionGridContextRaw,
			lang: "typescript",
		},
		{
			filename: "types.ts",
			filecode: TypesRaw,
			lang: "typescript",
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
            └── motion-grid/
                ├── motion-grid.svelte
                ├── motion-grid-cells.svelte
                ├── use-motion-grid-context.svelte.ts
                ├── types.ts
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: [
		{
			filename: "preview.svelte",
			filecode: PreviewCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
		{
			filename: "state-frames.ts",
			filecode: StateFramesCode,
			lang: "typescript",
			hideLines: true,
		},
	],
	examples,
	seo,
	props: [
		{
			name: "MotionGrid",
			desc: "Grid container that provides frame state and layout context.",
			props: [
				{
					name: "gridSize",
					type: "[number, number]",
					default: "required",
					description: "Grid dimensions as [columns, rows].",
				},
				{
					name: "frames",
					type: "Frames",
					default: "required",
					description: "Frame sequence of active [x, y] cells.",
				},
				{
					name: "duration",
					type: "number",
					default: "200",
					description: "Frame interval in milliseconds.",
				},
				{
					name: "animate",
					type: "boolean",
					default: "true",
					description: "Toggles automatic frame cycling.",
				},
				{
					name: "child",
					type: "Snippet<[ { props: MotionGridCellMotionProps } ]>",
					default: "-",
					description: "Render-prop wrapper for custom root rendering.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional classes for the grid root.",
				},
			],
		},
		{
			name: "MotionGridCells",
			desc: "Renders all cells and applies active/inactive presentation.",
			props: [
				{
					name: "activeProps",
					type: "MotionGridCellMotionProps",
					default: "-",
					description: "Props merged into active cells.",
				},
				{
					name: "inactiveProps",
					type: "MotionGridCellMotionProps",
					default: "-",
					description: "Props merged into inactive cells.",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Base class applied to all cells.",
				},
			],
		},
	],
	installBlock,
};
