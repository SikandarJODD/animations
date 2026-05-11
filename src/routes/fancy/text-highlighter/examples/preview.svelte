<script lang="ts">
	import { TextHighlighter } from '$lib/components/fancy/text-highlighter';
	import { type Transition } from 'motion-sv';
	const transition = { type: 'spring', duration: 0.6, delay: 0.4, bounce: 0 };
	const highlightClass = 'rounded-[0.3em]! px-px';
	const highlightColor = '#F2AD91';
	const highlightDirection = 'btt';
	const inViewOptions = { once: false, initial: true, amount: 0.1 };
	let containerRef: HTMLDivElement | null = $state(null);
	import Lenis from 'lenis';
	import { onMount } from 'svelte';
	onMount(() => {
		if (!containerRef) return;
		const lenis = new Lenis({
			autoRaf: true,
			wrapper: containerRef,
			duration: 1.2,
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			touchMultiplier: 2
		});

		return () => {
			lenis.destroy();
		};
	});
</script>

<div class="relative h-80 md:h-150 rounded-xl w-dvw bg-[#fefefe] p-0">
	<div
		class="pointer-events-none absolute bottom-0 left-0 isolate h-64 w-full bg-gradient-to-t from-[#fefefe] from-10% via-[#fefefe]/50 via-50% to-transparent"
	></div>

	<div class="z-10 h-full w-full overflow-scroll bg-[#fefefe]" bind:this={containerRef}>
		<div class="mx-auto mt-40 max-w-md p-0 px-4 pb-64 text-black">
			<h1 class="font-calendas mb-20 text-4xl font-medium tracking-tight">Typeface alphabets</h1>

			<div class="text font-overusedGrotesk space-y-4 leading-normal">
				<p class="whitespace-break-spaces">
					The present-day designer has a host of printing types at his disposal.{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Since Gutenberg first invented movable type in 1436-55
					</TextHighlighter>{' '}
					hundreds of different types have been designed and cast in lead.{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The most recent technical developments
					</TextHighlighter>{' '}
					with computer and photo-typesetting have once again brought new faces or variations of old ones
					on the market.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The choice is up to the designer
					</TextHighlighter>{' '}
					It is left to his feeling for form to use{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						good or poor typefaces
					</TextHighlighter>{' '}
					for his design work. In view of the limited space available, we shall refer here to only a few
					of the outstanding designs of the past and the 20th century which have appeared most frequently
					in publications.
				</p>

				<p>
					Knowledge of the quality of a typeface is of the greatest importance for the{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						functional, aesthetic and psychological effect
					</TextHighlighter>{' '}
					of printed matter. Again, the typographic design, i. e. the correct spaces between letters and
					words and the length and spacing of lines conducive to easy reading, does much to enhance the
					impression created.{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Today the field is dominated mainly by computer and photo-typesetting
					</TextHighlighter>{' '}
					A typical characteristic of these forms of composition is the too narrow setting of the letters
					which makes reading difficult. The designer will be well advised to demand the normal spacing
					between letters when ordering photo-typesetting.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						By studying the classic designs
					</TextHighlighter>{' '}
					of{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Garamond, Casion, Bodoni, Walbaum
					</TextHighlighter>{' '}
					and others, the designer can learn what the timeless criteria are which produce a refined and
					artistic typeface that makes for ease of reading.
				</p>

				<p>
					The lead type designs of{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						Berthold, Helvetica, Folio, Univers
					</TextHighlighter>{' '}
					etc. produce pleasant and easily legible type areas. The typographic rules that apply to the
					roman typefaces are also valid for the sans serifs.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The creators of these type designs
					</TextHighlighter>{' '}
					were extremely intelligent artists with high creative powers. This is shown by the fact that
					for more than four centuries innumerable type designers have sought to create new type alphabets
					but very few of these have gained acceptance.{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						An alphabet of Garamond
					</TextHighlighter>{' '}
					for example, is an artistic achievement of the first order. Each letter has its own unmistakable
					face, whether lower or upper case, and displays the highest quality of form and originality.
					Each letter has its own personality and makes a marked impact.
				</p>

				<p>
					Every designer who is concerned with typography should take the trouble when creating
					graphic designs to{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						sketch words and sentences by hand
					</TextHighlighter>{' '}
					Many designers take advantage of the Letraset process, which can undoubtedly produce a clean
					draft design that is almost ready for press. But a feeling for good letter forms and an attractive
					typeface can be acquired only by constant and careful practice in sketching letters.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						How the forms of letters can create simultaneously both tension and nobility
					</TextHighlighter>{' '}
					and how pleasantly legible lines of type can appear to the eye of the reader may be seen from
					the examples on the following pages.
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The Renaissance created midline typography
					</TextHighlighter>{' '}
					which held its position until the 20th century.
				</p>

				<p>
					The new typography differs from the old in that it is the first to try to{' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						develop the outward appearance from the function of the text
					</TextHighlighter>
				</p>

				<p>
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						The new typography uses the background
					</TextHighlighter>{' '}
					as an element of design which is on a par with the other elements.
				</p>

				<p>
					Earlier typography (midline typography){' '}
					<TextHighlighter
						class={highlightClass}
						transition={transition as Transition}
						{highlightColor}
						useInViewOptions={inViewOptions}
						direction={highlightDirection}
					>
						played an active role against a dead, passive background.
					</TextHighlighter>
				</p>
			</div>
		</div>
	</div>
</div>