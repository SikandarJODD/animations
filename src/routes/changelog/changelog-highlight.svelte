<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		color = "#febc2e",
		children,
	}: {
		color?: string;
		children: Snippet;
	} = $props();
</script>

<mark class="highlight-badge" style:--marker-color={color}>
	{@render children()}
</mark>

<style>
	.highlight-badge {
		display: inline;
		margin: -0.04em -0.06em;
		padding: 0.04em 0.2em;
		border-radius: 0.2em 0.25em;
		background: transparent;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
		background-image: linear-gradient(
			75deg,
			color-mix(in srgb, var(--marker-color), transparent 50%),
			color-mix(in srgb, var(--marker-color), transparent 85%) 4%,
			color-mix(in srgb, var(--marker-color), transparent 70%) 96%,
			color-mix(in srgb, var(--marker-color), transparent 40%)
		);
		color: inherit;
	}
	:global(.dark) .highlight-badge {
		background-color: color-mix(in srgb, var(--marker-color) 14%, transparent) !important;
		background-image: none !important;
		color: color-mix(in srgb, var(--marker-color) 85%, transparent) !important;
		/* padding: 0.04em 0.20em; */
	}
</style>
