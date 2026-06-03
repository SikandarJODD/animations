import type { Component } from "svelte";
import {
	getComponentById,
	type MagicComponent,
} from "$lib/components/docs/registry/magic-ui";
import AnimatedShinyTextPreview from "./examples/animated-shiny-text-preview.svelte";
import AuroraTextPreview from "./examples/aurora-text-preview.svelte";
import BorderBeamPreview from "./examples/border-beam-preview.svelte";
import DiaTextRevealPreview from "./examples/dia-text-reveal-preview.svelte";
import DottedMapPreview from "./examples/dotted-map-preview.svelte";
import LineShadowTextPreview from "./examples/line-shadow-text-preview.svelte";
import MorphingTextPreview from "./examples/morphing-text-preview.svelte";
import OrbitingCirclesPreview from "./examples/orbiting-circles-preview.svelte";
import PixelImagePreview from "./examples/pixel-image-preview.svelte";
import ShimmerButtonPreview from "./examples/shimmer-button-preview.svelte";

export type MagicOverviewShowcaseItem = MagicComponent & {
	preview: Component;
};

const previewById: Record<string, Component> = {
	"animated-gradient-text": AnimatedShinyTextPreview,
	"aurora-text": AuroraTextPreview,
	"border-beam": BorderBeamPreview,
	"dia-text-reveal": DiaTextRevealPreview,
	"dotted-map": DottedMapPreview,
	"line-shadow-text": LineShadowTextPreview,
	"morphing-text": MorphingTextPreview,
	"orbiting-circles": OrbitingCirclesPreview,
	"pixel-image": PixelImagePreview,
	"shimmer-button": ShimmerButtonPreview,
};

const showcaseIds = [
	"dia-text-reveal",
	"line-shadow-text",
	"pixel-image",
	"orbiting-circles",
	"aurora-text",
	"animated-gradient-text",
	"morphing-text",
	"shimmer-button",
	"dotted-map",
	"border-beam",
] as const;

function getShowcaseItem(id: (typeof showcaseIds)[number]): MagicOverviewShowcaseItem {
	const component = getComponentById(id);

	if (!component) {
		throw new Error(`Missing Magic UI component registry entry for "${id}"`);
	}

	const preview = previewById[id];

	if (!preview) {
		throw new Error(`Missing Magic UI preview component for "${id}"`);
	}

	return {
		...component,
		preview,
	};
}

export const magicOverviewShowcaseItems = showcaseIds.map(getShowcaseItem);
