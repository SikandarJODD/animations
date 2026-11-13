<script lang="ts">
	import { GridPattern } from "#lib/components/magic/grid-pattern/index.js";
</script>

<div
	class="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
	<GridPattern
		width={20}
		height={20}
		x={-1}
		y={-1}
		class="mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
	/>
</div>
