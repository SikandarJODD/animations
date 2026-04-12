<script lang="ts">
	import { cn } from "$lib/utils";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Variant =
		| "default"
		| "secondary"
		| "destructive"
		| "red"
		| "blue"
		| "green"
		| "yellow"
		| "purple"
		| "pink"
		| "orange"
		| "cyan"
		| "indigo"
		| "violet"
		| "rose"
		| "amber"
		| "lime"
		| "emerald"
		| "sky"
		| "slate"
		| "fuchsia";

	const variantMap: Record<Variant, string> = {
		default: "",
		secondary: "text-secondary-foreground",
		destructive: "text-destructive dark:text-destructive-foreground",
		red: "text-red-600 dark:text-red-400",
		blue: "text-blue-600 dark:text-blue-400",
		green: "text-green-600 dark:text-green-400",
		yellow: "text-yellow-600 dark:text-yellow-400",
		purple: "text-purple-600 dark:text-purple-400",
		pink: "text-pink-600 dark:text-pink-400",
		orange: "text-orange-600 dark:text-orange-400",
		cyan: "text-cyan-600 dark:text-cyan-400",
		indigo: "text-indigo-600 dark:text-indigo-400",
		violet: "text-violet-600 dark:text-violet-400",
		rose: "text-rose-600 dark:text-rose-400",
		amber: "text-amber-600 dark:text-amber-400",
		lime: "text-lime-600 dark:text-lime-400",
		emerald: "text-emerald-600 dark:text-emerald-400",
		sky: "text-sky-600 dark:text-sky-400",
		slate: "text-slate-600 dark:text-slate-400",
		fuchsia: "text-fuchsia-600 dark:text-fuchsia-400",
	};

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		class?: string;
		variant?: Variant;
		duration?: number;
		delay?: number;
		repeatDelay?: number;
	}

	let {
		children,
		class: className,
		variant = "default",
		duration = 1.5,
		delay = 1.5,
		repeatDelay = 1.5,
		...props
	}: Props = $props();

	let element = $state<HTMLSpanElement | null>(null);

	const START = -100;
	const END = 250;

	$effect(() => {
		if (!element) return;

		const node = element;
		node.style.backgroundPositionX = `${END}%`;

		let rafId = 0;
		let startTime: number | null = null;
		let pauseTimer = 0;
		let destroyed = false;

		function sweep(time: number) {
			if (destroyed) return;
			if (startTime === null) startTime = time;

			const elapsed = (time - startTime) / 1000;
			const progress = Math.min(elapsed / duration, 1);
			const pos = START + progress * (END - START);

			node.style.backgroundPositionX = `${pos}%`;

			if (progress < 1) {
				rafId = requestAnimationFrame(sweep);
			} else {
				pauseTimer = window.setTimeout(() => {
					if (destroyed) return;
					startTime = null;
					rafId = requestAnimationFrame(sweep);
				}, repeatDelay * 1000);
			}
		}

		const initialTimer = window.setTimeout(() => {
			if (destroyed) return;
			rafId = requestAnimationFrame(sweep);
		}, delay * 1000);

		return () => {
			destroyed = true;
			clearTimeout(initialTimer);
			clearTimeout(pauseTimer);
			cancelAnimationFrame(rafId);
		};
	});
</script>

<div class="group overflow-hidden" {...props}>
	<div>
		<span
			bind:this={element}
			class={cn(
				"inline-block [--shimmer-contrast:rgba(255,255,255,0.6)] dark:[--shimmer-contrast:rgba(0,0,0,0.5)]",
				variantMap[variant],
				className
			)}
			style="
				-webkit-text-fill-color: transparent;
				background: currentColor linear-gradient(to right, currentColor 0%, var(--shimmer-contrast) 40%, var(--shimmer-contrast) 60%, currentColor 100%);
				-webkit-background-clip: text;
				background-clip: text;
				background-repeat: no-repeat;
				background-size: 50% 200%;
				background-position-x: 250%;
			"
		>
			{@render children?.()}
		</span>
	</div>
</div>
