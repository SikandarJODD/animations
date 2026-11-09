<script lang="ts">
	import SvelteIcon from "#lib/components/icons/svelte.svelte";
	import { ExplodingInput } from "#lib/components/spell/exploding-input/index.js";

	const iconBursts = [
		"h-7 w-7 opacity-100",
		"h-6 w-6 opacity-85",
		"h-8 w-8 opacity-95",
		"h-5 w-5 opacity-75",
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="Svelte Logo Explosion"
			class="bg-background h-10 w-80 border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			class="z-50"
			items={iconBursts}
			count={3}
			duration={2.8}
			gravity={0.32}
			direction={{ horizontal: "right", vertical: "top" }}
			scale={{ value: 0.92, randomize: true, randomVariation: 18 }}
			rotation={{ animate: true }}
		>
			{#snippet children(sizeClass)}
				<SvelteIcon class={sizeClass} />
			{/snippet}
		</ExplodingInput>
	</label>
</div>
