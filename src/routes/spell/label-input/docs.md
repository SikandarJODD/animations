# Label Input

Input field with floating label and password visibility toggle.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/label-input.json
npm install tailwind-variants @lucide/svelte

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/label-input.json
yarn add tailwind-variants @lucide/svelte

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/label-input.json
pnpm add tailwind-variants @lucide/svelte

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/label-input.json
bun add tailwind-variants @lucide/svelte
```

## Preview

```svelte
<script lang="ts">
	import { LabelInput } from "$lib/components/spell/label-input";

	let email = $state("");
</script>

<div class="mx-auto flex w-full max-w-sm flex-col gap-3 py-8">
	<LabelInput label="Email address" placeholder="hello@spell.dev" bind:value={email} />
	<p class="text-muted-foreground text-sm">Value: {email || "Waiting for input"}</p>
</div>
```

## Examples

### 1. Password Toggle

```svelte
<script lang="ts">
	import { LabelInput } from "$lib/components/spell/label-input";

	let password = $state("");
	let project = $state("");
</script>

<div class="mx-auto grid w-full max-w-2xl gap-4 py-8 sm:grid-cols-2">
	<LabelInput
		type="password"
		label="Password"
		placeholder="Create a password"
		ringColor="violet"
		bind:value={password}
	/>

	<LabelInput
		label="Project Name"
		placeholder="Nebula"
		ringColor="emerald"
		bind:value={project}
	/>
</div>
```

### 2. Ring Color

```svelte
<script lang="ts">
	import { LabelInput } from "$lib/components/spell/label-input";
</script>

<div class="flex gap-4 not-md:flex-col">
	<LabelInput label="Primary" ringColor="primary" class="max-w-40" />
	<LabelInput label="Orange" ringColor="orange" class="max-w-40" />
	<LabelInput label="Blue" ringColor="blue" class="max-w-40" />
</div>
```

## Usage

Import `LabelInput` from `$lib/components/spell/label-input` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `"text" \| "email" \| "password" \| "search" \| "tel" \| "url" \| "number" \| "hidden"` | `"text"` | Controls the input type and enables the password visibility toggle when set to `password`. |
| `label` | `string` | `""` | The floating label text rendered inside the field container. |
| `ringColor` | `RingColor \| undefined` | `"muted"` | Selects the focus ring color variant for the input. |
| `value` | `string \| number \| undefined` | `undefined` | Controlled field value. Supports `bind:value`. |
| `placeholder` | `string \| undefined` | `""` | Hidden by default and revealed during focus to avoid competing with the label. |
| `containerClassName` | `string \| undefined` | `undefined` | Custom classes applied to the outer wrapper element. |
| `inputClassName` | `string \| undefined` | `undefined` | Custom classes applied directly to the input element. |
| `disabled` | `boolean \| undefined` | `false` | Disables typing, focus styles, and the password toggle button. |
| `class` | `string \| undefined` | `undefined` | Custom classes merged onto the wrapper root. |
