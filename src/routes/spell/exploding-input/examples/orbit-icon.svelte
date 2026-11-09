<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = "" }: Props = $props();
</script>

<svg viewBox="0 0 32 32" fill="none" class={className} aria-hidden="true">
	<circle cx="16" cy="16" r="4.5" fill="currentColor" />
	<ellipse cx="16" cy="16" rx="12" ry="5.5" stroke="currentColor" stroke-width="2" />
	<ellipse
		cx="16"
		cy="16"
		rx="12"
		ry="5.5"
		stroke="currentColor"
		stroke-width="2"
		transform="rotate(60 16 16)"
	/>
</svg>
