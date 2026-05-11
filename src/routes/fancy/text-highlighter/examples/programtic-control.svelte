<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import { mode } from "mode-watcher";
	import type { Transition } from "motion-sv";

	type HighlighterRef = {
		animate: () => void;
		reset: () => void;
	};

	type Fragment = {
		text: string;
		highlight?: boolean;
	};

	const transition: Transition = { type: "spring", duration: 1, delay: 0, bounce: 0 };
	const highlightClass = "rounded-[0.3em]! px-px";
	const lightHighlightColor = "#F7F764";
	const darkHighlightColor = "#F7005F";
	let highlightColor = $derived(
		mode.current === "dark" ? darkHighlightColor : lightHighlightColor
	);

	const paragraphs: Fragment[][] = [
		[
			{
				text: "The present-day designer has a host of printing types at his disposal. Since ",
			},
			{ text: "Gutenberg", highlight: true },
			{
				text: " first invented movable type in 1436-55 hundreds of different types have been designed and cast in lead. The ",
			},
			{ text: "most recent technical developments", highlight: true },
			{
				text: " with computer and photo-typesetting have once again brought new faces or variations of old ones on the market.",
			},
		],
		[
			{
				text: "Knowledge of the quality of a typeface is of the greatest importance for the ",
			},
			{ text: "functional, aesthetic and psychological effect", highlight: true },
			{
				text: " of printed matter. Again, the typographic design, i.e. the correct spaces between letters and words and the length and spacing of lines conducive to easy reading, does much to enhance the impression created.",
			},
		],
		[
			{ text: "By studying the classic designs of " },
			{ text: "Garamond, Caslon, Bodoni, Walbaum", highlight: true },
			{
				text: " and others, the designer can learn what the timeless criteria are which produce a refined and artistic typeface that makes for ease of reading.",
			},
		],
		[
			{ text: "The lead type designs of " },
			{ text: "Berthold, Helvetica, Folio, Univers", highlight: true },
			{
				text: " etc. produce pleasant and easily legible type areas. The typographic rules that apply to the roman typefaces are also valid for the sans serifs.",
			},
		],
		[
			{ text: "The creators of these type designs", highlight: true },
			{
				text: " were extremely intelligent artists with high creative powers. This is shown by the fact that for more than four centuries innumerable type designers have sought to create new type alphabets but very few of these have gained acceptance. An ",
			},
			{ text: "alphabet of Garamond", highlight: true },
			{ text: " for example, is an artistic achievement of the first order." },
		],
		[
			{
				text: "Every designer who is concerned with typography should take the trouble when creating graphic designs to ",
			},
			{ text: "sketch words and sentences by hand", highlight: true },
			{
				text: ". Many designers take advantage of the Letraset process, which can undoubtedly produce a clean draft design that is almost ready for press.",
			},
		],
	];

	let highlighterRefs = $state<(HighlighterRef | null)[]>([]);
	let isHighlighted = $state(false);

	function getHighlightIndex(paragraphIndex: number, fragmentIndex: number) {
		let count = 0;

		for (let i = 0; i < paragraphIndex; i += 1) {
			for (const fragment of paragraphs[i]) {
				if (fragment.highlight) count += 1;
			}
		}

		for (let i = 0; i <= fragmentIndex; i += 1) {
			if (paragraphs[paragraphIndex][i]?.highlight) count += 1;
		}

		return count - 1;
	}

	function handleHighlight() {
		for (const ref of highlighterRefs) {
			ref?.animate();
		}

		isHighlighted = true;
	}

	function handleReset() {
		for (const ref of highlighterRefs) {
			ref?.reset();
		}

		isHighlighted = false;
	}
</script>

<div
	class="relative h-80 w-dvw bg-[#fefefe] p-0 text-black md:h-130 dark:bg-[#0b0b0b] dark:text-white"
>
	<div class="z-10 h-full w-full overflow-scroll bg-[#fefefe] dark:bg-[#0b0b0b]">
		<div class="mx-auto mt-20 max-w-5xl px-8 pb-20 md:px-12">
			<div class="grid grid-cols-1 gap-8 text-xs leading-relaxed md:grid-cols-2">
				{#each paragraphs as paragraph, paragraphIndex (paragraphIndex)}
					<div class="space-y-2">
						<p>
							{#each paragraph as fragment, fragmentIndex (fragmentIndex)}
								{@const highlightIndex = getHighlightIndex(
									paragraphIndex,
									fragmentIndex
								)}
								{#if fragment.highlight}
									<TextHighlighter
										bind:this={highlighterRefs[highlightIndex]}
										triggerType="ref"
										class={highlightClass}
										{transition}
										{highlightColor}
									>
										{fragment.text}
									</TextHighlighter>
								{:else}
									<span>{fragment.text}</span>
								{/if}
							{/each}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="absolute top-4 left-4 flex gap-4">
		<button
			onclick={isHighlighted ? handleReset : handleHighlight}
			class="border-border cursor-pointer rounded-md border bg-transparent px-3 py-1.5 text-xs text-black backdrop-blur-lg hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
		>
			{isHighlighted ? "Reset" : "Highlight"}
		</button>
	</div>
</div>
