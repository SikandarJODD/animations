<script>
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<div
	class="text-light flex h-60 w-dvw flex-col items-center justify-center space-y-20 overflow-hidden bg-black p-0 text-sm font-normal text-white sm:text-xl md:h-90 md:p-12 md:text-2xl"
>
	<div class="w-full text-left">
		<ScrambleHover
			text={"from the start"}
			scrambleSpeed={40}
			sequential={true}
			revealDirection="start"
			useOriginalCharsOnly={false}
			class="font-azeret-mono"
			characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]|;':\,./<>?"
		/>
	</div>
	<div class="w-full text-center">
		<ScrambleHover
			text={"from the center"}
			scrambleSpeed={40}
			sequential={true}
			revealDirection="center"
			useOriginalCharsOnly={false}
			class="font-azeret-mono"
			characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]|;':\,./<>?"
		/>
	</div>
	<div class="w-full text-right">
		<ScrambleHover
			text={"from the end"}
			scrambleSpeed={40}
			sequential={true}
			revealDirection="end"
			useOriginalCharsOnly={false}
			class="font-azeret-mono"
			characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]|;':\,./<>?"
		/>
	</div>
</div>
