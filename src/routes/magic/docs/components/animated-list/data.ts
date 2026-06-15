import Raw from "$lib/components/magic/animated-list/animated-list.svelte?raw";
import IndexTs from "$lib/components/magic/animated-list/index.ts?raw";
import type { SEO } from "$lib/types/seo";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import Preview from "./examples/preview.svelte";
import PreviewCode from "./examples/preview.svelte?raw";
import NotificationCode from "./examples/notification.svelte?raw";

/** Component metadata for navigation */
export const meta: ComponentMeta = {
	id: "animated-list",
	title: "Animated List",
	description: "A component for creating animated lists with smooth transitions between items.",
	category: "animation",
	badge: "new",
};

const seo: SEO = {
	title: "Animated List",
	description:
		"Learn how to create animated list effects in Svelte using the Svelte 5 Animations library.",
	keywords: ["Svelte", "Animated List", "Svelte 5 Animations", "Animation", "Web Design"],
	titleTemplate: "%s | Svelte Magic UI",
};

let installBlock: InstallComponentDocs = {
	packages: ["motion-sv"],
	installCode: [
		{
			filename: "animated-list.svelte",
			filecode: Raw,
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
				└── animated-list/
					├── animated-list.svelte
					└── index.ts`,
};

/*
interface AnimatedListProps<T> {
		items: T[];
		class?: string;
		delay?: number;
		children: Snippet<[T, number]>;
	}
 */
export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: [
		{
			filename: "animated-list-preview.svelte",
			filecode: PreviewCode,
			lang: "svelte",
			hideLines: true,
			highlight: [2],
		},
		{
			filename: "notification.svelte",
			filecode: NotificationCode,
			lang: "svelte",
			hideLines: true,
		},
	],
	seo,
	props: [
		{
			name: "",
			desc: "A component for .",
			props: [
				{
					name: "class",
					type: "string",
					default: '""',
					description: "Additional CSS classes to apply",
				},
				{
					name: "delay",
					type: "number",
					default: "0",
					description: "Delay in milliseconds before the animation starts",
				},
				{
					name: "items",
					type: "T[]",
					default: "[]",
					description: "An array of items to be rendered in the animated list",
				},
				{
					name: "children",
					type: "Snippet<[T, number]>",
					default: "",
					description:
						"A render prop function that receives each item and its index, returning a Svelte component or HTML to be rendered for that item.",
				},
			],
		},
	],
	installBlock,
};
