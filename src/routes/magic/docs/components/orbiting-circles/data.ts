import OrbitingCirclesRaw from "$lib/components/magic/orbiting-circles/orbiting-circles.svelte?raw";
import IndexTs from "$lib/components/magic/orbiting-circles/index.ts?raw";

import type { Example } from "$lib/types/examples";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "orbiting-circles",
	title: "Orbiting Circles",
	description:
		"A component that displays icons or elements orbiting in a circular path with customizable radius, duration, and direction.",
	category: "animation",
	badge: "new",
};

const examples: Example[] = [];

const seo: SEO = {
	title: "Orbiting Circles",
	description:
		"Learn how to create orbiting circle animations in Svelte with customizable radius, duration, direction, and rotation paths using the Svelte 5 Animations library.",
	keywords: [
		"Svelte",
		"Orbiting Circles",
		"Svelte 5 Animations",
		"Animation",
		"Circular Motion",
		"Web Design",
	],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "orbiting-circles.svelte",
			filecode: OrbitingCirclesRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTs,
			lang: "typescript",
		},
	],
	tailwind: {
		filename: "src/routes/layout.css",
		lang: "css",
		highlight: [2, [4, 14]],
		filecode: `@theme inline {
  --animate-orbit: orbit calc(var(--duration) * 1s) linear infinite;

  @keyframes orbit {
    0% {
      transform: rotate(calc(var(--angle) * 1deg))
        translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg));
    }
    100% {
      transform: rotate(calc(var(--angle) * 1deg + 360deg))
        translateY(calc(var(--radius) * 1px))
        rotate(calc((var(--angle) * -1deg) - 360deg));
    }
  }
}`,
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── orbiting-circles/
                ├── orbiting-circles.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "orbiting-circles.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	examples,
	seo,
	props: [
		{
			name: "OrbitingCircles",
			desc: "A component that creates orbiting animations with customizable paths and behaviors.",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply to the orbiting element",
				},
				{
					name: "reverse",
					type: "boolean",
					default: "false",
					description: "Reverse the direction of orbit (counter-clockwise)",
				},
				{
					name: "duration",
					type: "number",
					default: "20",
					description: "Base duration of one complete orbit in seconds",
				},
				{
					name: "radius",
					type: "number",
					default: "160",
					description: "Radius of the orbit path in pixels",
				},
				{
					name: "path",
					type: "boolean",
					default: "false",
					description: "Show the dotted circular orbit path",
				},
				{
					name: "iconSize",
					type: "number",
					default: "30",
					description: "Size of the orbiting icon/element in pixels",
				},
				{
					name: "speed",
					type: "number",
					default: "1",
					description: "Speed multiplier for the orbit animation",
				},
				{
					name: "angle",
					type: "number",
					default: "0",
					description: "Starting angle of the orbit in degrees",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description:
						"Animation delay in seconds (negative values start the animation earlier)",
				},
				{
					name: "children",
					type: "Snippet",
					default: "-",
					description: "Snippet content to render inside the orbiting element",
				},
			],
		},
	],
	installBlock,
};
