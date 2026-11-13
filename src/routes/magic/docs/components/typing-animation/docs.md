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

## Usage

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
  content="hello, svelte."
  class="text-2xl leading-relaxed font-normal tracking-normal"
/>
```

## Preview

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
  content="hello, svelte."
  class="text-2xl leading-relaxed font-normal tracking-normal"
/>
```

## Examples

### 1. Cursor Blinking

Compare a blinking cursor with a steady cursor.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<div class="grid gap-6">
  {#each [true, false] as blinkCursor}
    <div>
      <p class="text-muted-foreground mb-2 text-xs">
        {blinkCursor ? "blinking" : "steady"}
      </p>
      <TypingAnimation
        content="take your time"
        {blinkCursor}
        pauseDelay={2000}
        loop
        class="text-xl leading-relaxed font-normal tracking-normal"
      />
    </div>
  {/each}
</div>
```

### 2. Cursor Styles

Compare line, block, and underscore cursors at the same text size.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";

  const cursors = ["line", "block", "underscore"] as const;
</script>

<div class="grid gap-6">
  {#each cursors as cursorStyle}
    <div>
      <p class="text-muted-foreground mb-2 text-xs">{cursorStyle}</p>
      <TypingAnimation
        content="choose a cursor"
        {cursorStyle}
        loop
        class="font-mono text-lg leading-relaxed font-normal tracking-normal"
      />
    </div>
  {/each}
</div>
```

### 3. Single Play

Cycle through three words once and keep the last word visible.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
  words={["install", "configure", "ready"]}
  loop={false}
  class="text-xl leading-relaxed font-normal tracking-normal"
/>
```

### 4. Custom Speed

Type quickly and delete slowly with separate speed controls.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
  words={["quick typing", "slow deletion"]}
  typeSpeed={50}
  deleteSpeed={150}
  pauseDelay={1500}
  loop
  class="text-xl leading-relaxed font-normal tracking-normal"
/>
```

### 5. Multiple Words

Rotate through a short list of words without extra decoration.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
  words={["components", "transitions", "interactions"]}
  loop
  class="text-xl leading-relaxed font-normal tracking-normal"
/>
```

### 6. Start On View

Type a single line when it enters the viewport.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<TypingAnimation
  content="typing starts in view"
  startOnView
  class="text-xl leading-relaxed font-normal tracking-normal"
/>
```

### 7. Command Line

Type an installation command once with a block cursor.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<div
  class="bg-muted/30 flex w-full max-w-md items-center gap-3 overflow-x-auto rounded-lg border px-4 py-5 font-mono"
>
  <span class="text-muted-foreground text-sm" aria-hidden="true">$</span>
  <TypingAnimation
    content="pnpm add motion-sv runed"
    cursorStyle="block"
    typeSpeed={65}
    class="text-sm leading-relaxed font-normal tracking-normal whitespace-nowrap"
  />
</div>
```

### 8. Inline Rotation

Keep a sentence still while the final words rotate.

```svelte
<script lang="ts">
  import { TypingAnimation } from "#lib/components/magic/typing-animation/index.js";
</script>

<p class="text-xl leading-relaxed font-normal">
  explore
  <TypingAnimation
    words={["components", "examples", "source code"]}
    loop
    class="inline-block min-w-[12ch] text-xl leading-relaxed font-normal tracking-normal"
  />
</p>
```

## Props

A versatile typing animation component with support for single text, multiple words, cursor customization, and animation controls.

| Prop          | Type                                | Default         | Description                                                   |
| ------------- | ----------------------------------- | --------------- | ------------------------------------------------------------- |
| `content`     | `string`                            | `undefined`     | Single text string to type (use this OR words)                |
| `words`       | `string[]`                          | `undefined`     | Array of words to cycle through (use this OR content)         |
| `class`       | `string`                            | `""`            | Additional CSS classes to apply                               |
| `duration`    | `number`                            | `100`           | Default duration for typing speed (ms per character)          |
| `typeSpeed`   | `number`                            | `duration`      | Speed for typing characters (ms per character)                |
| `deleteSpeed` | `number`                            | `typeSpeed / 2` | Speed for deleting characters (ms per character)              |
| `delay`       | `number`                            | `0`             | Initial delay before animation starts (ms)                    |
| `pauseDelay`  | `number`                            | `1000`          | Delay between typing and deleting (ms)                        |
| `loop`        | `boolean`                           | `false`         | Whether to loop the animation continuously                    |
| `startOnView` | `boolean`                           | `true`          | Start animation when element enters viewport                  |
| `showCursor`  | `boolean`                           | `true`          | Show the typing cursor                                        |
| `blinkCursor` | `boolean`                           | `true`          | Make the cursor blink during pause                            |
| `cursorStyle` | `'line' \| 'block' \| 'underscore'` | `'line'`        | Style of the cursor ('line': \|, 'block': ▌, 'underscore': _) |
