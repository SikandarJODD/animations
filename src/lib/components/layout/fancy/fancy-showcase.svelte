<script lang="ts">
	import FancyShowcaseCard from "./fancy-showcase-card.svelte";
	import Letter3DSwapPreview from "./examples/letter-3d-swap-preview.svelte";
	import LetterSwapPreview from "./examples/letter-swap-preview.svelte";
	import MediaBetweenTextPreview from "./examples/media-between-text-preview.svelte";
	import ScrambleInHeadlinePreview from "./examples/scramble-in-headline-preview.svelte";
	import ScrambleInListPreview from "./examples/scramble-in-list-preview.svelte";
	import TextHighlighterPreview from "./examples/text-highlighter-preview.svelte";
	import UnderlineToBackgroundPreview from "./examples/underline-to-background-preview.svelte";
	import VerticalCutRevealPreview from "./examples/vertical-cut-reveal-preview.svelte";
</script>

<section id="showcase" class="space-y-4 mt-6">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<FancyShowcaseCard
			title="Vertical Cut Reveal"
			href="/fancy/vertical-cut-reveal"
		>
			<VerticalCutRevealPreview />
		</FancyShowcaseCard>

		<FancyShowcaseCard title="Letter Swap" href="/fancy/letter-swap">
			<LetterSwapPreview />
		</FancyShowcaseCard>

		<FancyShowcaseCard title="Scramble In" href="/fancy/scramble-in" >
			<ScrambleInListPreview />
		</FancyShowcaseCard>

		<FancyShowcaseCard
			title="Letter 3D Swap"
			href="/fancy/letter-3d-swap"
			class="lg:min-h-[410px]"
		>
			<Letter3DSwapPreview />
		</FancyShowcaseCard>
	</div>

	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<FancyShowcaseCard title="Scramble In" href="/fancy/scramble-in" >
			<ScrambleInHeadlinePreview />
		</FancyShowcaseCard>

		<FancyShowcaseCard
			title="Underline To Background"
			href="/fancy/underline-to-background"
		>
			<UnderlineToBackgroundPreview />
		</FancyShowcaseCard>
	</div>

	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<FancyShowcaseCard
			title="Text Highlighter"
			href="/fancy/text-highlighter"
		>
			<TextHighlighterPreview />
		</FancyShowcaseCard>

		<FancyShowcaseCard
			title="Media Between Text"
			href="/fancy/media-between-text"
		>
			<MediaBetweenTextPreview />
		</FancyShowcaseCard>
	</div>
</section>
