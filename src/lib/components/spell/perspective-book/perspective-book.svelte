<script lang="ts">
	import { asset } from "$app/paths";
	import { cn } from "#lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	type BookSize = "sm" | "default" | "lg";

	interface SizeConfig {
		width: string;
		spineTranslation: string;
	}

	let sizeMap: Record<BookSize, SizeConfig> = {
		sm: { width: "150px", spineTranslation: "122px" },
		default: { width: "196px", spineTranslation: "168px" },
		lg: { width: "300px", spineTranslation: "272px" },
	};

	let borderRadius = "6px 4px 4px 6px";
	let defaultColorClasses =
		'bg-neutral-100 text-primary dark:bg-[#1f1f1f] dark:before:absolute dark:before:inset-0 dark:before:rounded-[inherit] dark:before:bg-gradient-to-b dark:before:from-[#ffffff1a] dark:before:to-transparent dark:before:content-[""]';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		size?: BookSize;
		class?: string;
		textured?: boolean;
		style?: string;
	}

	let {
		children,
		size = "default",
		class: className,
		textured = false,
		style,
		...props
	}: Props = $props();

	// you need to download the texture image
	// place it inside /static folder
	let textureUrl = asset("perspective-book-textured.avif");
</script>

<div class="group z-10 h-min w-min perspective-[900px]" {style} {...props}>
	<div
		class="relative aspect-49/60 transform-[rotateY(0deg)] transition-transform duration-300 ease-out transform-3d group-hover:-translate-x-1 group-hover:scale-[1.066] group-hover:transform-[rotateY(-20deg)]"
		style="width: {sizeMap[size].width}; border-radius: {borderRadius};"
	>
		<div
			class={cn(
				"absolute inset-y-0 left-0 flex size-full flex-col overflow-hidden p-[12%] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-solid after:border-[#00000014] after:shadow-[0_1.8px_3.6px_#0000000d,0_10.8px_21.6px_#00000014,inset_0_-.9px_#0000001a,inset_0_1.8px_1.8px_#ffffff1a,inset_3.6px_0_3.6px_#0000001a] after:content-['']",
				className || defaultColorClasses
			)}
			style="transform: translateZ(25px); border-radius:{borderRadius};"
		>
			<div
				class="absolute top-0 left-0 h-full opacity-40"
				style={`min-width: 8.2%; background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0) 12%, hsla(0, 0%, 100%, .25) 29.25%, hsla(0, 0%, 100%, 0) 50.5%, hsla(0, 0%, 100%, 0) 75.25%, hsla(0, 0%, 100%, .25) 91%, hsla(0, 0%, 100%, 0)), linear-gradient(90deg, rgba(0, 0, 0, .03), rgba(0, 0, 0, .1) 12%, transparent 30%, rgba(0, 0, 0, .02) 50%, rgba(0, 0, 0, .2) 73.5%, rgba(0, 0, 0, .5) 75.25%, rgba(0, 0, 0, .15) 85.25%, transparent);`}
			></div>

			<div class="h-full pl-1">
				{@render children?.()}
			</div>

			{#if textured && textureUrl}
				<div
					class="pointer-events-none absolute inset-0 rotate-180 bg-cover bg-no-repeat opacity-50 mix-blend-hard-light brightness-110"
					style={`border-radius: ${borderRadius}; background-image: url(${textureUrl});`}
				></div>
			{/if}
		</div>

		<div
			class="absolute left-0 bg-[linear-gradient(90deg,#eaeaea_0%,#0000_80%),linear-gradient(#fff,#fafafa)]"
			style="top: 3px; bottom: 3px; width: 48px; transform: translateX({sizeMap[size]
				.spineTranslation}) rotateY(90deg);"
		></div>

		<div
			class={cn(
				"absolute inset-y-0 left-0 flex size-full flex-col justify-end overflow-hidden p-[12%]",
				className || defaultColorClasses
			)}
			style="transform: translateZ(-25px); border-radius: {borderRadius};"
		></div>
	</div>
</div>
