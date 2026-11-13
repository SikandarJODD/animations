<script lang="ts">
	import { HighlightedText } from "#lib/components/spell/highlighted-text/index.js";
</script>

<div class="flex flex-col gap-6 text-xl font-semibold tracking-tight">
	<div>
		<HighlightedText from="left" delay={0} triggerOnView>From Left</HighlightedText>
	</div>
	<div>
		<HighlightedText from="right" delay={0.2} triggerOnView>From Right</HighlightedText>
	</div>
	<div>
		<HighlightedText from="top" delay={0.4} triggerOnView>From Top</HighlightedText>
	</div>
	<div>
		<HighlightedText from="bottom" delay={0.6} triggerOnView>From Bottom</HighlightedText>
	</div>
</div>
