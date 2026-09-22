<script lang="ts">
	import { Floating, FloatingElement } from "$lib/components/fancy/parallax-floating";
</script>

<div class="font-figtree relative h-112 w-full overflow-hidden bg-white text-black dark:bg-black dark:text-white">
	<p class="pointer-events-none absolute inset-x-0 bottom-7 text-center text-sm opacity-60">
		Two wrappers · six items
	</p>

	<Floating sensitivity={0.65}>
		<FloatingElement depth={0.6} class="top-[28%] left-[6%] sm:left-[12%]">
			<div class="w-52 border border-black/25 bg-white p-4 dark:border-white/25 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth 0.6</p>
				<div class="mt-4 flex items-end gap-3">
					<div class="size-12 border border-black/50 dark:border-white/50"></div>
					<div class="size-12 rounded-full bg-black dark:bg-white"></div>
					<div class="h-12 w-6 border border-black/50 dark:border-white/50"></div>
				</div>
			</div>
		</FloatingElement>

		<FloatingElement depth={1.5} class="top-[58%] left-[38%] sm:left-[56%]">
			<div class="w-52 border border-dashed border-black/40 bg-white p-4 dark:border-white/40 dark:bg-black">
				<p class="font-mono text-xs opacity-60">depth 1.5</p>
				<div class="mt-4 flex items-end gap-3">
					<div class="h-10 w-16 bg-black dark:bg-white"></div>
					<div class="size-10 rotate-45 border border-black/50 dark:border-white/50"></div>
					<div class="size-10 rounded-full border border-black/50 dark:border-white/50"></div>
				</div>
			</div>
		</FloatingElement>
	</Floating>
</div>
