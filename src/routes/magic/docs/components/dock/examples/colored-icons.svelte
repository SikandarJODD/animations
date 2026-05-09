<script lang="ts">
	import Twitter from "@lucide/svelte/icons/bird";
	import Instagram from "@lucide/svelte/icons/camera";
	import Youtube from "@lucide/svelte/icons/play";
	import Twitch from "@lucide/svelte/icons/gamepad-2";
	import Linkedin from "@lucide/svelte/icons/briefcase";
	import Facebook from "@lucide/svelte/icons/users";

	import { Dock, DockIcon } from "$lib/components/magic/dock";
</script>

<div class="relative flex w-full items-center justify-center">
	<Dock iconMagnification={70} iconDistance={120}>
		<DockIcon class="bg-[#1DA1F2]/20 text-[#1DA1F2]">
			<Twitter class="size-full" />
		</DockIcon>
		<DockIcon
			class="bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 text-[#E1306C]"
		>
			<Instagram class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#FF0000]/20 text-[#FF0000]">
			<Youtube class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#9146FF]/20 text-[#9146FF]">
			<Twitch class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#0077B5]/20 text-[#0077B5]">
			<Linkedin class="size-full" />
		</DockIcon>
		<DockIcon class="bg-[#1877F2]/20 text-[#1877F2]">
			<Facebook class="size-full" />
		</DockIcon>
	</Dock>
</div>
