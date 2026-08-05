<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";
</script>

<div class="grid w-full gap-8 md:grid-cols-2">
	<div class="space-y-3">
		<p class="text-kumo-subtle text-center text-sm">Start aligned</p>
		<Flow.Root canvas={false}>
			<Flow.Node>Start</Flow.Node>
			<Flow.Parallel align="start">
				<Flow.Node>Short</Flow.Node>
				<Flow.Node>Medium branch</Flow.Node>
				<Flow.Node>Longer branch label</Flow.Node>
			</Flow.Parallel>
			<Flow.Node>End</Flow.Node>
		</Flow.Root>
	</div>

	<div class="space-y-3">
		<p class="text-kumo-subtle text-center text-sm">End aligned</p>
		<Flow.Root canvas={false}>
			<Flow.Node>Start</Flow.Node>
			<Flow.Parallel align="end">
				<Flow.Node>Short</Flow.Node>
				<Flow.Node>Medium branch</Flow.Node>
				<Flow.Node>Longer branch label</Flow.Node>
			</Flow.Parallel>
			<Flow.Node>End</Flow.Node>
		</Flow.Root>
	</div>
</div>
