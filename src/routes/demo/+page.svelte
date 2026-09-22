<script lang="ts">
	import type { Component } from "svelte";
	import { PressedKeys } from "runed";
	import {
		Basic,
		CenteredAlignment,
		ComplexFlow,
		CustomAnchorPoints,
		CustomNodeStyling,
		DisabledNodes,
		DynamicNodes,
		InteractiveCustomNodes,
		JunctionMarkers,
		NestedNodeList,
		OverflowDetection,
		PanningLargeDiagrams,
		ParallelAlignmentComparison,
		ParallelBranches,
		ParallelNodeAdjustment,
		ResponsiveOrientationToggle,
		Simple,
		Vertical,
		VerticalParallel,
	} from "../magic/docs/components/flow/examples";

	type FlowExample = {
		name: string;
		component: Component;
	};

	const examples: FlowExample[] = [
		{ name: "Basic", component: Basic },
		{ name: "Sequential Flow", component: Simple },
		{ name: "Parallel Branches", component: ParallelBranches },
		{ name: "Vertical Orientation", component: Vertical },
		{ name: "Custom Node Styling", component: CustomNodeStyling },
		{ name: "Centered Alignment", component: CenteredAlignment },
		{ name: "Complex Flow", component: ComplexFlow },
		{ name: "Custom Anchor Points", component: CustomAnchorPoints },
		{ name: "Panning Large Diagrams", component: PanningLargeDiagrams },
		{ name: "Disabled Nodes", component: DisabledNodes },
		{ name: "Parallel Node Alignment", component: ParallelNodeAdjustment },
		{ name: "Nested Node Lists in Parallel", component: NestedNodeList },
		{ name: "Vertical Parallel", component: VerticalParallel },
		{ name: "Junction Markers", component: JunctionMarkers },
		{ name: "Overflow Detection", component: OverflowDetection },
		{ name: "Parallel Start vs End Alignment", component: ParallelAlignmentComparison },
		{ name: "Responsive Orientation Toggle", component: ResponsiveOrientationToggle },
		{ name: "Dynamically Adding and Removing Nodes", component: DynamicNodes },
		{ name: "Interactive Custom Nodes", component: InteractiveCustomNodes },
	];

	let currentIndex = $state(0);
	let currentExample = $derived(examples[currentIndex]);
	let CurrentExample = $derived(currentExample.component);

	function showNext() {
		currentIndex = (currentIndex + 1) % examples.length;
	}

	function showPrevious() {
		currentIndex = (currentIndex - 1 + examples.length) % examples.length;
	}

	const pressedKeys = new PressedKeys();
	pressedKeys.onKeys("arrowright", showNext);
	pressedKeys.onKeys("arrowleft", showPrevious);
</script>

<svelte:head>
	<title>Flow Examples | Svelte Animations</title>
</svelte:head>

<section
	class="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden px-4 pt-10 pb-24 sm:px-8"
>
	<div class="flex w-full max-w-6xl flex-col items-center gap-6">
		<div
			class="flex min-h-72 w-full items-center justify-center overflow-auto px-2 py-4 sm:min-h-80 sm:px-10"
		>
			{#key currentIndex}
				<CurrentExample />
			{/key}
		</div>
	</div>

	<p
		class="text-muted-foreground absolute bottom-40 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap"
	>
		Built by Bhide Svelte
	</p>
</section>
