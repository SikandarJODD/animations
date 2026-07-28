<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';
</script>

<Flow.Root junctionMarker='none'>
	<Flow.Node>Start</Flow.Node>
	<Flow.Parallel>
			<Flow.Node>Branch A1</Flow.Node>
			<Flow.Node>Branch A2</Flow.Node>
	</Flow.Parallel>
	<Flow.Node>End</Flow.Node>
</Flow.Root>
