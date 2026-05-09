<script lang="ts">
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
	import WordsStaggerPreview from "../../../../routes/spell/words-stagger/examples/preview.svelte";
</script>

<section id="showcase" class="space-y-4 px-4 sm:px-6 md:px-2 lg:px-8">
	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-6">
		<div class="relative flex items-center justify-center rounded-xl border p-4 md:col-span-2">
			<a
				href="/spell/perspective-book"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Perspective Book
			</a>
			<PerspectiveBookPreview />
		</div>
		<div class="flex h-full flex-col gap-4 md:col-span-4">
			<div
				class="relative flex min-h-[240px] items-center justify-center rounded-xl border lg:h-1/2"
			>
				<a
					href="/spell/spotify-card"
					class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					Spotify Card
				</a>
				<SpotifyCardPreview />
			</div>
			<div class="grid h-1/2 grid-cols-1 gap-4 sm:grid-cols-2">
				<div
					class="relative flex min-h-[220px] items-center justify-center rounded-xl border p-4"
				>
					<a
						href="/spell/signature"
						class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
					>
						Signature
					</a>
					<SignaturePreview />
				</div>
				<div
					class="relative flex min-h-[220px] items-center justify-center rounded-xl border p-4"
				>
					<a
						href="/spell/animated-checkbox"
						class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
					>
						Animated Checkbox
					</a>
					<AnimatedCheckboxPreview />
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-8 lg:min-h-56">
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a
				href="/spell/gradient-wave-text"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Gradient Wave Text
			</a>
			<GradientWaveTextPreview />
		</div>
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-2"
		>
			<a
				href="/spell/qrcode"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				QR Code
			</a>
			<QRCodePreview />
		</div>
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a
				href="/spell/special-text"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Special Text
			</a>
			<SpecialTextPreview />
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-7 lg:min-h-56">
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-2"
		>
			<a
				href="/spell/color-selector"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Color Selector
			</a>
			<ColorSelectorPreview />
		</div>
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a
				href="/spell/marquee"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Marquee
			</a>
			<MarqueePreview />
		</div>
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-2"
		>
			<a
				href="/spell/label-input"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Label Input
			</a>
			<LabelInputPreview />
		</div>
	</div>
	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-6 lg:min-h-120">
		<div
			class="relative flex min-h-[220px] items-center justify-center rounded-xl border p-4 md:col-span-3"
		>
			<a
				href="/spell/text-marquee"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Text Marquee
			</a>
			<TextMarqueePreview />
		</div>
		<div class="flex h-full flex-col gap-4 md:col-span-3">
			<div
				class="relative flex min-h-[220px] items-center justify-center rounded-xl border lg:h-1/2"
			>
				<a
					href="/spell/exploding-input"
					class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					Exploding Input
				</a>
				<ExplodingInputPreview />
			</div>
			<div
				class="relative flex min-h-[220px] items-center justify-center rounded-xl border lg:h-1/2"
			>
				<a
					href="/spell/slide-up-text"
					class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					Slide Up Text
				</a>
				<SlideUpTextPreview />
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-7 lg:min-h-60">
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a
				href="/spell/highlighted-text"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Highlighted Text
			</a>
			<HighlightedTextPreview />
		</div>
		<div
			class="relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-4"
		>
			<a
				href="/spell/logo-carousel"
				class="bg-background/90 text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-3 left-3 z-10 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Logo Carousel
			</a>
			<LogoCarouselPreview />
		</div>
	</div>
</section>
