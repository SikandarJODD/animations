<script lang="ts">
	import { CoolMode } from "#lib/components/magic/cool-mode/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
</script>

<div class="relative flex justify-center">
	<CoolMode
		options={{
			particle:
				"https://raw.githubusercontent.com/sveltejs/branding/refs/heads/master/svelte-logo.png",
		}}
	>
		<Button>Svelte Image</Button>
	</CoolMode>
</div>
