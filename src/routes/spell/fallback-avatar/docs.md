# Fallback Avatar

A seeded avatar canvas for placeholder user imagery, collaborative cursors, profile rows, and compact identity chips.

## Installation

```bash
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/fallback-avatar.json
```

## Usage

```svelte
<script lang="ts">
  import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";

  const names = ["xxtomm", "max", "hugh", "diana", "solo"];
</script>

<div class="flex items-center gap-3">
  {#each names as name}
    <div class="flex flex-col items-center gap-1">
      <FallbackAvatar class="border" {name} size={32} />
      <span class="text-muted-foreground text-[11px]">{name}</span>
    </div>
  {/each}
</div>
```

## Deterministic Seed

The avatar is fully derived from `name`, so the same input always produces the same color palette and blob layout across reloads.

```svelte
<FallbackAvatar name="diana" />
```

## Size Control

Use the `size` prop to reuse the same seeded avatar at different scales without changing its identity.

```svelte
<FallbackAvatar name="solo" size={24} />
<FallbackAvatar name="solo" size={48} />
<FallbackAvatar name="solo" size={72} />
```

## Animation

Animation is enabled by default and only runs while the avatar is hovered. Set `animated={false}` when you want a static placeholder.

```svelte
<FallbackAvatar name="max" animated={false} />
```

## Fallback Behavior

The renderer attempts a shared WebGL path first, then falls back to a deterministic 2D canvas render when WebGL is unavailable or shader setup fails.

## Props

| Prop       | Type                  | Default     | Description                                                                |
| ---------- | --------------------- | ----------- | -------------------------------------------------------------------------- |
| `name`     | `string`              | required    | The seed used to derive the avatar composition, color palette, and motion. |
| `size`     | `number`              | `32`        | Controls the rendered avatar size in CSS pixels.                           |
| `animated` | `boolean`             | `true`      | Enables the hover-only animation loop for the avatar surface.              |
| `class`    | `ClassValue`          | `undefined` | Custom classes merged onto the root canvas element.                        |
| `style`    | `string \| undefined` | `undefined` | Inline styles appended to the root canvas element.                         |
