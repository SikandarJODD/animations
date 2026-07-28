<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';

	type FlowNodeRenderArgs = {
		props: Record<string, unknown>;
	};
</script>

<Flow.Root align="center">
	<Flow.Node render={line}></Flow.Node>
	<Flow.Node>my-worker</Flow.Node>
	<Flow.Node render={tallerNode}></Flow.Node>
</Flow.Root>

{#snippet line({ props }: FlowNodeRenderArgs)}
	<li {...props} class="bg-kumo-hairline size-4 rounded-full"></li>
{/snippet}

{#snippet tallerNode({ props }: FlowNodeRenderArgs)}
	<li {...props} class="bg-kumo-base ring-kumo-hairline rounded-md px-3 py-6 shadow ring">
		Taller node
	</li>
{/snippet}
