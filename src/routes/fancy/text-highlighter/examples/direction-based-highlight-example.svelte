<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import { motion, type Transition } from "motion-sv";
	import { onMount } from "svelte";

	type ScrollDirection = "ltr" | "rtl";
	type Fragment = {
		text: string;
		highlight?: boolean;
	};
	type SectionData = {
		delay?: number;
		paragraphs: Fragment[][];
	};

	const HIGHLIGHT_COLOR = "hsl(80, 100%, 50%)";
	const DEMO_USE_IN_VIEW_OPTIONS = { once: false, initial: false, amount: 0.1 };
	const DEMO_TRANSITION: Transition = { type: "spring", duration: 1, delay: 0.4, bounce: 0 };

	const sections: SectionData[] = [
		{
			paragraphs: [
				[
					{ text: "Our " },
					{ text: "object detection systems", highlight: true },
					{ text: " identify and locate items in real-time. From " },
					{ text: "facial recognition", highlight: true },
					{ text: " to product identification, we deliver precision at scale." },
				],
				[
					{ text: "Whether it's " },
					{ text: "traffic monitoring", highlight: true },
					{ text: " for smart cities or " },
					{ text: "inventory management", highlight: true },
					{
						text: " for retail, our AI distinguishes between people, vehicles, and objects with unmatched accuracy.",
					},
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "Advanced " },
					{ text: "video analytics", highlight: true },
					{ text: " track movement across frames. Our " },
					{ text: "object tracking algorithms", highlight: true },
					{ text: " power autonomous vehicles and security systems worldwide." },
				],
				[
					{ text: "Scene understanding", highlight: true },
					{ text: " capabilities analyze spatial relationships and context. From " },
					{ text: "sports performance analysis", highlight: true },
					{ text: " to " },
					{ text: "surveillance systems", highlight: true },
					{ text: ", we make sense of complex visual data." },
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "Our " },
					{ text: "OCR technology", highlight: true },
					{
						text: " converts printed and handwritten text to digital format instantly. ",
					},
					{ text: "Document automation", highlight: true },
					{ text: " streamlines workflows across industries." },
				],
				[
					{ text: "From " },
					{ text: "invoice processing", highlight: true },
					{ text: " to " },
					{ text: "accessibility solutions", highlight: true },
					{
						text: ", our text recognition supports multiple languages and formats with exceptional accuracy.",
					},
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "3D depth perception", highlight: true },
					{ text: " enables precise spatial understanding. Our " },
					{ text: "stereo vision systems", highlight: true },
					{ text: " power robotic automation and quality control processes." },
				],
				[
					{ text: "Advanced " },
					{ text: "augmented reality", highlight: true },
					{ text: " and " },
					{ text: "virtual reality applications", highlight: true },
					{ text: " rely on our depth analysis for immersive, interactive experiences." },
				],
			],
		},
		{
			paragraphs: [
				[
					{ text: "Image segmentation", highlight: true },
					{ text: " separates objects with pixel-perfect precision. Our " },
					{ text: "enhancement algorithms", highlight: true },
					{ text: " restore clarity and remove noise from any visual content." },
				],
				[
					{ text: "Generate " },
					{ text: "synthetic training data", highlight: true },
					{ text: " and create " },
					{ text: "high-resolution imagery", highlight: true },
					{ text: " for machine learning models and creative applications." },
				],
				[
					{ text: "Transform your industry", highlight: true },
					{
						text: " with computer vision that sees, understands, and acts on visual information like never before.",
					},
				],
			],
		},
	];

	let containerRef = $state<HTMLDivElement | null>(null);
	let currentSection = $state(1);
	let scrollDirection = $state<ScrollDirection>("ltr");
	let visibleSections = $state(Array.from({ length: sections.length }, () => false));

	function observeSection(node: HTMLDivElement, index: number) {
		let currentIndex = index;
		const observer = new IntersectionObserver(
			([entry]) => {
				visibleSections[currentIndex] =
					entry.isIntersecting && entry.intersectionRatio >= 0.5;
			},
			{
				rootMargin: "-20%",
				threshold: [0, 0.5, 1],
			}
		);

		observer.observe(node);

		return {
			update(nextIndex: number) {
				currentIndex = nextIndex;
			},
			destroy() {
				observer.disconnect();
			},
		};
	}

	onMount(() => {
		const container = containerRef;
		if (!container) return;

		let previousScrollLeft = container.scrollLeft;

		const handleScroll = () => {
			const { scrollLeft, clientWidth } = container;
			const sectionIndex = Math.round(scrollLeft / clientWidth) + 1;

			currentSection = Math.min(sections.length, Math.max(1, sectionIndex));

			const scrollDiff = scrollLeft - previousScrollLeft;
			if (Math.abs(scrollDiff) > 5) {
				scrollDirection = scrollDiff > 0 ? "ltr" : "rtl";
			}

			previousScrollLeft = scrollLeft;
		};

		container.addEventListener("scroll", handleScroll);

		return () => {
			container.removeEventListener("scroll", handleScroll);
		};
	});
</script>

<div class="relative h-80 w-dvw bg-[#fff] p-0 text-black md:h-130">
	<div
		class="absolute bottom-8 left-1/2 z-20 flex w-8 -translate-x-1/2 items-center justify-center rounded-full border border-black/80 px-2 pb-0.5 text-sm tabular-nums sm:bottom-12 sm:w-10 sm:px-3 sm:text-base md:bottom-16 lg:bottom-20"
	>
		{#key currentSection}
			<div class="font-overusedGrotesk">
				{currentSection.toString().padStart(2, "0")}
			</div>
		{/key}
	</div>

	<div
		bind:this={containerRef}
		class="z-10 mb-4 flex h-full w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden bg-[#fff] sm:mb-6"
	>
		{#each sections as section, index (index)}
			<section class="flex h-full min-w-full shrink-0 snap-start items-center justify-center">
				<div
					class="mx-auto max-w-[240px] px-4 sm:max-w-sm sm:px-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
				>
					<div use:observeSection={index}>
						<motion.div
							initial={{
								opacity: 0,
								filter: "blur(8px)",
							}}
							animate={visibleSections[index]
								? { opacity: 1, filter: "blur(0px)" }
								: { opacity: 0.3, filter: "blur(6px)" }}
							transition={{
								duration: 0.8,
								delay: visibleSections[index] ? (section.delay ?? 0) : 0,
								ease: [0.25, 0.1, 0.25, 1],
							}}
							class="space-y-4"
						>
							{#each section.paragraphs as paragraph, paragraphIndex (paragraphIndex)}
								<p
									class="font-overusedGrotesk mb-3 text-sm leading-relaxed whitespace-break-spaces last:mb-0 sm:mb-4 sm:text-base md:text-lg"
								>
									{#each paragraph as fragment, fragmentIndex (fragmentIndex)}
										{#if fragment.highlight}
											<TextHighlighter
												highlightColor={HIGHLIGHT_COLOR}
												direction={scrollDirection}
												useInViewOptions={DEMO_USE_IN_VIEW_OPTIONS}
												transition={DEMO_TRANSITION}
											>
												{fragment.text}
											</TextHighlighter>
										{:else}
											<span>{fragment.text}</span>
										{/if}
									{/each}
								</p>
							{/each}
						</motion.div>
					</div>
				</div>
			</section>
		{/each}
	</div>
</div>
