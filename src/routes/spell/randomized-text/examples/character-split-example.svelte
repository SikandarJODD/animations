<script lang="ts">
	import { RandomizedText } from "#lib/components/spell/randomized-text/index.js";
</script>

<div class="flex min-h-[200px] w-[500px] flex-col items-center justify-start gap-4">
	<div class="justif-start flex flex-col items-start gap-1">
		<span class="text-muted-foreground font-mono text-sm"> BY CHARACTERS </span>
		<RandomizedText
			split="chars"
			class="text-base font-medium tracking-tight"
			triggerOnView
			once={false}
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis ipsam saepe
			incidunt laboriosam eaque quasi commodi beatae excepturi quos!
		</RandomizedText>
	</div>
	<div class="justif-start flex flex-col items-start gap-1">
		<span class="text-muted-foreground font-mono text-sm"> BY WORDS WITH DELAY (0.5s)</span>
		<RandomizedText
			delay={0.5}
			class="text-base font-medium tracking-tight"
			triggerOnView
			once={false}
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis ipsam saepe
			incidunt laboriosam eaque quasi commodi beatae excepturi quos!
		</RandomizedText>
	</div>
</div>
