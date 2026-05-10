<script>
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
</script>

<div
	class="font-figtree flex w-full h-100 flex-row items-center justify-center gap-12 rounded-xl bg-[#0015ff] text-3xl"
>
	<div
		class="grid grid-cols-1 items-center justify-center gap-4 text-white md:grid-cols-2 md:gap-12"
	>
		<LetterSwap label="oh, wow!" staggerDuration={0} />
		<LetterSwap label="nice!" staggerDuration={0} reverse={false} />
	</div>
</div>
