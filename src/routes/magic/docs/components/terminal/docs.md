# Terminal

A description for Terminal component.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/terminal.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/terminal.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/terminal.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/terminal.json
```

## Preview

```svelte
<script lang="ts">
	import { Terminal, AnimatedSpan, TypingAnimation } from "$lib/components/magic/terminal";
</script>

<Terminal>
	<TypingAnimation text="&gt; pnpm dlx shadcn@latest init"></TypingAnimation>
	<AnimatedSpan class="text-green-500">✔ Preflight checks.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Verifying framework. Found Next.js.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Validating Tailwind CSS.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Validating import alias.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Writing components.json.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Checking registry.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Updating tailwind.config.ts</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Updating app/globals.css</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Installing dependencies.</AnimatedSpan>
	<AnimatedSpan class="text-blue-500">
		<span>ℹ Updated 1 file:</span>
		<span class="pl-2">- lib/utils.ts</span>
	</AnimatedSpan>
	<TypingAnimation class="text-muted-foreground" text="Success! Project initialization completed."
	></TypingAnimation>
	<TypingAnimation class="text-muted-foreground" text="You may now add components."
	></TypingAnimation>
</Terminal>
```

## Examples

### 1. Default Example

```svelte
<script lang="ts">
	import { Terminal, AnimatedSpan, TypingAnimation } from "$lib/components/magic/terminal";
</script>

<Terminal>
	<TypingAnimation text="&gt; pnpm dlx shadcn@latest init"></TypingAnimation>
	<AnimatedSpan class="text-green-500">✔ Preflight checks.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Verifying framework. Found Next.js.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Validating Tailwind CSS.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Validating import alias.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Writing components.json.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Checking registry.</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Updating tailwind.config.ts</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Updating app/globals.css</AnimatedSpan>
	<AnimatedSpan class="text-green-500">✔ Installing dependencies.</AnimatedSpan>
	<AnimatedSpan class="text-blue-500">
		<span>ℹ Updated 1 file:</span>
		<span class="pl-2">- lib/utils.ts</span>
	</AnimatedSpan>
	<TypingAnimation class="text-muted-foreground" text="Success! Project initialization completed."
	></TypingAnimation>
	<TypingAnimation class="text-muted-foreground" text="You may now add components."
	></TypingAnimation>
</Terminal>
```

## Usage

Import `Terminal` from `$lib/components/magic/terminal` and pass the props you need for your use case.

## Props

A component for Terminal.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | `""` | Additional CSS classes to apply |
