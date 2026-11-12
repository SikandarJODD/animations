<script lang="ts">
	import { Badge } from "#lib/components/ui/badge/index.js";
	import { cn } from "#lib/utils.js";

	type PackageBadgesProps = {
		packages?: string[];
		class?: string;
	};

	let { packages = [], class: className }: PackageBadgesProps = $props();
</script>

{#if packages.length > 0}
	<div class={cn("mt-4 flex flex-wrap gap-2", className)} data-toc-ignore="true">
		{#each packages as pkg (pkg)}
			<Badge
				variant="secondary"
				class="border-border/60 bg-muted/60 text-muted-foreground rounded-full px-2 py-1 font-mono text-xs leading-none"
			>
				{pkg}
			</Badge>
		{/each}
	</div>
{/if}
