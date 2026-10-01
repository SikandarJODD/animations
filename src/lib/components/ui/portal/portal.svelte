<script lang="ts">
	import { Portal } from "bits-ui";
	import { cn } from "$lib/utils";
	import { onMount } from "svelte";
	import type { Snippet } from "svelte";

	type Props = {
		class?: string;
		children?: Snippet;
	};

	let { class: className, children }: Props = $props();

	let mounted = $state(false);

	onMount(() => {
		mounted = true;

		const originalOverflow = window.getComputedStyle(
			document.body
		).overflow;
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth;
		const originalPaddingRight = document.body.style.paddingRight;

		document.body.style.overflow = "hidden";
		if (scrollbarWidth > 0) {
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		}

		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.paddingRight = originalPaddingRight;
		};
	});
</script>

{#if mounted}
	<Portal to="body">
		<div class={cn("fixed inset-0 isolate z-40 flex flex-col", className)}>
			{@render children?.()}
		</div>
	</Portal>
{/if}
