# Letter Swap

Slide each letter into a second copy on hover with directional staggered motion.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { LetterSwap } from "$lib/components/fancy/letter-swap";
</script>

<LetterSwap label="Hover me" class="text-4xl font-semibold" />
```
