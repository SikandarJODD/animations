<script lang="ts">
	import * as Flow from '$lib/components/magic/flow';

	type RenderArgs = {
		props: Record<string, unknown>;
	};
</script>

<Flow.Root>
	<Flow.Node>Load balancer</Flow.Node>
	<Flow.Node render={workerNode}></Flow.Node>
	<Flow.Parallel>
		<Flow.Node>DATABASE</Flow.Node>
		<Flow.Node>OTHER_SERVICE</Flow.Node>
	</Flow.Parallel>
</Flow.Root>

{#snippet workerNode({ props }: RenderArgs)}
	<li {...props} class="bg-kumo-overlay ring-kumo-hairline rounded-lg shadow-none ring">
		<Flow.Anchor type="end" render={workerLabel}></Flow.Anchor>
		<Flow.Anchor type="start" render={bindingsLabel}></Flow.Anchor>
	</li>
{/snippet}

{#snippet workerLabel({ props }: RenderArgs)}
	<div {...props} class="text-kumo-subtle flex h-10 items-center px-2.5">my-worker</div>
{/snippet}

{#snippet bindingsLabel({ props }: RenderArgs)}
	<div
		{...props}
		class="bg-kumo-base ring-kumo-hairline m-1.5 mt-0 rounded px-2 py-1.5 shadow ring"
	>
		Bindings
		<span class="text-kumo-subtle ml-3 inline-block w-5">2</span>
	</div>
{/snippet}
