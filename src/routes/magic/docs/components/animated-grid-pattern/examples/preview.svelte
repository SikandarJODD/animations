<script lang="ts">
	import { AnimatedGridPattern } from "#lib/components/magic/animated-grid-pattern/index.js";
	import { cn } from "#lib/utils.ts";
</script>

<div
	class="bg-background relative flex h-125 w-70 items-center justify-center overflow-hidden rounded-lg border md:min-w-2xl md:p-20"
>
	<AnimatedGridPattern
		numSquares={30}
		maxOpacity={0.1}
		duration={3}
		repeatDelay={1}
		class={cn(
			"mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
			"inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
		)}
	/>
</div>
