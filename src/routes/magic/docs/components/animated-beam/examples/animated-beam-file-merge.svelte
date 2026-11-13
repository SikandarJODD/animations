<script lang="ts">
	import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
	import { FileCode, FileJson, FileType, Package } from "@lucide/svelte";

	let container: HTMLDivElement | null = $state(null);
	let sources: (HTMLDivElement | null)[] = $state([null, null, null, null]);
	let bundle: HTMLDivElement | null = $state(null);
	const files = [
		{ name: "page.svelte", icon: FileCode },
		{ name: "config.json", icon: FileJson },
		{ name: "styles.css", icon: FileType },
		{ name: "utils.ts", icon: FileCode },
	];
</script>

<div
	bind:this={container}
	class="relative isolate w-full max-w-xl overflow-hidden px-2 py-6 [--beam:var(--color-neutral-700)] sm:px-8 dark:[--beam:var(--color-neutral-200)]"
>
	<div class="relative z-10 flex items-center justify-between gap-6">
		<div class="flex flex-col gap-7">
			{#each files as file, i}
				<div
					bind:this={sources[i]}
					class="bg-background flex w-36 items-center gap-3 rounded-lg border px-3 py-2.5"
				>
					<file.icon class="text-muted-foreground size-4 shrink-0" strokeWidth={1.5} />
					<span class="font-mono text-xs">{file.name}</span>
				</div>
			{/each}
		</div>
		<div class="flex flex-col items-center gap-3">
			<div
				bind:this={bundle}
				class="bg-background flex size-16 items-center justify-center rounded-2xl border"
			>
				<Package class="size-7" strokeWidth={1.25} />
			</div>
			<span class="text-muted-foreground font-mono text-xs">bundle.js</span>
		</div>
	</div>
	{#each sources as source, i}
		<AnimatedBeam
			class="motion-reduce:[&>path+path]:hidden"
			containerRef={container}
			fromRef={source}
			toRef={bundle}
			duration={4}
			delay={i * 0.5}
			curvature={(i - 1.5) * 30}
			startXOffset={72}
			endXOffset={-32}
			pathColor="var(--foreground)"
			pathOpacity={0.12}
			gradientStartColor="var(--beam)"
			gradientStopColor="var(--beam)"
		/>
	{/each}
</div>
