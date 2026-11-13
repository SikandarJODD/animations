<script lang="ts">
	import { cn } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	type Props = HTMLAttributes<HTMLDivElement> & {
		size?: number;
		color?: string;
	};

	let bars = Array.from({ length: 12 }, (_, index) => index);

	let {
		size = 20,
		color = "currentColor",
		class: className,
		style: styleAttribute,
		...restProps
	}: Props = $props();
</script>

<div
	data-slot="bar-spinner"
	class={cn("bars-spinner-wrapper", className)}
	style="--spinner-size: {size}px; --spinner-color: {color}; {styleAttribute}"
	{...restProps}
>
	<div class="bars-spinner">
		{#each bars as bar (`spinner-bar-${bar}`)}
			<div class="bar"></div>
		{/each}
	</div>
</div>

<style>
	.bars-spinner-wrapper {
		height: var(--spinner-size, 20px);
		width: var(--spinner-size, 20px);
	}

	.bars-spinner {
		position: relative;
		top: 50%;
		left: 50%;
		height: var(--spinner-size, 20px);
		width: var(--spinner-size, 20px);
	}

	.bar {
		position: absolute;
		top: -3.9%;
		left: -10%;
		width: 24%;
		height: 8%;
		border-radius: 6px;
		background: var(--spinner-color);
		animation: bar-spinner-fade 1.2s linear infinite;
	}

	.bar:nth-child(1) {
		animation-delay: -1.2s;
		transform: rotate(0.0001deg) translate(146%);
	}

	.bar:nth-child(2) {
		animation-delay: -1.1s;
		transform: rotate(30deg) translate(146%);
	}

	.bar:nth-child(3) {
		animation-delay: -1s;
		transform: rotate(60deg) translate(146%);
	}

	.bar:nth-child(4) {
		animation-delay: -0.9s;
		transform: rotate(90deg) translate(146%);
	}

	.bar:nth-child(5) {
		animation-delay: -0.8s;
		transform: rotate(120deg) translate(146%);
	}

	.bar:nth-child(6) {
		animation-delay: -0.7s;
		transform: rotate(150deg) translate(146%);
	}

	.bar:nth-child(7) {
		animation-delay: -0.6s;
		transform: rotate(180deg) translate(146%);
	}

	.bar:nth-child(8) {
		animation-delay: -0.5s;
		transform: rotate(210deg) translate(146%);
	}

	.bar:nth-child(9) {
		animation-delay: -0.4s;
		transform: rotate(240deg) translate(146%);
	}

	.bar:nth-child(10) {
		animation-delay: -0.3s;
		transform: rotate(270deg) translate(146%);
	}

	.bar:nth-child(11) {
		animation-delay: -0.2s;
		transform: rotate(300deg) translate(146%);
	}

	.bar:nth-child(12) {
		animation-delay: -0.1s;
		transform: rotate(330deg) translate(146%);
	}

	@keyframes bar-spinner-fade {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0.15;
		}
	}
</style>
