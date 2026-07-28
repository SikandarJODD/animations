<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';
</script>

<Flow.Root orientation="vertical" align='center'>
	<Flow.Node>Start</Flow.Node>
	<Flow.Parallel>
		<Flow.Node>Branch A</Flow.Node>
		<Flow.Node>Branch B</Flow.Node>
		<Flow.Node>Branch C</Flow.Node>
	</Flow.Parallel>
	<Flow.Node>End</Flow.Node>
</Flow.Root>
