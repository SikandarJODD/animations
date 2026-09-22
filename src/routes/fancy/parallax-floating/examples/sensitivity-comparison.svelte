<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree grid h-112 w-full bg-white text-black sm:grid-cols-2 dark:bg-black dark:text-white">
	<section class="relative min-h-56 overflow-hidden border-b border-black/15 sm:border-r sm:border-b-0 dark:border-white/15">
		<p class="pointer-events-none absolute top-6 left-6 z-10 font-mono text-xs">
			gentle · sensitivity 0.35
		</p>

		<Floating sensitivity={0.35}>
			<FloatingElement depth={2} class="top-1/2 left-1/2">
				<div class="flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/40 bg-white font-mono text-xs dark:border-white/40 dark:bg-black">
					depth 2
				</div>
			</FloatingElement>
		</Floating>
	</section>

	<section class="relative min-h-56 overflow-hidden">
		<p class="pointer-events-none absolute top-6 left-6 z-10 font-mono text-xs">
			responsive · sensitivity 1.4
		</p>

		<Floating sensitivity={1.4}>
			<FloatingElement depth={2} class="top-1/2 left-1/2">
				<div class="flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/40 bg-white font-mono text-xs dark:border-white/40 dark:bg-black">
					depth 2
				</div>
			</FloatingElement>
		</Floating>
	</section>
</div>
