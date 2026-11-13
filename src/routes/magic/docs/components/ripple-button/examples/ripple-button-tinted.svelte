<script lang="ts">
	import { RippleButton } from "#lib/components/magic/ripple-button/index.js";
</script>

<div class="flex flex-wrap items-center justify-center gap-4">
	<RippleButton
		type="button"
		rippleColor="oklch(0.765 0.177 163.223 / 0.5)"
		class="border-emerald-300 bg-emerald-200 text-emerald-900 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
	>
		Save changes
	</RippleButton>
	<RippleButton
		type="button"
		rippleColor="oklch(0.75 0.183 55.934 / 0.5)"
		class="border-orange-300 bg-orange-200 text-orange-900 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-200"
	>
		Review changes
	</RippleButton>
</div>
