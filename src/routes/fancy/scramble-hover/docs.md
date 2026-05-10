# Scramble Hover

Scramble text on hover with sequential or iterative reveals and custom character sets.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { ScrambleHover } from "$lib/components/fancy/scramble-hover";
</script>

<ScrambleHover text="Hover to scramble" class="text-4xl font-semibold" />
```
