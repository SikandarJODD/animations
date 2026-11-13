<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { inView as observeInView } from "motion-sv";
	import { untrack } from "svelte";
	import type { Snippet } from "svelte";
	import type { ClassValue, HTMLAttributes } from "svelte/elements";

	interface SpecialTextProps extends HTMLAttributes<HTMLSpanElement> {
		children?: Snippet;
		text?: string;
		speed?: number;
		delay?: number;
		class?: ClassValue;
		inView?: boolean;
		once?: boolean;
	}

	const RANDOM_CHARS = "_!X$0-+*#";
	const NBSP = "\u00A0";

	let {
		children,
		text,
		speed = 20,
		delay = 0,
		class: className,
		inView = false,
		once = true,
		...props
	}: SpecialTextProps = $props();

	let container = $state<HTMLSpanElement | null>(null);
	let contentProbe = $state<HTMLSpanElement | null>(null);
	let slottedText = $state("");
	let isInViewport = $state(false);
	let hasStarted = $state(false);
	let displayText = $state("");
	let currentPhase = $state<"phase1" | "phase2">("phase1");
	let animationStep = $state(0);

	let intervalId: ReturnType<typeof setInterval> | null = null;
	let startTimeoutId: ReturnType<typeof setTimeout> | null = null;
	let previousSourceText = "";

	const sourceText = $derived(text ?? slottedText);

	function blankText(length: number) {
		return NBSP.repeat(length);
	}

	function getRandomChar(previousChar?: string) {
		let char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];

		while (char === previousChar) {
			char = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)];
		}

		return char;
	}

	function clearStartTimeout() {
		if (startTimeoutId === null) {
			return;
		}

		clearTimeout(startTimeoutId);
		startTimeoutId = null;
	}

	function clearAnimationInterval() {
		if (intervalId === null) {
			return;
		}

		clearInterval(intervalId);
		intervalId = null;
	}

	function resetAnimation(options?: { clearDisplay?: boolean }) {
		clearStartTimeout();
		clearAnimationInterval();
		hasStarted = false;
		currentPhase = "phase1";
		animationStep = 0;

		if (options?.clearDisplay) {
			displayText = "";
			return;
		}

		displayText = blankText(untrack(() => sourceText.length));
	}

	function startAnimation() {
		resetAnimation();
		hasStarted = true;
	}

	function runPhase1() {
		const maxSteps = sourceText.length * 2;
		const currentLength = Math.min(animationStep + 1, sourceText.length);
		const chars: string[] = [];

		for (let index = 0; index < currentLength; index += 1) {
			chars.push(getRandomChar(index > 0 ? chars[index - 1] : undefined));
		}

		for (let index = currentLength; index < sourceText.length; index += 1) {
			chars.push(NBSP);
		}

		displayText = chars.join("");

		if (animationStep < maxSteps - 1) {
			animationStep += 1;
			return;
		}

		currentPhase = "phase2";
		animationStep = 0;
	}

	function runPhase2() {
		const revealedCount = Math.floor(animationStep / 2);
		const chars: string[] = [];

		for (let index = 0; index < revealedCount && index < sourceText.length; index += 1) {
			chars.push(sourceText[index]);
		}

		if (revealedCount < sourceText.length) {
			chars.push(animationStep % 2 === 0 ? "_" : getRandomChar());
		}

		for (let index = chars.length; index < sourceText.length; index += 1) {
			chars.push(getRandomChar());
		}

		displayText = chars.join("");

		if (animationStep < sourceText.length * 2 - 1) {
			animationStep += 1;
			return;
		}

		displayText = sourceText;
		clearAnimationInterval();
	}

	$effect(() => {
		if (text || !contentProbe) {
			slottedText = "";
			return;
		}

		const probe = contentProbe;

		const syncText = () => {
			slottedText = probe.textContent?.replace(/\r?\n/g, "") ?? "";
		};

		syncText();

		const observer = new MutationObserver(() => syncText());
		observer.observe(probe, { childList: true, characterData: true, subtree: true });

		return () => observer.disconnect();
	});

	$effect(() => {
		if (!container || !inView) {
			isInViewport = !inView;
			return;
		}

		const stop = observeInView(
			container,
			() => {
				isInViewport = true;

				if (!once) {
					return () => {
						isInViewport = false;
					};
				}
			},
			{ margin: "-100px" }
		);

		return () => stop();
	});

	$effect(() => {
		if (!sourceText) {
			resetAnimation({ clearDisplay: true });
			return;
		}

		if (displayText.length !== sourceText.length && !hasStarted) {
			displayText = blankText(sourceText.length);
		}
	});

	$effect(() => {
		if (sourceText === previousSourceText) {
			return;
		}

		previousSourceText = sourceText;

		if (!sourceText) {
			return;
		}

		resetAnimation();
	});

	$effect(() => {
		if (!sourceText) {
			return;
		}

		if (!isInViewport) {
			if (!once) {
				resetAnimation();
			}

			return;
		}

		if (hasStarted) {
			return;
		}

		if (delay <= 0) {
			startAnimation();
			return;
		}

		startTimeoutId = setTimeout(() => {
			startTimeoutId = null;
			startAnimation();
		}, delay * 1000);

		return () => clearStartTimeout();
	});

	$effect(() => {
		if (!hasStarted || !sourceText) {
			return;
		}

		clearAnimationInterval();
		intervalId = setInterval(() => {
			if (currentPhase === "phase1") {
				runPhase1();
				return;
			}

			runPhase2();
		}, speed);

		return () => clearAnimationInterval();
	});

	$effect(() => {
		return () => {
			clearStartTimeout();
			clearAnimationInterval();
		};
	});
</script>

<span
	bind:this={container}
	class={cn("inline-flex h-4.5 font-mono leading-5 font-medium whitespace-pre", className)}
	{...props}
>
	<span aria-hidden="true">{displayText}</span>
	<span class="sr-only">{sourceText}</span>

	{#if !text}
		<span bind:this={contentProbe} class="sr-only">
			{@render children?.()}
		</span>
	{/if}
</span>
