<script lang="ts">
	import { resolve } from "$app/paths";
	import { H1, Paragraph } from "#lib/components/docs/markdown/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import FaviconLink from "#lib/components/ui/favicon-link/favicon-link.svelte";
</script>

<section
	class="relative isolate flex min-h-96 flex-col items-center justify-center overflow-hidden px-4 py-10 text-center sm:px-10 sm:py-14"
>
	<div class="relative mx-auto max-w-3xl">
		<H1 id="overview" class="text-3xl leading-tight font-semibold sm:text-5xl md:text-6xl">
			Svelte Magic UI
		</H1>

		<p
			id="description"
			class="text-muted-foreground mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-balance sm:mt-5 sm:text-base"
		>
			<span class="font-mono">60+</span> Free and open-source animated components and effects
			<br />
		</p>
		<div
			class="text-muted-foreground mx-auto mt-3 flex max-w-2xl flex-wrap items-center justify-center gap-x-1.5 gap-y-2 text-sm sm:text-base"
		>
			<span>Built with</span>
			<FaviconLink
				href="https://svelte.dev"
				faviconSrc="https://svelte.dev/favicon.png"
				class="m-0 border border-dashed border-[#FF3E00] bg-[#FF3E00]/4 pr-2 pl-1.5 text-sm font-medium text-[#FF3E00] hover:text-[#FF3E00] dark:border-orange-500/50 dark:bg-orange-800/20"
			>
				Svelte
			</FaviconLink><FaviconLink
				href="https://tailwindcss.com/"
				faviconSrc="https://tailwindcss.com/favicon.ico"
				imageClass="rounded-xs"
				class="m-0 border border-dashed border-[#06B6D4] bg-[#06B6D4]/4 pr-2 pl-1.5 text-sm font-medium text-[#06B6D4] hover:text-[#06B6D4] dark:border-cyan-500/50 dark:bg-cyan-800/20"
			>
				Tailwind CSS
			</FaviconLink>
			<span>and</span>
			<!-- <a
				href="https://motion.hyprsonic.dev/"
				class="text-primary"
				target="_blank"
				rel="noopener noreferrer"
			>
				Motion Svelte
			</a> -->
			<FaviconLink
				href="https://motion.hyprsonic.dev/"
				faviconSrc="https://motion.hyprsonic.dev/favicon.ico"
				class="m-0 border border-dashed border-[#F43F5E]/60 bg-[#F43F5E]/4 px-1.5 text-sm text-[#F43F5E]/90 hover:text-[#F43F5E] dark:border-pink-500/50 dark:bg-pink-800/20 dark:text-[#F43F5E]/80"
				>Motion Svelte</FaviconLink
			>
		</div>

		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<Button
				size="lg"
				class="rounded-full px-4"
				href={resolve("magic/docs/components/animated-background")}
			>
				View Components
			</Button>
			<Button
				size="lg"
				class="rounded-full pr-4 pl-3 shadow-none transition-none"
				variant="outline"
				href="https://github.com/sponsors/SikandarJODD"
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="rounded-full">
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
