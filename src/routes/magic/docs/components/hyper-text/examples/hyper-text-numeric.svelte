<script lang="ts">
	import { MediaQuery } from "svelte/reactivity";
	import { HyperText } from "#lib/components/magic/hyper-text/index.js";

	const reducedMotion = new MediaQuery("(prefers-reduced-motion: reduce)");
	const digits = "0123456789".split("");
</script>

<div class="text-center">
	<p class="text-muted-foreground mb-2 text-sm">build number</p>
	{#if reducedMotion.current}
		<p
			class="font-mono text-3xl text-emerald-700 tabular-nums sm:text-5xl dark:text-emerald-300"
		>
			20261113
		</p>
	{:else}
		<HyperText
			text="20261113"
			characterSet={digits}
			duration={900}
			class="text-3xl text-emerald-700 tabular-nums sm:text-5xl dark:text-emerald-300"
		/>
	{/if}
</div>
