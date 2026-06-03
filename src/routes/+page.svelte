<script lang="ts">
	import Hero from "$lib/components/layout/Hero.svelte";
	import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
	title="Svelte Animations Components"
	description="50+ free and open-source animated components and effects built with Svelte 5, Typescript, Tailwind CSS, and Motion SV."
	keywords={[
		"svelte animations",
		"svelte transition",
		"svelte motion",
		"animation components",
		"ui animations",
		"web animations",
		"frontend animations",
		"interactive animations",
		"animated components",
	]}
	openGraph={{
		url: "https://sv-animations.vercel.app/",
		title: "Svelte Animations Components",
		description:
			"50+ free and open-source animated components and effects built with Svelte 5, Typescript, Tailwind CSS, and Motion SV.",
		siteName: "Svelte Animations Components",
		images: [
			{
				url: "https://sv-animations.vercel.app/og.png",
				alt: "Svelte Animations Components",
			},
		],
	}}
	twitter={{
		cardType: "summary_large_image",
		title: "Svelte Animations Components",
		description:
			"50+ free and open-source animated components and effects built with Svelte 5, Typescript, Tailwind CSS, and Motion SV.",
		image: "https://sv-animations.vercel.app/og.png",
		imageAlt: "Svelte Animations Components",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>

<div>
	<Hero />
</div>
