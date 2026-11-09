<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { motion } from "motion-sv";
	import type { HTMLAttributes } from "svelte/elements";

	type AnimatedCheckboxProps = HTMLAttributes<HTMLButtonElement> & {
		title?: string;
		checked?: boolean;
		defaultChecked?: boolean;
		class?: string;
		onCheckedChange?: (checked: boolean) => void;
	};

	const springTransition = {
		type: "spring",
		duration: 0.4,
		bounce: 0.2,
	} as const;

	let {
		title = "Implement Checkbox",
		checked = undefined,
		defaultChecked = false,
		class: className,
		onCheckedChange,
		...props
	}: AnimatedCheckboxProps = $props();

	let internalChecked = $derived(defaultChecked);

	const isControlled = $derived(checked !== undefined);
	const isChecked = $derived(isControlled ? checked : internalChecked);

	function handleToggle() {
		const nextChecked = !isChecked;

		if (!isControlled) {
			internalChecked = nextChecked;
		}

		onCheckedChange?.(nextChecked);
	}
</script>

<button
	type="button"
	class={cn(
		"group flex items-center gap-3 text-left select-none focus-visible:ring-2 focus-visible:ring-slate-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-950",
		className
	)}
	role="checkbox"
	aria-checked={isChecked}
	onclick={handleToggle}
	{...props}
>
	<div
		class={cn(
			"flex size-[18px] items-center justify-center rounded-[6px] border-[1.5px] transition-colors duration-200",
			isChecked
				? "border-transparent bg-slate-950 text-white dark:bg-slate-50 dark:text-slate-950"
				: "border-slate-400/50 bg-transparent text-slate-950 group-hover:border-slate-500/70 dark:border-slate-500/60 dark:text-slate-50 dark:group-hover:border-slate-400"
		)}
	>
		<svg viewBox="0 0 20 20" class="size-full">
			<motion.path
				d="M 0 4.5 L 3.182 8 L 10 0"
				fill="transparent"
				stroke="currentColor"
				stroke-width={1.5}
				stroke-linecap="round"
				stroke-linejoin="round"
				transform="translate(5 6)"
				initial={{ pathLength: defaultChecked ? 1 : 0, opacity: defaultChecked ? 1 : 0 }}
				animate={{
					pathLength: isChecked ? 1 : 0,
					opacity: isChecked ? 1 : 0,
				}}
				transition={{
					pathLength: { ease: "easeOut", duration: 0.3 },
					opacity: { duration: 0 },
				}}
			/>
		</svg>
	</div>

	<div class="relative">
		<span
			class={cn(
				"text-base font-medium transition-colors duration-200",
				isChecked
					? "text-slate-500 dark:text-slate-400"
					: "text-slate-950 dark:text-slate-50"
			)}
		>
			{title}
		</span>

		<motion.div
			class="absolute top-1/2 left-0 h-[1.5px] -translate-y-1/2 bg-slate-500 dark:bg-slate-400"
			initial={{ width: defaultChecked ? "100%" : 0, opacity: defaultChecked ? 1 : 0 }}
			animate={{
				width: isChecked ? "100%" : 0,
				opacity: isChecked ? 1 : 0,
			}}
			transition={springTransition}
		/>
	</div>
</button>
