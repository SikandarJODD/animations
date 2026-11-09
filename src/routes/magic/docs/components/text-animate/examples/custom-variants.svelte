<script lang="ts">
	import { TextAnimate } from "#lib/components/magic/text-animate/index.js";
	import type { Variants } from "motion-sv";

	const customVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 30,
			rotate: 45,
			scale: 0.5,
		},
		show: (i) => ({
			opacity: 1,
			y: 0,
			rotate: 0,
			scale: 1,
			transition: {
				delay: i * 0.1,
				duration: 0.4,
				y: {
					type: "spring",
					damping: 12,
					stiffness: 200,
					mass: 0.8,
				},
				rotate: {
					type: "spring",
					damping: 8,
					stiffness: 150,
				},
				scale: {
					type: "spring",
					damping: 10,
					stiffness: 300,
				},
			},
		}),
		exit: (i) => ({
			opacity: 0,
			y: 30,
			rotate: 45,
			scale: 0.5,
			transition: {
				delay: i * 0.1,
				duration: 0.4,
			},
		}),
	};
</script>

<div class="flex items-center justify-center">
	<TextAnimate content="Svelte is Amazing!" variants={customVariants} by="character" />
</div>
