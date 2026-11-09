<script lang="ts">
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";

	interface Props {
		class?: string;
		children?: import("svelte").Snippet;
		onclick?: () => void;
	}

	let { children, ...restProps }: Props = $props();
</script>

<DropdownMenu.Item {...restProps}>
	{@render children?.()}
</DropdownMenu.Item>
