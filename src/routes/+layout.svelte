<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import Navbar from "$lib/components/layout/Navbar.svelte";
	import { ModeWatcher, toggleMode } from "mode-watcher";
	import { activeElement, PressedKeys } from "runed";

	let { children } = $props();
	let keys = new PressedKeys();
	keys.onKeys(["d"], () => {
		if (
			activeElement.current?.localName !== "input" &&
			activeElement.current?.localName !== "textarea"
		) {
			toggleMode();
		}
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher defaultMode="dark" />

<main class="w-full pt-16">
	<Navbar />
	{@render children()}
</main>
