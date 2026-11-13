<script lang="ts">
	import { cn } from "#lib/utils.js";
	import { useInView } from "motion-sv";
	import { watch } from "runed";

	type Grid = {
		rows: number;
		cols: number;
	};

	const DEFAULT_GRIDS: Record<string, Grid> = {
		"6x4": { rows: 4, cols: 6 },
		"8x8": { rows: 8, cols: 8 },
		"8x3": { rows: 3, cols: 8 },
		"4x6": { rows: 6, cols: 4 },
		"3x8": { rows: 8, cols: 3 },
	};

	type PredefinedGridKey = keyof typeof DEFAULT_GRIDS;

	interface Props {
		src: string;
		grid?: PredefinedGridKey;
		customGrid?: Grid;
		grayscaleAnimation?: boolean;
		pixelFadeInDuration?: number;
		maxAnimationDelay?: number;
		colorRevealDelay?: number;
		once?: boolean;
	}

	let {
		src,
		grid = "6x4",
		grayscaleAnimation = true,
		pixelFadeInDuration = 1000,
		maxAnimationDelay = 1200,
		colorRevealDelay = 1300,
		customGrid,
		once = false,
	}: Props = $props();

	let showColor = $state(false);

	const MIN_GRID = 1;
	const MAX_GRID = 16;

	let dimensions = $derived.by(() => {
		const isValidGrid = (grid?: Grid) => {
			if (!grid) return false;
			const { rows, cols } = grid;
			return (
				Number.isInteger(rows) &&
				Number.isInteger(cols) &&
				rows >= MIN_GRID &&
				cols >= MIN_GRID &&
				rows <= MAX_GRID &&
				cols <= MAX_GRID
			);
		};

		return isValidGrid(customGrid) ? customGrid! : DEFAULT_GRIDS[grid];
	});

	let pieces = $derived.by(() => {
		const total = dimensions.rows * dimensions.cols;
		return Array.from({ length: total }, (_, index) => {
			const row = Math.floor(index / dimensions.cols);
			const col = index % dimensions.cols;

			const clipPath = `polygon(
        ${col * (100 / dimensions.cols)}% ${row * (100 / dimensions.rows)}%,
        ${(col + 1) * (100 / dimensions.cols)}% ${row * (100 / dimensions.rows)}%,
        ${(col + 1) * (100 / dimensions.cols)}% ${(row + 1) * (100 / dimensions.rows)}%,
        ${col * (100 / dimensions.cols)}% ${(row + 1) * (100 / dimensions.rows)}%
      )`;

			const delay = Math.random() * maxAnimationDelay;
			return {
				clipPath,
				delay,
			};
		});
	});

	let element: HTMLDivElement | null = $state(null);
	let view = useInView(
		() => element!,
		() => ({ once }) as any // type definition bug
	);

	watch(
		() => view.current,
		(isInView) => {
			if (isInView) {
				// Element entered view - start color reveal after delay
				const colorTimeout = setTimeout(() => {
					showColor = true;
				}, colorRevealDelay);
				return () => clearTimeout(colorTimeout);
			} else if (!once) {
				// Element left view and once is false - reset animation
				showColor = false;
			}
		}
	);

	// $inspect(view.current, "In View");
</script>

<div class="relative h-72 w-72 select-none md:h-96 md:w-96" bind:this={element}>
	{#each pieces as piece, index}
		<div
			class={cn(
				"absolute inset-0 transition-all ease-out",
				view.current ? "opacity-100" : "opacity-0"
			)}
			style="clip-path: {piece.clipPath}; transition-delay: {piece.delay}ms; transition-duration: {pixelFadeInDuration}ms;"
		>
			<img
				{src}
				alt="Pixel image piece {index + 1}"
				class={cn(
					"z-1 rounded-[2.5rem] object-cover",
					grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")
				)}
				style={grayscaleAnimation
					? `filter: ${showColor ? "grayscale(0)" : "grayscale(1)"}; transition: filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
					: ""}
				draggable="false"
			/>
		</div>
	{/each}
</div>
