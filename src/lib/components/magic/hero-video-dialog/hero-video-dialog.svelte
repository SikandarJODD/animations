<script lang="ts">
	import { motion, AnimatePresence } from "motion-sv";
	import { cn } from "#lib/utils.ts";

	type AnimationStyle =
		| "from-bottom"
		| "from-center"
		| "from-top"
		| "from-left"
		| "from-right"
		| "fade"
		| "top-in-bottom-out"
		| "left-in-right-out";

	interface HeroVideoDialogProps {
		animationStyle?: AnimationStyle;
		videoSrc: string;
		thumbnailSrc: string;
		thumbnailAlt?: string;
		class?: string;
	}

	let {
		animationStyle = "from-center",
		videoSrc,
		thumbnailSrc,
		thumbnailAlt = "Video thumbnail",
		class: className,
	}: HeroVideoDialogProps = $props();

	let isVideoOpen = $state(false);

	const animationVariants = {
		"from-bottom": {
			initial: { y: "100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "100%", opacity: 0 },
		},
		"from-center": {
			initial: { scale: 0.5, opacity: 0 },
			animate: { scale: 1, opacity: 1 },
			exit: { scale: 0.5, opacity: 0 },
		},
		"from-top": {
			initial: { y: "-100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "-100%", opacity: 0 },
		},
		"from-left": {
			initial: { x: "-100%", opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: "-100%", opacity: 0 },
		},
		"from-right": {
			initial: { x: "100%", opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: "100%", opacity: 0 },
		},
		fade: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
		},
		"top-in-bottom-out": {
			initial: { y: "-100%", opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: "100%", opacity: 0 },
		},
		"left-in-right-out": {
			initial: { x: "-100%", opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: "100%", opacity: 0 },
		},
	};

	const selectedAnimation = $derived(animationVariants[animationStyle]);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
			isVideoOpen = false;
		}
	};
</script>

<div class={cn("relative", className)}>
	<button
		type="button"
		aria-label="Play video"
		class="group relative cursor-pointer border-0 bg-transparent p-0"
		onclick={() => (isVideoOpen = true)}
	>
		<img
			src={thumbnailSrc}
			alt={thumbnailAlt}
			width={1920}
			height={1080}
			class="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
		/>
		<div
			class="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100"
		>
			<div
				class="bg-primary/10 flex size-28 items-center justify-center rounded-full backdrop-blur-md"
			>
				<div
					class="from-primary/30 to-primary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]"
				>
					<svg
						class="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
						style="filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<polygon points="5 3 19 12 5 21 5 3" />
					</svg>
				</div>
			</div>
		</div>
	</button>
	<AnimatePresence>
		{#if isVideoOpen}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				role="button"
				onkeydown={handleKeyDown}
				onclick={() => (isVideoOpen = false)}
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
			>
				<motion.div
					initial={selectedAnimation.initial}
					animate={selectedAnimation.animate}
					exit={selectedAnimation.exit}
					transition={{ type: "spring", damping: 30, stiffness: 300 }}
					class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
				>
					<motion.button
						class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
					>
						<svg
							class="size-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</motion.button>
					<div
						class="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white"
					>
						<iframe
							src={videoSrc}
							title="Hero Video player"
							class="size-full rounded-2xl"
							allowfullscreen
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
				</motion.div>
			</motion.div>
		{/if}
	</AnimatePresence>
</div>
