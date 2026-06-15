# Keyboard Shortcut

Display keyboard shortcuts with proper key symbols.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/kbd.json
npm install runed

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/kbd.json
yarn add runed

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/kbd.json
pnpm add runed

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/kbd.json
bun add runed
```

## Preview

```svelte
<script lang="ts">
	import { Kbd } from "$lib/components/spell/keyboard-shortcut";
</script>

<div class="flex gap-4">
	<Kbd keys={["alt"]} listenToKeyboard />
	<Kbd keys={[{ display: "ENTER", key: "enter" }]} listenToKeyboard />
	<Kbd keys={["space"]} listenToKeyboard />
	<Kbd keys={["ctrl", "j"]} listenToKeyboard />
	<Kbd keys={[{ display: "HOLD", key: "H" }]} listenToKeyboard />
	<Kbd keys={["up"]} listenToKeyboard />
</div>
```

## Examples

### 1. Live Keyboard Listening

Enable keyboard listening to highlight the keycap automatically when the matching shortcut is currently pressed.

```svelte
<script lang="ts">
	import { Kbd } from "$lib/components/spell/keyboard-shortcut";
</script>

<div class="flex flex-wrap gap-4">
	<Kbd keys={["command"]} listenToKeyboard />
	<Kbd keys={["control"]} listenToKeyboard />
	<Kbd keys={["alt"]} listenToKeyboard />
	<Kbd keys={["up"]} listenToKeyboard />
	<Kbd keys={["down"]} listenToKeyboard />
	<Kbd keys={["left"]} listenToKeyboard />
	<Kbd keys={["right"]} listenToKeyboard />
</div>
```

### 2. Custom Display with Keyboard Listener

```svelte
<script lang="ts">
	import { Kbd } from "$lib/components/spell/keyboard-shortcut";
</script>

<div class="flex flex-col items-center gap-4">
	<p class="text-muted-foreground text-sm">Press M key to activate</p>
	<Kbd keys={[{ display: "HOLD", key: "M" }]} listenToKeyboard />
</div>
```

## Usage

Import `Kbd` from `$lib/components/spell/kbd` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `keys` | `(string \| { display: string; key: string })[]` | `[]` | - |
| `active` | `boolean` | `false` | - |
| `listenToKeyboard` | `boolean` | `false` | - |
| `class` | `string \| undefined` | `''` | - |
