<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<div
	class="bg-muted/30 flex w-full max-w-md items-center gap-3 overflow-x-auto rounded-lg border px-4 py-5 font-mono"
>
	<span class="text-muted-foreground text-sm" aria-hidden="true">$</span>
	<TypingAnimation
		content="pnpm add motion-sv runed"
		cursorStyle="block"
		typeSpeed={65}
		class="text-sm leading-relaxed font-normal tracking-normal whitespace-nowrap"
	/>
</div>
