<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

	interface Props {
		class?: string;
		children?: import("svelte").Snippet;
	}

	let { children, ...restProps }: Props = $props();
</script>

<DropdownMenu.Label {...restProps}>
	{@render children?.()}
</DropdownMenu.Label>
