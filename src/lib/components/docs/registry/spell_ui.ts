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
		id: "bar-spinner",
		name: "Bar Spinner",
		href: "/spell/bar-spinner",
		category: "Feedback",
		desc: "A compact loading spinner built from twelve fading bars for inline waits, cards, and dialogs.",
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
