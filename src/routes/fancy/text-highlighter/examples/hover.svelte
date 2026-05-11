<script lang="ts">
	import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
	import type { Transition } from "motion-sv";

	const highlightColor = "#BBC2E2";
	const baseClass = "cursor-pointer px-2 py-1";

	const transitions: Record<"ltr" | "rtl" | "ttb" | "btt", Transition> = {
		ltr: { type: "spring", duration: 0.68, bounce: 0 },
		rtl: { type: "spring", duration: 0.8, bounce: 0 },
		ttb: { type: "spring", duration: 0.8, bounce: 0 },
		btt: { type: "spring", duration: 0.8, bounce: 0 },
	};
</script>

<div
	class="flex h-80 w-dvw items-center justify-center bg-[#fefefe] text-black md:h-130 dark:bg-[#0b0b0b] dark:text-white"
>
	<div class="mx-auto max-w-sm px-4 md:max-w-md lg:max-w-lg xl:max-w-xl">
		<div class="flex flex-col gap-8 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
			<TextHighlighter
				triggerType="hover"
				direction="ltr"
				class={baseClass}
				{highlightColor}
				transition={transitions.ltr}
			>
				hover me - left to right
			</TextHighlighter>

			<TextHighlighter
				triggerType="hover"
				direction="rtl"
				class={baseClass}
				{highlightColor}
				transition={transitions.rtl}
			>
				hover me - right to left
			</TextHighlighter>

			<TextHighlighter
				triggerType="hover"
				direction="ttb"
				class={baseClass}
				{highlightColor}
				transition={transitions.ttb}
			>
				hover me - top to bottom
			</TextHighlighter>

			<TextHighlighter
				triggerType="hover"
				direction="btt"
				class={baseClass}
				{highlightColor}
				transition={transitions.btt}
			>
				hover me - bottom to top
			</TextHighlighter>
		</div>
	</div>
</div>
