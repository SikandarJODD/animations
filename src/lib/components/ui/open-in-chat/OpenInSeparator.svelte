<script lang="ts">
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.js";

	interface Props {
		class?: string;
	}

	let { ...restProps }: Props = $props();
</script>

<DropdownMenu.Separator {...restProps} />
