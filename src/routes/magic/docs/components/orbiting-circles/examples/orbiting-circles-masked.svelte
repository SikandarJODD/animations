<script lang="ts">
	import { OrbitingCircles } from "#lib/components/magic/orbiting-circles/index.js";
	import { Globe, Radio, Satellite } from "@lucide/svelte";

	const icons = [Globe, Radio, Satellite];
</script>

<div
	class="relative h-80 w-full max-w-md overflow-hidden"
	role="img"
	aria-label="three satellites orbit a shared center with a fading lower edge"
>
	<div
		class="absolute inset-0 flex items-center justify-center mask-[linear-gradient(to_bottom,black_65%,transparent_100%)]"
		aria-hidden="true"
	>
		<div class="bg-background flex size-16 items-center justify-center rounded-full border">
			<Globe class="size-7" strokeWidth={1} />
		</div>
		{#each icons as Icon, i}
			<OrbitingCircles
				radius={112}
				duration={30}
				delay={i * -10}
				iconSize={38}
				path={i === 0}
				class="bg-background border motion-reduce:[animation-play-state:paused]"
			>
				<Icon class="size-4" strokeWidth={1.25} />
			</OrbitingCircles>
		{/each}
	</div>
</div>
