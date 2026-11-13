<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn } from "#lib/utils.js";
	import type { ElementType, MotionProps, Variants } from "motion-sv";
	import { motion, AnimatePresence } from "motion-sv";

	type AnimationType = "text" | "word" | "character" | "line";
	type AnimationVariant =
		| "fadeIn"
		| "blurIn"
		| "blurInUp"
		| "blurInDown"
		| "slideUp"
		| "slideDown"
		| "slideLeft"
		| "slideRight"
		| "scaleUp"
		| "scaleDown";

	const staggerTimings: Record<AnimationType, number> = {
		text: 0.06,
		word: 0.05,
		character: 0.03,
		line: 0.06,
	};

	const defaultContainerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0,
				staggerChildren: 0.05,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};
	const defaultItemVariants: Variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	};

	const defaultItemAnimationVariants: Record<
		AnimationVariant,
		{ container: Variants; item: Variants }
	> = {
		fadeIn: {
			container: defaultContainerVariants,
			item: {
				hidden: { opacity: 0, y: 20 },
				show: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.3,
					},
				},
				exit: {
					opacity: 0,
					y: 20,
					transition: { duration: 0.3 },
				},
			},
		},
		blurIn: {
			container: defaultContainerVariants,
			item: {
				hidden: { opacity: 0, filter: "blur(10px)" },
				show: {
					opacity: 1,
					filter: "blur(0px)",
					transition: {
						duration: 0.3,
					},
				},
				exit: {
					opacity: 0,
					filter: "blur(10px)",
					transition: { duration: 0.3 },
				},
			},
		},
		blurInUp: {
			container: defaultContainerVariants,
			item: {
				hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
				show: {
					opacity: 1,
					filter: "blur(0px)",
					y: 0,
					transition: {
						y: { duration: 0.3 },
						opacity: { duration: 0.4 },
						filter: { duration: 0.3 },
					},
				},
				exit: {
					opacity: 0,
					filter: "blur(10px)",
					y: 20,
					transition: {
						y: { duration: 0.3 },
						opacity: { duration: 0.4 },
						filter: { duration: 0.3 },
					},
				},
			},
		},
		blurInDown: {
			container: defaultContainerVariants,
			item: {
				hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
				show: {
					opacity: 1,
					filter: "blur(0px)",
					y: 0,
					transition: {
						y: { duration: 0.3 },
						opacity: { duration: 0.4 },
						filter: { duration: 0.3 },
					},
				},
			},
		},
		slideUp: {
			container: defaultContainerVariants,
			item: {
				hidden: { y: 20, opacity: 0 },
				show: {
					y: 0,
					opacity: 1,
					transition: {
						duration: 0.3,
					},
				},
				exit: {
					y: -20,
					opacity: 0,
					transition: {
						duration: 0.3,
					},
				},
			},
		},
		slideDown: {
			container: defaultContainerVariants,
			item: {
				hidden: { y: -20, opacity: 0 },
				show: {
					y: 0,
					opacity: 1,
					transition: { duration: 0.3 },
				},
				exit: {
					y: 20,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		slideLeft: {
			container: defaultContainerVariants,
			item: {
				hidden: { x: 20, opacity: 0 },
				show: {
					x: 0,
					opacity: 1,
					transition: { duration: 0.3 },
				},
				exit: {
					x: -20,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		slideRight: {
			container: defaultContainerVariants,
			item: {
				hidden: { x: -20, opacity: 0 },
				show: {
					x: 0,
					opacity: 1,
					transition: { duration: 0.3 },
				},
				exit: {
					x: 20,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		scaleUp: {
			container: defaultContainerVariants,
			item: {
				hidden: { scale: 0.5, opacity: 0 },
				show: {
					scale: 1,
					opacity: 1,
					transition: {
						duration: 0.3,
						scale: {
							type: "spring",
							damping: 15,
							stiffness: 300,
						},
					},
				},
				exit: {
					scale: 0.5,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
		scaleDown: {
			container: defaultContainerVariants,
			item: {
				hidden: { scale: 1.5, opacity: 0 },
				show: {
					scale: 1,
					opacity: 1,
					transition: {
						duration: 0.3,
						scale: {
							type: "spring",
							damping: 15,
							stiffness: 300,
						},
					},
				},
				exit: {
					scale: 1.5,
					opacity: 0,
					transition: { duration: 0.3 },
				},
			},
		},
	};

	interface TextAnimateProps extends MotionProps {
		/**
		 * The text content to animate
		 */
		content: string;
		/**
		 * The class name to be applied to the component
		 */
		class?: ClassValue;
		/**
		 * The class name to be applied to each segment
		 */
		segmentClass?: string;
		/**
		 * The delay before the animation starts
		 */
		delay?: number;
		/**
		 * The duration of the animation
		 */
		duration?: number;
		/**
		 * Custom motion variants for the animation
		 */
		variants?: Variants;
		/**
		 * The element type to render
		 */
		// as?: ElementType;
		/**
		 * How to split the text ("text", "word", "character")
		 */
		by?: AnimationType;
		/**
		 * Whether to start animation when component enters viewport
		 */
		startOnView?: boolean;
		/**
		 * Whether to animate only once
		 */
		once?: boolean;
		/**
		 * The animation preset to use
		 */
		animation?: AnimationVariant;
		/**
		 * Whether to enable accessibility features (default: true)
		 */
		accessible?: boolean;
	}

	// as = "span",
	let {
		content,
		class: className = "",
		segmentClass = "",
		delay = 0,
		duration = 0.3,
		variants,
		by = "word",
		startOnView = true,
		once = false,
		animation = "fadeIn",
		accessible = true,
	}: TextAnimateProps = $props();

	let segments: string[] = $derived.by(() => {
		if (!content) return [];
		let text = content;
		switch (by) {
			case "word":
				return text.split(/(\s+)/);
				break;
			case "character":
				return text.split("");
				break;
			case "line":
				// split by \n or \r\n or \\n
				// trim each line
				return (
					text.split("\\n").map((line) => line.trim()) ||
					text.split("\n").map((line) => line.trim())
				);
				break;
			case "text":
			default:
				return [text];
				break;
		}
	});

	let finalVariants = $derived(
		variants
			? {
					container: {
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: {
								opacity: { duration: 0.01, delay },
								delayChildren: delay,
								staggerChildren: duration / segments.length,
							},
						},
						exit: {
							opacity: 0,
							transition: {
								staggerChildren: duration / segments.length,
								staggerDirection: -1,
							},
						},
					},
					item: variants,
				}
			: animation
				? {
						container: {
							...defaultItemAnimationVariants[animation].container,
							show: {
								...defaultItemAnimationVariants[animation].container.show,
								transition: {
									delayChildren: delay,
									staggerChildren: duration / segments.length,
								},
							},
							exit: {
								...defaultItemAnimationVariants[animation].container.exit,
								transition: {
									staggerChildren: duration / segments.length,
									staggerDirection: -1,
								},
							},
						},
						item: defaultItemAnimationVariants[animation].item,
					}
				: { container: defaultContainerVariants, item: defaultItemVariants }
	);

	// $inspect(segments, "Segments");
	// $inspect(content, "Content");
</script>

<AnimatePresence mode="popLayout">
	<motion.div
		variants={finalVariants.container as Variants}
		initial="hidden"
		whileInView={startOnView ? "show" : undefined}
		animate={startOnView ? undefined : "show"}
		exit="exit"
		inViewOptions={{ once }}
		aria-label={accessible ? segments.join(" ") : undefined}
		class={cn("whitespace-pre-wrap", className)}
	>
		{#if accessible}
			<span class="sr-only">{content}</span>
		{/if}
		{#each segments as segment, i}
			<motion.span
				variants={finalVariants.item}
				custom={i * staggerTimings[by]}
				class={cn(
					by === "line" ? "block" : "inline-block whitespace-pre",
					by === "character" && "",
					segmentClass
				)}
				aria-hidden={accessible ? true : undefined}
			>
				{segment}
			</motion.span>
		{/each}
	</motion.div>
</AnimatePresence>
