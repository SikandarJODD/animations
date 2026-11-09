<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = "" }: Props = $props();
</script>

<svg viewBox="0 0 32 32" fill="none" class={className} aria-hidden="true">
	<path d="M9 6h14l5 7-12 13L4 13l5-7z" fill="currentColor" />
	<path d="M9 6l7 20L23 6" stroke="white" stroke-opacity="0.5" stroke-width="1.5" />
</svg>
