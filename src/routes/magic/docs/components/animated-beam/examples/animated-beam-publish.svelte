<script lang="ts">
	import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
	import { GitCommitHorizontal, Box, Globe, Check } from "@lucide/svelte";

	let container: HTMLDivElement | null = $state(null);
	let commit: HTMLDivElement | null = $state(null);
	let build: HTMLDivElement | null = $state(null);
	let preview: HTMLDivElement | null = $state(null);
	let tests: HTMLDivElement | null = $state(null);
</script>

<div
	bind:this={container}
	class="relative isolate w-full max-w-xl px-2 py-10 [--beam:var(--color-neutral-700)] sm:px-8 dark:[--beam:var(--color-neutral-200)]"
>
	<div class="relative z-10 grid grid-cols-3 items-center gap-x-6 gap-y-12 text-center">
		<div class="row-span-2 flex flex-col items-center gap-3">
			<div
				bind:this={commit}
				class="bg-background flex size-11 items-center justify-center rounded-full border"
			>
				<GitCommitHorizontal class="size-5" strokeWidth={1.5} />
			</div>
			<span class="text-muted-foreground text-xs">push</span>
		</div>
		<div class="row-span-2 flex flex-col items-center gap-3">
			<div
				bind:this={build}
				class="bg-background flex size-14 items-center justify-center rounded-xl border"
			>
				<Box class="size-6" strokeWidth={1.5} />
			</div>
			<span class="text-muted-foreground text-xs">build</span>
		</div>
		<div class="flex flex-col items-center gap-3">
			<div
				bind:this={preview}
				class="bg-background flex size-11 items-center justify-center rounded-full border"
			>
				<Globe class="size-5" strokeWidth={1.5} />
			</div>
			<span class="text-muted-foreground text-xs">preview</span>
		</div>
		<div class="flex flex-col items-center gap-3">
			<div
				bind:this={tests}
				class="bg-background flex size-11 items-center justify-center rounded-full border"
			>
				<Check class="size-5 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} />
			</div>
			<span class="text-muted-foreground text-xs">checks</span>
		</div>
	</div>
	<AnimatedBeam
		class="motion-reduce:[&>path+path]:hidden"
		containerRef={container}
		fromRef={commit}
		toRef={build}
		duration={4}
		startXOffset={22}
		endXOffset={-28}
		pathColor="var(--foreground)"
		pathOpacity={0.12}
		gradientStartColor="var(--beam)"
		gradientStopColor="var(--beam)"
	/>
	<AnimatedBeam
		class="motion-reduce:[&>path+path]:hidden"
		containerRef={container}
		fromRef={build}
		toRef={preview}
		duration={4}
		delay={1.3}
		startXOffset={28}
		endXOffset={-22}
		curvature={35}
		pathColor="var(--foreground)"
		pathOpacity={0.12}
		gradientStartColor="var(--beam)"
		gradientStopColor="var(--beam)"
	/>
	<AnimatedBeam
		class="motion-reduce:[&>path+path]:hidden"
		containerRef={container}
		fromRef={build}
		toRef={tests}
		duration={4}
		delay={1.3}
		startXOffset={28}
		endXOffset={-22}
		curvature={-35}
		pathColor="var(--foreground)"
		pathOpacity={0.12}
		gradientStartColor="var(--beam)"
		gradientStopColor="var(--beam)"
	/>
</div>
