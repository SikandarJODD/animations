<script lang="ts">
	import { onMount } from "svelte";
	import { motion, AnimatePresence, type MotionProps } from "motion-sv";
	import { cn } from "#lib/utils.ts";

	type ElementType = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	interface WordRotateProps {
		words: string[];
		duration?: number;
		motionProps?: MotionProps;
		class?: string;
		as?: ElementType;
	}

	let {
		words,
		duration = 2500,
		motionProps = {
			initial: { opacity: 0, y: -50 },
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: 50 },
			transition: { duration: 0.25, ease: "easeOut" },
		},
		class: className,
		as = "h1",
	}: WordRotateProps = $props();

	let MotionComponent = $derived(motion[as]);

	let index = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			index = (index + 1) % words.length;
		}, duration);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	});
</script>

<!-- for some reason overflow hidden is not working - still in beta phase -->
<!-- Original React implementation use mode="wait" but the animation doesn't work properly in svelte  -->
<!-- React Implmentaion : https://magicui.design/docs/components/word-rotate -->

<div class="overflow-hidden py-2">
	<!-- mode="popLayout" initial={false} -->

	<AnimatePresence mode="wait">
		{#key words[index]}
			<MotionComponent
				class={cn(className)}
				initial={motionProps.initial}
				animate={motionProps.animate}
				exit={motionProps.exit}
				transition={motionProps.transition}
			>
				{words[index]}
			</MotionComponent>
		{/key}
	</AnimatePresence>
</div>
