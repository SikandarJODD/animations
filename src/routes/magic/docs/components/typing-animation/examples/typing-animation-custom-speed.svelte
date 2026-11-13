<script lang="ts">
	import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
	words={["quick typing", "slow deletion"]}
	typeSpeed={50}
	deleteSpeed={150}
	pauseDelay={1500}
	loop
	class="text-xl leading-relaxed font-normal tracking-normal"
/>
