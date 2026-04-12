# Tilt Card

A cursor-reactive wrapper that gives cards and panels a polished 3D hover response with configurable tilt, scale, perspective, and an optional spotlight.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/tilt-card.json
```

## Usage

```svelte
<script lang="ts">
  import { TiltCard } from "$lib/components/spell/tilt-card";
</script>

<div class="flex min-h-[320px] items-center justify-center">
  <TiltCard
    tiltLimit={10}
    scale={1.05}
    perspective={1200}
    class="aspect-video w-[360px] rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 p-6 shadow-[0px_8px_16px_rgba(0,0,0,0.08),0px_16px_32px_rgba(0,0,0,0.06),0px_24px_48px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(0,0,0,0.06)] dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 dark:shadow-[0px_8px_16px_rgba(0,0,0,0.3),0px_16px_32px_rgba(0,0,0,0.2),0px_24px_48px_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
  >
    <div class="flex h-full flex-col justify-between">
      <div class="flex items-start justify-between">
        <span class="text-sm font-semibold">Spell</span>
        <span class="text-xs font-medium tracking-[0.28em] uppercase"
          >Visa</span
        >
      </div>

      <div class="flex items-end justify-between">
        <div>
          <p class="text-xs text-neutral-600 dark:text-neutral-400">
            John Doe
          </p>
          <p class="font-mono text-sm font-medium tracking-tight tabular-nums">
            5367 4567 8901 2345
          </p>
        </div>
        <div>
          <p class="text-xs text-neutral-600 dark:text-neutral-400">Exp.</p>
          <p class="font-mono text-sm font-medium tabular-nums">12/25</p>
        </div>
      </div>
    </div>
  </TiltCard>
</div>
```

## Effect Modes

Use `effect="evade"` for a card that leans away from the pointer, or `effect="gravitate"` if you want the surface to follow the cursor direction.

```svelte
<TiltCard effect="gravitate">...</TiltCard>
```

## Spotlight

The spotlight is enabled by default and adds a soft radial highlight that follows the pointer. Disable it when you want a cleaner or flatter presentation.

```svelte
<TiltCard spotlight={false}>...</TiltCard>
```

## Tuning Guidance

- Use a lower `scale` like `1.02` for subtle UI, or a higher value like `1.1` when you want stronger hover emphasis.
- Keep `tiltLimit` around `6` to `12` for restrained product cards, and increase it for more dramatic hero treatments.
- Lower `perspective` values feel closer and more exaggerated, while higher values flatten the depth and feel calmer.

## Props

| Prop          | Type                      | Default     | Description                                                            |
| ------------- | ------------------------- | ----------- | ---------------------------------------------------------------------- |
| `tiltLimit`   | `number`                  | `15`        | Sets the maximum rotation angle in degrees on both axes.               |
| `scale`       | `number`                  | `1.05`      | Controls how much the card scales up while hovered.                    |
| `perspective` | `number`                  | `1200`      | Sets the CSS perspective distance used for the 3D depth effect.        |
| `effect`      | `"gravitate" \| "evade"`  | `"evade"`   | Determines whether the card tilts away from the cursor or follows it.  |
| `spotlight`   | `boolean`                 | `true`      | Toggles the radial highlight overlay that tracks the pointer position. |
| `class`       | `ClassValue \| undefined` | `undefined` | Custom classes applied to the root tilt wrapper.                       |
| `style`       | `string \| undefined`     | `undefined` | Inline styles appended to the root wrapper.                            |
