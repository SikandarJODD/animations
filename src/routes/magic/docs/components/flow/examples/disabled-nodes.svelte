<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';
</script>

<Flow.Root>
	<Flow.Node>Request</Flow.Node>
	<Flow.Parallel>
		<Flow.Node>Primary Handler</Flow.Node>
		<Flow.Node disabled>Backup Handler (disabled)</Flow.Node>
	</Flow.Parallel>
	<Flow.Node>Response</Flow.Node>
</Flow.Root>
