<script lang="ts">
	import { resolve } from "$app/paths";
	import { H1, Paragraph } from "#lib/components/docs/markdown/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import FaviconLink from "#lib/components/ui/favicon-link/favicon-link.svelte";
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
		<H1 id="overview" class="text-3xl leading-16 font-semibold sm:text-5xl md:text-6xl ">
			Svelte Magic UI
		</H1>

		<p
			id="description"
			class="text-muted-foreground mx-auto mt-5 max-w-2xl text-base text-balance"
		>
			<span class="font-mono">50+</span> Free and open-source animated components and effects
			<br />
		</p>
		<p class="text-muted-foreground mx-auto mt-2.5 max-w-2xl text-base text-balance">
			Built with <FaviconLink
				href="https://svelte.dev"
				faviconSrc="https://svelte.dev/favicon.png"
				class="my-0 mr-1 ml-0 border border-dashed border-[#FF3E00] bg-[#FF3E00]/4 pr-2 pl-1.5 text-[15px] font-medium text-[#FF3E00] hover:text-[#FF3E00] dark:border-orange-500/50 dark:bg-orange-800/20"
			>
				Svelte
			</FaviconLink><FaviconLink
				href="https://tailwindcss.com/"
				faviconSrc="https://tailwindcss.com/favicon.ico"
				imageClass="rounded-xs"
				class="my-0 mr-1.5 ml-0 border border-dashed border-[#06B6D4] bg-[#06B6D4]/4 pr-2 pl-1.5 text-[15px] font-medium text-[#06B6D4] hover:text-[#06B6D4] dark:border-cyan-500/50 dark:bg-cyan-800/20"
			>
				Tailwind CSS
			</FaviconLink>and
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
				class="my-0 ml-0 border border-dashed border-[#F43F5E] bg-[#F43F5E]/4 px-1.5 text-[15px] font-medium text-[#F43F5E] hover:text-[#F43F5E] dark:border-pink-500/50 dark:bg-pink-800/20"
				>Motion Svelte</FaviconLink
			>
		</p>

		<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
