<script lang="ts">
	import { motion, type MotionProps, type Transition } from "motion-sv";
	import { cn } from "#lib/utils.ts";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	interface ShinyButtonProps extends HTMLButtonAttributes {
		children: Snippet;
		class?: string;
	}

	let { children, class: className, ...props }: ShinyButtonProps = $props();

	let animationProps: MotionProps = {
		initial: { "--x": "100%", scale: 0.8 },
		animate: { "--x": "-100%", scale: 1 },
		// whileTap: { scale: 0.95 },
		whilePress: { scale: 0.95 },
		transition: {
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 1,
			type: "spring",
			stiffness: 20,
			damping: 15,
			mass: 2,
			scale: {
				type: "spring",
				stiffness: 200,
				damping: 5,
				mass: 0.5,
			},
		},
	};
</script>

<motion.button
	class={cn(
		"relative cursor-pointer rounded-lg border px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,var(--primary)/10%_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_var(--primary)/10%]",
		className
	)}
	{...animationProps}
>
	<span
		class="relative block size-full text-sm tracking-wide text-[rgb(0,0,0,65%)] uppercase dark:font-light dark:text-[rgb(255,255,255,90%)]"
		style="mask-image: linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%));"
	>
		{@render children()}
	</span>
	<span
		style="mask: linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0));
		-webkit-mask: linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0));
		background-image: linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))"
		class="absolute inset-0 z-10 block rounded-[inherit] p-px"
	>
	</span>
</motion.button>
