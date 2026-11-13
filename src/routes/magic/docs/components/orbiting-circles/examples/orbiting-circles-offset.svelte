<script lang="ts">
	import { OrbitingCircles } from "#lib/components/magic/orbiting-circles/index.js";
	import { Sun, Moon, CloudSun, Wind, Snowflake, Droplets } from "@lucide/svelte";

	const weather = [
		{
			icon: Moon,
			tint: "border-sky-200 bg-sky-50 text-sky-600 dark:border-sky-400/15 dark:bg-sky-400/5 dark:text-sky-400",
		},
		{
			icon: CloudSun,
			tint: "border-orange-200 bg-orange-50 text-orange-600 dark:border-orange-400/15 dark:bg-orange-400/5 dark:text-orange-400",
		},
		{
			icon: Wind,
			tint: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/15 dark:bg-emerald-400/5 dark:text-emerald-400",
		},
		{
			icon: Snowflake,
			tint: "border-sky-200 bg-sky-50 text-sky-600 dark:border-sky-400/15 dark:bg-sky-400/5 dark:text-sky-400",
		},
		{
			icon: Droplets,
			tint: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/15 dark:bg-emerald-400/5 dark:text-emerald-400",
		},
	];
</script>

<div
	class="relative h-88 w-full max-w-lg overflow-hidden rounded-lg border"
	role="img"
	aria-label="five weather icons orbit a sun on an offset circular path"
>
	<span class="text-muted-foreground absolute top-6 left-6 text-sm">weather</span>
	<div
		class="absolute inset-y-0 -right-8 flex w-96 items-center justify-center"
		aria-hidden="true"
	>
		<div class="bg-background flex size-20 items-center justify-center rounded-full border">
			<Sun class="size-9 text-orange-600 dark:text-orange-300" strokeWidth={1.2} />
		</div>
		{#each weather as item, i}
			<OrbitingCircles
				radius={132}
				duration={40}
				delay={i * -8}
				iconSize={42}
				path={i === 0}
				class={"border motion-reduce:[animation-play-state:paused] " + item.tint}
			>
				<item.icon class="size-5" strokeWidth={1.2} />
			</OrbitingCircles>
		{/each}
	</div>
</div>
