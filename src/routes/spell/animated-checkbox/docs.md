# Animated Checkbox

Animated checkbox with spring transitions and strike-through text effect.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/animated-checkbox.json
npm install motion-sv

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/animated-checkbox.json
yarn add motion-sv

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/animated-checkbox.json
pnpm add motion-sv

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/animated-checkbox.json
bun add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedCheckbox } from "#lib/components/spell/animated-checkbox/index.js";
</script>

<AnimatedCheckbox title="Ship the feature" />
```

## Preview

```svelte
<script lang="ts">
  import { AnimatedCheckbox } from "#lib/components/spell/animated-checkbox/index.ts";
</script>

<div class="flex flex-col gap-2">
  <AnimatedCheckbox title="Implement Checkbox" />
  <AnimatedCheckbox title="Write documentation" />
  <AnimatedCheckbox title="Add tests" defaultChecked />
</div>
```

## Examples

### 1. Controlled State

Drive the checkbox from external state so you can sync task completion with forms, stores, or other interface logic.

```svelte
<script lang="ts">
  import { AnimatedCheckbox } from "#lib/components/spell/animated-checkbox/index.ts";

  let checked = $state(false);
</script>

<div class="mx-auto flex w-full max-w-sm flex-col gap-4 py-8">
  <AnimatedCheckbox
    title="Controlled State Example"
    {checked}
    onCheckedChange={(value) => (checked = value)}
  />

  <p class="text-muted-foreground text-sm">
    State: {checked ? "Checked" : "Unchecked"}
  </p>
</div>
```

## Props

| Prop              | Type                                        | Default                | Description                                                                                        |
| ----------------- | ------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `title`           | `string`                                    | `"Implement Checkbox"` | The label shown next to the animated check indicator.                                              |
| `checked`         | `boolean`                                   | `false`                | Controlled checked state. Provide this together with `onCheckedChange` for fully managed behavior. |
| `defaultChecked`  | `boolean`                                   | `false`                | Initial checked state for uncontrolled usage.                                                      |
| `onCheckedChange` | `((checked: boolean) => void) \| undefined` | `-`                    | Callback fired whenever the checkbox toggles.                                                      |
| `class`           | `string`                                    | `-`                    | Custom classes merged onto the clickable button root.                                              |
