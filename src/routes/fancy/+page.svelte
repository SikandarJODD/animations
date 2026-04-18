<script lang="ts">
	import SEO from "$lib/seo/SEO.svelte";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
	import ImageIcon from "@lucide/svelte/icons/image";
</script>

<SEO
	title="Svelte Fancy UI"
	description="A focused collection of polished Svelte components for expressive media and text interfaces."
	keywords={["Fancy UI", "Svelte Fancy UI", "Svelte 5", "media components", "text effects"]}
/>

<section class="w-full px-4 py-12 sm:px-6 lg:px-12">
	<div
		class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end"
	>
		<div class="max-w-3xl space-y-6">
			<div
				class="border-border bg-background text-muted-foreground inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm"
			>
				<ImageIcon class="size-4" />
				<span>Fancy UI</span>
			</div>
			<div class="space-y-4">
				<h1
					class="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl"
				>
					Expressive media components for Svelte.
				</h1>
				<p class="text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg">
					A growing library for polished interactions where typography, motion, and media
					need to work together.
				</p>
			</div>
		</div>

		<a
			href="/fancy/media-between-text"
			class="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground group block rounded-lg border p-5 transition-colors"
		>
			<div class="mb-6 flex items-center justify-between gap-4">
				<div
					class="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-md"
				>
					<ImageIcon class="size-5" />
				</div>
				<ArrowRightIcon
					class="text-muted-foreground size-5 transition-transform group-hover:translate-x-1"
				/>
			</div>
			<div class="space-y-2">
				<h2 class="text-lg font-semibold">Media Between Text</h2>
				<p class="text-muted-foreground text-sm leading-6">
					Reveal image or video media between two text fragments with hover, view, or
					manual triggers.
				</p>
			</div>
		</a>
	</div>
</section>

