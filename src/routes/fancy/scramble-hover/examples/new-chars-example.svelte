<script>
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<div
	class="text-foreground dark:text-muted flex justify-center h-40 w-full flex-col space-y-2 space-x-6 overflow-hidden rounded-xl bg-white p-8 text-xl font-normal sm:p-20 sm:text-3xl md:h-90 md:text-5xl"
>
	<ScrambleHover
		text="original characters"
		scrambleSpeed={50}
		maxIterations={8}
		useOriginalCharsOnly={true}
		class="cursor-pointer"
	/>
	<ScrambleHover
		text="new characters"
		scrambleSpeed={50}
		maxIterations={8}
		useOriginalCharsOnly={false}
		class="cursor-pointer"
		characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]/|;':\,./<>?"
	/>
</div>
