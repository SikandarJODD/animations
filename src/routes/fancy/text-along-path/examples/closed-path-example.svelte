<script lang="ts">
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";
	import { cn } from "$lib/utils";

	const circlePath = "M 100 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0";
</script>

<div class="relative flex h-80 w-dvw items-center justify-center md:h-100">
	{#each [0, 90, 180, 270] as rotation, i}
		<AnimatedPathText
			path={circlePath}
			pathId="circle-path-{i}"
			svgClass={cn(
				"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ",
				{
					"rotate-0": rotation === 0,
					"rotate-90": rotation === 90,
					"rotate-180": rotation === 180,
					"-rotate-90": rotation === 270,
				}
			)}
			easingFunction={{
				calcMode: "spline",
				keyTimes: "0;1",
				keySplines: "0.762 0.002 0.253 0.999",
			}}
			viewBox="0 0 200 200"
			text="loading"
			textClass="text-[15px] font-serif"
			duration={2.5}
			textAnchor="start"
		></AnimatedPathText>
	{/each}
</div>
