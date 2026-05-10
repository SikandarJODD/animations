# Underline To Background

Expand an underline into a full background fill while transitioning the text color.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { UnderlineToBackground } from "$lib/components/fancy/underline-to-background";
</script>

<UnderlineToBackground class="text-4xl font-semibold">
  Hover to fill
</UnderlineToBackground>
```
