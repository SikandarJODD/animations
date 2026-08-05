<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";

	type NodeState = "complete" | "current" | "pending";

	type RenderArgs = {
		props: Record<string, unknown>;
	};

	interface Props {
		title: string;
		description: string;
		state?: NodeState;
		active?: boolean;
		onSelect?: () => void;
	}

	let { title, description, state = "pending", active = false, onSelect }: Props = $props();
</script>

<Flow.Node render={node}></Flow.Node>

{#snippet node({ props }: RenderArgs)}
	<li {...props} class="list-none">
		<button
			type="button"
			class="bg-kumo-base ring-kumo-hairline flex min-w-44 items-start gap-3 rounded-lg p-3 text-left shadow-sm ring transition"
			class:ring-2={active}
			class:ring-primary={active}
			aria-pressed={active}
			onclick={onSelect}
		>
			<span
				class="mt-1 size-2.5 shrink-0 rounded-full"
				class:bg-emerald-500={state === "complete"}
				class:bg-primary={state === "current"}
				class:bg-kumo-inactive={state === "pending"}
			></span>
			<span>
				<span class="block text-sm font-medium">{title}</span>
				<span class="text-kumo-subtle mt-0.5 block text-xs">{description}</span>
			</span>
		</button>
	</li>
{/snippet}
