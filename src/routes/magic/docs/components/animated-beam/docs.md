# Animated Beam

An animated beam of light which travels along a path. Useful for showcasing the "integration" features of a website.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/animated-beam.json
```

## Usage

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";

  let containerRef: HTMLDivElement | null = $state(null);
  let fromRef: HTMLDivElement | null = $state(null);
  let toRef: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex h-24 w-64 items-center justify-between"
  bind:this={containerRef}
>
  <div class="size-3 rounded-full bg-current" bind:this={fromRef}></div>
  <div class="size-3 rounded-full bg-current" bind:this={toRef}></div>
  <AnimatedBeam {containerRef} {fromRef} {toRef} />
</div>
```

## Preview

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.ts";
  import Circle from "./circle.svelte";
  import OpenAIIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex min-w-70 items-center justify-center overflow-hidden md:min-w-125 md:p-10"
  bind:this={containerRef}
>
  <div class="flex size-full flex-col items-stretch justify-between gap-10">
    <div class="flex flex-row justify-between">
      <Circle bind:ref={div1Ref}>
        <UserIcon />
      </Circle>
      <Circle bind:ref={div2Ref}>
        <OpenAIIcon />
      </Circle>
    </div>
  </div>
  <AnimatedBeam
    duration={3}
    {containerRef}
    fromRef={div1Ref}
    toRef={div2Ref}
  />
</div>
```

## Examples

### 1. With Curvature

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.ts";
  import Circle from "./circle.svelte";
  import OpenaiIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
  bind:this={containerRef}
>
  <div class="flex size-full flex-col items-stretch justify-between gap-10">
    <div class="flex flex-row justify-between">
      <Circle bind:ref={div1Ref}>
        <UserIcon />
      </Circle>
      <Circle bind:ref={div2Ref}>
        <OpenaiIcon />
      </Circle>
    </div>
  </div>

  <AnimatedBeam
    duration={3}
    {containerRef}
    fromRef={div1Ref}
    toRef={div2Ref}
    curvature={100}
  />
</div>
```

### 2. Reverse Direction

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.ts";
  import Circle from "./circle.svelte";
  import OpenaiIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
  bind:this={containerRef}
>
  <div class="flex size-full flex-col items-stretch justify-between gap-10">
    <div class="flex flex-row justify-between">
      <Circle bind:ref={div1Ref}>
        <UserIcon />
      </Circle>
      <Circle bind:ref={div2Ref}>
        <OpenaiIcon />
      </Circle>
    </div>
  </div>

  <AnimatedBeam
    duration={3}
    {containerRef}
    fromRef={div1Ref}
    toRef={div2Ref}
    reverse={true}
  />
</div>
```

### 3. Bi Directional Beams

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.ts";
  import Circle from "./circle.svelte";
  import OpenaiIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
  bind:this={containerRef}
>
  <div class="flex size-full flex-col items-stretch justify-between gap-10">
    <div class="flex flex-row justify-between">
      <Circle bind:ref={div1Ref}>
        <UserIcon />
      </Circle>
      <Circle bind:ref={div2Ref}>
        <OpenaiIcon />
      </Circle>
    </div>
  </div>

  <AnimatedBeam
    {containerRef}
    fromRef={div1Ref}
    toRef={div2Ref}
    startYOffset={10}
    endYOffset={10}
    curvature={-20}
  />
  <AnimatedBeam
    {containerRef}
    fromRef={div2Ref}
    toRef={div1Ref}
    startYOffset={-10}
    endYOffset={-10}
    curvature={20}
    reverse
  />
</div>
```

### 4. Multiple Beams Inputs

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.ts";
  import Circle from "./circle.svelte";
  import GoogleDriveIcon from "./google-drive-icon.svelte";
  import GoogleDocsIcon from "./google-docs-icon.svelte";
  import WhatsappIcon from "./whatsapp-icon.svelte";
  import MessengerIcon from "./messenger-icon.svelte";
  import NotionIcon from "./notion-icon.svelte";
  import OpenaiIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
  let div3Ref: HTMLDivElement | null = $state(null);
  let div4Ref: HTMLDivElement | null = $state(null);
  let div5Ref: HTMLDivElement | null = $state(null);
  let div6Ref: HTMLDivElement | null = $state(null);
  let div7Ref: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
  bind:this={containerRef}
