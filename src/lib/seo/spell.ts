export const SPELL_TITLE_TEMPLATE = "%s | Svelte Spell UI";

export const SPELL_SOCIAL_IMAGE = {
	url: "https://sv-animations.vercel.app/spell-og.png",
	width: 1200,
	height: 630,
	alt: "Svelte Spell UI",
} as const;

export const SPELL_DEFAULT_KEYWORDS = [
	"Svelte Spell UI",
	"Spell UI for Svelte",
	"Svelte 5 components",
	"Svelte component library",
	"design engineering UI",
	"Tailwind CSS components",
	"Motion SV animations",
	"responsive Svelte components",
	"accessible Svelte UI",
	"open source Svelte components",
];

export function buildSpellKeywords(
	keywords: readonly string[] = [],
	extra: readonly string[] = []
) {
	return [...new Set([...extra, ...keywords, ...SPELL_DEFAULT_KEYWORDS])];
}
