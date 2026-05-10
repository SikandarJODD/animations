# Text Along Path

Render animated text that loops or tracks scroll progress along any SVG path.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { TextAlongPath } from "$lib/components/fancy/text-along-path";

  const path = "M 10 50 C 25 10 75 10 90 50";
</script>

<TextAlongPath {path} text="Svelte Fancy Motion" viewBox="0 0 100 100" />
```
