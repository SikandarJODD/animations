<script>
	import { LetterSwap } from "$lib/components/fancy/letter-swap";
</script>

<div
	class="font-figtree flex h-100 w-full font-medium flex-col items-center justify-center gap-x-12 gap-y-4 rounded-xl bg-white text-3xl text-[#0015ff] md:flex-row"
>
	<LetterSwap label="First" staggerFrom={"first"} />
	<LetterSwap label="Center" staggerFrom={"center"} />
	<LetterSwap label="Last" staggerFrom={"last"} />
</div>
