<script lang="ts">
	import { AnimatedCheckbox } from "#lib/components/spell/animated-checkbox/index.js";

	let checked = $state(false);
</script>

<div class="mx-auto flex w-full max-w-sm flex-col gap-4 py-8">
	<AnimatedCheckbox
		title="Controlled State Example"
		{checked}
		onCheckedChange={(value) => (checked = value)}
	/>

	<p class="text-muted-foreground text-sm">State: {checked ? "Checked" : "Unchecked"}</p>
</div>
