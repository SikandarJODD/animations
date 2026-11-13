<script lang="ts">
	import { Kbd } from "#lib/components/spell/keyboard-shortcut/index.js";
</script>

<div class="flex gap-4">
	<Kbd keys={["alt"]} listenToKeyboard />
	<Kbd keys={[{ display: "ENTER", key: "enter" }]} listenToKeyboard />
	<Kbd keys={["space"]} listenToKeyboard />
	<Kbd keys={["ctrl", "j"]} listenToKeyboard />
	<Kbd keys={[{ display: "HOLD", key: "H" }]} listenToKeyboard />
	<Kbd keys={["up"]} listenToKeyboard />
</div>
