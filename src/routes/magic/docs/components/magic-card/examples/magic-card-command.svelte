<script lang="ts">
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard
	gradientSize={220}
	gradientColor="var(--color-emerald-400)"
	gradientOpacity={0.12}
	gradientFrom="var(--color-emerald-400)"
	gradientTo="var(--color-emerald-700)"
	class="w-full max-w-md rounded-lg"
>
	<div class="p-6">
		<h3 class="text-sm font-medium">install the component</h3>
		<pre
			class="mt-4 overflow-x-auto font-mono text-sm text-emerald-800 dark:text-emerald-200"><code
				>pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json</code
			></pre>
	</div>
</MagicCard>
