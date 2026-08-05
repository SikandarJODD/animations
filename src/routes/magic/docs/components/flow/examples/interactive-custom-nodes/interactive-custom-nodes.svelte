<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";
	import InteractiveFlowNode from "./interactive-flow-node.svelte";

	let selected = $state("Review");
</script>

<div class="w-full space-y-5">
	<div class="overflow-auto px-2 py-2">
		<Flow.Root canvas={false} align="center">
			<InteractiveFlowNode
				title="Draft"
				description="Content prepared"
				state="complete"
				active={selected === "Draft"}
				onSelect={() => (selected = "Draft")}
			/>
			<InteractiveFlowNode
				title="Review"
				description="Waiting for approval"
				state="current"
				active={selected === "Review"}
				onSelect={() => (selected = "Review")}
			/>
			<InteractiveFlowNode
				title="Publish"
				description="Ready for release"
				active={selected === "Publish"}
				onSelect={() => (selected = "Publish")}
			/>
		</Flow.Root>
	</div>

	<p class="text-kumo-subtle text-center text-sm">Selected node: {selected}</p>
</div>
