<script lang="ts">
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
	import { FileJson, ArrowDownToLine } from "@lucide/svelte";
</script>

<MagicCard
	gradientSize={140}
	gradientColor="var(--color-emerald-400)"
	gradientOpacity={0.08}
	gradientFrom="var(--color-emerald-400)"
	gradientTo="var(--border)"
	class="w-full max-w-sm rounded-lg"
>
	<a
		href="/r/magic-card.json"
		download="magic-card.json"
		class="flex items-center gap-3 rounded-[inherit] px-5 py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
	>
		<FileJson
			class="size-5 shrink-0 text-emerald-700 dark:text-emerald-400"
			strokeWidth={1.2}
		/>
		<span class="flex-1 font-mono text-sm">magic-card.json</span>
		<ArrowDownToLine class="text-muted-foreground size-4" strokeWidth={1.2} />
	</a>
</MagicCard>
