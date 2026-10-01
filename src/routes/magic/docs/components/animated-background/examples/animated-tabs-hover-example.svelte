<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem
	} from "$lib/components/core/animated-background";

	const tabs = ["Home", "About", "Services", "Contact"];
</script>

<div class="flex flex-row">
	<AnimatedBackground
		defaultValue={tabs[0]}
		class="rounded-lg bg-zinc-100 dark:bg-zinc-800"
		transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
		enableHover
	>
		{#each tabs as tab (tab)}
			<AnimatedBackgroundItem data-id={tab}>
				<button
					type="button"
					class="px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
				>
					{tab}
				</button>
			</AnimatedBackgroundItem>
		{/each}
	</AnimatedBackground>
</div>
