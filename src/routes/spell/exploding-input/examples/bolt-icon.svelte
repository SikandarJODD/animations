<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = "" }: Props = $props();
</script>

<svg viewBox="0 0 32 32" fill="none" class={className} aria-hidden="true">
	<path d="M18 2L8 18h6l-2 12 12-18h-6l2-10z" fill="currentColor" />
</svg>
