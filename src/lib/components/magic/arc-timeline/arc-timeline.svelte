<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils";
	import type {
		ArcTimelineItem,
		ArcTimelineProps,
		ArcTimelineRenderable,
		ArcTimelineStep,
	} from "./types";

	interface TimelineStepMeta {
		line: ArcTimelineItem;
		step: ArcTimelineStep;
		lineIndex: number;
		stepIndex: number;
		angle: number;
		isFirstStep: boolean;
		isLastStep: boolean;
	}

	let {
		ref = $bindable(null),
		class: className,
		data,
		arcConfig = {},
		defaultActiveStep = {},
		...restProps
	}: ArcTimelineProps = $props();

	let circleWidth = $derived(arcConfig.circleWidth ?? 5000);
	let angleBetweenMinorSteps = $derived(arcConfig.angleBetweenMinorSteps ?? 0.35);
	let lineCountFillBetweenSteps = $derived(arcConfig.lineCountFillBetweenSteps ?? 10);
	let boundaryPlaceholderLinesCount = $derived(arcConfig.boundaryPlaceholderLinesCount ?? 50);

	function getInitialCircleRotation() {
		const defaultActiveTime = defaultActiveStep.time ?? data[0]?.time;
		const defaultActiveStepIndex = defaultActiveStep.stepIndex ?? 0;

		let count = 0;

		for (const timelineItem of data) {
			if (timelineItem.time === defaultActiveTime) {
				count += defaultActiveStepIndex;
				break;
			}

			count += timelineItem.steps.length;
		}

		return (
			-count * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
			angleBetweenMinorSteps * boundaryPlaceholderLinesCount
		);
	}

	let circleContainerRotateDeg = $state(getInitialCircleRotation());

	let timelineSteps = $derived.by((): TimelineStepMeta[] => {
		const steps: TimelineStepMeta[] = [];
		let stepsBeforeCurrentLine = 0;

		data.forEach((line, lineIndex) => {
			line.steps.forEach((step, stepIndex) => {
				const angle =
					angleBetweenMinorSteps *
						(lineCountFillBetweenSteps + 1) *
						(stepsBeforeCurrentLine + stepIndex) +
					angleBetweenMinorSteps * boundaryPlaceholderLinesCount;

				steps.push({
					line,
					step,
					lineIndex,
					stepIndex,
					angle,
					isFirstStep: lineIndex === 0 && stepIndex === 0,
					isLastStep:
						lineIndex === data.length - 1 && stepIndex === line.steps.length - 1,
				});
			});

			stepsBeforeCurrentLine += line.steps.length;
		});

		return steps;
	});

	function getPlaceholderAngles(isFirstStep: boolean, isLastStep: boolean, angle: number) {
		const count =
			isLastStep || isFirstStep ? boundaryPlaceholderLinesCount : lineCountFillBetweenSteps;

		return Array.from({ length: count }, (_, index) =>
			isFirstStep
				? index * angleBetweenMinorSteps
				: angle + (index + 1) * angleBetweenMinorSteps
		);
	}

	function getSnippet(value: ArcTimelineRenderable): Snippet | null {
		return typeof value === "function" ? value : null;
	}

	function getPrimitiveContent(value: ArcTimelineRenderable): string | number | null {
		return typeof value === "string" || typeof value === "number" ? value : null;
	}

	function isActive(angle: number) {
		return Math.abs(angle + circleContainerRotateDeg) < 0.01;
	}

	function setActiveAngle(angle: number) {
		circleContainerRotateDeg = -angle;
	}

	function handleStepKeydown(event: KeyboardEvent, angle: number) {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			setActiveAngle(angle);
		}
	}
</script>

<div
	bind:this={ref}
	class={cn("relative h-[380px] w-full overflow-hidden", className)}
	{...restProps}
