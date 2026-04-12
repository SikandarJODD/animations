<script lang="ts">
	import { LightRays } from "$lib/components/spell/light-rays";
</script>

<div class="relative min-h-[500px] w-full md:min-h-[350px] flex items-center justify-center">
	<LightRays backgroundColor="var(--background)" style="z-index: 0;" />
	<div class="z-10 flex h-full text-primary gap-2">
		<p class="text-4xl font-semibold tracking-tighter">Beautiful</p>
		<p class="text-4xl font-medium italic font-instrument">Light Rays</p>
	</div>
</div>
