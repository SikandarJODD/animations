# Collection selection

Search all collections unless the user names one. Collection identity is a useful filter, not a quality ranking.

## Magic UI

Start with Magic UI for broad landing-page and marketing needs. It has the largest range of backgrounds, borders, text effects, hero elements, layout effects, and data visuals.

Choose it when:

- The request is a general visual effect or marketing section.
- Several motion intensities should be available.
- The component needs to combine with ordinary page content.

Do not default to it when a smaller product control or a specific text or media interaction is a better match elsewhere.

## Spell UI

Start with Spell UI for compact product-interface components, controls, cards, status elements, and focused interaction patterns. It also includes selected text and loading effects.

Choose it when:

- The component belongs inside an application interface.
- The user wants a contained control or content block.
- Product UI fit matters more than page decoration.

Do not assume every Spell component is subtle. Check its motion tag and interaction.

## Fancy Components

Start with Fancy Components for expressive text, SVG, image, video, cursor, and scroll-driven effects.

Choose it when:

- The requested interaction is the visual focus.
- The design calls for an editorial or experimental treatment.
- High motion is acceptable and the effect still works on small screens.

Do not use it as the default for utility UI or restrained product surfaces.

## Tie-breaker

When candidates from different collections fit:

1. Prefer the candidate whose interaction matches the request exactly.
2. Prefer the lowest motion intensity that still communicates the intended effect.
3. Prefer fewer new dependencies when the visual result is otherwise equivalent.
4. Prefer the component that needs less structural rewriting to fit the target page.
5. If the tradeoff remains meaningful, show two options and let the user decide before a large implementation.
