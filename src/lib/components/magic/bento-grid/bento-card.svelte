<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import type { Component } from "svelte";

	import { cn } from "#lib/utils.ts";
	import Button from "#lib/components/ui/button/button.svelte";
	import { ArrowRightIcon } from "@lucide/svelte";

	interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
		name: string;
		class?: string;
		background: Snippet;
		Icon: Component<any>;
		iconClass?: string;
		description: string;
		href: string;
		cta: string;
	}

	let {
		name,
		class: className,
		background,
		Icon,
		iconClass = "",
		description,
		href,
		cta,
		...props
	}: BentoCardProps = $props();
</script>

<div
	class={cn(
		"group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
		// light styles
		"bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
		// dark styles
		"dark:bg-background transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
		className
	)}
	{...props}
>
	<div>{@render background()}</div>
	<div class="p-4">
		<div
			class="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10"
		>
			<Icon
				class={cn(
					"h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75",
					iconClass
				)}
			/>
			<h3 class="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
				{name}
			</h3>
			<p class="max-w-lg text-neutral-400">{description}</p>
		</div>
		<div
			class={cn(
				"pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
			)}
		>
			<Button variant="link" size="sm" class="pointer-events-auto p-0">
				<a {href}>
					{cta}
					<ArrowRightIcon class="ms-2 h-4 w-4 rtl:rotate-180" />
				</a>
			</Button>
		</div>
	</div>
	<div
		class={cn(
			"pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
		)}
	>
		<Button {href} variant="link" size="sm" class="pointer-events-auto p-0">
			{cta}
			<ArrowRightIcon class="ms-2 h-4 w-4 rtl:rotate-180" />
		</Button>
	</div>
	<div
		class="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10"
	></div>
</div>
