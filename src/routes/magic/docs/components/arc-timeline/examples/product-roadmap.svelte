<script lang="ts">
	import BoxIcon from "@lucide/svelte/icons/box";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import RocketIcon from "@lucide/svelte/icons/rocket";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import StarIcon from "@lucide/svelte/icons/star";
	import ZapIcon from "@lucide/svelte/icons/zap";
	import { ArcTimeline, type ArcTimelineItem } from "$lib/components/magic/arc-timeline";

	const ROADMAP: ArcTimelineItem[] = [
		{
			time: "Research",
			steps: [
				{
					icon: globeIcon,
					content: "Mapped workflow pain points across 18 customer interviews.",
				},
				{
					icon: starIcon,
					content: "Locked the core job-to-be-done and success metrics for v1.",
				},
			],
		},
		{
			time: "Alpha",
			steps: [
				{
					icon: boxIcon,
					content: "Shipped an internal prototype for structured content generation.",
				},
				{
					icon: settingsIcon,
					content: "Added telemetry, prompt versioning, and error reporting.",
				},
			],
		},
		{
			time: "Beta",
			steps: [
				{
					icon: sparklesIcon,
					content:
						"Opened a private beta with AI-assisted campaign drafts and tone presets.",
				},
				{
					icon: calendarIcon,
					content: "Ran weekly release trains with guided feedback sessions.",
				},
				{
					icon: zapIcon,
					content: "Reduced generation latency by 38% before public launch.",
				},
			],
		},
		{
			time: "Launch Week",
			steps: [
				{
					icon: rocketIcon,
					content: "Released self-serve onboarding, billing, and workspace templates.",
				},
				{
					icon: starIcon,
					content: "Published customer stories and benchmark results on launch day.",
				},
			],
		},
		{
			time: "Expansion",
			steps: [
				{
					icon: globeIcon,
					content: "Localized the editor for multilingual teams across new regions.",
				},
				{
					icon: boxIcon,
					content: "Launched a template marketplace for partner-built workflows.",
				},
				{
					icon: settingsIcon,
					content: "Rolled out admin controls, approvals, and audit history.",
				},
			],
		},
		{
			time: "Platform",
			steps: [
				{
					icon: sparklesIcon,
					content: "Introduced automation recipes for briefs, ads, and landing pages.",
				},
				{
					icon: zapIcon,
					content: "Added event streaming hooks for enterprise analytics pipelines.",
				},
			],
		},
	];
</script>

<div class="bg-card w-full max-w-6xl rounded-[2rem] border px-4 py-10 shadow-sm sm:px-8">
	<ArcTimeline
		class="[--description-color:#334155] [--icon-active-color:#0f172a] [--icon-inactive-color:#94a3b8] [--placeholder-line-color:#cbd5e1] [--step-line-active-color:#0f766e] [--step-line-inactive-color:#9ca3af] [--time-active-color:#0f172a] [--time-inactive-color:#94a3b8] dark:[--description-color:#cbd5e1] dark:[--icon-active-color:#ecfeff] dark:[--icon-inactive-color:#94a3b8] dark:[--placeholder-line-color:#334155] dark:[--step-line-active-color:#5eead4] dark:[--step-line-inactive-color:#475569] dark:[--time-active-color:#ecfeff] dark:[--time-inactive-color:#94a3b8]"
		data={ROADMAP}
		defaultActiveStep={{ time: "Launch Week", stepIndex: 0 }}
		arcConfig={{
			circleWidth: 4100,
			angleBetweenMinorSteps: 0.42,
			lineCountFillBetweenSteps: 7,
			boundaryPlaceholderLinesCount: 40,
		}}
	/>
</div>

{#snippet rocketIcon()}
	<RocketIcon class="size-5" />
{/snippet}

{#snippet boxIcon()}
	<BoxIcon class="size-5" />
{/snippet}

{#snippet globeIcon()}
	<GlobeIcon class="size-5" />
{/snippet}

{#snippet settingsIcon()}
	<SettingsIcon class="size-5" />
{/snippet}

{#snippet sparklesIcon()}
	<SparklesIcon class="size-5" />
{/snippet}

{#snippet starIcon()}
	<StarIcon class="size-5" />
{/snippet}

{#snippet zapIcon()}
	<ZapIcon class="size-5" />
{/snippet}

{#snippet calendarIcon()}
	<CalendarIcon class="size-5" />
{/snippet}
