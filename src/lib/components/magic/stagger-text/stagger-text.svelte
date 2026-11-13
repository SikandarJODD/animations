<script lang="ts" module>
	export const variants: Variants = {
		initial: { y: 0 },
		animate: (i: number) => ({
			y: "-100%",
			transition: {
				delay: i * 0.04,
				duration: 0.4,
				ease: "easeInOut",
				type: "tween" as const,
			},
		}),
		exit: (i: number) => ({
			y: 0,
			transition: { delay: i * 0.02, duration: 0.3 },
		}),
	};
</script>

<script lang="ts">
	import { motion, type Variants } from "motion-sv";
	import type { ClassValue } from "svelte/elements";
	import { cn } from "#lib/utils.js";

	type StaggerTextElement = "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	interface StaggerTextProps {
		text: string;
		class?: ClassValue;
		as?: StaggerTextElement;
	}

	let { text = "text", class: className, as = "h3" }: StaggerTextProps = $props();

	let MotionComponent = $derived(motion[as]);

	let activeIndex = $state(5);
	let isActive = $state(false);

	const handleCopy = (e: ClipboardEvent) => {
		e.preventDefault();
		if (e.clipboardData) {
			e.clipboardData.setData("text/plain", text);
		}
	};
</script>

<span class="sr-only">
	{text}
</span>
<MotionComponent
	class={cn("overflow-clip tracking-wide select-text", className)}
	aria-label={text}
	oncopy={handleCopy}
>
	{#each text.split("") as char, i (i)}
		{@const delay = Math.abs(activeIndex - i)}
		<motion.span
			class="relative inline-flex flex-col"
			role="presentation"
			onmouseenter={() => {
				activeIndex = i;
				isActive = true;
			}}
			onmouseleave={() => {
				activeIndex = -1;
				isActive = false;
			}}
		>
			<!-- Original text -->
			<motion.span
				class="h-fit select-none"
				aria-hidden="true"
				{variants}
				custom={delay}
				initial="initial"
				animate={isActive ? "animate" : "exit"}
			>
				{char === " " ? " " : char}
			</motion.span>

			<!-- Copy text (animated from below) -->
			<motion.span
				class="absolute top-[0] left-0 h-fit w-full select-text"
				style={{ translate: "0 100%" }}
				aria-hidden="true"
				{variants}
				custom={delay}
				initial="initial"
				animate={isActive ? "animate" : "exit"}
			>
				{char === " " ? " " : char}
			</motion.span>
		</motion.span>
	{/each}
</MotionComponent>
