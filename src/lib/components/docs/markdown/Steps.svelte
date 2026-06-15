<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
</script>

<div
	class={cn("border-border relative mb-12 ml-4 border-l [counter-reset:step]", className)}
	{...rest}
>
	{@render children?.()}
</div>
