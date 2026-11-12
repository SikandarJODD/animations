<script lang="ts">
	import DocNavButton from "./DocsNavButton.svelte";

	export type DocNavLink = {
		title: string;
		href: string;
		desc?: string;
	};

	let {
		previous,
		next,
	}: {
		previous?: DocNavLink | null;
		next?: DocNavLink | null;
	} = $props();
</script>

<nav class="border-border mt-16 border-t pt-8">
	<div class="grid gap-4 sm:grid-cols-2">
		{#if previous}
			<DocNavButton label={previous.desc || "Previous"} {...previous} />
		{/if}

		{#if next}
			<DocNavButton
				label={next.desc || "Next"}
				align="right"
				forceSecondColumn={!previous}
				{...next}
			/>
		{/if}
	</div>
</nav>
