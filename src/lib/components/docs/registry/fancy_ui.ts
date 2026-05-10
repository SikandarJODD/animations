export type FancyBadgeType = "Beta" | "New" | "Updated";

export type FancyCategory = "Overview" | "Components";

export interface FancyComponent {
	id: string;
	name: string;
	href: string;
	category: FancyCategory;
	desc?: string;
	badge?: FancyBadgeType;
}

export const fancyUIComponents: FancyComponent[] = [
	// {
	// 	id: "overview",
	// 	name: "Overview",
	// 	href: "/fancy",
	// 	category: "Overview",
	// 	desc: "A landing page for the Fancy component collection.",
	// },
	{
		id: "media-between-text",
		name: "Media Between Text",
		href: "/fancy/media-between-text",
		category: "Components",
		desc: "Reveal image or video media between two pieces of text with hover, view, or manual triggers.",
		badge: "New",
	},
	{
		id: "letter-swap",
		name: "Letter Swap",
		href: "/fancy/letter-swap",
		category: "Components",
		desc: "Slide each letter into a second copy on hover with directional staggered motion.",
	},
	{
		id: "letter-3d-swap",
		name: "Letter 3D Swap",
		href: "/fancy/letter-3d-swap",
		category: "Components",
		desc: "Rotate each character on hover with a 3D flip and configurable stagger direction.",
	},
	// {
	// 	id: "letter-swap-ping-pong",
	// 	name: "Letter Swap Ping Pong",
	// 	href: "/fancy/letter-swap-ping-pong",
	// 	category: "Components",
	// 	desc: "Swap letters on hover and reverse them on exit with debounced ping-pong motion.",
	// 	badge: "New",
	// },
	{
		id: "random-letter-swap",
		name: "Random Letter Swap",
		href: "/fancy/random-letter-swap",
		category: "Components",
		desc: "Reveal a second letter layer in a shuffled hover order for a randomized swap effect.",
	},
	// {
	// 	id: "random-letter-swap-ping-pong",
	// 	name: "Random Letter Swap Ping Pong",
	// 	href: "/fancy/random-letter-swap-ping-pong",
	// 	category: "Components",
	// 	desc: "Animate randomized letter swaps on hover in and out using a persistent shuffled order.",
	// },
	{
		id: "scramble-hover",
		name: "Scramble Hover",
		href: "/fancy/scramble-hover",
		category: "Components",
		desc: "Scramble text on hover with sequential or iterative reveals and custom character sets.",
	},
	// {
	// 	id: "scramble-in",
	// 	name: "Scramble In",
	// 	href: "/fancy/scramble-in",
	// 	category: "Components",
	// 	desc: "Animate text in by revealing real characters through a configurable scramble pass.",
	// },
	// {
	// 	id: "text-along-path",
	// 	name: "Text Along Path",
	// 	href: "/fancy/text-along-path",
	// 	category: "Components",
	// 	desc: "Render animated text that loops or tracks scroll progress along any SVG path.",
	// },
	// {
	// 	id: "text-highlighter",
	// 	name: "Text Highlighter",
	// 	href: "/fancy/text-highlighter",
	// 	category: "Components",
	// 	desc: "Sweep a highlight background across inline text on hover, in view, or on demand.",
	// },
	// {
	// 	id: "underline-to-background",
	// 	name: "Underline To Background",
	// 	href: "/fancy/underline-to-background",
	// 	category: "Components",
	// 	desc: "Expand an underline into a full background fill while transitioning the text color.",
	// },
	// {
	// 	id: "vertical-cut-reveal",
	// 	name: "Vertical Cut Reveal",
	// 	href: "/fancy/vertical-cut-reveal",
	// 	category: "Components",
	// 	desc: "Reveal text from vertical cuts with word, character, or line-based staggering.",
	// },
];

const fancyUICategoryOrder: FancyCategory[] = ["Overview", "Components"];

export const fancyUISidebarGroups = fancyUICategoryOrder
	.map((title) => ({
		title,
		items: fancyUIComponents.filter((item) => item.category === title),
	}))
	.filter((group) => group.items.length > 0);

export function getPrevNext(currentId: string) {
	const index = fancyUIComponents.findIndex((component) => component.id === currentId);

	return {
		prev: index > 0 ? fancyUIComponents[index - 1] : null,
		next: index < fancyUIComponents.length - 1 ? fancyUIComponents[index + 1] : null,
	};
}
