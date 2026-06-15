import IndexTs from "$lib/components/magic/meteors/index.ts?raw";
import MeteorsRaw from "$lib/components/magic/meteors/meteors.svelte?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";

// Preview
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";

let installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "meteors.svelte",
			filecode: MeteorsRaw,
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
		highlight: [[2, 4]],
		filecode: `@theme inline {
  --animate-meteor: meteor 5s linear infinite;

  @keyframes meteor {
    0% {
      transform: rotate(var(--angle)) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(var(--angle)) translateX(-500px);
      opacity: 0;
    }
  }
}`,
		lang: "css",
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── meteors/
                ├── meteors.svelte
                └── index.ts`,
};

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "meteors",
	title: "Meteors",
	description: "A meteor shower effect.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Meteors",
	description: "Learn how to create meteors in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Meteors", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "meteors-example.svelte",
		filecode: PreviewCode,
		lang: "svelte",
		hideLines: true,
		highlight: [2],
	},
	seo,
	installBlock,
	props: [
		{
			name: "Meteors",
			props: [
				{
					name: "number",
					type: "number",
					default: "20",
					description: "Number of meteors",
				},
				{
					name: "minDelay",
					type: "number",
					default: "0.2",
					description: "Minimum delay in seconds before meteor animation starts",
				},
				{
					name: "maxDelay",
					type: "number",
					default: "1.2",
					description: "Maximum delay in seconds before meteor animation starts",
				},
				{
					name: "minDuration",
					type: "number",
					default: "2",
					description: "Minimum duration in seconds for meteor animation",
				},
				{
					name: "maxDuration",
					type: "number",
					default: "10",
					description: "Maximum duration in seconds for meteor animation",
				},
				{
					name: "angle",
					type: "number",
					default: "215",
					description: "Angle in degrees for meteor trajectory",
				},
				{
					name: "class",
					type: "string",
					default: "",
					description: "Additional CSS classes for the meteors container",
				},
			],
		},
	],
};
