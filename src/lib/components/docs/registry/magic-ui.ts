export type BadgeType = "New" | "Updated" | "Beta";

export type MagicCategory =
	| "Components"
	| "Special Effects"
	| "Animations"
	| "Text Animations"
	| "Buttons"
	| "Backgrounds"
	| "Other";

export interface MagicComponent {
	id: string;
	name: string;
	href: string;
	category: MagicCategory;
	badge?: BadgeType;
	desc?: string;
}

export const magicUIComponents: MagicComponent[] = [
	{
		id: "animated-beam",
		name: "Animated Beam",
		href: "/magic/docs/components/animated-beam",
		category: "Special Effects",
		desc: "An animated beam of light which travels along a path.",
	},
	{
		id: "animated-circular-progress-bar",
		name: "Animated Circular Progress Bar",
		href: "/magic/docs/components/animated-circular-progress-bar",
		category: "Other",
		desc: "A component that displays a circular gauge with a percentage value",
	},
	{
		id: "animated-gradient-text",
		name: "Animated Gradient Text",
		href: "/magic/docs/components/animated-gradient-text",
		category: "Text Animations",
		desc: "An animated gradient background which transitions between colors for text.",
	},
	{
		id: "animated-grid-pattern",
		name: "Animated Grid Pattern",
		href: "/magic/docs/components/animated-grid-pattern",
		category: "Backgrounds",
		desc: "A animated background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	{
		id: "animated-list",
		name: "Animated List",
		href: "/magic/docs/components/animated-list",
		category: "Components",
		desc: "A component that animates list items with staggered entrance animations.",
	},
	{
		id: "animated-shiny-text",
		name: "Animated Shiny Text",
		href: "/magic/docs/components/animated-shiny-text",
		category: "Text Animations",
		desc: "A text component with an animated shiny/shimmer effect that travels across the text.",
	},
	{
		id: "animated-theme-toggler",
		name: "Animated Theme Toggler",
		href: "/magic/docs/components/animated-theme-toggler",
		category: "Special Effects",
		desc: "An Animated theme toggler component, fully customizable using Tailwind CSS.",
	},
	{
		id: "arc-timeline",
		name: "Arc Timeline",
		href: "/magic/docs/components/arc-timeline",
		category: "Other",
		desc: "A curved milestone timeline with clickable steps, icons, and configurable arc spacing.",
	},
	{
		id: "aurora-text",
		name: "Aurora Text",
		href: "/magic/docs/components/aurora-text",
		category: "Text Animations",
		desc: "A text component with an animated aurora/northern lights effect.",
	},
	{
		id: "backlight",
		name: "Backlight",
		href: "/magic/docs/components/backlight",
		category: "Other",
		badge: "New",
		desc: "An SVG filter wrapper that adds a soft glow around its content.",
	},
	{
		id: "avatar-circles",
		name: "Avatar Circles",
		href: "/magic/docs/components/avatar-circles",
		category: "Components",
		desc: "A component to display overlapping avatar circles, commonly used for showing multiple users.",
	},
	{
		id: "bento-grid",
		name: "Bento Grid",
		href: "/magic/docs/components/bento-grid",
		category: "Components",
		desc: "Bento grid is a layout used to showcase the features of a product in a simple and elegant way.",
	},
	{
		id: "blur-fade",
		name: "Blur Fade",
		href: "/magic/docs/components/blur-fade",
		category: "Animations",
		desc: "Blur fade in and out animation. Used to smoothly fade in and out content.",
	},
	{
		id: "border-beam",
		name: "Border Beam",
		href: "/magic/docs/components/border-beam",
		category: "Special Effects",
		desc: "An animated beam of light which travels along the border of its container.",
	},
	// {
	// 	id: "confetti",
	// 	name: "Confetti",
	// 	href: "/magic/docs/components/confetti",
	// 	badge: "Beta",
	// 	desc: "",
	// },
	{
		id: "cool-mode",
		name: "Cool Mode",
		href: "/magic/docs/components/cool-mode",
		category: "Other",
		desc: "Add a fun particle effect that follows mouse interactions, with support for emojis, images, and custom shapes.",
	},
	{
		id: "dia-text-reveal",
		name: "Dia Text Reveal",
		href: "/magic/docs/components/dia-text-reveal",
		category: "Text Animations",
		desc: "A sweeping gradient text reveal with viewport triggering and rotating text support.",
	},
	{
		id: "dither-shader",
		name: "Dither Shader",
		href: "/magic/docs/components/dither-shader",
		category: "Other",
		desc: "A real-time ordered dithering effect for images, perfect for pixel art and retro aesthetics.",
	},
	{
		id: "dock",
		name: "Dock",
		href: "/magic/docs/components/dock",
		category: "Components",
		desc: "An implementation of the MacOS dock using Svelte + tailwindcss + Motion SV",
	},
	{
		id: "dot-pattern",
		name: "Dot Pattern",
		href: "/magic/docs/components/dot-pattern",
		category: "Backgrounds",
		desc: "A customizable dot pattern background component with optional glow animations and mask effects.",
	},
	{
		id: "dotted-map",
		name: "Dotted Map",
		href: "/magic/docs/components/dotted-map",
		category: "Components",
		desc: "A component for creating dotted map with custom dots and lines.",
	},
	{
		id: "flow",
		name: "Flow",
		href: "/magic/docs/components/flow",
		category: "Components",
		badge: "New",
		desc: "A group of components for building directed flow diagrams with nodes and connectors.",
	},
	{
		id: "file-tree",
		name: "File Tree",
		href: "/magic/docs/components/file-tree",
		category: "Other",
		desc: "A component for creating file tree views with folder and file icons.",
	},
	{
		id: "flickering-grid",
		name: "Flickering Grid",
		href: "/magic/docs/components/flickering-grid",
		category: "Backgrounds",
		desc: "A flickering grid background made with SVGs, fully customizable using Tailwind CSS.",
	},
	{
		id: "grid-pattern",
		name: "Grid Pattern",
		href: "/magic/docs/components/grid-pattern",
		category: "Backgrounds",
		desc: "A background grid pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	{
		id: "glare-hover",
		name: "Glare Hover",
		href: "/magic/docs/components/glare-hover",
		category: "Special Effects",
		desc: "A glare hover effect that adds a subtle shine to elements when hovered.",
		badge: "New",
	},
	{
		id: "globe",
		name: "Globe",
		href: "/magic/docs/components/globe",
		category: "Components",
		desc: "An autorotating, interactive, and highly performant globe made using WebGL.",
	},
	{
		id: "hero-video-dialog",
		name: "Hero Video Dialog",
		href: "/magic/docs/components/hero-video-dialog",
		category: "Components",
		desc: "A hero video dialog component.",
	},
	{
		id: "hexagon-pattern",
		name: "Hexagon Pattern",
		href: "/magic/docs/components/hexagon-pattern",
		category: "Backgrounds",
		desc: "A background hexagon pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	{
		id: "hyper-text",
		name: "Hyper Text",
		href: "/magic/docs/components/hyper-text",
		category: "Text Animations",
		desc: "A text animation that scrambles letters before revealing the final text.",
	},
	{
		id: "icon-cloud",
		name: "Icon Cloud",
		href: "/magic/docs/components/icon-cloud",
		category: "Components",
		desc: "An interactive 3D tag cloud component",
	},
	{
		id: "interactive-hover-button",
		name: "Interactive Hover Button",
		href: "/magic/docs/components/interactive-hover-button",
		category: "Other",
		desc: "A visually engaging button component that responds to hover with dynamic transitions",
	},
	{
		id: "lens",
		name: "Lens",
		href: "/magic/docs/components/lens",
		category: "Components",
		desc: "A interactive component that enables zooming into images, videos and other elements.",
	},
	{
		id: "light-rays",
		name: "Light Rays",
		href: "/magic/docs/components/light-rays",
		category: "Backgrounds",
		desc: "A component with animated light rays which shine down from above.",
	},
	{
		id: "line-shadow-text",
		name: "Line Shadow Text",
		href: "/magic/docs/components/line-shadow-text",
		category: "Text Animations",
		desc: "A text component with a moving line shadow.",
	},
	{
		id: "magic-card",
		name: "Magic Card",
		href: "/magic/docs/components/magic-card",
		category: "Special Effects",
		desc: "A spotlight effect that follows your mouse cursor and highlights borders on hover.",
	},
	{
		id: "marquee",
		name: "Marquee",
		href: "/magic/docs/components/marquee",
		category: "Components",
		desc: "An infinite scrolling component that can be used to display text, images, or videos.",
	},
	{
		id: "meteors",
		name: "Meteors",
		href: "/magic/docs/components/meteors",
		category: "Special Effects",
		desc: "A meteor shower effect.",
	},
	{
		id: "morphing-text",
		name: "Morphing Text",
		href: "/magic/docs/components/morphing-text",
		category: "Text Animations",
		badge: "New",
		desc: "A dynamic text morphing component for Magic UI.",
	},
	{
		id: "motion-grid",
		name: "Motion Grid",
		href: "/magic/docs/components/motion-grid",
		category: "Other",
		badge: "Beta",
		desc: "A frame-based 2D grid animation primitive with active/inactive cell states.",
	},
	{
		id: "neon-gradient-card",
		name: "Neon Gradient Card",
		href: "/magic/docs/components/neon-gradient-card",
		category: "Other",
		desc: "A beautiful neon card effect.",
	},
	{
		id: "noise-texture",
		name: "Noise Texture",
		href: "/magic/docs/components/noise-texture",
		category: "Backgrounds",
		desc: "An SVG fractal noise layer using feTurbulence for subtle texture overlays.",
		badge: "New",
	},
	{
		id: "number-ticker",
		name: "Number Ticker",
		href: "/magic/docs/components/number-ticker",
		category: "Other",
		desc: "Animate numbers to count up or down to a target number",
	},
	{
		id: "orbiting-circles",
		name: "Orbiting Circles",
		href: "/magic/docs/components/orbiting-circles",
		category: "Components",
		desc: "A collection of circles which move in orbit along a circular path",
	},
	{
		id: "pixel-image",
		name: "Pixel Image",
		href: "/magic/docs/components/pixel-image",
		category: "Other",
		badge: "New",
		desc: "A component that displays your image with a pixelated effect, enhancing the visual appeal of any image in your website.",
	},
	{
		id: "pointer",
		name: "Pointer",
		href: "/magic/docs/components/pointer",
		category: "Components",
		desc: "A component that displays a pointer when hovering over an element",
	},
	{
		id: "progressive-blur",
		name: "Progressive Blur",
		href: "/magic/docs/components/progressive-blur",
		category: "Components",
		desc: "Add a progressive blur effect to scrollable content",
	},
	{
		id: "pulsating-button",
		name: "Pulsating Button",
		href: "/magic/docs/components/pulsating-button",
		category: "Other",
		desc: "An animated pulsating button useful for capturing attention of users.",
	},
	{
		id: "rainbow-button",
		name: "Rainbow Button",
		href: "/magic/docs/components/rainbow-button",
		category: "Buttons",
		desc: "An animated button with a rainbow effect.",
	},
	{
		id: "retro-grid",
		name: "Retro Grid",
		href: "/magic/docs/components/retro-grid",
		category: "Backgrounds",
		desc: "An animated scrolling retro grid effect",
	},
	{
		id: "ripple",
		name: "Ripple",
		href: "/magic/docs/components/ripple",
		category: "Backgrounds",
		desc: "An animated ripple effect typically used behind elements to emphasize them.",
	},
	{
		id: "ripple-button",
		name: "Ripple Button",
		href: "/magic/docs/components/ripple-button",
		category: "Buttons",
		desc: "An animated button with ripple useful for user engagement.",
	},
	{
		id: "scroll-progress",
		name: "Scroll Progress",
		href: "/magic/docs/components/scroll-progress",
		category: "Other",
		desc: "Animated Scroll Progress for your pages",
	},
	{
		id: "separator",
		name: "Separator",
		href: "/magic/docs/components/separator",
		category: "Components",
		badge: "New",
		desc: "A flexible horizontal separator with solid or gradient lines and optional centered labels.",
	},
	{
		id: "shimmer-button",
		name: "Shimmer Button",
		href: "/magic/docs/components/shimmer-button",
		category: "Buttons",
		desc: "A button with a shimmering light which travels around the perimeter.",
	},
	{
		id: "shine-border",
		name: "Shine Border",
		href: "/magic/docs/components/shine-border",
		category: "Special Effects",
		desc: "Shine border is an animated background border effect.",
	},
	// {
	// 	id: "shiny-button",
	// 	name: "Shiny Button",
	// 	href: "/magic/docs/components/shiny-button",
	// 	badge: "Beta",
	// 	desc: "A shiny button component with dynamic styles in the dark mode or light mode.",
	// },
	{
		id: "smooth-cursor",
		name: "Smooth Cursor",
		href: "/magic/docs/components/smooth-cursor",
		category: "Components",
		desc: "A customizable, physics-based smooth cursor animation component for React applications.",
	},
	{
		id: "sparkles-text",
		name: "Sparkles Text",
		href: "/magic/docs/components/sparkles-text",
		category: "Text Animations",
		desc: "A text component with animated sparkles that appear and disappear randomly.",
	},
	// {
	// 	id: "stagger-text",
	// 	name: "Stagger Text",
	// 	href: "/magic/docs/components/stagger-text",
	// 	badge: "New",
	// 	desc: "",
	// },
	{
		id: "striped-pattern",
		name: "Striped Pattern",
		href: "/magic/docs/components/striped-pattern",
		category: "Backgrounds",
		desc: "A background striped pattern made with SVGs, fully customizable using Tailwind CSS.",
	},
	// {
	// 	id: "terminal",
	// 	name: "Terminal",
	// 	href: "/magic/docs/components/terminal",
	// 	badge: "Beta",
	// 	desc: "",
	// },
	{
		id: "text-animate",
		name: "Text Animate",
		href: "/magic/docs/components/text-animate",
		category: "Text Animations",
		desc: "A text animation component that animates text using a variety of different animations.",
	},
	{
		id: "typing-animation",
		name: "Typing Animation",
		href: "/magic/docs/components/typing-animation",
		category: "Other",
		desc: "A text component that displays a typewriter animation effect.",
	},
	{
		id: "video-text",
		name: "Video Text",
		href: "/magic/docs/components/video-text",
		category: "Text Animations",
		desc: "A text component with a video background.",
	},
	{
		id: "warp-background",
		name: "Warp Background",
		href: "/magic/docs/components/warp-background",
		category: "Other",
		desc: "A card with a time warping background effect.",
	},
	{
		id: "word-rotate",
		name: "Word Rotate",
		href: "/magic/docs/components/word-rotate",
		category: "Other",
		badge: "Beta",
		desc: "A vertical rotation of words",
	},
	{
		id: "glyph-matrix",
		name: "Glyph Matrix",
		href: "/magic/docs/components/glyph-matrix",
		category: "Components",
		desc: "An animated grid of subtly shifting glyphs on a canvas, with a theme-aware color driven by the consumer.",
	},
];

export const magicUICategoryOrder: MagicCategory[] = [
	"Components",
	"Special Effects",
	"Animations",
	"Text Animations",
	"Buttons",
	"Backgrounds",
	"Other",
];

export const magicUISidebarGroups = magicUICategoryOrder
	.map((title) => ({
		title,
		items: magicUIComponents.filter((item) => item.category === title),
	}))
	.filter((group) => group.items.length > 0);

const magicUISidebarComponents = magicUISidebarGroups.flatMap((group) => group.items);

/**
 * Get prev/next components for navigation
 */
export function getPrevNext(currentId: string) {
	const index = magicUISidebarComponents.findIndex((c) => c.id === currentId);
	return {
		prev: index > 0 ? magicUISidebarComponents[index - 1] : null,
		next:
			index >= 0 && index < magicUISidebarComponents.length - 1
				? magicUISidebarComponents[index + 1]
				: null,
	};
}

/**
 * Get component by ID
 */
export function getComponentById(id: string) {
	return magicUIComponents.find((c) => c.id === id) ?? null;
}
