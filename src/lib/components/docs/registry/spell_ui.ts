export type SpellBadgeType = "Beta" | "New" | "Updated";

export type SpellCategory =
	| "Overview"
	| "Components"
	| "Text Animations"
	| "Buttons"
	| "Inputs"
	| "Feedback"
	| "Backgrounds"
	| "Interactive";

export interface SpellComponent {
	id: string;
	name: string;
	href: string;
	category: SpellCategory;
	desc?: string;
	badge?: SpellBadgeType;
}

export const spellUIComponents: SpellComponent[] = [
	// ── Overview ─────────────────────────────────────────────────────────────
	{
		id: "overview",
		name: "Overview",
		href: "/spell",
		category: "Overview",
		desc: "A landing page for Spell UI with a hero introduction and live component showcase.",
	},
	{
		id: "introduction",
		name: "Introduction",
		href: "/spell/introduction",
		category: "Overview",
		desc: "Learn what Spell UI for Svelte is, why it exists, and where the project draws inspiration.",
	},

	// ── Components ───────────────────────────────────────────────────────────
	{
		id: "perspective-book",
		name: "Perspective Book",
		href: "/spell/perspective-book",
		category: "Components",
		desc: "A 3D book-cover wrapper with hover depth and optional texture.",
	},
	{
		id: "tilt-card",
		name: "Tilt Card",
		href: "/spell/tilt-card",
		category: "Components",
		desc: "A cursor-reactive tilt wrapper with configurable scale, tilt depth, perspective, and spotlight.",
		badge: "New",
	},
	{
		id: "fallback-avatar",
		name: "Fallback Avatar",
		href: "/spell/fallback-avatar",
		category: "Components",
		desc: "A seeded canvas avatar with hover animation, WebGL rendering, and a deterministic 2D fallback.",
		badge: "New",
	},
	{
		id: "badge",
		name: "Badge",
		href: "/spell/badge",
		category: "Components",
		desc: "A compact pill badge with multi-color variants, optional link mode, and size presets.",
	},
	{
		id: "kbd",
		name: "Keyboard Shortcuts",
		href: "/spell/kbd",
		category: "Components",
		desc: "Display keyboard shortcuts with proper key symbols.",
	},
	{
		id: "marquee",
		name: "Marquee",
		href: "/spell/marquee",
		category: "Components",
		desc: "A reusable horizontal or vertical marquee with optional fade edges and hover pause.",
	},
	{
		id: "tweet",
		name: "Tweet",
		href: "/spell/tweet",
		category: "Components",
		desc: "A styled tweet card for embedding social media content with author, text, likes, and copy-link.",
		badge: "New",
	},
	{
		id: "spotify-card",
		name: "Spotify Card",
		href: "/spell/spotify-card",
		category: "Components",
		desc: "A Spotify preview card with blurred artwork, playback controls, and server-fetched metadata.",
	},
	{
		id: "logo-carousel",
		name: "Logo Carousel",
		href: "/spell/logo-carousel",
		category: "Components",
		desc: "A grouped logo carousel with staggered enter and exit motion between rotating sets.",
	},
	{
		id: "qrcode",
		name: "QRCode",
		href: "/spell/qrcode",
		category: "Components",
		desc: "A rounded QR code renderer with circular modules and stylized finder patterns.",
	},
	{
		id: "fallback-avatar",
		name: "Fallback Avatar",
		href: "/spell/fallback-avatar",
		category: "Components",
		desc: "A procedurally generated WebGL avatar based on a name hash — deterministic, animated, and unique.",
		badge: "New",
	},

	// ── Text Animations ───────────────────────────────────────────────────────
	{
		id: "blur-reveal",
		name: "Blur Reveal",
		href: "/spell/blur-reveal",
		category: "Text Animations",
		desc: "A text-only blur and stagger reveal for hero copy, headings, and announcements.",
	},
	{
		id: "special-text",
		name: "Special Text",
		href: "/spell/special-text",
		category: "Text Animations",
		desc: "A scrambled text reveal with optional viewport triggering and plain text or slotted content input.",
	},
	{
		id: "shimmer-text",
		name: "Shimmer Text",
		href: "/spell/shimmer-text",
		category: "Text Animations",
		desc: "Text with an animated shimmer highlight that sweeps across on repeat.",
		badge: "New",
	},
	{
		id: "highlighted-text",
		name: "Highlighted Text",
		href: "/spell/highlighted-text",
		category: "Text Animations",
		desc: "An inline highlight sweep that reveals text from configurable directions with optional viewport triggers.",
	},
	{
		id: "slide-up-text",
		name: "Slide Up Text",
		href: "/spell/slide-up-text",
		category: "Text Animations",
		desc: "A configurable text reveal that slides words, characters, or lines upward with staggered motion.",
	},
	{
		id: "text-marquee",
		name: "Text Marquee",
		href: "/spell/text-marquee",
		category: "Text Animations",
		desc: "A vertical text rotator with snippet-based prefix and row composition.",
	},
	{
		id: "words-stagger",
		name: "Words Stagger",
		href: "/spell/words-stagger",
		category: "Text Animations",
		desc: "A word-by-word blur and lift reveal for hero copy, launch messaging, and editorial headings.",
	},
	{
		id: "signature",
		name: "Signature",
		href: "/spell/signature",
		category: "Text Animations",
		desc: "A handwritten signature renderer that animates glyph paths from downloaded font data.",
		badge: "New",
	},
	{
		id: "randomized-text",
		name: "Randomized Text",
		href: "/spell/randomized-text",
		category: "Text Animations",
		desc: "A stable randomized text reveal for hero copy, labels, and editorial callouts.",
	},
	{
		id: "gradient-wave-text",
		name: "Gradient Wave Text",
		href: "/spell/gradient-wave-text",
		category: "Text Animations",
		desc: "A flowing gradient text effect with radial or linear bands, custom colors, and view-triggered playback.",
		badge: "New",
	},

	// ── Buttons ───────────────────────────────────────────────────────────────
	{
		id: "rich-button",
		name: "Rich Button",
		href: "/spell/rich-button",
		category: "Buttons",
		desc: "A gradient button with 23 color variants, text shadows, and size presets.",
		badge: "New",
	},
	{
		id: "flow-button",
		name: "Flow Button",
		href: "/spell/flow-button",
		category: "Buttons",
		desc: "A button with an animated dashed SVG border that flows on hover.",
		badge: "New",
	},
	{
		id: "copy-button",
		name: "Copy Button",
		href: "/spell/copy-button",
		category: "Buttons",
		desc: "A clipboard copy button with icon transition feedback and size variants.",
		badge: "New",
	},
	{
		id: "pop-button",
		name: "Pop Button",
		href: "/spell/pop-button",
		category: "Buttons",
		desc: "A 3D pop-style button with color variants that compresses on click.",
		badge: "New",
	},

	// ── Inputs ────────────────────────────────────────────────────────────────
	{
		id: "color-selector",
		name: "Color Selector",
		href: "/spell/color-selector",
		category: "Inputs",
		desc: "A compact swatch picker with preset or custom CSS colors and size variants.",
	},
	{
		id: "label-input",
		name: "Label Input",
		href: "/spell/label-input",
		category: "Inputs",
		desc: "A floating-label input with ring-color variants and password visibility toggle support.",
	},
	{
		id: "animated-checkbox",
		name: "Animated Checkbox",
		href: "/spell/animated-checkbox",
		category: "Inputs",
		desc: "A motion-driven checkbox row with animated checkmark drawing and strike-through feedback.",
	},
	{
		id: "exploding-input",
		name: "Exploding Input",
		href: "/spell/exploding-input",
		category: "Inputs",
		desc: "A particle input companion that explodes emoji or custom items as you type.",
		badge: "Beta",
	},

	// ── Feedback ──────────────────────────────────────────────────────────────
	{
		id: "spinner",
		name: "Spinner",
		href: "/spell/spinner",
		category: "Feedback",
		desc: "An SVG spinner with size and speed variants, built with dual gradient definitions.",
		badge: "New",
	},
	{
		id: "bar-spinner",
		name: "Bar Spinner",
		href: "/spell/bar-spinner",
		category: "Feedback",
		desc: "A compact loading spinner built from twelve fading bars for inline waits, cards, and dialogs.",
	},

	// ── Backgrounds ───────────────────────────────────────────────────────────
	{
		id: "light-rays",
		name: "Light Rays",
		href: "/spell/light-rays",
		category: "Backgrounds",
		desc: "Three.js animated light rays effect with configurable intensity, reach, and colors.",
		badge: "New",
	},
	{
		id: "animated-gradient",
		name: "Animated Gradient",
		href: "/spell/animated-gradient",
		category: "Backgrounds",
		desc: "A WebGL2 animated gradient background with six built-in presets and custom color support.",
		badge: "New",
	},

	// ── Interactive ───────────────────────────────────────────────────────────
	{
		id: "tilt-card",
		name: "Tilt Card",
		href: "/spell/tilt-card",
		category: "Interactive",
		desc: "A 3D tilt card that responds to pointer movement with an optional spotlight effect.",
		badge: "New",
	},
];

const spellUICategoryOrder: SpellCategory[] = [
	"Overview",
	"Components",
	"Text Animations",
	"Buttons",
	"Inputs",
	"Feedback",
	"Backgrounds",
	"Interactive",
];

export const spellUISidebarGroups = spellUICategoryOrder
	.map((title) => ({
		title,
		items: spellUIComponents.filter((item) => item.category === title),
	}))
	.filter((group) => group.items.length > 0);

export function getPrevNext(currentId: string) {
	const index = spellUIComponents.findIndex((component) => component.id === currentId);

	return {
		prev: index > 0 ? spellUIComponents[index - 1] : null,
		next: index < spellUIComponents.length - 1 ? spellUIComponents[index + 1] : null,
	};
}
