<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';
</script>

<Flow.Root>
	<Flow.Parallel>
		<Flow.Node>HTTP Trigger</Flow.Node>
		<Flow.Node>Cron Trigger</Flow.Node>
	</Flow.Parallel>
	<Flow.Node>Process Request</Flow.Node>
	<Flow.Parallel>
		<Flow.Node>Log Analytics</Flow.Node>
		<Flow.Node>Update Cache</Flow.Node>
		<Flow.Node>Send Notification</Flow.Node>
	</Flow.Parallel>
	<Flow.Node>Complete</Flow.Node>
</Flow.Root>