>
  <div
    class="flex size-full max-w-lg flex-row items-stretch justify-between gap-10"
  >
    <div class="flex flex-col justify-center gap-2">
      <Circle bind:ref={div1Ref}>
        <GoogleDriveIcon />
      </Circle>
      <Circle bind:ref={div2Ref}>
        <GoogleDocsIcon />
      </Circle>
      <Circle bind:ref={div3Ref}>
        <WhatsappIcon />
      </Circle>
      <Circle bind:ref={div4Ref}>
        <MessengerIcon />
      </Circle>
      <Circle bind:ref={div5Ref}>
        <NotionIcon />
      </Circle>
    </div>
    <div class="flex flex-col justify-center">
      <Circle bind:ref={div6Ref} class="size-16">
        <OpenaiIcon />
      </Circle>
    </div>
    <div class="flex flex-col justify-center">
      <Circle bind:ref={div7Ref}>
        <UserIcon />
      </Circle>
    </div>
  </div>

  <AnimatedBeam {containerRef} fromRef={div1Ref} toRef={div6Ref} />
  <AnimatedBeam {containerRef} fromRef={div2Ref} toRef={div6Ref} />
  <AnimatedBeam {containerRef} fromRef={div3Ref} toRef={div6Ref} />
  <AnimatedBeam {containerRef} fromRef={div4Ref} toRef={div6Ref} />
  <AnimatedBeam {containerRef} fromRef={div5Ref} toRef={div6Ref} />
  <AnimatedBeam {containerRef} fromRef={div6Ref} toRef={div7Ref} />
</div>
```

### 5. Multiple Beams Outputs

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.ts";
  import Circle from "./circle.svelte";
  import GoogleDriveIcon from "./google-drive-icon.svelte";
  import GoogleDocsIcon from "./google-docs-icon.svelte";
  import WhatsappIcon from "./whatsapp-icon.svelte";
  import MessengerIcon from "./messenger-icon.svelte";
  import NotionIcon from "./notion-icon.svelte";
  import OpenaiIcon from "./openai-icon.svelte";
  import UserIcon from "./user-icon.svelte";

  let containerRef: HTMLDivElement | null = $state(null);
  let div1Ref: HTMLDivElement | null = $state(null);
  let div2Ref: HTMLDivElement | null = $state(null);
  let div3Ref: HTMLDivElement | null = $state(null);
  let div4Ref: HTMLDivElement | null = $state(null);
  let div5Ref: HTMLDivElement | null = $state(null);
  let div6Ref: HTMLDivElement | null = $state(null);
  let div7Ref: HTMLDivElement | null = $state(null);
</script>

<div
  class="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
  bind:this={containerRef}
>
  <div
    class="flex size-full max-w-lg flex-row items-stretch justify-between gap-10"
  >
    <div class="flex flex-col justify-center">
      <Circle bind:ref={div7Ref}>
        <UserIcon />
      </Circle>
    </div>
    <div class="flex flex-col justify-center">
      <Circle bind:ref={div6Ref} class="size-16">
        <OpenaiIcon />
      </Circle>
    </div>
    <div class="flex flex-col justify-center gap-2">
      <Circle bind:ref={div1Ref}>
        <GoogleDriveIcon />
      </Circle>
      <Circle bind:ref={div2Ref}>
        <GoogleDocsIcon />
      </Circle>
      <Circle bind:ref={div3Ref}>
        <WhatsappIcon />
      </Circle>
      <Circle bind:ref={div4Ref}>
        <MessengerIcon />
      </Circle>
      <Circle bind:ref={div5Ref}>
        <NotionIcon />
      </Circle>
    </div>
  </div>

  <AnimatedBeam
    {containerRef}
    fromRef={div1Ref}
    toRef={div6Ref}
    duration={3}
  />
  <AnimatedBeam
    {containerRef}
    fromRef={div2Ref}
    toRef={div6Ref}
    duration={3}
  />
  <AnimatedBeam
    {containerRef}
    fromRef={div3Ref}
    toRef={div6Ref}
    duration={3}
  />
  <AnimatedBeam
    {containerRef}
    fromRef={div4Ref}
    toRef={div6Ref}
    duration={3}
  />
  <AnimatedBeam
    {containerRef}
    fromRef={div5Ref}
    toRef={div6Ref}
    duration={3}
  />
  <AnimatedBeam
    {containerRef}
    fromRef={div6Ref}
    toRef={div7Ref}
    duration={3}
  />
</div>
```

