<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";
</script>

<div class="grid w-full gap-8 md:grid-cols-2">
	<div class="flex flex-col items-center justify-center gap-5">
		<p class="text-kumo-subtle text-center text-sm">Square markers</p>
		<div>
			<Flow.Root canvas={false} junctionMarker="square">
				<Flow.Node>Start</Flow.Node>
				<Flow.Parallel>
					<Flow.Node>Branch A</Flow.Node>
					<Flow.Node>Branch B</Flow.Node>
				</Flow.Parallel>
				<Flow.Node>End</Flow.Node>
			</Flow.Root>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center gap-5">
		<p class="text-kumo-subtle text-center text-sm">No markers</p>
		<Flow.Root canvas={false} junctionMarker="none">
			<Flow.Node>Start</Flow.Node>
			<Flow.Parallel>
				<Flow.Node>Branch A</Flow.Node>
				<Flow.Node>Branch B</Flow.Node>
			</Flow.Parallel>
			<Flow.Node>End</Flow.Node>
		</Flow.Root>
	</div>
</div>
