<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';
</script>

<Flow.Root>
	<Flow.Parallel>
		<Flow.List>
			<Flow.Node>Client Users</Flow.Node>
			<Flow.Node>Engineering Team Access</Flow.Node>
		</Flow.List>
		<Flow.List>
			<Flow.Parallel>
				<Flow.Node>All Authenticated Users</Flow.Node>
				<Flow.Node>Client Users</Flow.Node>
				<Flow.Node>Site Users</Flow.Node>
			</Flow.Parallel>
			<Flow.Node>Contractor Access</Flow.Node>
		</Flow.List>
	</Flow.Parallel>
	<Flow.Node>Destinations</Flow.Node>
</Flow.Root>