>
	<div
		class="absolute top-28 left-1/2 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
		style:transform={`translateX(-50%) rotate(${circleContainerRotateDeg}deg)`}
		style:width={`${circleWidth}px`}
	>
		{#each timelineSteps as timelineStep (`${timelineStep.lineIndex}-${timelineStep.stepIndex}`)}
			{@const active = isActive(timelineStep.angle)}
			{@const iconSnippet = getSnippet(timelineStep.step.icon)}
			{@const iconText = getPrimitiveContent(timelineStep.step.icon)}
			{@const contentSnippet = getSnippet(timelineStep.step.content)}
			{@const contentText = getPrimitiveContent(timelineStep.step.content)}
			{@const timeSnippet = getSnippet(timelineStep.line.time)}
			{@const timeText = getPrimitiveContent(timelineStep.line.time)}

			{#if timelineStep.isFirstStep}
				{@const beforePlaceholderAngles = getPlaceholderAngles(
					true,
					false,
					timelineStep.angle
				)}

				{#each beforePlaceholderAngles as fillAngle, fillIndex (`before-${fillIndex}`)}
					<div
						class="absolute top-0 left-1/2 h-[34px] w-[1px] -translate-x-1/2"
						style:transform-origin={`50% ${circleWidth / 2}px`}
						style:transform={`rotate(${fillAngle}deg)`}
					>
						<div
							class="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]"
							style:transform-origin="center top"
							style:transform={`rotate(${-fillAngle - circleContainerRotateDeg}deg)`}
						></div>
					</div>
				{/each}
			{/if}

			<div
				class={cn(
					"absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-200",
					active ? "h-[120px] w-[2px]" : "h-16 w-[1.5px]"
				)}
				role="button"
				tabindex="0"
				style:transform-origin={`50% ${circleWidth / 2}px`}
				style:transform={`rotate(${timelineStep.angle}deg)`}
				onclick={() => setActiveAngle(timelineStep.angle)}
				onkeydown={(event) => handleStepKeydown(event, timelineStep.angle)}
			>
				<div
					class={cn(
						"h-full w-full transition-colors duration-200",
						active
							? "bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]"
							: "bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)]"
					)}
					style:transform-origin="center top"
					style:transform={`rotate(${-timelineStep.angle - circleContainerRotateDeg}deg)`}
				>
					<div
						class={cn(
							"absolute bottom-0 left-1/2 aspect-square -translate-x-1/2",
							active
								? "translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#555555)] dark:text-[var(--icon-active-color,#d4d4d4)]"
								: "translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]"
						)}
					>
						{#if iconSnippet}
							{@render iconSnippet()}
						{:else if iconText !== null}
							{iconText}
						{/if}
					</div>

					<p
						class={cn(
							"absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_42px)] items-center justify-center text-center text-sm transition-opacity duration-300 ease-in",
							"text-[var(--description-color,#555555)] dark:text-[var(--description-color,#d4d4d4)]",
							active ? "opacity-100" : "opacity-0"
						)}
					>
						{#if contentSnippet}
							{@render contentSnippet()}
						{:else if contentText !== null}
							{contentText}
						{/if}
					</p>
				</div>

				{#if timelineStep.stepIndex === 0}
					<div
						class={cn(
							"absolute top-0 left-1/2 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap",
							active
								? "text-[var(--time-active-color,#555555)] dark:text-[var(--time-active-color,#d4d4d4)]"
								: "text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)]"
						)}
					>
						{#if timeSnippet}
							{@render timeSnippet()}
						{:else if timeText !== null}
							{timeText}
						{/if}
					</div>
				{/if}
			</div>

			{@const afterPlaceholderAngles = getPlaceholderAngles(
				false,
				timelineStep.isLastStep,
				timelineStep.angle
			)}

			{#each afterPlaceholderAngles as fillAngle, fillIndex (`after-${fillIndex}`)}
				<div
					class="absolute top-0 left-1/2 h-[34px] w-[1px] -translate-x-1/2"
					style:transform-origin={`50% ${circleWidth / 2}px`}
					style:transform={`rotate(${fillAngle}deg)`}
				>
					<div
						class="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)] dark:bg-[var(--placeholder-line-color,#737373)]"
						style:transform-origin="center top"
						style:transform={`rotate(${-fillAngle - circleContainerRotateDeg}deg)`}
					></div>
				</div>
			{/each}
		{/each}
	</div>
</div>
