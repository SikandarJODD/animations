<script lang="ts">
	import Folder from "@lucide/svelte/icons/folder";
	import Mail from "@lucide/svelte/icons/mail";
	import Calendar from "@lucide/svelte/icons/calendar";
	import Camera from "@lucide/svelte/icons/camera";
	import Gamepad2 from "@lucide/svelte/icons/gamepad-2";

	import { Dock, DockIcon } from "#lib/components/magic/dock/index.js";
</script>

<div class="relative flex w-full items-center justify-center">
	<Dock disableMagnification={true}>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Folder class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Mail class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Calendar class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Camera class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Gamepad2 class="size-full" />
		</DockIcon>
	</Dock>
</div>
