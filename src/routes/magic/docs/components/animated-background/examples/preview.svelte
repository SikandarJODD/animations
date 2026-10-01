<script lang="ts">
	import {
		AnimatedBackground,
		AnimatedBackgroundItem,
	} from "$lib/components/magic/animated-background";
	import { Button } from "$lib/components/ui/button";
	import { Home, PhoneCall, Settings, User } from "@lucide/svelte";

	const tabs = [
		{ label: "Home", icon: Home },
		{ label: "About", icon: User },
		{ label: "Services", icon: Settings },
		{ label: "Contact", icon: PhoneCall },
	];
</script>

<div class="absolute bottom-8">
	<div
		class="border-muted flex w-full space-x-2 rounded-xl border bg-neutral-50/40 p-1.5 dark:bg-zinc-900/50"
	>
		<AnimatedBackground
			defaultValue={tabs[0].label}
			class="rounded-lg bg-zinc-200/50 dark:bg-zinc-800"
			transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
		>
			{#each tabs as tab (tab.label)}
				{@const Icon = tab.icon}
				<AnimatedBackgroundItem data-id={tab.label} class="group h-9 w-9">
					<!-- <button
						type="button"
						aria-label={tab.label}
						class="inline-flex h-9 w-9 cursor-pointer items-center justify-center text-zinc-500 transition-colors duration-100 group-data-[checked=true]:text-zinc-950 focus-visible:outline-2 dark:text-zinc-400 dark:group-data-[checked=true]:text-zinc-50"
					>
						<Icon class="h-5 w-5" />
					</button> -->
					<Button
						aria-label={tab.label}
						variant="ghost"
						size="icon"
						class="hover:bg-transparent dark:hover:bg-transparent"
					>
						<Icon class="h-5 w-5" />
					</Button>
				</AnimatedBackgroundItem>
			{/each}
		</AnimatedBackground>
	</div>
</div>
