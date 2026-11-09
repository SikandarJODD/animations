<script lang="ts">
	import { DotPattern } from "#lib/components/magic/dot-pattern/index.js";
	import { cn } from "#lib/utils.js";
</script>

<div
	class="relative flex h-125 w-70 flex-col items-center justify-center overflow-hidden md:min-w-2xl"
>
	<DotPattern
		glow={true}
		class={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")}
	/>
</div>
