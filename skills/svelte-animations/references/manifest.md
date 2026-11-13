# Component manifest

Use `static/component-manifest.json` when working in the Svelte Animations repository. It matches the checked-out registry files and avoids mixing deployed data with local changes.

For other projects, use the deployed manifest:

`https://sv-animations.vercel.app/component-manifest.json`

The bundled script checks the current project and the skill's repository for a local manifest, then uses the deployed URL. If the deployed URL is unavailable, report that failure instead of inventing results.

## Shape

The top-level keys are `magic`, `spell`, and `fancy`. Each component has:

- `name`: Registry identifier.
- `title`: Human-readable name.
- `description`: What the component does.
- `documentationUrl`: Documentation and usage examples.
- `registryUrl`: Exact URL passed to the Shadcn Svelte CLI.
- `dependencies`: Packages required by the registry item.
- `categories`: Purpose, interaction, visual treatment, and motion tags.

## Search procedure

1. Extract concrete constraints from the request.
   - Purpose examples: hero, background, text, button, card, navigation, media.
   - Interaction examples: hover, click, scroll, drag, automatic.
   - Motion examples: static, subtle, medium-motion, high-motion.
   - Technical examples: no WebGL, no canvas, low dependency count, reduced motion.
2. Run the bundled search script. Pass a local manifest when working in this repository:

   ```bash
   node skills/svelte-animations/scripts/find-components.mjs \
     --manifest static/component-manifest.json \
     --query "subtle hero background" \
     --motion subtle \
     --limit 3
   ```

3. Reject candidates that conflict with hard constraints.
4. Open the documentation for the remaining candidates.
5. Recommend at most three. Put the best fit first.

## Recommendation format

For each candidate, state:

- Component and collection.
- Why it matches the requested purpose and interaction.
- Motion intensity and any runtime cost worth noticing.
- Dependencies.
- Documentation URL.

Do not choose from the name alone. Read the description, categories, documentation, and registry item before implementation.
