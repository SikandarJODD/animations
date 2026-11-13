<script lang="ts">
	import { AnimatedCircularProgressBar } from "#lib/components/magic/animated-circular-progress-bar/index.js";
	import { mode } from "mode-watcher";
	import { onMount, onDestroy } from "svelte";

	let value = $state(0);
	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		const handleIncrement = () => {
			value = value === 100 ? 0 : value + 10;
		};

		handleIncrement();
		interval = setInterval(handleIncrement, 2000);
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<AnimatedCircularProgressBar
	{value}
	gaugePrimaryColor={mode.current === "dark" ? "#34d399" : "rgb(79 70 229)"}
	gaugeSecondaryColor={mode.current === "dark"
		? "rgba(255, 255, 255, 0.1)"
		: "rgba(0, 0, 0, 0.1)"}
/>
