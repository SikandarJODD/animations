<script>
	import { PixelateSvgFilter } from "$lib/components/fancy/pixelate-svg-filter";
	import { Button } from "$lib/components/ui/button";
	import { fade } from "svelte/transition";
	let isBlur = $state(false);
	let updateBlur = () => {
		isBlur = !isBlur;
	};
</script>

{#if isBlur}
	<PixelateSvgFilter id="pixelate-filter" />
{/if}
<Button
	variant="blue"
	class="absolute top-3 left-3 cursor-pointer rounded-full"
	size="sm"
	onclick={updateBlur}
>
	Make it {isBlur ? "Normal" : "Pixelated"}
</Button>

{#key isBlur}
	<div
		in:fade|global
		style="filter: {isBlur ? 'url(#pixelate-filter)' : 'none'}"
		class="text-4xl"
	>
		filter will be applied here
	</div>
{/key}
