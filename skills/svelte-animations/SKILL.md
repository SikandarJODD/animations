---
name: svelte-animations
description: Find, compare, install, adapt, and verify Svelte Animations components from the Magic UI, Spell UI, and Fancy Components registries. Use when a developer asks for a Svelte animation or animated UI component, wants a component recommendation from sv-animations, provides a Svelte Animations documentation or registry URL, or asks to install, customize, debug, or audit one of these components in a Svelte project.
---

# Svelte Animations

Use the component manifest to choose existing components before writing animation code from scratch. Treat the user's project as the source of truth for package manager, aliases, styles, component conventions, and validation commands.

## Workflow

1. Read the request and determine the authorized scope.
   - For a recommendation, search and compare without changing files.
   - For an implementation, inspect the project before installing anything.
   - For a named component or registry URL, skip discovery but still inspect compatibility.
2. Inspect the project when local files are available.
   - Confirm Svelte version, package manager, styling system, aliases, and `components.json`.
   - Check the target page and nearby components so the result fits the existing code.
   - Preserve unrelated user changes.
3. Translate the request into search criteria.
   - Identify the UI purpose, interaction, motion intensity, and technical constraints.
   - Read [references/manifest.md](references/manifest.md) before searching.
4. Search the component manifest with `scripts/find-components.mjs`.
   - Return no more than three candidates.
   - Explain each match using its description, categories, dependencies, and collection.
   - Never invent a component or registry URL.
5. Choose a collection using [references/collection-selection.md](references/collection-selection.md).
   - Choose by component fit, not by collection reputation.
   - Read the selected component's documentation before installation.
6. Install and adapt only when the user asked for implementation.
   - Read [references/install-and-adapt.md](references/install-and-adapt.md).
   - Use the exact `registryUrl` returned by the manifest.
   - Inspect generated files before editing them.
7. Verify the result with [references/verification.md](references/verification.md).
   - Run checks in proportion to the change.
   - Fix failures caused by the implementation.
8. Report the component chosen, files changed, dependencies added, checks run, and any remaining limitation.

## Selection rules

- Prefer an existing component when it meets the request without forcing an unrelated interaction model.
- Prefer `static` or `subtle` motion when animation is decorative or the user asks for restraint.
- Treat `high-motion`, canvas, WebGL, cursor-following, and continuous animation as explicit tradeoffs. Mention them before implementation when they affect accessibility or performance.
- Compare close candidates by interaction and motion intensity. Do not present a long catalogue.
- If no component fits, say so. Then offer to build a small local solution instead of bending an unrelated component into shape.

## Working rules

- Do not copy documentation examples unchanged into production code.
- Do not replace the project's tokens, aliases, or component APIs without a task-specific reason.
- Do not hide registry conflicts or failed checks.
- Do not claim reduced-motion, responsive, or accessibility support without checking the installed code and rendered behavior.
- Keep attribution comments and notices included by the installed component.
