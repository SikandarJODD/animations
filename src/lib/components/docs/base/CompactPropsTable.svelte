<script lang="ts" module>
	import type { PropDef, PropsTable } from "$lib/types/structure";

	export type CompactPropsTableProps = {
		data: PropsTable | PropDef[];
		class?: string;
	};
</script>

<script lang="ts">
	import { H3 } from "$lib/components/docs/markdown";
	import { cn } from "$lib/utils";

	let { data, class: className }: CompactPropsTableProps = $props();

	const isPropsTable = (value: PropsTable | PropDef[]): value is PropsTable => {
		return "props" in value;
	};

	let tableData = $derived(isPropsTable(data) ? data.props : data);
</script>

{#if isPropsTable(data)}
	<div class="space-y-2">
		{#if data.name}
			<H3 id={data.name} class="mt-0 text-lg font-semibold">
				{data.name}
			</H3>
		{/if}
		{#if data.desc}
			<p class="text-muted-foreground m-0 max-w-3xl text-sm leading-relaxed">
				{data.desc}
			</p>
		{/if}
	</div>
{/if}

<div class={cn("border-border overflow-hidden rounded-lg border", className)}>
	<div class="overflow-x-auto">
		<table class="w-full min-w-[780px] table-fixed text-left text-xs sm:text-sm">
			<colgroup>
				<col class="w-[20%]" />
				<col class="w-[24%]" />
				<col class="w-[20%]" />
				<col class="w-[32%]" />
			</colgroup>
			<thead class="bg-muted/40 text-muted-foreground border-b">
				<tr>
					<th class="px-3 py-2 font-medium">Prop</th>
					<th class="px-3 py-2 font-medium">Type</th>
					<th class="px-3 py-2 font-medium">Default</th>
					<th class="py-2 pl-2 font-medium">Description</th>
				</tr>
			</thead>
			<tbody class="divide-border divide-y">
				{#each tableData as row (row.name ?? row.type)}
					<tr class="align-top">
						<td class="px-3 py-3">
							<code
								class="bg-muted/70 text-foreground inline-block max-w-full rounded-md px-1.5 py-0.5 font-mono leading-5 [overflow-wrap:anywhere] break-words whitespace-pre-wrap"
							>
								{row.name}
							</code>
						</td>
						<td class="px-3 py-3">
							<code
								class="bg-muted/50 text-muted-foreground inline-block max-w-full rounded-md px-1.5 py-0.5 font-mono text-xs leading-5 [overflow-wrap:anywhere] break-words whitespace-pre-wrap"
							>
								{row.type}
							</code>
						</td>
						<td class="px-3 py-3">
							<code
								class="bg-muted/50 text-muted-foreground inline-block max-w-full rounded-md px-1.5 py-0.5 font-mono text-xs leading-5 [overflow-wrap:anywhere] break-words whitespace-pre-wrap"
							>
								{row.required ? "required" : (row.default ?? "-")}
							</code>
						</td>
						<td
							class="text-muted-foreground py-3 pr-3 pl-2 leading-5 [overflow-wrap:anywhere] break-words"
						>
							{row.description ?? "-"}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
