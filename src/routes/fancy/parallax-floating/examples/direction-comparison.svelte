<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-96 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<p class="pointer-events-none absolute inset-x-0 bottom-8 text-center text-sm opacity-60">
		Positive follows · negative reverses
	</p>

	<Floating sensitivity={0.75}>
		<FloatingElement depth={1.25} class="top-1/2 left-1/4">
			<div class="w-32 -translate-x-1/2 -translate-y-1/2 border border-black/40 bg-white p-4 sm:w-40 dark:border-white/40 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth +1.25</p>
				<p class="mt-8 font-semibold">Toward</p>
			</div>
		</FloatingElement>

		<FloatingElement depth={-1.25} class="top-1/2 left-3/4">
			<div class="w-32 -translate-x-1/2 -translate-y-1/2 border border-dashed border-black/60 bg-white p-4 sm:w-40 dark:border-white/60 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth −1.25</p>
				<p class="mt-8 font-semibold">Away</p>
			</div>
		</FloatingElement>
	</Floating>
</div>
