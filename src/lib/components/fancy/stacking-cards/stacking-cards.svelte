<script lang="ts" module>
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { UseScrollOptions } from "motion-sv";

	export interface StackingCardsProps extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		scrollOptions?: Omit<UseScrollOptions, "target">;
		scaleMultiplier?: number;
		totalCards: number;
		class?: string;
	}
</script>

<script lang="ts">
	import { useScroll, type UseScrollOptions as RuntimeUseScrollOptions } from "motion-sv";
	import { setContext } from "svelte";

	const DEFAULT_SCALE_MULTIPLIER = 0.03;
	const DEFAULT_OFFSET: NonNullable<RuntimeUseScrollOptions["offset"]> = [
		"start start",
		"end end",
	];

	type StackingCardsContext = {
		progress: ReturnType<typeof useScroll>["scrollYProgress"];
		scaleMultiplier: number;
		totalCards: number;
	};

	let {
		children,
		scrollOptions,
		scaleMultiplier = DEFAULT_SCALE_MULTIPLIER,
		totalCards,
		class: className,
		...props
	}: StackingCardsProps = $props();

	let root = $state<HTMLDivElement | null>(null);

	// motion-sv supports getter-based scroll options at runtime, but its current
	// Svelte type only accepts the resolved options object.
	let scroll = useScroll((() => ({
		offset: DEFAULT_OFFSET,
		...scrollOptions,
		target: root,
	})) as unknown as RuntimeUseScrollOptions);

	setContext<StackingCardsContext>("stacking-cards", {
		get progress() {
			return scroll.scrollYProgress;
		},
		get scaleMultiplier() {
			return scaleMultiplier;
		},
		get totalCards() {
			return totalCards;
		},
	});
</script>

<div bind:this={root} class={className} {...props}>
	{@render children?.()}
</div>
