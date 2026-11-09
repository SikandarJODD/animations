<script lang="ts">
	import { DotPattern } from "#lib/components/magic/dot-pattern/index.js";
	import { cn } from "#lib/utils.ts";
</script>

<div
	class="bg-background relative flex h-125 w-70 flex-col items-center justify-center overflow-hidden rounded-lg border md:min-w-2xl"
>
	<DotPattern class={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")} />
</div>
