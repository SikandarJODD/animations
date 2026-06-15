# Dotted Map

An interactive world map visualization with customizable markers and styling.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dotted-map.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dotted-map.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/dotted-map.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/dotted-map.json
```

## Preview

```svelte
<script lang="ts">
	import DottedMap from "$lib/components/magic/dotted-map/dotted-map.svelte";

	const markers = [
		{
			lat: 40.7128,
			lng: -74.006,
			size: 0.3,
		}, // New York
		{
			lat: 34.0522,
			lng: -118.2437,
			size: 0.3,
		}, // Los Angeles
		{
			lat: 51.5074,
			lng: -0.1278,
			size: 0.3,
		}, // London
		{
			lat: -33.8688,
			lng: 151.2093,
			size: 0.3,
		}, // Sydney
		{
			lat: 48.8566,
			lng: 2.3522,
			size: 0.3,
		}, // Paris
		{
			lat: 35.6762,
			lng: 139.6503,
			size: 0.3,
		}, // Tokyo
		{
			lat: 55.7558,
			lng: 37.6176,
			size: 0.3,
		}, // Moscow
		{
			lat: 39.9042,
			lng: 116.4074,
			size: 0.3,
		}, // Beijing
		{
			lat: 19.076,
			lng: 72.8777,
			size: 0.3,
		}, // Mumbai
		{
			lat: -23.5505,
			lng: -46.6333,
			size: 0.3,
		}, // São Paulo
		{
			lat: 1.3521,
			lng: 103.8198,
			size: 0.3,
		}, // Singapore
		{
			lat: 25.2048,
			lng: 55.2708,
			size: 0.3,
		}, // Dubai
		{
			lat: 52.52,
			lng: 13.405,
			size: 0.3,
		}, // Berlin
		{
			lat: 19.4326,
			lng: -99.1332,
			size: 0.3,
		}, // Mexico City
		{
			lat: -26.2041,
			lng: 28.0473,
			size: 0.3,
		}, // Johannesburg
	];
</script>

<div class="relative mx-auto h-125 w-full">
	<div class="to-background absolute inset-0 bg-radial from-transparent to-70%"></div>
	<DottedMap {markers} />
</div>
```

## Examples

### 1. Custom Dot Radius

Customize the size of the dots on the map for a finer or coarser appearance.

```svelte
<script lang="ts">
	import DottedMap from "$lib/components/magic/dotted-map/dotted-map.svelte";
</script>

<div class="relative mx-auto h-125 w-full overflow-hidden rounded-lg border">
	<DottedMap dotRadius={0.2} dotColor="#3DECFF" />
</div>
```

## Usage

Import `DottedMap` from `$lib/components/magic/dotted-map` and pass the props you need for your use case.

## Props

### DottedMap

An SVG-based world map with dots and customizable markers.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `width` | `number` | `150` | Width of the map |
| `height` | `number` | `75` | Height of the map |
| `mapSamples` | `number` | `5000` | Number of dots to render on the map |
| `markers` | `Marker[]` | `[]` | Array of marker objects with lat, lng, and optional size |
| `dotColor` | `string` | `undefined` | Color of the dots (uses currentColor if not specified) |
| `markerColor` | `string` | `#FF6900` | Color of the marker dots |
| `dotRadius` | `number` | `0.2` | Radius of each dot |
| `stagger` | `boolean` | `true` | Whether to stagger alternating rows |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `style` | `string` | `""` | Inline styles to apply |

### Marker

Marker object interface for specifying locations on the map.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `lat` | `number` | `required` | Latitude of the marker |
| `lng` | `number` | `required` | Longitude of the marker |
| `size` | `number` | `dotRadius` | Optional custom size for this marker |
