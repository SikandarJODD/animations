<script lang="ts" generics="T">
	import { cn, type WithoutChildren } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = WithoutChildren<HTMLAttributes<HTMLDivElement>> & {
		items: T[];
		children: Snippet<[T, number]>;
		stagger?: number;
		count?: number;
		class?: string;
		duration?: number;
		interval?: number;
		initialDelay?: number;
	};

	let {
		items,
		children,
		stagger = 0.14,
		count,
		class: className,
		duration = 600,
		interval = 2500,
		initialDelay = 500,
		...props
	}: Props = $props();

	let index = $state(0);
	let nextIndex = $state(0);
	let animate = $state(false);

	const groups = $derived.by(() => {
		if (items.length === 0) {
			return [] as T[][];
		}

		const groupSize = count && count > 0 ? count : items.length;
		const result: T[][] = [];

		for (let i = 0; i < items.length; i += groupSize) {
			result.push(items.slice(i, i + groupSize));
		}

		return result;
	});

	const groupsLength = $derived(groups.length);
	const canLoop = $derived(groupsLength > 1);

	$effect(() => {
		index = 0;
		nextIndex = groupsLength > 1 ? 1 : 0;
		animate = false;
	});

	$effect(() => {
		if (!canLoop) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			animate = true;
		}, initialDelay);

		return () => {
			window.clearTimeout(timeoutId);
		};
	});

	$effect(() => {
		if (!animate || !canLoop) {
			return;
		}

		const intervalId = window.setInterval(() => {
			const newIndex = (index + 1) % groupsLength;
			index = newIndex;
			nextIndex = (newIndex + 1) % groupsLength;
		}, interval);

		return () => {
			window.clearInterval(intervalId);
		};
	});
</script>

{#if groupsLength > 0}
	<div class="grid w-full max-w-[720px] place-items-center" {...props}>
		{#each groups as group, groupIndex (groupIndex)}
			{@const isCurrent = groupIndex === index}
			{@const isNext = canLoop && animate && groupIndex === nextIndex}
			{@const isVisible = canLoop ? isCurrent || isNext : isCurrent}

			<div
				class={cn("flex w-full justify-center gap-10", className)}
				style:grid-area="1 / 1"
				style:pointer-events={isVisible ? "auto" : "none"}
			>
				{#each group as item, itemIndex (`${groupIndex}-${itemIndex}`)}
					<div
						class:logo-enter={animate && isVisible && !isCurrent}
						class:logo-exit={animate && isVisible && isCurrent}
						class:logo-hidden={(animate && !isVisible) || (!animate && !isCurrent)}
						class:logo-static={!animate && isCurrent}
						style:animation-delay={`${itemIndex * stagger}s`}
						style:animation-duration={`${duration}ms`}
						style:animation-fill-mode="both"
						style:animation-timing-function="ease"
					>
						{@render children(item, itemIndex)}
					</div>
				{/each}
			</div>
		{/each}
	</div>
{/if}

<style>
	@keyframes logos-enter {
		0% {
			transform: translateY(40px);
			filter: blur(4px);
			opacity: 0;
		}

		100% {
			transform: translateY(0);
			filter: blur(0);
			opacity: 1;
		}
	}

	@keyframes logos-exit {
		0% {
			transform: translateY(0);
			filter: blur(0);
			opacity: 1;
		}

		100% {
			transform: translateY(-40px);
			filter: blur(4px);
			opacity: 0;
		}
	}

	.logo-enter {
		animation-name: logos-enter;
	}

	.logo-exit {
		animation-name: logos-exit;
	}

	.logo-hidden {
		opacity: 0;
	}

	.logo-static {
		opacity: 1;
	}
</style>
