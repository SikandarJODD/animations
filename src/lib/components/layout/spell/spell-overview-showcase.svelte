<script lang="ts">
	import AnimatedCheckboxPreview from "../../../../routes/spell/animated-checkbox/examples/preview.svelte";
	import ColorSelectorPreview from "../../../../routes/spell/color-selector/examples/preview.svelte";
	import ExplodingInputPreview from "../../../../routes/spell/exploding-input/examples/preview.svelte";
	import GradientWaveTextPreview from "../../../../routes/spell/gradient-wave-text/examples/preview.svelte";
	import HighlightedTextPreview from "../../../../routes/spell/highlighted-text/examples/preview.svelte";
	import LabelInputPreview from "../../../../routes/spell/label-input/examples/preview.svelte";
	import LogoCarouselPreview from "../../../../routes/spell/logo-carousel/examples/preview.svelte";
	import MarqueePreview from "../../../../routes/spell/marquee/examples/preview.svelte";
	import PerspectiveBookPreview from "../../../../routes/spell/perspective-book/examples/preview.svelte";
	import QRCodePreview from "../../../../routes/spell/qrcode/examples/preview.svelte";
	import SignaturePreview from "../../../../routes/spell/signature/examples/preview.svelte";
	import SlideUpTextPreview from "../../../../routes/spell/slide-up-text/examples/preview.svelte";
	import SpecialTextPreview from "../../../../routes/spell/special-text/examples/preview.svelte";
	import SpotifyCardPreview from "../../../../routes/spell/spotify-card/examples/preview.svelte";
	import TextMarqueePreview from "../../../../routes/spell/text-marquee/examples/preview.svelte";
	import SpellShowcaseCard from "./spell-showcase-card.svelte";
</script>

<section id="showcase" class="space-y-4 px-4 sm:px-6 md:px-2 lg:px-8">
	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-6">
		<SpellShowcaseCard
			title="Perspective Book"
			href="/spell/perspective-book"
			class="rounded-xl p-4 md:col-span-2"
		>
			<PerspectiveBookPreview />
		</SpellShowcaseCard>

		<div class="flex h-full flex-col gap-4 md:col-span-4">
			<SpellShowcaseCard
				title="Spotify Card"
				href="/spell/spotify-card"
				class="min-h-[240px] rounded-xl lg:h-1/2"
			>
				<SpotifyCardPreview />
			</SpellShowcaseCard>

			<div class="grid h-1/2 grid-cols-1 gap-4 sm:grid-cols-2">
				<SpellShowcaseCard
					title="Signature"
					href="/spell/signature"
					class="min-h-[220px] rounded-xl p-4"
				>
					<SignaturePreview />
				</SpellShowcaseCard>
				<SpellShowcaseCard
					title="Animated Checkbox"
					href="/spell/animated-checkbox"
					class="min-h-[220px] rounded-xl p-4"
				>
					<AnimatedCheckboxPreview />
				</SpellShowcaseCard>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-8 lg:min-h-56">
		<SpellShowcaseCard
			title="Gradient Wave Text"
			href="/spell/gradient-wave-text"
			class="min-h-[200px] rounded-lg p-4 md:col-span-3"
		>
			<GradientWaveTextPreview />
		</SpellShowcaseCard>
		<SpellShowcaseCard
			title="QR Code"
			href="/spell/qrcode"
			class="min-h-[200px] rounded-lg p-4 md:col-span-2"
		>
			<QRCodePreview />
		</SpellShowcaseCard>
		<SpellShowcaseCard
			title="Special Text"
			href="/spell/special-text"
			class="min-h-[200px] rounded-lg p-4 md:col-span-3"
		>
			<SpecialTextPreview />
		</SpellShowcaseCard>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-7 lg:min-h-56">
		<SpellShowcaseCard
			title="Color Selector"
			href="/spell/color-selector"
			class="min-h-[200px] rounded-lg p-4 md:col-span-2"
		>
			<ColorSelectorPreview />
		</SpellShowcaseCard>
		<SpellShowcaseCard
			title="Marquee"
			href="/spell/marquee"
			class="min-h-[200px] rounded-lg p-4 md:col-span-3"
		>
			<MarqueePreview />
		</SpellShowcaseCard>
		<SpellShowcaseCard
			title="Label Input"
			href="/spell/label-input"
			class="min-h-[200px] rounded-lg p-4 md:col-span-2"
		>
			<LabelInputPreview />
		</SpellShowcaseCard>
	</div>

	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-6 lg:min-h-120">
		<SpellShowcaseCard
			title="Text Marquee"
			href="/spell/text-marquee"
			class="min-h-[220px] rounded-xl p-4 md:col-span-3"
		>
			<TextMarqueePreview />
		</SpellShowcaseCard>
		<div class="flex h-full flex-col gap-4 md:col-span-3">
			<SpellShowcaseCard
				title="Exploding Input"
				href="/spell/exploding-input"
				class="min-h-[220px] rounded-xl lg:h-1/2"
			>
				<ExplodingInputPreview />
			</SpellShowcaseCard>
			<SpellShowcaseCard
				title="Slide Up Text"
				href="/spell/slide-up-text"
				class="min-h-[220px] rounded-xl lg:h-1/2"
			>
				<SlideUpTextPreview />
			</SpellShowcaseCard>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-7 lg:min-h-60">
		<SpellShowcaseCard
			title="Highlighted Text"
			href="/spell/highlighted-text"
			class="min-h-[200px] rounded-lg p-4 md:col-span-3"
		>
			<HighlightedTextPreview />
		</SpellShowcaseCard>
		<SpellShowcaseCard
			title="Logo Carousel"
			href="/spell/logo-carousel"
			class="min-h-[200px] rounded-lg p-4 md:col-span-4"
		>
			<LogoCarouselPreview />
		</SpellShowcaseCard>
	</div>
</section>
