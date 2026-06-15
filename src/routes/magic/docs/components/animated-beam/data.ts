import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

// Preview
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import Circle from "./examples/circle.svelte?raw";
import OpenaiIcon from "./examples/openai-icon.svelte?raw";
import UserIcon from "./examples/user-icon.svelte?raw";

// Main Component
import AnimatedBeamRaw from "$lib/components/magic/animated-beam/animated-beam.svelte?raw";
import Index from "$lib/components/magic/animated-beam/index.ts?raw";
import Types from "$lib/components/magic/animated-beam/types.ts?raw";
import UseGradientCoordinates from "$lib/components/magic/animated-beam/use-gradient-coordinates.svelte.ts?raw";
import UsePathCalculator from "$lib/components/magic/animated-beam/use-path-calculator.svelte.ts?raw";
import UseResizeObserver from "$lib/components/magic/animated-beam/use-resize-observer.svelte.ts?raw";

// Examples
import AnimatedBeamWithCurvature from "./examples/animated-beam-with-curvature.svelte";
import AnimatedBeamWithCurvatureRaw from "./examples/animated-beam-with-curvature.svelte?raw";
import AnimatedBeamReverseDirection from "./examples/animated-beam-reverse-direction.svelte";
import AnimatedBeamReverseDirectionRaw from "./examples/animated-beam-reverse-direction.svelte?raw";
import AnimatedBeamBiDirectional from "./examples/animated-beam-bi-directional.svelte";
import AnimatedBeamBiDirectionalRaw from "./examples/animated-beam-bi-directional.svelte?raw";
import AnimatedMultibeamExample from "./examples/animated-multibeam-example.svelte";
import AnimatedMultibeamExampleRaw from "./examples/animated-multibeam-example.svelte?raw";
import AnimatedBeamMultipleOutputs from "./examples/animated-beam-multiple-outputs.svelte";
import AnimatedBeamMultipleOutputsRaw from "./examples/animated-beam-multiple-outputs.svelte?raw";

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "animated-beam.svelte",
			filecode: AnimatedBeamRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: Index,
			lang: "typescript",
		},
		{
			filename: "types.ts",
			filecode: Types,
			lang: "typescript",
		},
		{
			filename: "use-gradient-coordinates.svelte.ts",
			filecode: UseGradientCoordinates,
			lang: "typescript",
			isExpand: true,
		},
		{
			filename: "use-path-calculator.svelte.ts",
			filecode: UsePathCalculator,
			lang: "typescript",
			isExpand: true,
		},
		{
			filename: "use-resize-observer.svelte.ts",
			filecode: UseResizeObserver,
			lang: "typescript",
			isExpand: true,
		},
	],
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── animated-beam/
                ├── animated-beam.svelte
                ├── types.ts
                ├── use-gradient-coordinates.svelte.ts
                ├── use-path-calculator.svelte.ts
                ├── use-resize-observer.svelte.ts
                └── index.ts`,
};

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-beam",
	title: "Animated Beam",
	description:
		'An animated beam of light which travels along a path. Useful for showcasing the "integration" features of a website.',
	category: "animation",
	badge: "new",
};

const examples: Example[] = [
	{
		name: "With Curvature",
		preview: AnimatedBeamWithCurvature,
		code: {
			filename: "animated-beam-with-curvature.svelte",
			filecode: AnimatedBeamWithCurvatureRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Reverse Direction",
		preview: AnimatedBeamReverseDirection,
		code: {
			filename: "animated-beam-reverse-direction.svelte",
			filecode: AnimatedBeamReverseDirectionRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Bi Directional Beams",
		preview: AnimatedBeamBiDirectional,
		code: {
			filename: "animated-beam-bi-directional.svelte",
			filecode: AnimatedBeamBiDirectionalRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Multiple Beams Inputs",
		preview: AnimatedMultibeamExample,
		code: {
			filename: "animated-multibeam-example.svelte",
			filecode: AnimatedMultibeamExampleRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
	{
		name: "Multiple Beams Outputs",
		preview: AnimatedBeamMultipleOutputs,
		code: {
			filename: "animated-beam-multiple-outputs.svelte",
			filecode: AnimatedBeamMultipleOutputsRaw,
			lang: "svelte",
			isExpand: true,
		},
	},
];

const seo: SEO = {
	title: "Animated Beam",
	description:
		"Learn how to create animated beam effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Animated Beam", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: [
		{
			filename: "animated-beam.svelte",
			filecode: PreviewCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
		{
			filename: "circle.svelte",
			filecode: Circle,
			lang: "svelte",
			hideLines: true,
		},
		{
			filename: "openai-icon.svelte",
			filecode: OpenaiIcon,
			lang: "svelte",
			hideLines: true,
		},
		{
			filename: "user-icon.svelte",
			filecode: UserIcon,
			lang: "svelte",
			hideLines: true,
		},
	],
	examples,
	seo,
	props: [
		{
			name: "Animated Beam",
			desc: "A component for creating animated beam effects between elements.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "containerRef",
					type: "HTMLElement | null",
					default: "null",
					description: "Reference to the container element",
				},
				{
					name: "fromRef",
					type: "HTMLElement | null",
					default: "null",
					description: "Reference to the starting element",
				},
				{
					name: "toRef",
					type: "HTMLElement | null",
					default: "null",
					description: "Reference to the ending element",
				},
				{
					name: "curvature",
					type: "number",
					default: "0",
					description: "Curvature of the beam path",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "false",
					description: "Reverse the animation direction",
				},
				{
					name: "duration",
					type: "number",
					default: "Math.random() * 3 + 4",
					description: "Duration of the animation in seconds",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Delay before animation starts",
				},
				{
					name: "pathColor",
					type: "string",
					default: '"gray"',
					description: "Color of the beam path",
				},
				{
					name: "pathWidth",
					type: "number",
					default: "2",
					description: "Width of the beam path",
				},
				{
					name: "pathOpacity",
					type: "number",
					default: "0.2",
					description: "Opacity of the beam path",
				},
				{
					name: "gradientStartColor",
					type: "string",
					default: '"#ffaa40"',
					description: "Starting color of the gradient",
				},
				{
					name: "gradientStopColor",
					type: "string",
					default: '"#9c40ff"',
					description: "Ending color of the gradient",
				},
				{
					name: "startXOffset",
					type: "number",
					default: "0",
					description: "X offset for the start position",
				},
				{
					name: "startYOffset",
					type: "number",
					default: "0",
					description: "Y offset for the start position",
				},
				{
					name: "endXOffset",
					type: "number",
					default: "0",
					description: "X offset for the end position",
				},
				{
					name: "endYOffset",
					type: "number",
					default: "0",
					description: "Y offset for the end position",
				},
			],
		},
	],
	installBlock,
};
