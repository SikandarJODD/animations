<script lang="ts" module>
	import type { Options } from "motion-sv";
	import type { Snippet } from "svelte";

	export type AnimatedBackgroundProps = {
		children?: Snippet;
		defaultValue?: string;
		onValueChange?: (newActiveId: string | null) => void;
		class?: string;
		transition?: Options["transition"];
		enableHover?: boolean;
	};
</script>

<script lang="ts">
	import { createLayoutMotion } from "motion-sv";
	import { watch } from "runed";
	import { setAnimatedBackgroundContext } from "./animated-background-context.svelte.js";

	let {
		children,
		defaultValue,
		onValueChange,
		class: backgroundClass,
		transition,
		enableHover = false
	}: AnimatedBackgroundProps = $props();

	let activeId = $state<string | null>(null);
	const uniqueId = $props.id();
	const layout = createLayoutMotion();
	const updateActiveId = layout.update.with((id: string | null) => {
		activeId = id;
	});

	function setActiveId(id: string | null) {
		updateActiveId(id);
		onValueChange?.(id);
	}

	watch(
		() => defaultValue,
		(value) => {
			if (value !== undefined) {
				updateActiveId(value);
			}
		}
	);

	setAnimatedBackgroundContext({
		get activeId() {
			return activeId;
		},
		get backgroundClass() {
			return backgroundClass;
		},
		get transition() {
			return transition;
		},
		get enableHover() {
			return enableHover;
		},
		layoutId: `background-${uniqueId}`,
		layout,
		setActiveId
	});
</script>

{@render children?.()}
