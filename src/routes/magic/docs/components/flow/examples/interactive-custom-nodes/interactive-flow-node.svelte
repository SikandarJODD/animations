<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";
	import { cn } from "$lib/utils";

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
			class={cn(
				"bg-kumo-base ring-kumo-hairline flex min-w-44 items-start gap-3 rounded-lg p-3 text-left shadow-sm ring transition",
				state === "complete" && "text-kumo-subtle bg-orange-100",
				state === "current" && "bg-kumo-base text-kumo-foreground",
				state === "pending" && "bg-kumo-base text-kumo-subtle"
			)}
			class:ring-2={active}
			class:ring-primary={active}
			aria-pressed={active}
			onclick={onSelect}
		>
			<span>
				<span class="block text-sm font-medium">{title}</span>
				<span class="text-kumo-subtle mt-0.5 block text-xs">{description}</span>
			</span>
		</button>
	</li>
{/snippet}
