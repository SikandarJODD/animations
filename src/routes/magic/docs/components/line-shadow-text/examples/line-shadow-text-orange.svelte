<script lang="ts">
	import { LineShadowText } from "#lib/components/magic/line-shadow-text/index.js";
</script>

<LineShadowText
	as="h2"
	content="Shadow"
	shadowColor="var(--line-shadow)"
	class="text-5xl font-semibold text-orange-600 italic [--line-shadow:var(--color-orange-400)] after:top-[0.12em] after:left-[0.12em] sm:text-7xl dark:text-orange-400 dark:[--line-shadow:var(--color-orange-200)]"
/>
