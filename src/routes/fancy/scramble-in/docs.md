# Scramble In

Animate text in by revealing real characters through a configurable scramble pass.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { ScrambleIn } from "$lib/components/fancy/scramble-in";
</script>

<ScrambleIn
  text="Build motion-first interfaces"
  class="text-4xl font-semibold"
/>
```
