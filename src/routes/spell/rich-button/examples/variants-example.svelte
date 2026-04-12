<script lang="ts">
	import { RichButton, type RichButtonColor } from "$lib/components/spell/rich-button";

	const colors: RichButtonColor[] = [
		"default",
		"blue",
		"purple",
		"pink",
		"red",
		"orange",
		"yellow",
		"green",
		"teal",
		"cyan",
		"indigo",
		"violet",
		"rose",
		"amber",
		"lime",
		"sky",
		"slate",
		"gray",
		"zinc",
		"neutral",
		"stone",
		"fuchsia",
		"emerald",
	];
</script>

<div class="flex flex-wrap items-center justify-center gap-3 p-8">
	{#each colors as color}
		<RichButton {color}>
			{color.charAt(0).toUpperCase() + color.slice(1)}
		</RichButton>
	{/each}
</div>
