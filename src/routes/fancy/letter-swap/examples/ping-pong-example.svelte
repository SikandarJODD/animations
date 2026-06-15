<script lang="ts">
	import { LetterSwapPingPong } from "$lib/components/fancy/letter-swap-ping-pong";
</script>

<div
	class="flex h-100 w-full flex-row items-center justify-center gap-12 font-serif text-4xl text-yellow-400"
>
	<LetterSwapPingPong label="First" staggerFrom="first" />
	<LetterSwapPingPong label="Center" staggerFrom="center" />
	<LetterSwapPingPong label="Last" staggerFrom="last" />
</div>
