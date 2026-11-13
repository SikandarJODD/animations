<script lang="ts">
	import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
</script>

<LineShadowText
	as="h2"
	content="Shadow"
	shadowColor="var(--line-shadow)"
	class="font-mono text-5xl font-semibold text-sky-600 [--line-shadow:var(--color-sky-400)] after:top-[0.12em] after:left-[0.12em] sm:text-7xl dark:text-sky-400 dark:[--line-shadow:var(--color-sky-200)]"
/>
