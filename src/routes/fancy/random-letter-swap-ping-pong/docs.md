# Random Letter Swap Ping Pong

Animate randomized letter swaps on hover in and out using a persistent shuffled order.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` and `runed` are available in your project.

```bash
pnpm add motion-sv runed
```

## Usage

```svelte
<script lang="ts">
  import { RandomLetterSwapPingPong } from "$lib/components/fancy/random-letter-swap-ping-pong";
</script>

<RandomLetterSwapPingPong label="Hover me" class="text-4xl font-semibold" />
```
