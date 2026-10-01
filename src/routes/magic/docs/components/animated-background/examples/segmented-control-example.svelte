<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem
	} from "$lib/components/core/animated-background";

	const labels = ["Day", "Week", "Month", "Year"];
</script>

<div class="rounded-[8px] bg-gray-100 p-[2px] dark:bg-zinc-800">
	<AnimatedBackground
		defaultValue="Day"
		class="rounded-lg bg-white dark:bg-zinc-700"
		transition={{ ease: "easeInOut", duration: 0.2 }}
	>
		{#each labels as label (label)}
			<AnimatedBackgroundItem data-id={label}>
				<button
					type="button"
					aria-label={`${label} view`}
					class="inline-flex w-20 items-center justify-center text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50"
				>
					{label}
				</button>
			</AnimatedBackgroundItem>
		{/each}
	</AnimatedBackground>
</div>
