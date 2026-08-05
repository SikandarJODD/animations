<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";

	let overflow = $state({ x: false, y: false });

	function handleOverflowChange(next: { x: boolean; y: boolean }) {
		overflow = next;
	}
</script>

<div class="w-full space-y-3">
	<p class="text-kumo-subtle text-sm">
		Horizontal overflow: {overflow.x ? "Yes" : "No"} · Vertical overflow: {overflow.y
			? "Yes"
			: "No"}
	</p>

	<Flow.Root
		class="border-kumo-hairline h-48 w-full rounded-lg border"
		onOverflowChange={handleOverflowChange}
	>
		<Flow.Node>Start</Flow.Node>
		<Flow.Node>Authenticate</Flow.Node>
		<Flow.Node>Validate</Flow.Node>
		<Flow.Node>Transform</Flow.Node>
		<Flow.Node>Process</Flow.Node>
		<Flow.Node>Store</Flow.Node>
		<Flow.Node>Notify</Flow.Node>
		<Flow.Node>Complete</Flow.Node>
	</Flow.Root>
</div>
