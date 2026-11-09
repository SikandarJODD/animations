<script lang="ts">
	import { ExplodingInput } from "#lib/components/spell/exploding-input/index.js";
</script>

<div class="flex justify-center py-8">
	<label class="block w-full max-w-sm">
		<input
			type="text"
			placeholder="Type to launch particles"
			class="bg-background h-10 w-full border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput class="z-50" count={2} duration={2.2} gravity={0.45} />
	</label>
</div>
