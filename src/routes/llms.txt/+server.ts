import { seo_config } from "#lib/config/seo.js";
import type { RequestHandler } from "./$types";

export const prerender = true;

const baseUrl = seo_config.url.replace(/\/$/, "");

const llmsTxt = `# Svelte Animations

> Open-source animated components and effects for Svelte 5, organized into Magic UI, Spell UI, and Fancy Components.

## Documentation

- [Magic UI](${baseUrl}/magic): Animation components, effects, and patterns.
- [Magic UI documentation](${baseUrl}/magic/docs): Setup and usage documentation.
- [Spell UI](${baseUrl}/spell): Animated interface components.
- [Fancy Components](${baseUrl}/fancy): Text and interaction effects.

## AI resources

- [Component manifest](${baseUrl}/component-manifest.json): Searchable metadata, documentation URLs, dependencies, tags, and registry URLs for every component.
- [Agent skill guide](${baseUrl}/magic/docs/skills): Install and use the Svelte Animations agent skill.
- [Agent skill source](https://github.com/SikandarJODD/animations/tree/master/skills/svelte-animations): Skill files and references.

## Registry indexes

- [Magic UI registry](${baseUrl}/r/index.json)
- [Spell UI registry](${baseUrl}/s/index.json)
- [Fancy Components registry](${baseUrl}/f/index.json)

Individual component documentation is also available as plain text by appending \`/llms.txt\` to its documentation URL.
`;

export const GET: RequestHandler = () => {
	return new Response(llmsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=0, s-maxage=3600",
		},
	});
};
