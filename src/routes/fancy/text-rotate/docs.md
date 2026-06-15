# Text Rotate

Rotate through multiple text strings with per-character, per-word, or per-line motion and imperative controls.

## Installation

Install the component source into your Fancy component folder and make sure `motion-sv` is available in your project.

```bash
pnpm add motion-sv
```

## Usage

```svelte
<script lang="ts">
  import { TextRotate } from "$lib/components/fancy/text-rotate";

  const texts = ["interfaces", "landing pages", "motion systems"];
</script>

<h2 class="text-4xl font-semibold tracking-tight">
  Build
  <TextRotate
    as="span"
    {texts}
    rotationInterval={2200}
    staggerDuration={0.03}
    mainClassName="ml-2 inline-flex text-cyan-500"
  />
</h2>
```

## Imperative Control

Bind the component instance with `bind:this` to call `next`, `previous`, `jumpTo`, or `reset` manually. This is useful when rotation should be synchronized with custom controls instead of the built-in interval.

## Props

| Prop                    | Type                                                  | Default                                           | Description                                        |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------------- | -------------------------------------------------- |
| `texts`                 | `string[]`                                            | required                                          | Array of strings rotated through by the component. |
| `as`                    | `keyof SvelteHTMLElements`                            | `"p"`                                             | HTML element used for the animated wrapper.        |
| `rotationInterval`      | `number`                                              | `2000`                                            | Delay in milliseconds between automatic rotations. |
| `auto`                  | `boolean`                                             | `true`                                            | Enables interval-driven rotation.                  |
| `loop`                  | `boolean`                                             | `true`                                            | Wraps back to the first text after the last.       |
| `splitBy`               | `"characters" \| "words" \| "lines" \| string`        | `"characters"`                                    | Controls how each string is segmented.             |
| `staggerDuration`       | `number`                                              | `0`                                               | Delay added between animated segments.             |
| `staggerFrom`           | `"first" \| "last" \| "center" \| "random" \| number` | `"first"`                                         | Starting point for stagger delay calculation.      |
| `transition`            | `Transition`                                          | `{ type: "spring", damping: 25, stiffness: 300 }` | Shared motion transition configuration.            |
| `mainClassName`         | `string \| undefined`                                 | `undefined`                                       | Classes merged onto the root wrapper.              |
| `splitLevelClassName`   | `string \| undefined`                                 | `undefined`                                       | Classes applied to each word or segment wrapper.   |
| `elementLevelClassName` | `string \| undefined`                                 | `undefined`                                       | Classes applied around each animated unit.         |
