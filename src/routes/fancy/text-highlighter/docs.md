# Text Highlighter

Sweep a highlight background across inline text on hover, in view, or on demand.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { TextHighlighter } from "$lib/components/fancy/text-highlighter";
</script>

<TextHighlighter as="span" class="text-4xl font-semibold">
  Highlighted motion copy
</TextHighlighter>
```
