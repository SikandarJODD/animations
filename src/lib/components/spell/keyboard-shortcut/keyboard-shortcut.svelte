<script lang="ts">
	import { PressedKeys } from "runed";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	type KeyItem = string | { display: string; key: string };

	type Props = WithElementRef<
		HTMLAttributes<HTMLElement> & {
			keys?: KeyItem[];
			active?: boolean;
			listenToKeyboard?: boolean;
		},
		HTMLElement
	>;

	const keySymbolMap = {
		command: "\u2318",
		cmd: "\u2318",
		control: "\u2303",
		ctrl: "\u2303",
		alt: "\u2325",
		option: "\u2325",
		space: "\u2423",
		arrowleft: "\u2190",
		left: "\u2190",
		arrowdown: "\u2193",
		down: "\u2193",
		arrowup: "\u2191",
		up: "\u2191",
		arrowright: "\u2192",
		right: "\u2192",
	} as const;

	const keyMatchMap: Record<string, string> = {
		command: "meta",
		cmd: "meta",
		control: "control",
		ctrl: "control",
		alt: "alt",
		option: "alt",
		shift: "shift",
		enter: "enter",
		return: "enter",
		space: " ",
		arrowleft: "arrowleft",
		left: "arrowleft",
		arrowdown: "arrowdown",
		down: "arrowdown",
		arrowup: "arrowup",
		up: "arrowup",
		arrowright: "arrowright",
		right: "arrowright",
	};

	const pressedKeys = new PressedKeys();

	function getKeyDisplay(item: KeyItem): string {
		const key = typeof item === "string" ? item : item.display;
		const lowerKey = key.toLowerCase();
		return keySymbolMap[lowerKey as keyof typeof keySymbolMap] || key.toUpperCase();
	}

	function getPressedKey(item: KeyItem): string {
		const key = typeof item === "string" ? item : item.key;
		const lowerKey = key.toLowerCase();
		return keyMatchMap[lowerKey] || lowerKey;
	}

	let {
		ref = $bindable(null),
		keys = [],
		class: className,
		active = false,
		listenToKeyboard = false,
		...restProps
	}: Props = $props();

	let normalizedKeys = $derived(keys.map(getPressedKey));
	let isPressed = $derived(
		listenToKeyboard && normalizedKeys.length > 0 ? pressedKeys.has(...normalizedKeys) : false
	);
	let isActive = $derived(active || isPressed);
</script>

<kbd
	bind:this={ref}
	data-slot="spell-kbd"
	class={cn(
		"relative -top-[0.03em] box-border inline-flex min-w-[1.75em] shrink-0 cursor-default items-center justify-center rounded-[0.35em] px-[0.5em] pb-[0.05em] align-text-top text-[0.75em] leading-[1.7em] font-normal tracking-tight whitespace-nowrap transition-all duration-100 select-none",
		isActive
			? "bg-background text-foreground translate-y-[0.05em] shadow-[inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.05em_0.2em_rgba(0,0,0,0.1),0_0_0_0.05em_rgba(0,0,0,0.134)] dark:shadow-[inset_0_0.05em_0.2em_rgba(0,0,0,0.3),0_0_0_0.05em_rgba(255,255,255,0.134)]"
			: "bg-background text-foreground shadow-[inset_0_-0.05em_0.5em_rgba(0,0,0,0.034),inset_0_0.05em_rgba(255,255,255,0.95),inset_0_0.25em_0.5em_rgba(0,0,0,0.034),inset_0_-0.05em_rgba(0,0,0,0.172),0_0_0_0.05em_rgba(0,0,0,0.134),0_0.08em_0.17em_rgba(0,0,0,0.231)] dark:shadow-[inset_0_-0.05em_0.5em_rgba(255,255,255,0.034),inset_0_0.05em_rgba(255,255,255,0.1),inset_0_0.25em_0.5em_rgba(255,255,255,0.034),inset_0_-0.05em_rgba(255,255,255,0.172),0_0_0_0.05em_rgba(255,255,255,0.134),0_0.08em_0.17em_rgba(255,255,255,0.231)]",
		className
	)}
	{...restProps}
>
	{#each keys as item, index (`${typeof item === "string" ? item : `${item.key}-${item.display}`}-${index}`)}
		<span class={index > 0 ? "ml-0.5" : undefined}>
			{getKeyDisplay(item)}
		</span>
	{/each}
</kbd>
