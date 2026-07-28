<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';
</script>

<Flow.Root>
	<Flow.Node>Start</Flow.Node>
	<Flow.Parallel align="end">
		<Flow.Node>Short</Flow.Node>
		<Flow.Node>Medium Length</Flow.Node>
		<Flow.Node>Very Long Node Name</Flow.Node>
	</Flow.Parallel>
	<Flow.Node>End</Flow.Node>
</Flow.Root>
