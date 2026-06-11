<script lang="ts">
	import { cn } from "$lib/utils";

	interface Props {
		tabs: string[];
		value?: string;
	}

	const uid = $props.id();

	let {
		tabs = [],
		value = $bindable<string | undefined>(),
	}: Props = $props();

	let containerRef = $state<HTMLDivElement | null>(null);
	let activeTabRef = $state<HTMLDivElement | null>(null);
	let tabButtons = $state<HTMLButtonElement[]>([]);

	let selectedTab = $derived.by(() => {
		const fallbackTab = tabs[0] ?? "";

		if (!value) {
			return fallbackTab;
		}

		return tabs.includes(value) ? value : fallbackTab;
	});

	function selectTab(tab: string) {
		value = tab;
	}

	function updateClipPath() {
		const container = containerRef;
		const track = activeTabRef;

		if (!container || !track || track.offsetWidth === 0) {
			return;
		}

		const activeIndex = tabs.indexOf(selectedTab);
		const activeButton = activeIndex >= 0 ? tabButtons[activeIndex] : undefined;

		if (!activeButton) {
			return;
		}

		const clipLeft = activeButton.offsetLeft;
		const clipRight = clipLeft + activeButton.offsetWidth;
		const leftInset = (clipLeft / track.offsetWidth) * 100;
		const rightInset = 100 - (clipRight / track.offsetWidth) * 100;

		container.style.clipPath =
			`inset(0 ${rightInset.toFixed(3)}% 0 ${leftInset.toFixed(3)}% round 17px)`;
	}

	$effect(() => {
		selectedTab;
		tabButtons[tabs.indexOf(selectedTab)];

		updateClipPath();
	});

	$effect(() => {
		if (!activeTabRef) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			updateClipPath();
		});

		resizeObserver.observe(activeTabRef);

		return () => {
			resizeObserver.disconnect();
		};
	});
</script>

<div class={cn("relative mx-auto flex w-fit flex-col items-center rounded-full")}>
	<div
		bind:this={containerRef}
		aria-hidden="true"
		class="pointer-events-none absolute z-10 w-full overflow-hidden [clip-path:inset(0_75%_0_0_round_17px)] [transition:clip-path_0.25s_ease]"
	>
		<div class="relative flex w-full justify-center bg-primary">
			{#each tabs as tab, index (index)}
				<button
					type="button"
					class="flex h-8 items-center rounded-full p-3 font-medium whitespace-nowrap text-primary-foreground text-sm/5.5 max-sm:last:hidden"
					tabindex={-1}
				>
					{tab}
				</button>
			{/each}
		</div>
	</div>

	<div bind:this={activeTabRef} class="relative flex w-full justify-center">
		{#each tabs as tab, index (index)}
			<button
				bind:this={tabButtons[index]}
				type="button"
				class="flex h-8 items-center rounded-full p-3 font-medium whitespace-nowrap text-muted-foreground text-sm/5.5 transition-colors focus-visible:outline-none focus-visible:ring-2 max-sm:last:hidden"
				aria-pressed={selectedTab === tab}
				data-state={selectedTab === tab ? "active" : "inactive"}
				id={`${uid}-tab-${index}`}
				onclick={() => selectTab(tab)}
			>
				{tab}
			</button>
		{/each}
	</div>
</div>
