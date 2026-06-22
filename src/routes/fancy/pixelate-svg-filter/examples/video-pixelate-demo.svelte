<script lang="ts">
	import { PixelateSvgFilter } from "$lib/components/fancy/pixelate-svg-filter";
	let mousePosition = $state({ x: 0, y: 0 });
	// Derived Pixel Size based on Mouse X Position
	let updateMousePosition = (event: MouseEvent) => {
		mousePosition.x = event.clientX;
		mousePosition.y = event.clientY;
	};
	let pixelSize = $derived(Math.min(Math.max(mousePosition.x / 100, 1), 64));
	$inspect(pixelSize, "pixelSize");
	$inspect(mousePosition, "mousePosition");
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative flex h-dvh w-dvw flex-col items-center justify-center gap-4 bg-white dark:bg-black"
	onmousemove={updateMousePosition}
>
	<PixelateSvgFilter id="pixelate-filter" size={pixelSize} crossLayers />
	<div
		id="image-container"
		class="relative h-1/2 w-1/2 overflow-hidden text-white md:w-1/3"
		style="filter: url(#pixelate-filter)"
	>
		<video
			src="https://cdn.cosmos.so/96ae0b34-289d-489d-94a1-c68925ddd3a9.mp4"
			class="absolute inset-0 h-full w-full object-cover"
			autoPlay
			muted
			playsInline
			loop
		></video>
	</div>
</div>
