import type { Snippet } from "svelte";
import type { ButtonPropsWithoutHTML } from "$lib/components/ui/button";
import type { UseClipboard } from "$lib/hooks/use-clipboard.svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export type CopyButtonPropsWithoutHTML = Pick<
	ButtonPropsWithoutHTML,
	"size" | "variant"
> & {
	ref?: HTMLButtonElement | null;
	text: string;
	icon?: Snippet<[]>;
	animationDuration?: number;
	onCopy?: (status: UseClipboard["status"]) => void;
	title?: string;
	children?: Snippet;
};

export type CopyButtonProps = CopyButtonPropsWithoutHTML &
	Omit<HTMLButtonAttributes, keyof CopyButtonPropsWithoutHTML | "children">;
