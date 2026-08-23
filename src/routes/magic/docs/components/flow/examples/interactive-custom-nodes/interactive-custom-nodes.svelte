<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";
	import InteractiveFlowNode from "./interactive-flow-node.svelte";

	let selected = $state("Upload files");
</script>

<div class="w-full space-y-5">
	<div class="overflow-auto px-2 py-2">
		<Flow.Root canvas={false} align="center">
			<InteractiveFlowNode
				title="Upload files"
				description="Completed"
				state="success"
				active={selected === "Upload files"}
				onSelect={() => (selected = "Upload files")}
			/>
			<InteractiveFlowNode
				title="Process files"
				description="Completed"
				state="success"
				active={selected === "Process files"}
				onSelect={() => (selected = "Process files")}
			/>
			<InteractiveFlowNode
				title="Generate report"
				description="Pending"
				active={selected === "Generate report"}
				onSelect={() => (selected = "Generate report")}
			/>
		</Flow.Root>
	</div>

	<p class="text-kumo-subtle text-center text-sm">Selected node: {selected}</p>
</div>
