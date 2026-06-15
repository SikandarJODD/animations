<script lang="ts">
	import { HexagonPattern } from "$lib/components/magic/hexagon-pattern";
	import { cn } from "$lib/utils";
</script>

<div
	class="bg-background relative flex h-125 w-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
	<HexagonPattern
		radius={40}
		x={-1}
		y={-1}
		className={cn(
			"mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
		)}
	/>
</div>
