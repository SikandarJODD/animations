<script lang="ts">
	import { LetterSwapPingPong } from "$lib/components/fancy/letter-swap-ping-pong";
</script>

<div class="font-serif text-yellow-400 flex w-full h-100 items-center justify-center flex-row gap-12 text-4xl">
	<LetterSwapPingPong
		label="First"
		staggerFrom='first'
	/>
	<LetterSwapPingPong
		label="Center"
		staggerFrom="center"
	/>
	<LetterSwapPingPong label="Last" staggerFrom="last" />
</div>
