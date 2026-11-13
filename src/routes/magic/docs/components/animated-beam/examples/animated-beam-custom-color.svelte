<script lang="ts">
	import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
	import Circle from "./circle.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
	let div3Ref: HTMLDivElement | null = $state(null);
	let div4Ref: HTMLDivElement | null = $state(null);
</script>

<div class="min-h-screen space-y-16 bg-white p-8 dark:bg-black">
	<div class="space-y-4">
		<h2 class="text-2xl font-semibold text-black dark:text-white">Custom Colors</h2>
		<p class="text-slate-600 dark:text-slate-300">Beam with custom gradient colors</p>
		<div class="flex items-center justify-center rounded-lg border p-8">
			<div
				class="relative flex max-w-[500px] items-center justify-center overflow-hidden p-10"
			>
				<div class="flex size-full flex-col items-stretch justify-between gap-10">
					<div class="flex flex-row justify-between">
						<Circle>
							{#snippet children()}
								<UserIcon />
							{/snippet}
						</Circle>
						<Circle>
							{#snippet children()}
								<OpenaiIcon />
							{/snippet}
						</Circle>
					</div>
				</div>

				<AnimatedBeam
					duration={3}
					{containerRef}
					fromRef={div1Ref}
					toRef={div2Ref}
					gradientStartColor="#00ff00"
					gradientStopColor="#0000ff"
				/>
			</div>
		</div>
	</div>
</div>
