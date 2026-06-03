import { onMount } from 'svelte';

export interface Dimensions {
    width: number;
    height: number;
}

export function useDimensions(getElement: () => HTMLElement | SVGElement | null): Dimensions {
    const dimensions = $state<Dimensions>({
        width: 0,
        height: 0
    });

    onMount(() => {
        const element = getElement();

        if (!element) {
            return;
        }

        const updateDimensions = () => {
            const { width, height } = element.getBoundingClientRect();
            dimensions.width = width;
            dimensions.height = height;
        };

        const resizeObserver = new ResizeObserver(updateDimensions);

        resizeObserver.observe(element);
        window.addEventListener('resize', updateDimensions);
        updateDimensions();

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateDimensions);
        };
    });

    return dimensions;
}
