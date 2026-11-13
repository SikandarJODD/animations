<script lang="ts">
	import { LabelInput } from "#lib/components/spell/label-input/index.js";

	let password = $state("");
	let project = $state("");
</script>

<div class="mx-auto grid w-full max-w-2xl gap-4 py-8 sm:grid-cols-2">
	<LabelInput
		type="password"
		label="Password"
		placeholder="Create a password"
		ringColor="violet"
		bind:value={password}
	/>

	<LabelInput
		label="Project Name"
		placeholder="Nebula"
		ringColor="emerald"
		bind:value={project}
	/>
</div>
