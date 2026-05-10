<script>
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
	import { LetterSwapPingPong } from "$lib/components/fancy/letter-swap-ping-pong";
</script>

<div
	class="font-calendas flex h-120 w-full flex-col items-center justify-center rounded-lg bg-white text-xl md:text-3xl"
>
	<div class=" flex flex-col gap-y-1 rounded-xl p-0 align-text-top text-[#0015ff] md:gap-y-2">
		<LetterSwap label="Hover me chief!" reverse={true} class="italic" />
		<LetterSwap label="Awesome!" reverse={false} class="font-bold" />
		<LetterSwap label="Good day!" staggerFrom="center" class="mono" />
		<LetterSwapPingPong
			label="More text?"
			staggerFrom="center"
			reverse={false}
			class="font-overused-grotesk font-bold"
		/>
		<LetterSwapPingPong label="oh, seriously?!" staggerFrom="last" />
	</div>
</div>