### 6. merge four files

Four file nodes merge into a bundle through curved, staggered monochrome beams.

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
  import { FileCode, FileJson, FileType, Package } from "@lucide/svelte";

  let container: HTMLDivElement | null = $state(null);
  let sources: (HTMLDivElement | null)[] = $state([null, null, null, null]);
  let bundle: HTMLDivElement | null = $state(null);
  const files = [
    { name: "page.svelte", icon: FileCode },
    { name: "config.json", icon: FileJson },
    { name: "styles.css", icon: FileType },
    { name: "utils.ts", icon: FileCode },
  ];
</script>

<div
  bind:this={container}
  class="relative isolate w-full max-w-xl overflow-hidden px-2 py-6 [--beam:var(--color-neutral-700)] sm:px-8 dark:[--beam:var(--color-neutral-200)]"
>
  <div class="relative z-10 flex items-center justify-between gap-6">
    <div class="flex flex-col gap-7">
      {#each files as file, i}
        <div
          bind:this={sources[i]}
          class="bg-background flex w-36 items-center gap-3 rounded-lg border px-3 py-2.5"
        >
          <file.icon
            class="text-muted-foreground size-4 shrink-0"
            strokeWidth={1.5}
          />
          <span class="font-mono text-xs">{file.name}</span>
        </div>
      {/each}
    </div>
    <div class="flex flex-col items-center gap-3">
      <div
        bind:this={bundle}
        class="bg-background flex size-16 items-center justify-center rounded-2xl border"
      >
        <Package class="size-7" strokeWidth={1.25} />
      </div>
      <span class="text-muted-foreground font-mono text-xs">bundle.js</span>
    </div>
  </div>
  {#each sources as source, i}
    <AnimatedBeam
      class="motion-reduce:[&>path+path]:hidden"
      containerRef={container}
      fromRef={source}
      toRef={bundle}
      duration={4}
      delay={i * 0.5}
      curvature={(i - 1.5) * 30}
      startXOffset={72}
      endXOffset={-32}
      pathColor="var(--foreground)"
      pathOpacity={0.12}
      gradientStartColor="var(--beam)"
      gradientStopColor="var(--beam)"
    />
  {/each}
</div>
```

### 7. publish workflow

A push flows through a build to preview and checks with a single status accent.

```svelte
<script lang="ts">
  import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
  import { GitCommitHorizontal, Box, Globe, Check } from "@lucide/svelte";

  let container: HTMLDivElement | null = $state(null);
  let commit: HTMLDivElement | null = $state(null);
  let build: HTMLDivElement | null = $state(null);
  let preview: HTMLDivElement | null = $state(null);
  let tests: HTMLDivElement | null = $state(null);
</script>

<div
  bind:this={container}
  class="relative isolate w-full max-w-xl px-2 py-10 [--beam:var(--color-neutral-700)] sm:px-8 dark:[--beam:var(--color-neutral-200)]"
>
  <div
    class="relative z-10 grid grid-cols-3 items-center gap-x-6 gap-y-12 text-center"
  >
    <div class="row-span-2 flex flex-col items-center gap-3">
      <div
        bind:this={commit}
        class="bg-background flex size-11 items-center justify-center rounded-full border"
      >
        <GitCommitHorizontal class="size-5" strokeWidth={1.5} />
      </div>
      <span class="text-muted-foreground text-xs">push</span>
    </div>
    <div class="row-span-2 flex flex-col items-center gap-3">
      <div
        bind:this={build}
        class="bg-background flex size-14 items-center justify-center rounded-xl border"
      >
        <Box class="size-6" strokeWidth={1.5} />
      </div>
      <span class="text-muted-foreground text-xs">build</span>
    </div>
    <div class="flex flex-col items-center gap-3">
      <div
        bind:this={preview}
        class="bg-background flex size-11 items-center justify-center rounded-full border"
      >
        <Globe class="size-5" strokeWidth={1.5} />
      </div>
      <span class="text-muted-foreground text-xs">preview</span>
    </div>
    <div class="flex flex-col items-center gap-3">
      <div
        bind:this={tests}
        class="bg-background flex size-11 items-center justify-center rounded-full border"
      >
        <Check
          class="size-5 text-emerald-600 dark:text-emerald-400"
          strokeWidth={1.5}
        />
      </div>
      <span class="text-muted-foreground text-xs">checks</span>
    </div>
  </div>
  <AnimatedBeam
    class="motion-reduce:[&>path+path]:hidden"
    containerRef={container}
    fromRef={commit}
    toRef={build}
    duration={4}
    startXOffset={22}
    endXOffset={-28}
    pathColor="var(--foreground)"
    pathOpacity={0.12}
    gradientStartColor="var(--beam)"
    gradientStopColor="var(--beam)"
  />
  <AnimatedBeam
    class="motion-reduce:[&>path+path]:hidden"
    containerRef={container}
    fromRef={build}
    toRef={preview}
    duration={4}
    delay={1.3}
    startXOffset={28}
    endXOffset={-22}
    curvature={35}
    pathColor="var(--foreground)"
    pathOpacity={0.12}
    gradientStartColor="var(--beam)"
    gradientStopColor="var(--beam)"
  />
  <AnimatedBeam
    class="motion-reduce:[&>path+path]:hidden"
    containerRef={container}
    fromRef={build}
    toRef={tests}
    duration={4}
    delay={1.3}
    startXOffset={28}
    endXOffset={-22}
    curvature={-35}
    pathColor="var(--foreground)"
    pathOpacity={0.12}
    gradientStartColor="var(--beam)"
    gradientStopColor="var(--beam)"
  />
</div>
```

## Props

| Prop                 | Type                  | Default                 | Description                          |
| -------------------- | --------------------- | ----------------------- | ------------------------------------ |
| `class`              | `string`              | `""`                    | Additional CSS classes to apply      |
| `containerRef`       | `HTMLElement \| null` | `null`                  | Reference to the container element   |
| `fromRef`            | `HTMLElement \| null` | `null`                  | Reference to the starting element    |
| `toRef`              | `HTMLElement \| null` | `null`                  | Reference to the ending element      |
| `curvature`          | `number`              | `0`                     | Curvature of the beam path           |
| `reverse`            | `boolean`             | `false`                 | Reverse the animation direction      |
| `duration`           | `number`              | `Math.random() * 3 + 4` | Duration of the animation in seconds |
| `delay`              | `number`              | `0`                     | Delay before the animation starts    |
| `pathColor`          | `string`              | `"gray"`                | Color of the beam path               |
| `pathWidth`          | `number`              | `2`                     | Width of the beam path               |
| `pathOpacity`        | `number`              | `0.2`                   | Opacity of the beam path             |
| `gradientStartColor` | `string`              | `"#ffaa40"`             | Starting color of the beam gradient  |
| `gradientStopColor`  | `string`              | `"#9c40ff"`             | Ending color of the beam gradient    |
| `startXOffset`       | `number`              | `0`                     | X offset for the start position      |
| `startYOffset`       | `number`              | `0`                     | Y offset for the start position      |
| `endXOffset`         | `number`              | `0`                     | X offset for the end position        |
| `endYOffset`         | `number`              | `0`                     | Y offset for the end position        |
