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
