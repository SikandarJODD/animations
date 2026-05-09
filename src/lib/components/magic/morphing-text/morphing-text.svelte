<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { cn } from "$lib/utils";

	interface MorphingTextProps {
		texts: string[];
		class?: string;
	}

	let { texts, class: className }: MorphingTextProps = $props();

	const morphTime = 1.5;
	const cooldownTime = 0.5;

	let textIndex = $state(0);
	let morph = $state(0);
	let cooldown = $state(0);
	let time = $state(new Date());

	let text1Ref: HTMLSpanElement | null = $state(null);
	let text2Ref: HTMLSpanElement | null = $state(null);

	let animationFrameId: number | null = null;

	const setStyles = (fraction: number) => {
		if (!text1Ref || !text2Ref) return;

		text2Ref.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
		text2Ref.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

		const invertedFraction = 1 - fraction;
		text1Ref.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
		text1Ref.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

		text1Ref.textContent = texts[textIndex % texts.length];
		text2Ref.textContent = texts[(textIndex + 1) % texts.length];
	};

	const doMorph = () => {
		morph -= cooldown;
		cooldown = 0;

		let fraction = morph / morphTime;

		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}

		setStyles(fraction);

		if (fraction === 1) {
			textIndex++;
		}
	};

	const doCooldown = () => {
		morph = 0;
		if (text1Ref && text2Ref) {
			text2Ref.style.filter = "none";
			text2Ref.style.opacity = "100%";
			text1Ref.style.filter = "none";
			text1Ref.style.opacity = "0%";
		}
	};

	const animate = () => {
		animationFrameId = requestAnimationFrame(animate);

		const newTime = new Date();
		const dt = (newTime.getTime() - time.getTime()) / 1000;
		time = newTime;

		cooldown -= dt;

		if (cooldown <= 0) {
			doMorph();
		} else {
			doCooldown();
		}
	};

	onMount(() => {
		animate();
	});

	onDestroy(() => {
		if (animationFrameId !== null) {
			cancelAnimationFrame(animationFrameId);
		}
	});
</script>

<div
	class={cn(
		"relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] leading-none font-bold [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]",
		className
	)}
>
	<span bind:this={text1Ref} class="absolute inset-x-0 top-0 m-auto inline-block w-full"></span>
	<span bind:this={text2Ref} class="absolute inset-x-0 top-0 m-auto inline-block w-full"></span>

	<svg id="filters" class="fixed h-0 w-0" preserveAspectRatio="xMidYMid slice">
		<defs>
			<filter id="threshold">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
				/>
			</filter>
		</defs>
	</svg>
</div>
