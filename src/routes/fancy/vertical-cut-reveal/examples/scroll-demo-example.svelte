<script lang="ts">
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
	import { useInView } from "motion-sv";

	let ref = $state<HTMLDivElement | null>(null);
	let textRef = $state<{ startAnimation: () => void; reset: () => void } | null>(null);

	const view = useInView(
		() => ref as HTMLDivElement,
		() =>
			({
				once: false,
			}) as any
	);

	const isInView = $derived(view.current);

	$effect(() => {
		if (!textRef) {
			return;
		}

		if (isInView) {
			textRef.startAnimation();
			return;
		}

		textRef.reset();
	});
</script>

<div
	class="font-figtree h-120 w-full overflow-auto bg-[#0015ff] text-xl font-bold text-white md:text-4xl lg:text-4xl"
>
	<div class="flex h-full w-full items-center justify-center">Scroll down champ ↓</div>
	<div class="flex h-full items-center justify-center text-white">
		<div bind:this={ref}>
			<VerticalCutReveal
				splitBy="characters"
				staggerDuration={0.02}
				staggerFrom="first"
				transition={{
					type: "spring",
					stiffness: 200,
					damping: 35,
					delay: 0.1,
				}}
				containerClass="leading-snug text-black"
				// Autostart is false, so we can control it programtically with .startAnimation() and .reset() methods
				autoStart={false}
				// Exposes the .startAnimation() and .reset() methods to control the animation programmatically
				bind:this={textRef}
			>
				howdy! 👋
			</VerticalCutReveal>
		</div>
	</div>
</div>
