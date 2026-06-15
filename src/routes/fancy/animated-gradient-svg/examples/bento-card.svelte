<script lang="ts">
	import { AnimatedGradientSvg } from "$lib/components/fancy/animated-gradient-svg";

	type Props = {
		title: string;
		subtitle?: string;
		description?: string;
		buttonText?: string;
		align?: "left" | "center";
	};

	let { title, subtitle, description, buttonText, align = "left" }: Props = $props();
	const gradientColors = ["#FFA412", "#FF4500", "#FF9900"];
</script>

<div
	class="relative flex h-full min-h-30 w-full flex-col justify-between overflow-hidden rounded-2xl p-4 font-medium sm:min-h-45 sm:p-6"
>
	<span class="pointer-events-none absolute inset-0 z-0 bg-[#ff592f]">
		<AnimatedGradientSvg colors={gradientColors} speed={10} blur="medium" />
	</span>
	<div
		class="relative z-10 flex-1 {align === 'center'
			? 'items-center text-center'
			: 'items-start text-left'} flex h-full w-full flex-col justify-between"
	>
		<div>
			<div class="-mb-0.5 text-xs font-semibold text-white sm:text-sm md:text-base">
				{title}
			</div>
			{#if subtitle}
				<div class="mb-1 text-[10px] text-white/80 sm:mb-2 sm:text-xs md:text-sm">
					{subtitle}
				</div>
			{/if}
		</div>
		{#if description}
			<div
				class="mt-auto mb-1 text-[10px] leading-tight text-pretty text-white sm:mb-2 sm:text-xs"
			>
				{description}
			</div>
		{/if}
		{#if buttonText}
			<button
				class="mt-2 cursor-pointer rounded-full border border-white px-2 py-0.5 text-[10px] font-medium text-white transition-colors sm:mt-4 sm:px-3 sm:py-1 sm:text-xs"
			>
				{buttonText}
			</button>
		{/if}
	</div>
</div>
