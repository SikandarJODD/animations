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

	const showcaseTagClass =
		"bg-background/90 group text-muted-foreground hover:text-foreground focus-visible:ring-ring absolute top-2 left-2 z-10 inline-flex items-center gap-1 rounded-full border items-center pr-2.5 pl-3 py-1.5 text-[10px] font-medium tracking-[0.02em] backdrop-blur-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none group-hover:bg-pink-800/20 group-hover:text-white group-hover:border-pink-800/50";
	const showcaseTagArrowClass =
		"text-muted-foreground/80 group-hover:text-pink-500/70 text-[10px] leading-none transition-colors";
</script>

<section id="showcase" class="space-y-4 px-4 sm:px-6 md:px-2 lg:px-8">
	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-6">
		<div
			class="group relative flex items-center justify-center rounded-xl border p-4 md:col-span-2"
		>
			<a href="/spell/perspective-book" class={showcaseTagClass}>
				Perspective Book
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<PerspectiveBookPreview />
		</div>
		<div class="flex h-full flex-col gap-4 md:col-span-4">
			<div
				class="group relative flex min-h-[240px] items-center justify-center rounded-xl border lg:h-1/2"
			>
				<a href="/spell/spotify-card" class={showcaseTagClass}>
					Spotify Card
					<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
				</a>
				<SpotifyCardPreview />
			</div>
			<div class="grid h-1/2 grid-cols-1 gap-4 sm:grid-cols-2">
				<div
					class="group relative flex min-h-[220px] items-center justify-center rounded-xl border p-4"
				>
					<a href="/spell/signature" class={showcaseTagClass}>
						Signature
						<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
					</a>
					<SignaturePreview />
				</div>
				<div
					class="group relative flex min-h-[220px] items-center justify-center rounded-xl border p-4"
				>
					<a href="/spell/animated-checkbox" class={showcaseTagClass}>
						Animated Checkbox
						<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
					</a>
					<AnimatedCheckboxPreview />
				</div>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-8 lg:min-h-56">
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a href="/spell/gradient-wave-text" class={showcaseTagClass}>
				Gradient Wave Text
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<GradientWaveTextPreview />
		</div>
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-2"
		>
			<a href="/spell/qrcode" class={showcaseTagClass}>
				QR Code
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<QRCodePreview />
		</div>
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a href="/spell/special-text" class={showcaseTagClass}>
				Special Text
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<SpecialTextPreview />
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-7 lg:min-h-56">
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-2"
		>
			<a href="/spell/color-selector" class={showcaseTagClass}>
				Color Selector
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<ColorSelectorPreview />
		</div>
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a href="/spell/marquee" class={showcaseTagClass}>
				Marquee
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<MarqueePreview />
		</div>
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-2"
		>
			<a href="/spell/label-input" class={showcaseTagClass}>
				Label Input
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<LabelInputPreview />
		</div>
	</div>
	<div class="grid h-full grid-cols-1 gap-4 md:grid-cols-6 lg:min-h-120">
		<div
			class="group relative flex min-h-[220px] items-center justify-center rounded-xl border p-4 md:col-span-3"
		>
			<a href="/spell/text-marquee" class={showcaseTagClass}>
				Text Marquee
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<TextMarqueePreview />
		</div>
		<div class="flex h-full flex-col gap-4 md:col-span-3">
			<div
				class="group relative flex min-h-[220px] items-center justify-center rounded-xl border lg:h-1/2"
			>
				<a href="/spell/exploding-input" class={showcaseTagClass}>
					Exploding Input
					<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
				</a>
				<ExplodingInputPreview />
			</div>
			<div
				class="group relative flex min-h-[220px] items-center justify-center rounded-xl border lg:h-1/2"
			>
				<a href="/spell/slide-up-text" class={showcaseTagClass}>
					Slide Up Text
					<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
				</a>
				<SlideUpTextPreview />
			</div>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-7 lg:min-h-60">
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-3"
		>
			<a href="/spell/highlighted-text" class={showcaseTagClass}>
				Highlighted Text
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<HighlightedTextPreview />
		</div>
		<div
			class="group relative flex min-h-[200px] items-center justify-center rounded-lg border p-4 md:col-span-4"
		>
			<a href="/spell/logo-carousel" class={showcaseTagClass}>
				Logo Carousel
				<span aria-hidden="true" class={showcaseTagArrowClass}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-external-link-icon lucide-external-link"
							><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
								d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
							/></svg
						>
					</span>
			</a>
			<LogoCarouselPreview />
		</div>
	</div>
</section>
