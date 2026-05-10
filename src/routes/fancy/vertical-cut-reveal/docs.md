# Vertical Cut Reveal

Reveal text from vertical cuts with word, character, or line-based staggering.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<VerticalCutReveal class="text-4xl font-semibold">
  Layered reveal copy
</VerticalCutReveal>
```
