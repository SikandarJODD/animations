# Install and adapt

## Before installation

1. Identify the package manager from its lockfile. Do not mix package managers.
2. Read `package.json`, `components.json`, aliases, global styles, and the target route.
3. Check whether the component or an equivalent implementation already exists.
4. Open the component's documentation and registry JSON.
5. Note its files, registry dependencies, package dependencies, and attribution.

If Shadcn Svelte is not configured, report that prerequisite. Initialize it only when the user has authorized project changes.

## Installation

Use the exact manifest `registryUrl`:

```bash
npx shadcn-svelte@latest add <registry-url>
pnpm dlx shadcn-svelte@latest add <registry-url>
bun x shadcn-svelte@latest add <registry-url>
```

Run only the command for the detected package manager. Review the resulting diff immediately. Stop and report a conflict rather than overwriting an existing component without confirmation.

## Adaptation order

1. Fix imports and aliases.
   - Use the project's existing aliases and utility helpers.
   - Remove imports used only by the documentation demo.
2. Fit the component API to its call site.
   - Keep the installed public API unless the task requires a change.
   - Prefer composition over adding unrelated boolean props.
3. Replace demo content and assets.
   - Use the user's copy, links, icons, images, and data.
   - Keep intrinsic dimensions or aspect ratios to prevent layout shift.
4. Map visual values to the project.
   - Reuse existing colour, spacing, typography, radius, and surface tokens.
   - Do not replace the project's theme or global styles to match a demo.
5. Adjust motion.
   - Preserve the component's intended interaction.
   - Reduce intensity when requested or when the effect competes with primary content.
   - Add a reduced-motion branch when the installed component lacks one.
6. Remove dead code and unused dependencies introduced during adaptation.

## Failure handling

- If installation fails, capture the exact error and inspect the registry item before retrying.
- If a dependency conflicts with the project, explain the conflict. Do not silently pin or downgrade unrelated packages.
- If the component relies on browser-only APIs, guard server rendering and check for hydration mismatch.
- If adaptation would rewrite most of the component, reconsider the selection before continuing.
