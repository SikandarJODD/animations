<script lang="ts">
	import { GradientWaveText } from "#lib/components/spell/gradient-wave-text/index.js";

	let customColors = ["#2563eb", "#0ea5e9", "#67e8f9", "#e0f2fe"];
</script>

<GradientWaveText
	repeat
	radial={false}
	{customColors}
	class="text-3xl font-medium tracking-[-.03em] md:text-5xl"
>
	Signals move in deliberate lines
</GradientWaveText>
