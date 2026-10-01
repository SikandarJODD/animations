import { BlocksIcon, BookOpenIcon, SparklesIcon } from "@lucide/svelte";
import type { NavType, ProjectItemType } from "./types";

const navs: NavType[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Components",
		href: "/magic",
		sub: [
			{
				name: "Svelte Magic UI",
				description: "50+ animations and effects for Svelte.",
				icon: SparklesIcon,
				href: "/magic",
			},
			{
				name: "Svelte Spell UI",
				description: "Refined UI components for design engineers.",
				icon: BookOpenIcon,
				href: "/spell",
			},
			{
				name: "Svelte Fancy Components",
				description: "Unique, eye-catching components for Svelte.",
				icon: BlocksIcon,
				badge: "New",
				badgeVariant: "emerald",
				href: "/fancy",
			},
		],
	},
	{
		name: "Changelog",
		href: "/changelog",
	},
];

const projectItems: ProjectItemType[] = [
	{
		title: "Svelte Chan Components",
		description:
			"Includes Slide to Unlock, GitHub Contributions, Timescale, Status Button, and more.",
		url: "https://sv-chan.vercel.app",
		github: "https://github.com/SikandarJODD/chanhdai",
		slug: "svelte-chan-components",
	},
	{
		title: "Svelte Marketing Blocks",
		description: "Reusable marketing sections and landing-page blocks.",
		url: "https://sv-blocks.vercel.app/",
		github: "https://github.com/SikandarJODD/cnblocks",
		slug: "svelte-marketing-blocks",
	},
	{
		title: "Svelte Quality Marketing Blocks",
		description: "Polished marketing blocks for high-quality Svelte sites.",
		url: "https://sv-efferd.pages.dev/",
		github: "https://github.com/SikandarJODD/sv-efferd",
		slug: "svelte-quality-marketing-blocks",
	},
	{
		title: "Svelte AI Elements",
		description: "Composable Svelte elements for AI product interfaces.",
		url: "https://svelte-ai-elements.vercel.app/",
		github: "https://github.com/SikandarJODD/ai-elements",
		slug: "svelte-ai-elements",
	},
	{
		title: "Svelte Particles",
		description: "Interactive particle effects and examples for Svelte.",
		url: "https://sv-particles.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-particles",
		slug: "svelte-particles",
	},
	{
		title: "Svelte DataTables Components",
		description: "Data table components, patterns, and practical examples.",
		url: "https://sv-table.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-table",
		slug: "svelte-data-table",
	},
	{
		title: "Svelte Globe Examples",
		description: "Interactive globe examples and visual experiments.",
		url: "https://sv-globe.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-globe",
		slug: "svelte-globe",
	},
	{
		title: "Svelte Dot Matrix Loaders",
		description: "Customizable dot-matrix loading animations for Svelte.",
		url: "https://sv-matrix.vercel.app/",
		github: "https://github.com/SikandarJODD/sv-matrix",
		slug: "svelte-dot-matrix-loaders",
	},
	{
		title: "Svelte Agentation",
		description: "Visual feedback and annotation tools for AI coding agents.",
		url: "https://sv-agentation.com/",
		github: "https://github.com/SikandarJODD/sv-agentation",
		slug: "svelte-agentation",
		accent: "amber",
	},
];

function withUtm(url: string, content: string) {
	const params = new URLSearchParams({
		utm_source: "sv-animations",
		utm_medium: "referral",
		utm_campaign: "other-projects",
		utm_content: content,
	});

	return `${url}?${params.toString()}`;
}

export { navs, projectItems, withUtm };
