<script lang="ts">
	import { DotPattern } from "#lib/components/magic/dot-pattern/index.js";
	import { cn } from "#lib/utils.js";
</script>

<div
	class="bg-background relative flex h-80 w-70 items-center justify-center overflow-hidden rounded-lg border p-20 md:min-w-2xl"
>
	<DotPattern
		width={20}
		height={20}
		cx={1}
		cy={1}
		cr={1}
		class={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]")}
	/>
</div>
