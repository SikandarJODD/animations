<script lang="ts">
	import { motion, useInView, type AnimationOptions, type Variants } from "motion-sv";
	import type { ClassValue, HTMLAttributes, SvelteHTMLElements } from "svelte/elements";
	import { cn } from "$lib/utils";

	type ElementType = keyof SvelteHTMLElements;
	type TriggerType = "hover" | "ref" | "inView";
	type UseInViewOptions = {
		once?: boolean;
		amount?: "some" | "all" | number;
		margin?: string;
		root?: HTMLElement | Document;
	};

	interface MediaBetweenTextProps extends HTMLAttributes<HTMLDivElement> {
		firstText: string;
		secondText: string;
		mediaUrl: string;
		mediaType: "image" | "video";
		mediaContainerClass?: string;
		fallbackUrl?: string;
		as?: ElementType;
		autoPlay?: boolean;
		loop?: boolean;
		muted?: boolean;
		playsInline?: boolean;
		alt?: string;
		triggerType?: TriggerType;
		containerRef?: HTMLElement | Document | null;
		useInViewOptionsProp?: UseInViewOptions;
		animationVariants?: Variants;
		leftTextClass?: ClassValue;
		rightTextClass?: string;
		class?: string;
		isAnimating?: boolean;
	}

	const defaultAnimationVariants: Variants = {
		initial: { width: 0, opacity: 1 },
		animate: {
			width: "auto",
			opacity: 1,
			transition: { duration: 0.4, type: "spring", bounce: 0 } satisfies AnimationOptions,
		},
	};

	let {
		firstText,
		secondText,
		mediaUrl,
		mediaType,
		mediaContainerClass,
		fallbackUrl,
		as = "p",
		autoPlay = true,
		loop = true,
		muted = true,
		playsInline = true,
		alt,
		triggerType = "hover",
		containerRef = null,
		useInViewOptionsProp = {
			once: true,
			amount: 0.5,
			root: containerRef ?? undefined,
		},
		animationVariants = defaultAnimationVariants,
		class: className,
		leftTextClass,
		rightTextClass,
		isAnimating= $bindable(false),
		...props
	}: MediaBetweenTextProps = $props();

	let componentRef = $state<HTMLDivElement | null>(null);
	// let isAnimating = $state(false);
	let isHovered = $state(false);

	let MotionTextComponent = $derived(motion[as]);
	let inViewState = useInView(
		() => componentRef as HTMLDivElement,
		() => ({
			once: useInViewOptionsProp.once ?? true,
			amount: useInViewOptionsProp.amount ?? 0.5,
			margin: useInViewOptionsProp.margin,
			root: useInViewOptionsProp.root ?? containerRef ?? undefined,
		})
	);

	let shouldAnimate = $derived.by(() => {
		if (triggerType === "hover") {
			return isHovered;
		}

		if (triggerType === "inView") {
			return inViewState.current;
		}

		if (triggerType === "ref") {
			return isAnimating;
		}

		return false;
	});

	export function animate() {
		isAnimating = true;
	}

	export function reset() {
		isAnimating = false;
	}
</script>

<div
	bind:this={componentRef}
	class={cn("flex", className)}
	onmouseenter={() => {
		if (triggerType === "hover") {
			isHovered = true;
		}
	}}
	onmouseleave={() => {
		if (triggerType === "hover") {
			isHovered = false;
		}
	}}
	{...props}
>
	<MotionTextComponent layout class={leftTextClass}>
		{firstText}
	</MotionTextComponent>

	<motion.div
		class={mediaContainerClass}
		initial="initial"
		animate={shouldAnimate ? "animate" : "initial"}
		variants={animationVariants}
	>
		{#if mediaType === "video"}
			<video
				class="h-full w-full object-cover"
				autoplay={autoPlay}
				{loop}
				{muted}
				playsinline={playsInline}
				poster={fallbackUrl}
			>
				<source src={mediaUrl} type="video/mp4" />
			</video>
		{:else}
			<img
				src={mediaUrl}
				alt={alt || `${firstText} ${secondText}`}
				class="h-full w-full object-cover"
			/>
		{/if}
	</motion.div>

	<MotionTextComponent layout class={rightTextClass}>
		{secondText}
	</MotionTextComponent>
</div>
