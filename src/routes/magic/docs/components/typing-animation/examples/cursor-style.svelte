<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<div class="flex-1 space-y-8">
	<div>
		<p class="text-muted-foreground mb-2 text-sm">Line cursor (default)</p>
		<TypingAnimation
			words={["Line cursor"]}
			cursorStyle="line"
			loop
			class="text-4xl font-bold"
		/>
	</div>
	<div>
		<p class="text-muted-foreground mb-2 text-sm">Block cursor (VSCode style)</p>
		<TypingAnimation
			words={["Block cursor"]}
			cursorStyle="block"
			loop
			class="text-4xl font-bold"
		/>
	</div>
	<div>
		<p class="text-muted-foreground mb-2 text-sm">Underscore cursor</p>
		<TypingAnimation
			words={["Underscore cursor"]}
			cursorStyle="underscore"
			loop
			class="text-4xl font-bold"
		/>
	</div>
</div>
