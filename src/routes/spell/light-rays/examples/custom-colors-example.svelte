<script lang="ts">
	import { LightRays } from "$lib/components/spell/light-rays";
</script>

<div class="flex flex-col gap-4">
	<div class="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl">
		<LightRays
			class="rounded-xl"
			raysColor={{ mode: "multi", color1: "#ff6b6b", color2: "#ffd93d" }}
			intensity={18}
			backgroundColor="#1a0a0a"
		/>
		<span class="relative z-10 text-lg font-semibold text-white">Warm Glow</span>
	</div>
	<div class="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl">
		<LightRays
			class="rounded-xl"
			raysColor={{ mode: "multi", color1: "#6bcb77", color2: "#4d96ff" }}
			intensity={15}
			rays={24}
			backgroundColor="#050f0a"
		/>
		<span class="relative z-10 text-lg font-semibold text-white">Aurora</span>
	</div>
</div>
