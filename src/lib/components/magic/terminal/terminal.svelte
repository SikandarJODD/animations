<script lang="ts">
	import type { ClassValue } from "svelte/elements";
	import { onMount, setContext } from "svelte";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import { watch } from "runed";

	interface TerminalProps {
		children: Snippet;
		class?: ClassValue;
		sequence?: boolean;
		startOnView?: boolean;
	}

	let {
		children,
		class: className,
		sequence = true,
		startOnView = true,
	}: TerminalProps = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let isInView = $state(false);
	let activeIndex = $state(0);

	const sequenceHasStarted = $derived(sequence ? !startOnView || isInView : false);

	// Set context for child components - always set it, check sequence inside
	let useSequence = $derived(sequence);
	watch(
		() => useSequence,
		() => {
			// setContext("terminal-sequence", val);
			setContext(
				"terminal-sequence",
				useSequence
					? {
							get activeIndex() {
								return activeIndex;
							},
							get sequenceStarted() {
								return sequenceHasStarted;
							},
							completeItem: (index: number) => {
								if (index === activeIndex) {
									activeIndex = activeIndex + 1;
								}
							},
						}
					: null
			);
		}
	);

	onMount(() => {
		if (!startOnView || !sequence) {
			isInView = true;
			return;
		}

		if (!containerRef) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					isInView = true;
					observer.disconnect();
				}
			},
			{
				threshold: 0.3,
			}
		);

		observer.observe(containerRef);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={containerRef}
	class={cn(
		"border-border bg-background z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border",
		className
	)}
>
	<div class="border-border flex flex-col gap-y-2 border-b p-4">
		<div class="flex flex-row gap-x-2">
			<div class="h-2 w-2 rounded-full bg-red-500"></div>
			<div class="h-2 w-2 rounded-full bg-yellow-500"></div>
			<div class="h-2 w-2 rounded-full bg-green-500"></div>
		</div>
	</div>
	<pre class="p-4">
    <code class="grid gap-y-1 overflow-auto">{@render children()}</code>
  </pre>
</div>
