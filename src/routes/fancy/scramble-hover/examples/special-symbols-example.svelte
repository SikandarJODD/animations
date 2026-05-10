<script>
	import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<div
	class="text-foreground dark:text-muted flex h-50 md:h-120 w-full rounded-xl items-center justify-center space-y-2 overflow-hidden bg-white p-24 text-4xl font-normal"
>
	<ScrambleHover
		text="special symbols"
		scrambleSpeed={50}
		maxIterations={12}
		useOriginalCharsOnly={false}
		class="cursor-pointer text-4xl"
		characters="čüỳĦØ↋⒬¢⏧⏛⏄⎄*¿"
		scrambledClass="font-notoSansSymbols text-3xl cursor-pointer"
	/>
</div>
