<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const labelInputVariants = tv({
		base: "peer text-primary block h-10 w-full rounded-lg border px-3.5 text-sm shadow-xs transition-[color,box-shadow,border-color] outline-none autofill:shadow-[inset_0_0_0px_1000px_var(--color-background)] focus:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700/75 dark:bg-neutral-950",
		variants: {
			ringColor: {
				muted: "border-input bg-background focus:ring-muted!",
				primary: "border-input bg-background focus:ring-primary",
				secondary: "border-input bg-background focus:ring-secondary",
				destructive: "border-input bg-background focus:ring-destructive",
				red: "border-input bg-background focus:ring-red-600",
				blue: "border-input bg-background focus:ring-blue-600",
				green: "border-input bg-background focus:ring-green-600",
				yellow: "border-input bg-background focus:ring-yellow-600",
				purple: "border-input bg-background focus:ring-purple-600",
				pink: "border-input bg-background focus:ring-pink-600",
				orange: "border-input bg-background focus:ring-orange-600",
				cyan: "border-input bg-background focus:ring-cyan-600",
				indigo: "border-input bg-background focus:ring-indigo-600",
				violet: "border-input bg-background focus:ring-violet-600",
				rose: "border-input bg-background focus:ring-rose-600",
				amber: "border-input bg-background focus:ring-amber-600",
				lime: "border-input bg-background focus:ring-lime-600",
				emerald: "border-input bg-background focus:ring-emerald-600",
				sky: "border-input bg-background focus:ring-sky-600",
				slate: "border-input bg-background focus:ring-slate-600",
				fuchsia: "border-input bg-background focus:ring-fuchsia-600",
			},
			hasPasswordToggle: {
				true: "pr-9",
			},
		},
		defaultVariants: {
			ringColor: "muted",
		},
	});

	export type RingColor = VariantProps<typeof labelInputVariants>["ringColor"];
</script>

<script lang="ts">
	import EyeIcon from "@lucide/svelte/icons/eye";
	import EyeOffIcon from "@lucide/svelte/icons/eye-off";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import type { HTMLInputAttributes as InputAttributes } from "svelte/elements";

	type InputType = "text" | "email" | "password" | "search" | "tel" | "url" | "number" | "hidden";

	type Props = WithElementRef<
		Omit<InputAttributes, "type"> & {
			type?: InputType;
			label?: string;
			ringColor?: RingColor;
			containerClassName?: string;
			inputClassName?: string;
		},
		HTMLInputElement
	>;

	let {
		ref = $bindable(null),
		value = $bindable(),
		label = "",
		ringColor = "muted",
		containerClassName,
		inputClassName,
		class: className,
		type = "text",
		placeholder = "",
		disabled = false,
		...restProps
	}: Props = $props();

	let isVisible = $state(false);
	let isPasswordType = $derived(type === "password");
	let inputType = $derived(isPasswordType ? (isVisible ? "text" : "password") : type);

	function toggleVisibility() {
		isVisible = !isVisible;
	}
	let id = $props.id();
</script>

<div class={cn("group relative w-full", className, containerClassName)}>
	<input
		bind:this={ref}
		bind:value
		data-slot="label-input"
		class={cn(
			labelInputVariants({ ringColor, hasPasswordToggle: isPasswordType }),
			inputClassName,
			"placeholder:opacity-0 placeholder:transition-opacity focus:placeholder:opacity-100 focus:placeholder:delay-100 focus:placeholder:duration-200"
		)}
		{placeholder}
		type={inputType}
		{disabled}
		{id}
		{...restProps}
	/>

	<label
		class="bg-background text-muted-foreground pointer-events-none absolute inset-y-0 left-1.75 my-auto block h-fit origin-top-left -translate-y-[19px] scale-[.8] px-2 text-sm whitespace-nowrap transition-transform duration-200 will-change-transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-[19px] peer-focus:scale-[.8] dark:bg-neutral-950"
		for={id}
	>
		{label}
	</label>

	{#if isPasswordType}
		<button
			class="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
			type="button"
			onclick={toggleVisibility}
			aria-label={isVisible ? "Hide password" : "Show password"}
			aria-pressed={isVisible}
			{disabled}
		>
			{#if isVisible}
				<EyeOffIcon class="size-4" aria-hidden="true" />
			{:else}
				<EyeIcon class="size-4" aria-hidden="true" />
			{/if}
		</button>
	{/if}
</div>
