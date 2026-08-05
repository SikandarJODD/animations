<script lang="ts">
	import * as Flow from "$lib/components/magic/flow";

	let orientation = $state<"horizontal" | "vertical">("horizontal");
</script>

<div class="w-full space-y-6">
	<div class="flex justify-center gap-2">
		<button
			type="button"
			class="ring-kumo-hairline rounded-md px-3 py-1.5 text-sm ring"
			class:bg-kumo-overlay={orientation === "horizontal"}
			aria-pressed={orientation === "horizontal"}
			onclick={() => (orientation = "horizontal")}>Horizontal</button
		>
		<button
			type="button"
			class="ring-kumo-hairline rounded-md px-3 py-1.5 text-sm ring"
			class:bg-kumo-overlay={orientation === "vertical"}
			aria-pressed={orientation === "vertical"}
			onclick={() => (orientation = "vertical")}>Vertical</button
		>
	</div>

	<div class="flex min-h-64 items-center justify-center overflow-auto">
		{#key orientation}
			<Flow.Root canvas={false} {orientation} align="center">
				<Flow.Node>Start</Flow.Node>
				<Flow.Node>Process</Flow.Node>
				<Flow.Node>Complete</Flow.Node>
			</Flow.Root>
		{/key}
	</div>
</div>
