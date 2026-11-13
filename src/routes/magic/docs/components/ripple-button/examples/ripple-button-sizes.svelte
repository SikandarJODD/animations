<script lang="ts">
	import { RippleButton } from "#lib/components/magic/ripple-button/index.js";
</script>

<div class="flex flex-wrap items-center justify-center gap-4">
	<RippleButton type="button" rippleColor="#a3a3a3" class="px-3 py-1.5 text-sm"
		>Small</RippleButton
	>
	<RippleButton type="button" rippleColor="#a3a3a3" class="px-4 py-2 text-base"
		>Medium</RippleButton
	>
	<RippleButton type="button" rippleColor="#a3a3a3" class="px-6 py-3 text-lg">Large</RippleButton>
</div>
