# Arc Timeline

A curved milestone timeline that rotates through grouped steps with clickable markers, icon support, and configurable arc spacing.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/arc-timeline.json
```

## Usage

```svelte
<script lang="ts">
  import RocketIcon from "@lucide/svelte/icons/rocket";
  import { ArcTimeline, type ArcTimelineItem } from "$lib/components/magic/arc-timeline";

  const timeline: ArcTimelineItem[] = [
    {
      time: "Q1",
      steps: [
        { icon: rocketIcon, content: "Kickoff and first prototype." },
        { icon: rocketIcon, content: "Internal validation with design and product." }
      ]
    }
  ];
</script>

<ArcTimeline
  data={timeline}
  defaultActiveStep={{ time: "Q1", stepIndex: 0 }}
/>

{#snippet rocketIcon()}
  <RocketIcon class="size-5" />
{/snippet}
```

## How It Works

- `data` defines the grouped timeline structure.
- `arcConfig` adjusts the circle size and spacing between steps.
- `defaultActiveStep` selects which milestone is active on first render.
- `time`, `icon`, and `content` accept primitive values or Svelte snippets.

## Props

### ArcTimeline Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `class` | `string` | `""` | Additional CSS classes applied to the root container. |
| `ref` | `HTMLDivElement \| null` | `null` | Optional bindable reference to the root timeline element. |
| `data` | `ArcTimelineItem[]` | required | Timeline groups and steps rendered around the arc. |
| `arcConfig` | `ArcTimelineArcConfig` | `{}` | Overrides for circle size and line spacing. |
| `defaultActiveStep` | `ArcTimelineDefaultActiveStep` | `{}` | Initial active milestone selected on mount. |

### ArcTimelineItem Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `time` | `ArcTimelineRenderable` | required | Group label rendered above the first step. Accepts a snippet or primitive value. |
| `steps` | `ArcTimelineStep[]` | required | Milestone steps associated with the group. |

### ArcTimelineStep Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `icon` | `ArcTimelineRenderable` | required | Marker content. Accepts a snippet or primitive value. |
| `content` | `ArcTimelineRenderable` | required | Active step description. Accepts a snippet or primitive value. |

### ArcTimelineArcConfig Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `circleWidth` | `number` | `5000` | Diameter of the invisible circle used to position the arc lines. |
| `angleBetweenMinorSteps` | `number` | `0.35` | Rotation increment in degrees between minor placeholder lines. |
| `lineCountFillBetweenSteps` | `number` | `10` | Number of placeholder lines inserted between adjacent steps. |
| `boundaryPlaceholderLinesCount` | `number` | `50` | Placeholder lines rendered before the first step and after the last step. |

### ArcTimelineDefaultActiveStep Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `time` | `ArcTimelineItem["time"]` | `data[0]?.time` | Time group to activate. Primitive labels like strings are the most practical for matching. |
| `stepIndex` | `number` | `0` | Index of the step within the matching time group. |

## Examples

### Preview

A company growth timeline that mirrors the primary demo and shows the default styling, grouped milestones, and click-to-rotate behavior.

### Product Roadmap

A different content set focused on a product launch roadmap, demonstrating that the same component works for planning and release storytelling with a different cadence and arc configuration.
