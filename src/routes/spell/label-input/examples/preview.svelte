<script lang="ts">
	import { LabelInput } from "#lib/components/spell/label-input/index.js";

	let email = $state("");
</script>

<div class="mx-auto flex w-full max-w-sm flex-col gap-3 py-8">
	<LabelInput label="Email address" placeholder="hello@spell.dev" bind:value={email} />
	<p class="text-muted-foreground text-sm">Value: {email || "Waiting for input"}</p>
</div>
