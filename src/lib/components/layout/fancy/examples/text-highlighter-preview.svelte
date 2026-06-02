<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
</script>

<div
	class="flex  min-h-80 items-center rounded-xl bg-[#fffdf7] px-6 py-8 text-slate-900 sm:px-8"
>
	<p class="max-w-lg text-lg leading-8 sm:text-xl">
		A small overview card can still feel editorial when the
		<TextHighlighter
			class="mx-1 rounded-sm px-1"
			triggerType="auto"
			direction="ltr"
			highlightColor="#f3c4a2"
			transition={{ type: "spring", duration: 0.65, delay: 0.15, bounce: 0 }}
		>
			key phrase arrives with emphasis
		</TextHighlighter>
		and the rest of the sentence stays calm.
	</p>
</div>
