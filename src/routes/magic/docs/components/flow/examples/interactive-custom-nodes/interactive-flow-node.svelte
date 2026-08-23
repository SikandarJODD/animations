<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";
	import { cn } from "$lib/utils";

	type NodeState = "pending" | "success";

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
				"flex min-w-44 cursor-pointer items-start rounded-lg border p-3 text-left transition-colors",
				state === "pending" &&
					"border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100",
				state === "success" &&
					"border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100",
				active && "border-black dark:border-white"
			)}
			aria-pressed={active}
			onclick={onSelect}
		>
			<span>
				<span class="block text-sm font-medium">{title}</span>
				<span
					class={cn(
						"mt-0.5 block text-xs",
						state === "pending" && "text-amber-700 dark:text-amber-300",
						state === "success" && "text-emerald-700 dark:text-emerald-300"
					)}>{description}</span
				>
			</span>
		</button>
	</li>
{/snippet}
