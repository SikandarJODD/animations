<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { createOpenInContext } from "./open-in-context.svelte.js";
	import { watch } from "runed";

	interface Props {
		query: string;
		children?: import("svelte").Snippet;
	}

	let { query, children }: Props = $props();

	// Create context when component is initialized
	let contextInstance = createOpenInContext(query);

	// Update context when query prop changes using watch
	watch(
		() => query,
		() => {
			contextInstance.query = query;
		}
	);
</script>

<DropdownMenu.Root>
	{@render children?.()}
</DropdownMenu.Root>
