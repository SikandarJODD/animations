<script lang="ts">
	import { motion } from "motion-sv";
	import { cn } from "#lib/utils.ts";

	type ElementType = "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

	interface LineShadowTextProps {
		content: string;
		class?: string;
		shadowColor?: string;
		as?: ElementType;
	}

	let {
		content,
		class: className,
		shadowColor = "black",
		as = "span",
	}: LineShadowTextProps = $props();

	let MotionComponent = $derived(motion[as]);
</script>

<MotionComponent
	style={{ "--shadow-color": shadowColor }}
	class={cn(
		"relative z-0 inline-block whitespace-pre",
		"after:absolute after:top-[0.04em] after:left-[0.04em] after:content-[attr(data-text)]",
		"after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
		"after:-z-10 after:bg-size-[0.06em_0.06em] after:bg-clip-text after:text-transparent",
		"after:animate-line-shadow",
		className
	)}
	data-text={content}
>
	{content}
</MotionComponent>
