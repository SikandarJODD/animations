<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { cn } from "#lib/utils.js";
	import { onMount } from "svelte";

	interface Props {
		number?: number;
		minDelay?: number;
		maxDelay?: number;
		minDuration?: number;
		maxDuration?: number;
		angle?: number;
		class?: ClassValue;
	}

	let {
		number = 20,
		minDelay = 0.2,
		maxDelay = 1.2,
		minDuration = 2,
		maxDuration = 10,
		angle = 215,
		class: className,
	}: Props = $props();

	type MeteorStyle = {
		angle: string;
		top: string;
		left: string;
		animationDelay: string;
		animationDuration: string;
	};

	let meteorStyles: MeteorStyle[] = $state([]);

	let updateMeteors = () => {
		const styles = [...new Array(number)].map(() => ({
			angle: -angle + "deg",
			top: "-5%",
			left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
			animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
			animationDuration:
				Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s",
		}));
		meteorStyles = styles;
	};
	onMount(() => {
		updateMeteors();
	});
</script>

{#each meteorStyles as style, idx (idx)}
	<span
		style="--angle: {style.angle}; top: {style.top}; left: {style.left}; animation-delay: {style.animationDelay}; animation-duration: {style.animationDuration};"
		class={cn(
			"animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
			className
		)}
	>
		<div
			class="pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-zinc-500 to-transparent"
		></div>
	</span>
{/each}
