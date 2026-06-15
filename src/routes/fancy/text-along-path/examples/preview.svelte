<script lang="ts">
	import { onDestroy } from "svelte";
	import { AnimatePresence, motion } from "motion-sv";
	import { AnimatedPathText } from "$lib/components/fancy/text-along-path";
	import { BarSpinner } from "$lib/components/spell/bar-spinner";

	type ButtonState = "idle" | "loading" | "success";

	const rectPath =
		"M 20,20 L 180,20 A 20,20 0 0,1 200,40 L 200,160 A 20,20 0 0,1 180,180 L 20,180 A 20,20 0 0,1 0,160 L 0,40 A 20,20 0 0,1 20,20";

	let buttonState: ButtonState = $state("idle");
	let email = $state("");

	let successTimeout: ReturnType<typeof setTimeout> | null = null;
	let resetTimeout: ReturnType<typeof setTimeout> | null = null;

	function clearTimers() {
		if (successTimeout) {
			clearTimeout(successTimeout);
			successTimeout = null;
		}

		if (resetTimeout) {
			clearTimeout(resetTimeout);
			resetTimeout = null;
		}
	}

	function handleSubmit() {
		if (buttonState !== "idle") return;

		clearTimers();
		buttonState = "loading";

		successTimeout = setTimeout(() => {
			buttonState = "success";
		}, 1750);

		resetTimeout = setTimeout(() => {
			buttonState = "idle";
			email = "";
		}, 3500);
	}

	onDestroy(() => {
		clearTimers();
	});
</script>

<div
	class="relative flex h-60 w-2xl items-center justify-center rounded-xl bg-white text-[#0015ff] md:h-100"
>
	<AnimatedPathText
		path={rectPath}
		svgClass="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 sm:py-8"
		viewBox="-20 10 240 180"
		text="JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉ JOIN THE WAITLIST ✉JOIN THE WAITLIST ✉JOIN BROTHER"
		textClass="text-[10.6px] lowercase font-azeret-mono text-[#0015ff]"
		preserveAspectRatio="none"
		duration={20}
		textAnchor="start"
	/>
	<div class="absolute top-1/2 left-1/2 w-56 -translate-x-1/2 -translate-y-1/2 p-6 sm:w-80">
		<div class="space-y-3">
			<label class="sr-only" for="waitlist-email">Email</label>
			<input
				id="waitlist-email"
				type="email"
				placeholder="Enter your email"
				bind:value={email}
				class="focus:ring-primary-blue/50 font-azeret-mono w-full rounded-lg border border-[#0015ff] bg-white px-3 py-2 text-xs placeholder:text-[#0015ff] focus:outline-hidden sm:px-4 sm:py-2 sm:text-base"
			/>

			<button
				type="button"
				onclick={handleSubmit}
				disabled={buttonState === "loading"}
				class="font-azeret-mono relative flex h-10 w-full items-center justify-center overflow-hidden rounded-xl bg-[#0015ff] px-4 text-xs text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-80 sm:h-11 sm:text-sm"
			>
				<AnimatePresence mode="wait" initial={false}>
					<motion.span
						class="inline-flex items-center justify-center"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						transition={{ type: "spring", duration: 0.3, bounce: 0 }}
					>
						{#if buttonState === "loading"}
							<BarSpinner />
						{:else if buttonState === "success"}
							Done
						{:else}
							Subscribe
						{/if}
					</motion.span>
				</AnimatePresence>
			</button>
		</div>
	</div>
</div>
