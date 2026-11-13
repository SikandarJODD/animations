<script>
	import { ProgressiveBlur } from "#lib/components/magic/progressive-blur/index.js";
	import { ScrollArea } from "#lib/components/ui/scroll-area/index.js";
</script>

<div class="relative w-full rounded-xl border">
	<ScrollArea fadeEffect={false} class="relative h-100 overflow-hidden">
		<div class="flex flex-col gap-2 p-4">
			{#each { length: 20 } as _, index}
				<div class="bg-card flex h-20 w-full items-center justify-center rounded-xl border">
					{index}
				</div>
			{/each}
		</div>
		<ProgressiveBlur position="bottom" height="40%" />
	</ScrollArea>
</div>
