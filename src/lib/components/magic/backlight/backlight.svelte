<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
		class?: string;
		blur?: number;
	};
	let { children, class: className, blur = 10 }: Props = $props();
	let id = $props.id();
</script>

<div class={className}>
	<svg width="0" height="0" aria-hidden="true">
		<filter {id} y="-50%" x="-50%" width="200%" height="200%">
			<feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blurred"
			></feGaussianBlur>
			<feColorMatrix type="saturate" in="blurred" values="4"></feColorMatrix>
			<feComposite in="SourceGraphic" operator="over"></feComposite>
		</filter>
	</svg>
	<div style="filter: url(#{id})">
		{@render children?.()}
	</div>
</div>
