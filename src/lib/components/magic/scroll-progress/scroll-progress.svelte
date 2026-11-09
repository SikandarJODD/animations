<script lang="ts">
	import { motion, useScroll } from "motion-sv";
	import { cn } from "#lib/utils.js";

	interface ScrollProgressProps {
		class?: string;
	}

	let { class: className }: ScrollProgressProps = $props();

	let scroll = $derived(useScroll());
</script>

<motion.div
	class={cn(
		"fixed inset-x-0 top-0 z-50 h-1 origin-top-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
		className
	)}
	style={{
		scaleX: scroll.scrollYProgress,
	}}
/>
