<script lang="ts">
	import DottedMap from "$lib/components/magic/dotted-map/dotted-map.svelte";

	const markers = [
		{ lat: 37.7749, lng: -122.4194, size: 0.4 },
		{ lat: 51.5072, lng: -0.1276, size: 0.4 },
		{ lat: 28.6139, lng: 77.209, size: 0.4 },
		{ lat: 1.3521, lng: 103.8198, size: 0.4 },
		{ lat: -33.8688, lng: 151.2093, size: 0.4 },
	];
</script>

<div class="relative flex min-h-80 items-center justify-center overflow-hidden">
	<div class="relative mx-auto h-72 w-full max-w-md">
		<DottedMap {markers} dotColor="#691714" markerColor="#FF7614" />
	</div>
</div>
