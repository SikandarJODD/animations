# Letter 3D Swap

Rotate each character on hover with a 3D flip and configurable stagger direction.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { Letter3dSwap } from "$lib/components/fancy/letter-3d-swap";
</script>

<Letter3dSwap class="text-4xl font-semibold">Hover to flip</Letter3dSwap>
```
