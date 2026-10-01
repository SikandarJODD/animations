<script lang="ts">
	import * as Avatar from "$lib/components/ui/avatar/index.js";
</script>

<a
	class="group border-border/70 bg-muted/30 hover:bg-muted/70 flex items-center gap-3 rounded-lg border p-2 transition-colors"
	href="https://bhide.dev/?utm_source=sv-chanhdai&utm_medium=referral&utm_campaign=docs-sidebar"
	target="_blank"
	rel="noreferrer"
>
	<Avatar.Root class="size-9 rounded-lg p-0.5">
		<Avatar.Image src="https://github.com/SikandarJODD.png" alt="Bhide Svelte" />
		<Avatar.Fallback>BS</Avatar.Fallback>
	</Avatar.Root>

	<div class="min-w-0">
		<p class="text-foreground truncate text-sm font-medium">Bhide Svelte</p>
		<p class="text-muted-foreground truncate text-[11px]">I Love Svelte, Animations, Art.</p>
	</div>
</a>
