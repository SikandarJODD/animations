<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { motion, AnimatePresence, useMotionValue } from "motion-sv";
	import { cn } from "#lib/utils.js";
	import { type Snippet } from "svelte";
	import { watch } from "runed";
	// import type { HTMLMotionProps } from "motion-sv";

	interface PointerProps {
		children?: Snippet;
		class?: ClassValue;
	}

	let { children, class: className }: PointerProps = $props();

	const x = useMotionValue(0);
	const y = useMotionValue(0);
	let isActive = $state(false);
	let containerRef: HTMLDivElement | null = $state(null);

	watch([() => x, () => y], () => {
		if (typeof window !== "undefined" && containerRef) {
			// Get the parent element directly from the ref
			const parentElement = containerRef.parentElement;

			if (parentElement) {
				console.log("Parent element found:", parentElement);

				// Add cursor-none to parent
				parentElement.style.cursor = "none";

				// Add event listeners to parent
				const handleMouseMove = (e: MouseEvent) => {
					// console.log("Mouse move event:", e);
					// console.log("Mouse coordinates:", e.clientX, e.clientY);
					console.log(x, y);
					x.set(e.clientX);
					y.set(e.clientY);
					isActive = true;
				};

				const handleMouseEnter = (e: MouseEvent) => {
					x.set(e.clientX);
					y.set(e.clientY);

					isActive = true;
				};

				const handleMouseLeave = () => {
					isActive = false;
				};

				parentElement.addEventListener("mousemove", handleMouseMove);
				parentElement.addEventListener("mouseenter", handleMouseEnter);
				parentElement.addEventListener("mouseleave", handleMouseLeave);

				return () => {
					parentElement.style.cursor = "";
					parentElement.removeEventListener("mousemove", handleMouseMove);
					parentElement.removeEventListener("mouseenter", handleMouseEnter);
					parentElement.removeEventListener("mouseleave", handleMouseLeave);
				};
			}
		}
	});
</script>

<div bind:this={containerRef}></div>
<AnimatePresence>
	{#if isActive}
		<motion.div
			class="pointer-events-none fixed z-50 transform-[translate(-50%,-50%)]"
			style={{
				top: y,
				left: x,
			}}
			initial={{
				scale: 0,
				opacity: 0,
			}}
			animate={{
				scale: 1,
				opacity: 1,
			}}
			exit={{
				scale: 0,
				opacity: 0,
			}}
		>
			{#if children}
				{@render children()}
			{:else}
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="1"
					viewBox="0 0 16 16"
					height="24"
					width="24"
					xmlns="http://www.w3.org/2000/svg"
					class={cn("rotate-[-70deg] stroke-white text-black", className)}
				>
					<path
						d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"
					/>
				</svg>
			{/if}
		</motion.div>
	{/if}
</AnimatePresence>
