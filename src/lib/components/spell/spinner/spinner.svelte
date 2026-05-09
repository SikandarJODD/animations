<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { SVGAttributes } from "svelte/elements";

	type SizeVariant = "sm" | "default" | "md" | "lg";
	type SpeedVariant = "slow" | "normal" | "fast";

	type Props = SVGAttributes<SVGSVGElement> & {
		size?: SizeVariant;
		speed?: SpeedVariant;
		class?: string;
	};

	const sizeClasses: Record<SizeVariant, string> = {
		sm: "h-4 w-4",
		default: "h-5 w-5",
		md: "h-6 w-6",
		lg: "h-8 w-8",
	};

	const speedClasses: Record<SpeedVariant, string> = {
		slow: "animate-[spin_2s_linear_infinite]",
		normal: "animate-spin",
		fast: "animate-[spin_0.5s_linear_infinite]",
	};

	let { size = "md", speed = "normal", class: className, ...restProps }: Props = $props();

	const gradientId = `spinner-gradient-${Math.random().toString(36).slice(2, 9)}`;
</script>

<span
	data-spinner
	class={cn("inline-block", speedClasses[speed], sizeClasses[size], className)}
>
	<svg
		data-slot-icon
		viewBox="0 0 24 24"
		aria-hidden="true"
		aria-label="Loading"
		role="presentation"
		class="h-full w-full"
		{...restProps}
	>
		<defs>
			<linearGradient
				id={`gradient-1-${gradientId}`}
				x1="50%"
				x2="50%"
				y1="5.271%"
				y2="91.793%"
			>
				<stop offset="0%" stop-color="currentColor" />
				<stop offset="100%" stop-color="currentColor" stop-opacity={0.55} />
			</linearGradient>
			<linearGradient
				id={`gradient-2-${gradientId}`}
				x1="50%"
				x2="50%"
				y1="15.24%"
				y2="87.15%"
			>
				<stop offset="0%" stop-color="currentColor" stop-opacity={0} />
				<stop offset="100%" stop-color="currentColor" stop-opacity={0.55} />
			</linearGradient>
		</defs>
		<g fill="none">
			<path
				d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.5 7.5 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021"
				fill={`url(#gradient-1-${gradientId})`}
				transform="translate(1.5 1.625)"
			/>
			<path
				d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.48 10.48 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118"
				fill={`url(#gradient-2-${gradientId})`}
				transform="translate(1.5 1.625)"
			/>
		</g>
	</svg>
</span>
