<script lang="ts">
	import { MetaTags } from "svelte-meta-tags";
	import { changelogEntries } from "./data";
</script>

<MetaTags
	title="Changelog | Svelte 5 Animations"
	description="Latest component additions, fixes, examples, and updates for Svelte 5 Animations."
	openGraph={{
		url: "https://sv-animations.vercel.app/changelog",
		title: "Changelog | Svelte 5 Animations",
		description:
			"Latest component additions, fixes, examples, and updates for Svelte 5 Animations.",
		siteName: "Svelte 5 Animations",
		images: [
			{
				url: "https://sv-animations.vercel.app/og.png",
				alt: "Svelte 5 Animations",
			},
		],
	}}
	twitter={{
		cardType: "summary_large_image",
		title: "Changelog | Svelte 5 Animations",
		description:
			"Latest component additions, fixes, examples, and updates for Svelte 5 Animations.",
		image: "https://sv-animations.vercel.app/og.png",
		imageAlt: "Svelte 5 Animations",
		site: "@Sikandar_Bhide",
		creator: "@Sikandar_Bhide",
	}}
/>

<section class="font-figtree min-h-[calc(100vh-4rem)] px-4 py-12 sm:py-16">
	<div class="mx-auto w-full max-w-2xl">
		<header class="mb-10">
			<p
				class="text-muted-foreground mb-2 text-[11px] font-medium tracking-[0.18em] uppercase"
			>
				Updates
			</p>
			<h1 class="text-2xl font-semibold tracking-normal sm:text-3xl">Changelog</h1>
		</header>

		<div class="space-y-12">
			{#each changelogEntries as entry (entry.id)}
				{@const Entry = entry.component}
				<Entry />
			{/each}
		</div>
	</div>
</section>
