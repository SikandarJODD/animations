<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<div class="grid gap-6">
	{#each [true, false] as blinkCursor}
		<div>
			<p class="text-muted-foreground mb-2 text-xs">{blinkCursor ? "blinking" : "steady"}</p>
			<TypingAnimation
				content="take your time"
				{blinkCursor}
				pauseDelay={2000}
				loop
				class="text-xl leading-relaxed font-normal tracking-normal"
			/>
		</div>
	{/each}
</div>
