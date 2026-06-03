<script lang="ts">
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
</script>

<div
	class="font-calendas flex min-h-80 flex-col justify-center rounded-xl bg-white px-6 py-8 text-2xl text-[#1736df] sm:px-8 sm:text-3xl"
>
	<div class="flex flex-col gap-1.5">
		<LetterSwap label="Swap on hover" class="italic" />
		<LetterSwap label="Bold contrast" reverse={false} class="font-semibold" />
		<LetterSwap label="Center pull" staggerFrom="center" class="tracking-tight" />
	</div>
</div>
