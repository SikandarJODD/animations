import DottedMapRaw from "$lib/components/magic/dotted-map/dotted-map.svelte?raw";
import IndexTs from "$lib/components/magic/dotted-map/index.ts?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import type { Example } from "$lib/types/examples";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import CustomDotRadius from "./examples/custom-dot-radius.svelte";
import CustomDotRadiusRaw from "./examples/custom-dot-radius.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "dotted-map",
	title: "Dotted Map",
	description: "An interactive world map visualization with customizable markers and styling.",
	category: "visualization",
	badge: "new",
};

const seo: SEO = {
	title: "Dotted Map",
	description:
		"Learn how to create interactive dotted world maps with markers in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Dotted Map", "World Map", "Svelte 5 Animations", "Visualization", "SVG"],
	titleTemplate: "%s | Svelte Magic UI",
};

const examples: Example[] = [
	{
		name: "Custom Dot Radius",
		description: "Customize the size of the dots on the map for a finer or coarser appearance.",
		preview: CustomDotRadius,
		code: {
			filename: "custom-dot-radius.svelte",
			filecode: CustomDotRadiusRaw,
			lang: "svelte",
		},
	},
];

let installBlock: InstallComponentDocs = {
	packages: ["piri"],
	installCode: [
		{
			filename: "dotted-map.svelte",
			filecode: DottedMapRaw,
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
            └── dotted-map/
                ├── dotted-map.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "dotted-map.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
	},
	examples,
	seo,
	props: [
		{
			name: "DottedMap",
			desc: "An SVG-based world map with dots and customizable markers.",
			props: [
				{ name: "width", type: "number", default: "150", description: "Width of the map" },
				{ name: "height", type: "number", default: "75", description: "Height of the map" },
				{
					name: "mapSamples",
					type: "number",
					default: "5000",
					description: "Number of dots to render on the map",
				},
				{
					name: "markers",
					type: "Marker[]",
					default: "[]",
					description: "Array of marker objects with lat, lng, and optional size",
				},
				{
					name: "dotColor",
					type: "string",
					default: "undefined",
					description: "Color of the dots (uses currentColor if not specified)",
				},
				{
					name: "markerColor",
					type: "string",
					default: "#FF6900",
					description: "Color of the marker dots",
				},
				{
					name: "dotRadius",
					type: "number",
					default: "0.2",
					description: "Radius of each dot",
				},
				{
					name: "stagger",
					type: "boolean",
					default: "true",
					description: "Whether to stagger alternating rows",
				},
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "style",
					type: "string",
					default: '""',
					description: "Inline styles to apply",
				},
			],
		},
		{
			name: "Marker",
			desc: "Marker object interface for specifying locations on the map.",
			props: [
				{
					name: "lat",
					type: "number",
					default: "required",
					description: "Latitude of the marker",
				},
				{
					name: "lng",
					type: "number",
					default: "required",
					description: "Longitude of the marker",
				},
				{
					name: "size",
					type: "number",
					default: "dotRadius",
					description: "Optional custom size for this marker",
				},
			],
		},
	],
	installBlock,
};
