<script lang="ts" generics="T">
	import { cn, type WithoutChildren } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLAttributes } from "svelte/elements";

	type TextMarqueeProps = WithoutChildren<Omit<HTMLAttributes<HTMLDivElement>, "prefix">> & {
		items: T[];
		children: Snippet<[T, number]>;
		prefix?: Snippet;
		class?: ClassValue;
		speed?: number;
		height?: number;
		itemHeight?: number;
	};

	let {
		items,
		children,
		prefix,
		class: className,
		style: styleAttribute,
		speed = 1,
		height = 200,
		itemHeight = 40,
		...props
	}: TextMarqueeProps = $props();

	let count = $derived(items.length);
	let safeSpeed = $derived(Math.max(speed, 0.01));
	let safeHeight = $derived(Math.max(height, 0));
	let safeItemHeight = $derived(Math.max(itemHeight, 1));

	let rootStyle = $derived.by(() => {
		let styles: string[] = [];

		if (styleAttribute) {
			styles.push(String(styleAttribute));
		}

		return styles.join("; ");
	});

	let viewportStyle = $derived(`height: ${safeHeight}px;`);
	let trackStyle = $derived.by(
		() =>
			`--spell-text-marquee-count: ${count}; --spell-text-marquee-speed: ${safeSpeed}; --spell-text-marquee-item-height: ${safeItemHeight}px;`
	);
</script>

<div {...props} class={cn("spell-text-marquee relative flex", className)} style={rootStyle}>
	<div
		class="spell-text-marquee__content relative flex h-min w-min flex-row items-center gap-1 overflow-hidden"
	>
		{#if prefix}
			<div class="spell-text-marquee__prefix relative size-auto whitespace-pre">
				{@render prefix()}
			</div>
		{/if}

		{#if count > 0}
			<div
				class="spell-text-marquee__viewport relative w-auto overflow-hidden opacity-100"
				style={viewportStyle}
			>
				<div class="spell-text-marquee__track relative h-full" style={trackStyle}>
					{#each items as item, index (index)}
						<div
							class="spell-text-marquee__item flex items-center"
							style={`--spell-text-marquee-index: ${index};`}
						>
							{@render children(item, index)}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	@keyframes spell-text-marquee-slide-vertical {
		to {
			transform: translateY(var(--spell-text-marquee-destination));
		}
	}

	.spell-text-marquee__viewport {
		mask-image: linear-gradient(
			rgba(0, 0, 0, 0) 0%,
			rgb(0, 0, 0) 43.6902%,
			rgba(0, 0, 0, 0) 100%
		);
		-webkit-mask-image: linear-gradient(
			rgba(0, 0, 0, 0) 0%,
			rgb(0, 0, 0) 43.6902%,
			rgba(0, 0, 0, 0) 100%
		);
	}

	.spell-text-marquee__item {
		--spell-text-marquee-origin: calc(
			(var(--spell-text-marquee-count) - var(--spell-text-marquee-index)) * 100%
		);
		--spell-text-marquee-destination: calc((var(--spell-text-marquee-index) + 1) * -100%);
		--spell-text-marquee-duration: calc(
			var(--spell-text-marquee-speed) * var(--spell-text-marquee-count) * 1s
		);
		--spell-text-marquee-delay: calc(
			(var(--spell-text-marquee-duration) / var(--spell-text-marquee-count)) *
				var(--spell-text-marquee-index) - var(--spell-text-marquee-duration)
		);

		height: var(--spell-text-marquee-item-height);
		transform: translateY(var(--spell-text-marquee-origin));
		animation: spell-text-marquee-slide-vertical var(--spell-text-marquee-duration)
			var(--spell-text-marquee-delay) infinite linear;
		will-change: transform;
	}
</style>
