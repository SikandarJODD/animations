<script lang="ts">
	import { ExplodingInput } from "#lib/components/spell/exploding-input/index.js";

	const emojis = [
		"\u{1F929}",
		"\u{1F47E}",
		"\u{1F63A}",
		"\u{1F47B}",
		"\u{1F383}",
		"\u{1F5A4}",
		"\u{1F5EF}",
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="try@spell.here"
			class="bg-background h-10 w-72 border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			class="z-50"
			items={emojis}
			direction={{ horizontal: "left", vertical: "top" }}
			gravity={0.5}
			duration={3}
			count={3}
		>
			{#snippet children(item)}
				<span class="text-4xl">{item}</span>
			{/snippet}
		</ExplodingInput>
	</label>
</div>
