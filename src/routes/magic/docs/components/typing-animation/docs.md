# Typing Animation

A customizable typing animation component with support for multiple words, cursor styles, and animation controls.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/typing-animation.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/typing-animation.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/typing-animation.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/typing-animation.json
```

## Preview

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<TypingAnimation content="Hello World! 👋"></TypingAnimation>
```

## Examples

### 1. Cursor Blinking

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<div class="flex-1 space-y-8">
	<div>
		<p class="text-muted-foreground mb-2 text-sm">
			With blinking cursor (default) - watch during pause
		</p>
		<TypingAnimation
			words={["Type", "Pause", "Delete"]}
			blinkCursor={true}
			pauseDelay={2000}
			loop
			class="text-4xl font-bold"
		>
			Blinking cursor
		</TypingAnimation>
	</div>
	<div>
		<p class="text-muted-foreground mb-2 text-sm">
			Without blinking cursor - static during pause
		</p>
		<TypingAnimation
			words={["Type", "Pause", "Delete"]}
			blinkCursor={false}
			pauseDelay={2000}
			loop
			class="text-4xl font-bold"
		>
			Static cursor
		</TypingAnimation>
	</div>
</div>
```

### 2. Cursor Style

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<div class="flex-1 space-y-8">
	<div>
		<p class="text-muted-foreground mb-2 text-sm">Line cursor (default)</p>
		<TypingAnimation
			words={["Line cursor"]}
			cursorStyle="line"
			loop
			class="text-4xl font-bold"
		/>
	</div>
	<div>
		<p class="text-muted-foreground mb-2 text-sm">Block cursor (VSCode style)</p>
		<TypingAnimation
			words={["Block cursor"]}
			cursorStyle="block"
			loop
			class="text-4xl font-bold"
		/>
	</div>
	<div>
		<p class="text-muted-foreground mb-2 text-sm">Underscore cursor</p>
		<TypingAnimation
			words={["Underscore cursor"]}
			cursorStyle="underscore"
			loop
			class="text-4xl font-bold"
		/>
	</div>
</div>
```

### 3. Single Play

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<TypingAnimation words={["First", "Second", "Final"]} loop={false} />
```

### 4. Custom Speed

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<TypingAnimation
	words={["Fast typing", "Slow delete"]}
	typeSpeed={50}
	deleteSpeed={150}
	pauseDelay={2000}
	loop
/>
```

### 5. Multiple Words with Emojis

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<TypingAnimation words={["Design 🎨", "Build 🔨", "Ship 🚀"]} loop />
```

### 6. Start On View

```svelte
<script lang="ts">
	import { TypingAnimation } from "$lib/components/magic/typing-animation";
</script>

<TypingAnimation startOnView>Starts typing when in view</TypingAnimation>
```

## Usage

Import `TypingAnimation` from `$lib/components/magic/typing-animation` and pass the props you need for your use case.

## Props

A versatile typing animation component with support for single text, multiple words, cursor customization, and animation controls.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `string` | `undefined` | Single text string to type (use this OR words) |
| `words` | `string[]` | `undefined` | Array of words to cycle through (use this OR content) |
| `class` | `string` | `""` | Additional CSS classes to apply |
| `duration` | `number` | `100` | Default duration for typing speed (ms per character) |
| `typeSpeed` | `number` | `duration` | Speed for typing characters (ms per character) |
| `deleteSpeed` | `number` | `typeSpeed / 2` | Speed for deleting characters (ms per character) |
| `delay` | `number` | `0` | Initial delay before animation starts (ms) |
| `pauseDelay` | `number` | `1000` | Delay between typing and deleting (ms) |
| `loop` | `boolean` | `false` | Whether to loop the animation continuously |
| `startOnView` | `boolean` | `true` | Start animation when element enters viewport |
| `showCursor` | `boolean` | `true` | Show the typing cursor |
| `blinkCursor` | `boolean` | `true` | Make the cursor blink during pause |
| `cursorStyle` | `'line' \| 'block' \| 'underscore'` | `'line'` | Style of the cursor ('line': \|, 'block': ▌, 'underscore': _) |
