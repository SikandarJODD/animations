# Letter Swap Ping Pong

Swap letters on hover and reverse them on exit with debounced ping-pong motion.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` and `runed` are available in your project.

```bash
pnpm add motion-sv runed
```

## Usage

```svelte
<script lang="ts">
  import { LetterSwapPingPong } from "$lib/components/fancy/letter-swap-ping-pong";
</script>

<LetterSwapPingPong label="Hover me" class="text-4xl font-semibold" />
```
