<script lang="ts">
	import Home from "@lucide/svelte/icons/home";
	import Search from "@lucide/svelte/icons/search";
	import Settings from "@lucide/svelte/icons/settings";
	import Bell from "@lucide/svelte/icons/bell";

	import { Dock, DockIcon } from "#lib/components/magic/dock/index.js";
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col items-center gap-2">
		<span class="text-muted-foreground text-sm">Direction: Top</span>
		<Dock direction="top" class="mt-0">
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Home class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Search class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Bell class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Settings class="size-full" />
			</DockIcon>
		</Dock>
	</div>

	<div class="flex flex-col items-center gap-2">
		<span class="text-muted-foreground text-sm">Direction: Middle (Default)</span>
		<Dock direction="middle" class="mt-0">
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Home class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Search class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Bell class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Settings class="size-full" />
			</DockIcon>
		</Dock>
	</div>

	<div class="flex flex-col items-center gap-2">
		<span class="text-muted-foreground text-sm">Direction: Bottom</span>
		<Dock direction="bottom" class="mt-0">
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Home class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Search class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Bell class="size-full" />
			</DockIcon>
			<DockIcon class="bg-black/10 dark:bg-white/10">
				<Settings class="size-full" />
			</DockIcon>
		</Dock>
	</div>
</div>
