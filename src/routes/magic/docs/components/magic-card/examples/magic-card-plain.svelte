<script lang="ts">
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard
	gradientColor="var(--foreground)"
	gradientOpacity={0.06}
	gradientFrom="var(--foreground)"
	gradientTo="var(--border)"
	class="w-full max-w-sm rounded-lg"
>
	<div class="flex h-40 items-center justify-center p-6 text-sm">move your pointer</div>
</MagicCard>
