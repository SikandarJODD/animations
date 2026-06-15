<script lang="ts">
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";

	const paths = [
		"M1 248C214 -47 582 158 679 -39",
		"M1 208C214 -87 582 118 679 -79",
		"M1 168C214 -127 582 78 679 -119",
	];

	const texts = [
		`PARIS • LONDON • BERLIN • ROME • BARCELONA • MADRID • VIENNA • PRAGUE • AMSTERDAM • STOCKHOLM`,
		`BUDAPEST • COPENHAGEN • OSLO • HELSINKI • MILAN • MUNICH • VENICE • MADRID • VIENNA • PRAGUE`,
		`PARIS • BERLIN • ROME • BARCELONA • MADRID • VIENNA • PRAGUE • AMSTERDAM`,
	];
</script>

<div class="relative h-80 w-dvw overflow-hidden bg-white md:h-160">
	<div class="absolute flex h-full w-full flex-col">
		{#each paths as path, i}
			<AnimatedPathText
				{path}
				pathId="auto-path-{i}"
				svgClass="absolute -left-25 top-1/3 w-[calc(100%+200px)] h-full"
				viewBox="0 0 680 250"
				text={texts[i]}
				textClass="text font-thin text-gray-800"
				animationType="auto"
				duration={i * 0.5 + 5}
				textAnchor="start"
			/>
		{/each}
	</div>
</div>
