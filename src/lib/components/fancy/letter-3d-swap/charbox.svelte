<script lang="ts">
	import { cn } from "$lib/utils";

	export type RotateDirection = "top" | "right" | "bottom" | "left";

	interface CharBoxProps {
		char: string;
		frontFaceClass?: string;
		secondFaceClass?: string;
		rotateDirection: RotateDirection;
	}

	let {
		char,
		frontFaceClass = "",
		secondFaceClass = "",
		rotateDirection,
	}: CharBoxProps = $props();

	let outerTransform = $derived(
		rotateDirection === "top" || rotateDirection === "bottom"
			? "translateZ(-0.5lh)"
			: "rotateY(90deg) translateX(50%) rotateY(-90deg)"
	);

	let frontFaceTransform = $derived.by(() => {
		if (rotateDirection === "top" || rotateDirection === "bottom") {
			return "translateZ(0.5lh)";
		}

		if (rotateDirection === "left") {
			return "rotateY(90deg) translateX(50%) rotateY(-90deg)";
		}

		return "rotateY(-90deg) translateX(50%) rotateY(90deg)";
	});

	let secondFaceTransform = $derived.by(() => {
		switch (rotateDirection) {
			case "top":
				return "rotateX(-90deg) translateZ(0.5lh)";
			case "right":
				return "rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(-50%) rotateY(-90deg) translateX(50%)";
			case "bottom":
				return "rotateX(90deg) translateZ(0.5lh)";
			case "left":
				return "rotateY(90deg) translateX(50%) rotateY(-90deg) translateX(50%) rotateY(-90deg) translateX(50%)";
			default:
				return "rotateY(90deg) translateZ(1ch)";
		}
	});
</script>

<span
	class="letter-3d-swap-char-box-item relative align-top transform-3d"
	style:transform={outerTransform}
>
	<span
		class={cn("relative h-lh backface-hidden!", frontFaceClass)}
		style:transform={frontFaceTransform}
	>
		{char}
	</span>

	<span
		class={cn("absolute top-0 left-0 h-lh backface-hidden!", secondFaceClass)}
		style:transform={secondFaceTransform}
	>
		{char}
	</span>
</span>
