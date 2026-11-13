<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";

	const cursors = ["line", "block", "underscore"] as const;
</script>

<div class="grid gap-6">
	{#each cursors as cursorStyle}
		<div>
			<p class="text-muted-foreground mb-2 text-xs">{cursorStyle}</p>
			<TypingAnimation
				content="choose a cursor"
				{cursorStyle}
				loop
				class="font-mono text-lg leading-relaxed font-normal tracking-normal"
			/>
		</div>
	{/each}
</div>
