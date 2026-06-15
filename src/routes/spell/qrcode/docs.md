# QRCode

QR code generator with rounded finder patterns and dot-style data modules.

## Installation

```bash
# npm
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/qrcode.json
npm install qrcode

# yarn
npx shadcn-svelte@latest add https://sv-animations.vercel.app/s/qrcode.json
yarn add qrcode

# pnpm
pnpm dlx shadcn-svelte@latest add https://sv-animations.vercel.app/s/qrcode.json
pnpm add qrcode

# bun
bun x shadcn-svelte@latest add https://sv-animations.vercel.app/s/qrcode.json
bun add qrcode
```

## Preview

```svelte
<script lang="ts">
	import { QRCode } from "$lib/components/spell/qrcode";
</script>

<div
	class="dark:border-input w-[140px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] dark:border [&_svg]:h-auto [&_svg]:w-full"
>
	<QRCode value="https://sv-agentation.com" size={140} />
</div>
```

## Examples

### 1. Custom Colors

Override the foreground, background, size, and error-correction level to fit branded tickets, packaging, or event cards.

```svelte
<script lang="ts">
	import { QRCode } from "$lib/components/spell/qrcode";
</script>

<div class="flex flex-wrap items-center justify-center gap-6">
	<div
		class="dark:border-input w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode
			value="https://sv-blocks.vercel.app"
			size={140}
			fgColor="#c2410c"
			bgColor="var(--background)"
		/>
	</div>
	<div
		class="dark:border-input w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode
			value="https://sv-efferd.pages.dev"
			size={140}
			fgColor="#1d4ed8"
			bgColor="var(--background)"
		/>
	</div>
	<div
		class="dark:border-input w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode
			value="https://svelte-ai-elements.vercel.app"
			size={140}
			fgColor="#15803d"
			bgColor="var(--background)"
		/>
	</div>
</div>
```

## Usage

Import `Qrcode` from `$lib/components/spell/qrcode` and pass the props you need for your use case.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `string` | `required` | The encoded text or URL used to generate the QR code. |
| `size` | `number` | `268` | Controls the rendered width and height of the SVG in pixels. |
| `fgColor` | `string` | `"var(--foreground)"` | Sets the foreground color used for the modules and finder patterns. |
| `bgColor` | `string` | `"var(--background)"` | Sets the background color of the QR surface. |
| `errorCorrectionLevel` | `"L" \| "M" \| "Q" \| "H"` | `"M"` | Controls the QR error correction level passed to the generator. |
| `class` | `string` | `''` | Custom classes merged onto the root SVG element. |
