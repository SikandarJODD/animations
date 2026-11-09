<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<div class="flex-1 space-y-8">
	<div>
		<p class="text-muted-foreground mb-2 text-sm">
			With blinking cursor (default) - watch during pause
		</p>
		<TypingAnimation
			words={["Type", "Pause", "Delete"]}
			blinkCursor={true}
			pauseDelay={2000}
			loop
			class="text-4xl font-bold"
		>
			Blinking cursor
		</TypingAnimation>
	</div>
	<div>
		<p class="text-muted-foreground mb-2 text-sm">
			Without blinking cursor - static during pause
		</p>
		<TypingAnimation
			words={["Type", "Pause", "Delete"]}
			blinkCursor={false}
			pauseDelay={2000}
			loop
			class="text-4xl font-bold"
		>
			Static cursor
		</TypingAnimation>
	</div>
</div>
