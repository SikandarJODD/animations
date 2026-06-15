<script>
	import { HexagonPattern } from "$lib/components/magic/hexagon-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<HexagonPattern
		hexagons={[
			[1, 1],
			[4, 4],
			[2, 2],
			[3, 4],
			[5, 4],
			[8, 2],
			[6, 3],
			[8, 5],
			[10, 10],
		]}
		class={cn(
			"mask-[radial-gradient(420px_circle_at_center,white,transparent)]",
			"inset-0 skew-y-6"
		)}
	/>
</div>
