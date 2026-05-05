# Random Letter Swap

Reveal a second letter layer in a shuffled hover order for a randomized swap effect.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` and `runed` are available in your project.

```bash
pnpm add motion-sv runed
```

## Usage

```svelte
<script lang="ts">
  import { RandomLetterSwap } from "$lib/components/fancy/random-letter-swap";
</script>

<RandomLetterSwap label="Hover me" class="text-4xl font-semibold" />
```
