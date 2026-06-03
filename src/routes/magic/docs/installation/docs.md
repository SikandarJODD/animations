# Installation

How to install dependencies and structure your app.

## Getting Started

1. Create a new Svelte project with `sv create my-app`.
2. Initialize Shadcn Svelte with `npx shadcn-svelte@latest init`.
3. Install Motion SV with your package manager.
4. Add a component with the registry CLI, for example `https://sv-animations.vercel.app/r/morphing-text.json`.

## Usage Example

```svelte
<script lang="ts">
  import { MorphingText } from "$lib/components/magic/morphing-text";

  const texts = ["Hello", "World", "Morphing", "Text"];
</script>

<MorphingText {texts} />
```
