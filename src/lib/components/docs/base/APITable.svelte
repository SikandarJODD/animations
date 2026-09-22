<script lang="ts">
	import Table from "../markdown/Table.svelte";
	import Thead from "../markdown/Thead.svelte";
	import Tbody from "../markdown/Tbody.svelte";
	import Tr from "../markdown/Tr.svelte";
	import Th from "../markdown/Th.svelte";
	import Td from "../markdown/Td.svelte";
	import InfoPopover from "./InfoPopover.svelte";
	import { cn } from "$lib/utils";
	import { H3 } from "../markdown";
	import { page } from "$app/state";
	import { watch } from "runed";

	type PropDef = {
		name?: string;
		type: string;
		default?: string;
		required?: boolean;
		description?: string;
	};

	type PropsTable = {
		name?: string;
		desc?: string;
		props: PropDef[];
	};

	let {
		data,
	}: {
		data: PropsTable | PropDef[];
	} = $props();

	const isPropsTable = (data: PropsTable | PropDef[]): data is PropsTable => {
		return "props" in data;
	};

	let tableData = $derived(isPropsTable(data) ? data.props : data);
	let tableHeaders = $state(["Name", "Type", "Default", "Description"]);
	let tableKeys = $state(["name", "type", "default", "description"]);

	let doesIncludeSpell: boolean = $derived.by(() => {
		let url = page.url.pathname;
		return url.includes("spell");
	});

	watch(
		() => doesIncludeSpell,
		() => {
			if (doesIncludeSpell) {
				tableHeaders = ["Prop", "Type", "Default"];
				tableKeys = ["name", "type", "default"];
			} else {
				tableHeaders = ["Name", "Type", "Default", "Description"];
				tableKeys = ["name", "type", "default", "description"];
				// reset table data to original if it was modified for spell pages
			}
		}
	);
</script>

{#if isPropsTable(data)}
	<div class="space-y-2">
		{#if data.name}
			<H3 id={data.name} class="mt-0 text-xl font-semibold">
				{data.name}
			</H3>
		{/if}
		{#if data.desc}
			<p class="text-muted-foreground m-0 leading-relaxed">
				{data.desc}
			</p>
		{/if}
	</div>
{/if}

<Table>
	<Thead>
		<Tr>
			{#each tableHeaders as header (header)}
				<Th>{header}</Th>
			{/each}
		</Tr>
	</Thead>
	<Tbody>
		{#each tableData as row, i (i)}
			<Tr>
				{#each tableKeys as key, index (key)}
					<Td>
						<span class="inline-flex items-center gap-1">
							<code class={cn("text-muted-foreground px-1 font-mono text-sm ")}>
								{key === "default" && row.required
									? "required"
									: (row as any)[key] || ""}
							</code>
							{#if index === 0 && row.description}
								<InfoPopover description={row.description} />
							{/if}
						</span>
					</Td>
				{/each}
			</Tr>
		{/each}
	</Tbody>
</Table>
