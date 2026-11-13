<script lang="ts">
	import { Kbd } from "#lib/components/spell/keyboard-shortcut/index.js";
</script>

<div class="flex flex-wrap gap-4">
	<Kbd keys={["command"]} listenToKeyboard />
	<Kbd keys={["control"]} listenToKeyboard />
	<Kbd keys={["alt"]} listenToKeyboard />
	<Kbd keys={["up"]} listenToKeyboard />
	<Kbd keys={["down"]} listenToKeyboard />
	<Kbd keys={["left"]} listenToKeyboard />
	<Kbd keys={["right"]} listenToKeyboard />
</div>
