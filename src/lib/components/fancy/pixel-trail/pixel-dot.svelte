<script lang="ts">
	import { motion, useAnimationControls } from "motion-sv";
	import type { ClassValue } from "clsx";

	import { cn } from "$lib/utils";

	interface PixelDotProps {
		size: number;
		fadeDuration: number;
		delay: number;
		class?: ClassValue;
	}

	let { size, fadeDuration, delay, class: className }: PixelDotProps = $props();

	const controls = useAnimationControls();

	export function flash() {
		controls.stop();
		controls.set({ opacity: 1 });

		return controls.start({
			opacity: [1, 0],
			transition: {
				duration: fadeDuration / 1000,
				delay: delay / 1000,
			},
		});
	}
</script>

<motion.div
	class={cn("pointer-events-none", className)}
	style={{
		width: `${size}px`,
		height: `${size}px`,
	}}
	initial={{ opacity: 0 }}
	animate={controls}
/>
