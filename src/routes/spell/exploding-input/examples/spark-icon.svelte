<script lang="ts">
	interface Props {
		class?: string;
	}

	let { class: className = "" }: Props = $props();
</script>

<svg viewBox="0 0 32 32" fill="none" class={className} aria-hidden="true">
	<path d="M16 3l2.8 9.2L28 15l-9.2 2.8L16 27l-2.8-9.2L4 15l9.2-2.8L16 3z" fill="currentColor" />
</svg>
