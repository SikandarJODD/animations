<script lang="ts">
	import { DollarIcon } from "$icons";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Card from "$lib/components/ui/card/index.js";
	import { github_repo } from "$lib/config/repo";
</script>

<Card.Root
	class="dark:bg-secondary gap-2 border border-emerald-200 bg-emerald-50/30 py-4 ring-0 dark:border-transparent"
>
	<Card.Header class="px-4">
		<Card.Title class="text-sm">Support My Work</Card.Title>
		<Card.Description class="text-xs">
			It would help me build and maintain open-source projects for the Svelte community.
		</Card.Description>
	</Card.Header>
	<Card.Content class="mt-2 border-none px-4!">
		<Button
			class="w-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200/70 dark:bg-emerald-500 dark:text-emerald-800 dark:hover:bg-emerald-500/90"
			size="sm"
			href="https://github.com/sponsors/{github_repo.owner}"
			target="_blank"
		>
			<DollarIcon class="dark:text-primary-foreground mr-1 text-emerald-400" />
			GitHub Sponsors
		</Button>
	</Card.Content>
</Card.Root>
