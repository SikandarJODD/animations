<script>
	import { RandomLetterSwap } from "$lib/components/fancy/random-letter-swap";
	import { RandomLetterSwapPingPong } from "$lib/components/fancy/random-letter-swap-ping-pong";
</script>

<div
	class="flex h-120 w-full flex-col items-center justify-center rounded-lg bg-white font-serif text-3xl md:text-5xl"
>
	<div
		class="align-text-center flex h-full flex-col items-center justify-center gap-y-1 rounded-xl py-12 text-red-500 md:gap-y-2"
	>
		<!-- reverse: true - Animate from top to bottom -->
		<RandomLetterSwap label="Random Letter Swap" reverse={true} class="" />
		<!-- reverse: false - Animate from bottom to top -->
		<RandomLetterSwap label="Bottom To Top Animation" reverse={false} class="px-4 italic" />

		<!-- Ping Pong  -->
		<RandomLetterSwapPingPong label="Ping Pong Animation" class="text-blue-600" />
		<RandomLetterSwapPingPong
			label="Comes From The Bottom"
			reverse={false}
			class="text-blue-600 italic"
		/>
	</div>
</div>
