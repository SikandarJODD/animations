<script lang="ts">
	import { LightRays } from "$lib/components/spell/light-rays";
</script>

<div class="relative flex min-h-[500px] w-full items-center justify-center md:min-h-[350px]">
	<LightRays
		backgroundColor="var(--background)"
		style="z-index: 0;"
		raysColor={{ mode: "multi", color1: "#2060DF", color2: "#ffffff" }}
	/>
	<div class="z-10 flex h-full flex-col items-center gap-2">
		<p class="text-4xl font-semibold tracking-tighter">Multi Colored</p>
		<p class="font-serif text-4xl font-medium italic">Light Rays</p>
	</div>
</div>
