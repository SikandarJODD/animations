<script lang="ts">
	import { H1, Paragraph } from "$lib/components/docs/markdown";
	import { Button } from "$lib/components/ui/button";
</script>

<section
	class="relative isolate flex min-h-96 flex-col items-center justify-center overflow-hidden rounded-[28px] border px-6 py-14 text-center sm:px-10"
>
	<div
		class="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent"
	></div>
	<div class="bg-primary/12 absolute top-10 left-8 size-28 rounded-full blur-3xl"></div>
	<div class="absolute right-0 bottom-0 size-44 rounded-full bg-cyan-500/16 blur-3xl"></div>
	<div class="border-border absolute inset-3 rounded-3xl border border-dashed opacity-70"></div>

	<div class="relative mx-auto max-w-3xl">
		<H1 id="overview" class="text-3xl leading-16 font-semibold font-figtree sm:text-5xl md:text-6xl">
			Svelte Magic UI
		</H1>

		<Paragraph
			id="description"
			class="text-muted-foreground mx-auto font-figtree mt-5 max-w-2xl text-base leading-8 text-balance"
		>
			50+ Free and Open-Source animated components and effects Built with Svelte 5,
			Typescript, Tailwind CSS V4 and Motion Svelte.
		</Paragraph>

		<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<Button
				size="lg"
				class="rounded-full bg-teal-400 text-teal-950 transition-none hover:bg-teal-400/85 dark:bg-teal-500 dark:text-teal-950 dark:hover:bg-teal-300/90"
				href="#showcase"
			>
				View Components
			</Button>
			<Button
				size="lg"
				class="rounded-full pl-2 transition-none"
				variant="outline"
				href="https://github.com/sponsors/SikandarJODD"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="rounded-full border">
					<img
						src="https://github.com/SikandarJODD.png"
						alt="Sikandar JODD"
						class="font-figtree size-5 rounded-full"
					/>
				</span>
				Sponsor My Work
			</Button>
		</div>
	</div>
</section>
