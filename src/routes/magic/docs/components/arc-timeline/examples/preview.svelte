<script lang="ts">
	import BoxIcon from "@lucide/svelte/icons/box";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import LockIcon from "@lucide/svelte/icons/lock";
	import RocketIcon from "@lucide/svelte/icons/rocket";
	import SettingsIcon from "@lucide/svelte/icons/settings";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import StarIcon from "@lucide/svelte/icons/star";
	import ZapIcon from "@lucide/svelte/icons/zap";
	import { ArcTimeline, type ArcTimelineItem } from "$lib/components/magic/arc-timeline";

	const TIMELINE: ArcTimelineItem[] = [
		{
			time: "2022",
			steps: [
				{
					icon: rocketIcon,
					content: "Founded Visionary Tech, a cutting-edge AI development company.",
				},
				{
					icon: boxIcon,
					content:
						"Launched first AI-powered mobile app for personalized recommendations.",
				},
			],
		},
		{
			time: "2023",
			steps: [
				{
					icon: lockIcon,
					content: "Raised $3M seed round at a $20M valuation.",
				},
				{
					icon: globeIcon,
					content:
						"Expanded to global markets with localized app versions in 5 countries.",
				},
				{
					icon: settingsIcon,
					content:
						"Implemented enhanced machine learning algorithms for data prediction.",
				},
			],
		},
		{
			time: "2024",
			steps: [
				{
					icon: rocketIcon,
					content: "Introduced AI-powered virtual assistant for customer service.",
				},
				{
					icon: globeIcon,
					content: "Partnered with several tech giants to enhance app capabilities.",
				},
				{
					icon: sparklesIcon,
					content: "Launched AR-based features for more immersive user experiences.",
				},
			],
		},
		{
			time: "2025 Q1",
			steps: [
				{
					icon: starIcon,
					content: "Rolled out AI-driven marketplace for personalized product discovery.",
				},
				{
					icon: zapIcon,
					content: "Introduced blockchain integration for secure transactions.",
				},
				{
					icon: rocketIcon,
					content: "Showcased at CES with revolutionary AI-powered consumer products.",
				},
			],
		},
		{
			time: "2025 Q2",
			steps: [
				{
					icon: settingsIcon,
					content: "Rebranded company with new logo and visual identity.",
				},
				{
					icon: starIcon,
					content: "Launched AI-driven content creation tool for marketing teams.",
				},
				{
					icon: boxIcon,
					content: "Acquired a competitor in the AI space to strengthen market position.",
				},
			],
		},
		{
			time: "2025 Q3",
			steps: [
				{
					icon: boxIcon,
					content: "Launched self-driving AI platform for industrial automation.",
				},
				{
					icon: sparklesIcon,
					content: "Added virtual reality integration to the product suite.",
				},
			],
		},
		{
			time: "2025 Q4",
			steps: [
				{
					icon: starIcon,
					content: "Introduced AI-driven analytics dashboard for enterprise clients.",
				},
				{
					icon: zapIcon,
					content: "Launched international expansion into Asian and European markets.",
				},
				{
					icon: rocketIcon,
					content: "Hosted first global conference showcasing AI innovations.",
				},
			],
		},
		{
			time: "2026 Q1",
			steps: [
				{
					icon: settingsIcon,
					content: "Released API for developers to integrate AI into their applications.",
				},
				{
					icon: starIcon,
					content: "Launched new AI-powered voice assistant with multi-language support.",
				},
				{
					icon: globeIcon,
					content: "Partnered with government agencies for AI-driven policy making.",
				},
			],
		},
		{
			time: "2026 Q2",
			steps: [
				{
					icon: settingsIcon,
					content: "Unveiled new AI-powered robotics platform for manufacturing.",
				},
				{
					icon: sparklesIcon,
					content: "Introduced machine learning models for sustainable energy solutions.",
				},
			],
		},
	];
</script>

<div class="bg-card w-full max-w-6xl rounded-[2rem] border px-4 py-10 shadow-sm sm:px-8">
	<ArcTimeline
		class="[--description-color:#555555] [--icon-active-color:#555555] [--icon-inactive-color:#a3a3a3] [--placeholder-line-color:#a1a1a1] [--step-line-active-color:#888888] [--step-line-inactive-color:#b1b1b1] [--time-active-color:#555555] [--time-inactive-color:#a3a3a3] dark:[--description-color:#d4d4d4] dark:[--icon-active-color:#d4d4d4] dark:[--icon-inactive-color:#a3a3a3] dark:[--placeholder-line-color:#737373] dark:[--step-line-active-color:#9780ff] dark:[--step-line-inactive-color:#737373] dark:[--time-active-color:#d4d4d4] dark:[--time-inactive-color:#a3a3a3]"
		data={TIMELINE}
		defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
		arcConfig={{
			circleWidth: 4500,
			angleBetweenMinorSteps: 0.4,
			lineCountFillBetweenSteps: 8,
			boundaryPlaceholderLinesCount: 50,
		}}
	/>
</div>

{#snippet rocketIcon()}
	<RocketIcon class="size-5" />
{/snippet}

{#snippet boxIcon()}
	<BoxIcon class="size-5" />
{/snippet}

{#snippet lockIcon()}
	<LockIcon class="size-5" />
{/snippet}

{#snippet globeIcon()}
	<GlobeIcon class="size-5" />
{/snippet}

{#snippet settingsIcon()}
	<SettingsIcon class="size-5" />
{/snippet}

{#snippet zapIcon()}
	<ZapIcon class="size-5" />
{/snippet}

{#snippet starIcon()}
	<StarIcon class="size-5" />
{/snippet}

{#snippet sparklesIcon()}
	<SparklesIcon class="size-5" />
{/snippet}
