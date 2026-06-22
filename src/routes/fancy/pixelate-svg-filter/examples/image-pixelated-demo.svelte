<script lang="ts">
	import SvelteLogo from "$lib/assets/favicon.svg";
	import PixelateSvgFilter from "$lib/components/fancy/pixelate-svg-filter/pixelate-svg-filter.svelte";

	let pixelSize = $state(16);
</script>

<div>
	<div class="mb-1 flex items-center justify-between gap-4">
		<input
			type="range"
			name="pixel-size"
			id="pixel-size"
			min="0"
			max="40"
			bind:value={pixelSize}
		/>
		<span class="font-mono text-xs">{pixelSize}px</span>
	</div>
	{#if pixelSize > 1}
		<PixelateSvgFilter id="img-filter" size={pixelSize} crossLayers />
	{/if}
	<img
		src="https://i.pinimg.com/1200x/9c/5b/cb/9c5bcbb8f7f8daf40fef136246fc0430.jpg"
		alt="Svelte Logo"
		style="filter: url(#img-filter);"
		class="h-120"
	/>
	<div class="mt-2 flex items-center gap-1 font-mono justify-end text-xs">
		<span class='text-muted-foreground '>Credits: </span>
		<a href="https://i.pinimg.com/1200x/9c/5b/cb/9c5bcbb8f7f8daf40fef136246fc0430.jpg" target="_blank" rel="noopener noreferrer" class='text-red-500 bg-red-50 dark:bg-red-900/30'>Pinterest</a>
	</div>
</div>

<style>
	input[type="range"] {
		background: #ddd;
		outline: none;
		opacity: 0.5;
		transition: opacity 0.2s;
	}
</style>
