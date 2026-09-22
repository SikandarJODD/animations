<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export interface FloatingElementProps extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		depth?: number;
		class?: string;
	}
</script>

<script lang="ts">
	import { watch } from "runed";
	import { cn } from "$lib/utils";

	import { useFloatingContext } from "./floating-context.svelte";

	let { children, depth = 1, class: className, ...props }: FloatingElementProps = $props();

	let element = $state<HTMLDivElement | null>(null);
	const id = Math.random().toString(36).substring(2);
	const floatingContext = useFloatingContext();

	watch([() => element, () => depth], ([currentElement, currentDepth]) => {
		if (!currentElement || !floatingContext) {
			return;
		}

		floatingContext.registerElement(id, currentElement, currentDepth);

		return () => floatingContext.unregisterElement(id);
	});
</script>

<div bind:this={element} class={cn("absolute will-change-transform", className)} {...props}>
	{@render children?.()}
</div>
