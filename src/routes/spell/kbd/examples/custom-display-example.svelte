<script lang="ts">
	import { Kbd } from "#lib/components/spell/keyboard-shortcut/index.js";
</script>

<div class="flex flex-col items-center gap-4">
	<p class="text-muted-foreground text-sm">Press M key to activate</p>
	<Kbd keys={[{ display: "HOLD", key: "M" }]} listenToKeyboard />
</div>
