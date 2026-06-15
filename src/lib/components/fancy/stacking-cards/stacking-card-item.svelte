<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	export interface StackingCardItemProps extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		index: number;
		topPosition?: string;
		class?: string;
	}
</script>

<script lang="ts">
	import { motion, useScroll, useTransform } from "motion-sv";
	import { getContext } from "svelte";
	import { cn } from "$lib/utils";

	type StackingCardsContext = {
		progress: ReturnType<typeof useScroll>["scrollYProgress"];
		scaleMultiplier: number;
		totalCards: number;
	};

	let {
		children,
		index,
		topPosition,
		class: className,
		...props
	}: StackingCardItemProps = $props();

	const stackingCardsContext = getContext<StackingCardsContext | undefined>("stacking-cards");

	if (!stackingCardsContext) {
		throw new Error("StackingCardItem must be used within StackingCards");
	}

	let safeTotalCards = $derived(Math.max(stackingCardsContext.totalCards, 1));
	let scaleTo = $derived(1 - (safeTotalCards - index) * stackingCardsContext.scaleMultiplier);
	let rangeScaleStart = $derived(index * (1 / safeTotalCards));
	let scale = useTransform(() => {
		const progress = stackingCardsContext.progress.get();
		const clampedProgress = Math.min(1, Math.max(rangeScaleStart, progress));
		const normalizedProgress =
			rangeScaleStart === 1
				? Number(progress >= 1)
				: (clampedProgress - rangeScaleStart) / (1 - rangeScaleStart);

		return 1 + (scaleTo - 1) * normalizedProgress;
	});
	let top = $derived(topPosition ?? `${5 + index * 3}%`);
</script>

<div class={cn("sticky top-0 h-full", className)} {...props}>
	<motion.div class="relative h-full origin-top" style={{ top, scale }}>
		{@render children?.()}
	</motion.div>
</div>
