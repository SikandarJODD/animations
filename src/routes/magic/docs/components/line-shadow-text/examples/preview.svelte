<script lang="ts">
	import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
	import { mode } from "mode-watcher";
</script>

<h2
	class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
>
	Ship
	<LineShadowText
		content="Fast"
		class="italic"
		shadowColor={mode.current === "dark" ? "white" : "black"}
	></LineShadowText>
</h2>
