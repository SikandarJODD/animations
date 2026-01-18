<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { getOpenInContext, providers } from "./open-in-context.svelte.js";
	import ExternalLink from "@lucide/svelte/icons/external-link";
	import SciraIcon from "./SciraIcon.svelte";

	interface Props {
		class?: string;
	}

	let { ...restProps }: Props = $props();

	let context = getOpenInContext();

	let url = $derived.by(() => providers.scira.createUrl(context.query));
</script>

<DropdownMenu.Item {...restProps}>
	<a href={url} rel="noopener" target="_blank" class="flex w-full items-center gap-2">
		<span class="shrink-0">
			<SciraIcon size="1em" />
		</span>
		<span class="flex-1">{providers.scira.title}</span>
		<ExternalLink class="size-4 shrink-0" />
	</a>
</DropdownMenu.Item>
