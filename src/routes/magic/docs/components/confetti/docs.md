# Confetti

A description for Confetti component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/confetti.json
```

## Usage

```svelte
<script lang="ts">
  import { ConfettiButton } from "#lib/components/magic/confetti/index.js";
</script>

<ConfettiButton>Celebrate</ConfettiButton>
```

## Preview

```svelte
<script lang="ts">
  import { Confetti } from "#lib/components/magic/confetti/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  let active = $state(true);

  let fire = () => {
    active = false;
    setTimeout(() => {
      active = true;
    }, 10);
  };
</script>

<div
  class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
  <Confetti {active}>
    <Button onclick={fire}>Fire Confetti</Button>
  </Confetti>
</div>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
  import { Confetti } from "#lib/components/magic/confetti/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  let active = $state(true);

  let fire = () => {
    active = false;
    setTimeout(() => {
      active = true;
    }, 10);
  };
</script>

<div
  class="bg-background relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border"
>
  <Confetti {active}>
    <Button onclick={fire}>Fire Confetti</Button>
  </Confetti>
</div>
```

## Props

A component for Confetti.

| Prop    | Type     | Default | Description                     |
| ------- | -------- | ------- | ------------------------------- |
| `class` | `ClassValue` | `""`    | Additional CSS classes to apply |
