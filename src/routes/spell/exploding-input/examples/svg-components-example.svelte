<script lang="ts">
	import { ExplodingInput } from "#lib/components/spell/exploding-input/index.js";
	import BoltIcon from "./bolt-icon.svelte";
	import DiamondIcon from "./diamond-icon.svelte";
	import OrbitIcon from "./orbit-icon.svelte";
	import SparkIcon from "./spark-icon.svelte";

	const icons = [
		{ component: SparkIcon, className: "text-amber-500" },
		{ component: OrbitIcon, className: "text-sky-500" },
		{ component: BoltIcon, className: "text-fuchsia-500" },
		{ component: DiamondIcon, className: "text-emerald-500" },
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="custom svg particles"
			class="bg-background h-10 w-80 border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			items={icons}
			count={3}
			duration={2.9}
			gravity={0.42}
			scale={{ value: 1, randomize: true, randomVariation: 20 }}
			rotation={{ animate: true }}
			direction={{ horizontal: "right", vertical: "top" }}
		>
			{#snippet children(item)}
				<svelte:component
					this={item.component}
					class={`h-8 w-8 drop-shadow-[0_10px_18px_rgba(15,23,42,0.18)] ${item.className}`}
				/>
			{/snippet}
		</ExplodingInput>
	</label>
</div>
