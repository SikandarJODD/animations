<script lang="ts">
	import { GridPattern } from "#lib/components/magic/grid-pattern/index.js";
	import { cn } from "#lib/utils.ts";
</script>

<div
	class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
	<GridPattern
		squares={[
			[4, 4],
			[5, 1],
			[8, 2],
			[5, 3],
			[5, 5],
			[10, 10],
			[12, 15],
			[15, 10],
			[10, 15],
			[15, 10],
			[10, 15],
			[15, 10],
		]}
		class={cn(
			"[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
		)}
	/>
</div>
