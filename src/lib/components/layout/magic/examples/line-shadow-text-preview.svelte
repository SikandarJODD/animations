<script lang="ts">
	import { LineShadowText } from "$lib/components/magic/line-shadow-text";
	import { mode } from "mode-watcher";
</script>

<div class="flex min-h-80 items-center justify-center">
	<h3 class="font-figtree text-5xl leading-none font-semibold tracking-[-0.06em] sm:text-6xl">
		Ship
		<LineShadowText
			content="faster"
			class="font-figtree italic"
			shadowColor={mode.current === "dark" ? "#f8fafc" : "#0f172a"}
		/>
	</h3>
</div>
