# Magic Card

A spotlight effect that follows your mouse cursor and highlights borders on hover.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json
```

## Usage

```svelte
<script lang="ts">
  import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard class="rounded-xl p-8">Hover over this card</MagicCard>
```

## Preview

#### magic-card.svelte

```svelte
<script>
  import { MagicCard } from "#lib/components/magic/magic-card/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import * as Card from "#lib/components/ui/card/index.js";
  import { Input } from "#lib/components/ui/input/index.ts";
  import { Label } from "#lib/components/ui/label/index.ts";
  import { mode } from "mode-watcher";
</script>

<Card.Root class="w-full max-w-sm border-none p-0 shadow-none">
  <MagicCard
    gradientSize={160}
    gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
    class="p-0"
  >
    <Card.Header class="border-border border-b p-4 [.border-b]:pb-4">
      <Card.Title>Login</Card.Title>
      <Card.Description
        >Enter your credentials to access your account</Card.Description
      >
    </Card.Header>
    <Card.Content class="p-4">
      <form>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>
      </form>
    </Card.Content>
    <Card.Footer class="border-border border-t p-4 [.border-t]:pt-4">
      <Button class="w-full">Sign In</Button>
    </Card.Footer>
  </MagicCard>
</Card.Root>
```

#### index.ts

```typescript
export { default as MagicCard } from "./magic-card.svelte";
```

## Examples

### 1. Default Example

#### magic-card.svelte

```svelte
<script>
  import { MagicCard } from "#lib/components/magic/magic-card/index.ts";
  import { Button } from "#lib/components/ui/button/index.ts";
  import * as Card from "#lib/components/ui/card/index.js";
  import { Input } from "#lib/components/ui/input/index.ts";
  import { Label } from "#lib/components/ui/label/index.ts";
  import { mode } from "mode-watcher";
</script>

<Card.Root class="w-full max-w-sm border-none p-0 shadow-none">
  <MagicCard
    gradientSize={160}
    gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
    class="p-0"
  >
    <Card.Header class="border-border border-b p-4 [.border-b]:pb-4">
      <Card.Title>Login</Card.Title>
      <Card.Description
        >Enter your credentials to access your account</Card.Description
      >
    </Card.Header>
    <Card.Content class="p-4">
      <form>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>
      </form>
    </Card.Content>
    <Card.Footer class="border-border border-t p-4 [.border-t]:pt-4">
      <Button class="w-full">Sign In</Button>
    </Card.Footer>
  </MagicCard>
</Card.Root>
```

#### index.ts

```typescript
export { default as MagicCard } from "./magic-card.svelte";
```

### 2. command reference

An emerald spotlight around a copyable installation command.

```svelte
<script lang="ts">
  import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard
  gradientSize={220}
  gradientColor="var(--color-emerald-400)"
  gradientOpacity={0.12}
  gradientFrom="var(--color-emerald-400)"
  gradientTo="var(--color-emerald-700)"
  class="w-full max-w-md rounded-lg"
>
  <div class="p-6">
    <h3 class="text-sm font-medium">install the component</h3>
    <pre
      class="mt-4 overflow-x-auto font-mono text-sm text-emerald-800 dark:text-emerald-200"><code
        >pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/r/magic-card.json</code
      ></pre>
  </div>
</MagicCard>
```

### 3. documentation card

An orange spotlight on a documentation link with a visible keyboard focus state.

```svelte
<script lang="ts">
  import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard
  gradientSize={180}
  gradientColor="var(--color-orange-400)"
  gradientOpacity={0.1}
  gradientFrom="var(--color-orange-400)"
  gradientTo="var(--color-orange-700)"
  class="w-full max-w-sm rounded-lg"
>
  <a
    href="/magic/docs/components/magic-card#props"
    class="block rounded-[inherit] p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
  >
    <h3 class="font-medium text-orange-800 dark:text-orange-200">
      spotlight settings &rarr;
    </h3>
    <p class="text-muted-foreground mt-2 text-sm">
      Adjust the radius, border colors, and overlay opacity.
    </p>
  </a>
</MagicCard>
```

### 4. plain spotlight

A monochrome spotlight with a faint overlay and no extra card content.

```svelte
<script lang="ts">
  import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard
  gradientColor="var(--foreground)"
  gradientOpacity={0.06}
  gradientFrom="var(--foreground)"
  gradientTo="var(--border)"
  class="w-full max-w-sm rounded-lg"
>
  <div class="flex h-40 items-center justify-center p-6 text-sm">
    move your pointer
  </div>
</MagicCard>
```

### 5. compact file link

A small downloadable registry file with a restrained emerald spotlight.

```svelte
<script lang="ts">
  import { MagicCard } from "#lib/components/magic/magic-card/index.js";
  import { FileJson, ArrowDownToLine } from "@lucide/svelte";
</script>

<MagicCard
  gradientSize={140}
  gradientColor="var(--color-emerald-400)"
  gradientOpacity={0.08}
  gradientFrom="var(--color-emerald-400)"
  gradientTo="var(--border)"
  class="w-full max-w-sm rounded-lg"
>
  <a
    href="/r/magic-card.json"
    download="magic-card.json"
    class="flex items-center gap-3 rounded-[inherit] px-5 py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
  >
    <FileJson
      class="size-5 shrink-0 text-emerald-700 dark:text-emerald-400"
      strokeWidth={1.2}
    />
    <span class="flex-1 font-mono text-sm">magic-card.json</span>
    <ArrowDownToLine class="text-muted-foreground size-4" strokeWidth={1.2} />
  </a>
</MagicCard>
```

## Props

A component for Magic Card.

| Prop              | Type      | Default     | Description                            |
| ----------------- | --------- | ----------- | -------------------------------------- |
| `children`        | `Snippet` | `-`         | Card content.                          |
| `class`           | `string`  | `""`        | Additional CSS classes.                |
| `gradientSize`    | `number`  | `200`       | Size of the gradient circle.           |
| `gradientColor`   | `string`  | `"#262626"` | Color of the gradient overlay.         |
| `gradientOpacity` | `number`  | `0.8`       | Opacity of the gradient overlay.       |
| `gradientFrom`    | `string`  | `"#9E7AFF"` | Starting color of the border gradient. |
| `gradientTo`      | `string`  | `"#FE8BBB"` | Ending color of the border gradient.   |
