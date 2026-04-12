<script lang="ts">
	import Github from "@lucide/svelte/icons/git-branch";
	import Cloud from "@lucide/svelte/icons/cloud";
	import FileText from "@lucide/svelte/icons/file-text";
	import MessageCircle from "@lucide/svelte/icons/message-circle";
	import Music from "@lucide/svelte/icons/music";

	import { Dock, DockIcon } from "$lib/components/magic/dock";
</script>

<div class="relative flex w-full items-center justify-center">
	<Dock iconMagnification={60} iconDistance={100}>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Github class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Cloud class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<FileText class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<MessageCircle class="size-full" />
		</DockIcon>
		<DockIcon class="bg-black/10 dark:bg-white/10">
			<Music class="size-full" />
		</DockIcon>
	</Dock>
</div>
