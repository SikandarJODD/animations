<script lang="ts">
	import { CheckIcon, CopyIcon } from "lucide-svelte";
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLButtonAttributes } from "svelte/elements";

	type SizeVariant = "sm" | "default" | "lg";

	const sizeMap: Record<SizeVariant, { button: string; icon: number }> = {
		sm: { button: "h-8 w-8", icon: 14 },
		default: { button: "h-9 w-9", icon: 16 },
		lg: { button: "h-12 w-12", icon: 20 },
	};

	type Props = WithElementRef<HTMLButtonAttributes, HTMLButtonElement> & {
		text?: string;
		size?: SizeVariant;
	};

	let {
		ref = $bindable(null),
		text,
		size = "default",
		class: className,
		onclick,
		...restProps
	}: Props = $props();

	let copied = $state(false);
	let timeoutId: ReturnType<typeof setTimeout> | undefined;

	function handleCopy(event: MouseEvent & { currentTarget: HTMLButtonElement }) {
		if (text) {
			navigator.clipboard.writeText(text).catch(() => {});
		}
		copied = true;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			copied = false;
		}, 1500);
		if (typeof onclick === "function") {
			onclick(event);
		}
	}

	$effect(() => {
		return () => clearTimeout(timeoutId);
	});

	let buttonSize = $derived(sizeMap[size].button);
	let iconSize = $derived(sizeMap[size].icon);
</script>

<button
	bind:this={ref}
	type="button"
	onclick={handleCopy}
	aria-label={copied ? "Copied" : "Copy to clipboard"}
	disabled={copied}
	class={cn(
		"relative cursor-pointer active:scale-[0.97] transition-all ease-out duration-200 inline-flex items-center justify-center rounded-md text-neutral-900 disabled:pointer-events-none disabled:opacity-100 dark:text-neutral-50",
		buttonSize,
		className,
	)}
	{...restProps}
>
	<div
		class={cn(
			"transition-all duration-200",
			copied ? "scale-100 opacity-100 blur-none" : "scale-[0.7] opacity-0 blur-[2px]",
		)}
	>
		<CheckIcon size={iconSize} strokeWidth={2} aria-hidden="true" />
	</div>
	<div
		class={cn(
			"absolute transition-all duration-200",
			copied ? "scale-0 opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-none",
		)}
	>
		<CopyIcon size={iconSize} strokeWidth={2} aria-hidden="true" />
	</div>
</button>
