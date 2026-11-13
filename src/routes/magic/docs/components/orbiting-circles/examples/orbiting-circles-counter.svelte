<script lang="ts">
	import { OrbitingCircles } from "#lib/components/magic/orbiting-circles/index.js";
	import { Cpu, CodeXml, Terminal, Database, Cloud } from "@lucide/svelte";

	const inner = [
		{
			icon: CodeXml,
			tint: "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-400/15 dark:bg-emerald-400/5 dark:text-emerald-400",
		},
		{
			icon: Terminal,
			tint: "border-orange-200 bg-orange-50 text-orange-600 dark:border-orange-400/15 dark:bg-orange-400/5 dark:text-orange-400",
		},
	];
	const outer = [
		{
			icon: Database,
			tint: "border-sky-200 bg-sky-50 text-sky-600 dark:border-sky-400/15 dark:bg-sky-400/5 dark:text-sky-400",
		},
		{
			icon: Cloud,
			tint: "border-rose-200 bg-rose-50 text-rose-600 dark:border-rose-400/15 dark:bg-rose-400/5 dark:text-rose-400",
		},
	];
</script>

<div
	class="relative flex h-88 w-full max-w-md items-center justify-center overflow-hidden"
	role="img"
	aria-label="code and terminal icons orbit a processor opposite to database and cloud icons"
>
	<div
		class="bg-background flex size-12 items-center justify-center rounded-full border"
		aria-hidden="true"
	>
		<Cpu class="size-5" strokeWidth={1.2} />
	</div>
	{#each inner as item, i}
		<OrbitingCircles
			radius={68}
			duration={22}
			delay={i * -11}
			angle={90}
			iconSize={38}
			path={i === 0}
			class={"border motion-reduce:[animation-play-state:paused] " + item.tint}
		>
			<item.icon class="size-4.5" strokeWidth={1.2} />
		</OrbitingCircles>
	{/each}
	{#each outer as item, i}
		<OrbitingCircles
			radius={136}
			duration={34}
			reverse
			delay={i * -17}
			angle={220}
			iconSize={42}
			path={i === 0}
			class={"border motion-reduce:[animation-play-state:paused] " + item.tint}
		>
			<item.icon class="size-5" strokeWidth={1.2} />
		</OrbitingCircles>
	{/each}
</div>
