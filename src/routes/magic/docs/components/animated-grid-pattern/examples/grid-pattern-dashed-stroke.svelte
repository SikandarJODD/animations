<script>
	import { GridPattern } from "#lib/components/magic/grid-pattern/index.js";
</script>

<div
	class="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20"
>
	<GridPattern
		width={30}
		height={30}
		x={-1}
		y={-1}
		strokeDashArray={"4 2"}
		class="mask-[radial-gradient(300px_circle_at_center,white,transparent)]"
	/>
</div>
