import { onMount } from "svelte";

export interface MousePosition {
	x: number;
	y: number;
}

export function useMousePosition(
	getContainer?: () => HTMLElement | SVGElement | null
): MousePosition {
	let position = $state<MousePosition>({ x: 0, y: 0 });

	onMount(() => {
		function updatePosition(x: number, y: number) {
			const container = getContainer?.();

			if (container) {
				const rect = container.getBoundingClientRect();
				position.x = x - rect.left;
				position.y = y - rect.top;
				return;
			}

			position.x = x;
			position.y = y;
		}

		function handleMouseMove(event: MouseEvent) {
			updatePosition(event.clientX, event.clientY);
		}

		function handleTouchMove(event: TouchEvent) {
			const touch = event.touches[0];

			if (touch) {
				updatePosition(touch.clientX, touch.clientY);
			}
		}

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("touchmove", handleTouchMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("touchmove", handleTouchMove);
		};
	});

	return position;
}
