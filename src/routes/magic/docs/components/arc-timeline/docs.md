# Arc Timeline

A curved timeline that rotates through milestone steps with clickable markers, icons, and configurable spacing.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/arc-timeline.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/arc-timeline.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/arc-timeline.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/arc-timeline.json
```

## Preview

```svelte
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
```

## Examples

### 1. Product Roadmap

```svelte
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
```

## Usage

Import `ArcTimeline` from `$lib/components/magic/arc-timeline` and pass the props you need for your use case.

## Props

### ArcTimeline

The root timeline container that renders grouped milestone steps around a rotating arc.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes applied to the root container. |
| `ref` | `HTMLDivElement \| null` | `null` | Optional bindable reference to the root timeline element. |
| `data` | `ArcTimelineItem[]` | `required` | Timeline groups and steps rendered around the arc. |
| `arcConfig` | `ArcTimelineArcConfig` | `{}` | Overrides for circle size and line spacing. |
| `defaultActiveStep` | `ArcTimelineDefaultActiveStep` | `{}` | Initial active milestone selected when the component mounts. |

### ArcTimelineItem

A timeline group with a shared time label and one or more steps.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `time` | `ArcTimelineRenderable` | `required` | Label rendered above the first step in the group. Accepts a snippet or primitive value. |
| `steps` | `ArcTimelineStep[]` | `required` | Milestone steps associated with the group. |

### ArcTimelineStep

A single milestone marker rendered on the arc.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `icon` | `ArcTimelineRenderable` | `required` | Icon marker content. Accepts a snippet or primitive value. |
| `content` | `ArcTimelineRenderable` | `required` | Step description shown for the active marker. Accepts a snippet or primitive value. |

### ArcTimelineArcConfig

Controls the geometry and spacing of the arc.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `circleWidth` | `number` | `5000` | Diameter of the invisible circle used to position the arc lines. |
| `angleBetweenMinorSteps` | `number` | `0.35` | Rotation increment in degrees between minor placeholder lines. |
| `lineCountFillBetweenSteps` | `number` | `10` | Number of placeholder lines inserted between adjacent steps. |
| `boundaryPlaceholderLinesCount` | `number` | `50` | Number of placeholder lines rendered before the first step and after the last step. |

### ArcTimelineDefaultActiveStep

Selects the milestone that should be active on first render.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `time` | `ArcTimelineItem["time"]` | `data[0]?.time` | Time group to activate. Primitive labels like strings are the most practical for matching. |
| `stepIndex` | `number` | `0` | Index of the step within the matching time group. |
