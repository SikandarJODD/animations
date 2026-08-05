<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";

	type Step = {
		id: number;
		label: string;
	};

	let nextId = 4;
	let steps = $state<Step[]>([
		{ id: 1, label: "Start" },
		{ id: 2, label: "Review" },
		{ id: 3, label: "Complete" },
	]);

	function addNode() {
		if (steps.length >= 6) return;
		steps = [...steps, { id: nextId, label: `Step ${nextId++}` }];
	}

	function removeNode() {
		if (steps.length <= 1) return;
		steps = steps.slice(0, -1);
	}
</script>

<div class="w-full space-y-6">
	<div class="flex justify-center gap-2">
		<button
			type="button"
			class="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm disabled:opacity-50"
			disabled={steps.length >= 6}
			onclick={addNode}>Add node</button
		>
		<button
			type="button"
			class="ring-kumo-hairline rounded-md px-3 py-1.5 text-sm ring disabled:opacity-50"
			disabled={steps.length <= 1}
			onclick={removeNode}>Remove node</button
		>
	</div>

	<div class="overflow-auto px-2 py-4">
		<Flow.Root canvas={false} align="center">
			{#each steps as step (step.id)}
				<Flow.Node id={String(step.id)}>{step.label}</Flow.Node>
			{/each}
		</Flow.Root>
	</div>
</div>
