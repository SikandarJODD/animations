import type { Component } from "svelte";
import { spellUIComponents, type SpellComponent } from "$lib/components/docs/registry/spell_ui";
import AnimatedCheckboxPreview from "../../../../routes/spell/animated-checkbox/examples/preview.svelte";
import BadgePreview from "../../../../routes/spell/badge/examples/preview.svelte";
import BarSpinnerPreview from "../../../../routes/spell/bar-spinner/examples/preview.svelte";
import BlurRevealPreview from "../../../../routes/spell/blur-reveal/examples/preview.svelte";
import ColorSelectorPreview from "../../../../routes/spell/color-selector/examples/preview.svelte";
import ExplodingInputPreview from "../../../../routes/spell/exploding-input/examples/preview.svelte";
import GradientWaveTextPreview from "../../../../routes/spell/gradient-wave-text/examples/preview.svelte";
import HighlightedTextPreview from "../../../../routes/spell/highlighted-text/examples/preview.svelte";
import KbdPreview from "../../../../routes/spell/kbd/examples/preview.svelte";
import LabelInputPreview from "../../../../routes/spell/label-input/examples/preview.svelte";
import LogoCarouselPreview from "../../../../routes/spell/logo-carousel/examples/preview.svelte";
import MarqueePreview from "../../../../routes/spell/marquee/examples/preview.svelte";
import PerspectiveBookPreview from "../../../../routes/spell/perspective-book/examples/preview.svelte";
import QRCodePreview from "../../../../routes/spell/qrcode/examples/preview.svelte";
import RandomizedTextPreview from "../../../../routes/spell/randomized-text/examples/preview.svelte";
import SignaturePreview from "../../../../routes/spell/signature/examples/preview.svelte";
import SlideUpTextPreview from "../../../../routes/spell/slide-up-text/examples/preview.svelte";
import SpecialTextPreview from "../../../../routes/spell/special-text/examples/preview.svelte";
import SpotifyCardPreview from "../../../../routes/spell/spotify-card/examples/preview.svelte";
import TextMarqueePreview from "../../../../routes/spell/text-marquee/examples/preview.svelte";
import TiltCardPreview from "../../../../routes/spell/tilt-card/examples/preview.svelte";
import WordsStaggerPreview from "../../../../routes/spell/words-stagger/examples/preview.svelte";

export type SpellShowcaseItem = SpellComponent & {
	preview: Component;
};

const previewById: Record<string, Component> = {
	"perspective-book": PerspectiveBookPreview,
	"tilt-card": TiltCardPreview,
	badge: BadgePreview,
	"bar-spinner": BarSpinnerPreview,
	kbd: KbdPreview,
	marquee: MarqueePreview,
	"spotify-card": SpotifyCardPreview,
	qrcode: QRCodePreview,
	"logo-carousel": LogoCarouselPreview,
	"text-marquee": TextMarqueePreview,
	"blur-reveal": BlurRevealPreview,
	"words-stagger": WordsStaggerPreview,
	"randomized-text": RandomizedTextPreview,
	"special-text": SpecialTextPreview,
	"highlighted-text": HighlightedTextPreview,
	"slide-up-text": SlideUpTextPreview,
	signature: SignaturePreview,
	"gradient-wave-text": GradientWaveTextPreview,
	"color-selector": ColorSelectorPreview,
	"label-input": LabelInputPreview,
	"animated-checkbox": AnimatedCheckboxPreview,
	"exploding-input": ExplodingInputPreview,
};

export const spellOverviewShowcaseItems: SpellShowcaseItem[] = spellUIComponents
	.filter((component) => component.id !== "overview" && component.id !== "introduction")
	.map((component) => ({
		...component,
		preview: previewById[component.id]!,
	}));
