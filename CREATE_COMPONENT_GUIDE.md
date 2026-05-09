# Create Component Guide

This guide walks you through the complete process of creating and publishing a new component. There are two libraries: **Magic UI** (components from [magicui.design](https://magicui.design)) and **Spell UI** (components from [spell.sh](https://spell.sh)). The steps are the same — just swap the paths shown as `magic / spell` below.

---

## Quick Overview

| | Magic UI | Spell UI |
|---|---|---|
| Component folder | `src/lib/components/magic/` | `src/lib/components/spell/` |
| Route folder | `src/routes/magic/docs/components/` | `src/routes/spell/` |
| Registry file | `registry.json` | `spell-registry.json` |
| Build command | `pnpm registry:build` → `static/r/` | `pnpm spell:build` → `static/s/` |
| Sidebar registration | `src/lib/components/docs/registry/magic-ui.ts` | `src/lib/components/docs/registry/spell_ui.ts` |

1. Create main component in `src/lib/components/[magic|spell]/`
2. Create route in `src/routes/[magic/docs/components|spell]/`
3. Add component to `[registry.json|spell-registry.json]`
4. Build registry: `pnpm [registry:build|spell:build]`
5. Test component installation
6. Make a PR

**Spell UI only:** also add your component to `spell_ui.ts` and import its preview in `showcase-data.ts`.

---

## Step 1: Create Main Component

Create your component folder inside `src/lib/components/[magic|spell]/`.

### Folder Structure

```
src/lib/components/[magic|spell]/
└── your-component/
    ├── your-component.svelte    # Main component
    ├── index.ts                 # Exports
    ├── types.ts                 # (optional) TypeScript hooks
    └── use-*.svelte.ts          # (optional) Composable
```

## Step 2: Create Route

Create a new folder inside `src/routes/[magic/docs/components|spell]/` with your component name.

### Required Files Structure

```
src/routes/[magic/docs/components|spell]/your-component/
├── +page.svelte          # Page component
├── docs.md               # Documentation for AI/LLMs
├── data.ts               # Component data (types, code, SEO, examples)
├── examples/
│   ├── preview.svelte    # Main preview component
│   └── *.svelte          # Additional example files
└── llms.txt/
    └── +server.ts        # Just use to serve docs.md as plain text - you can copy the same from other components, no need to change anything..
```

### Create `llms.txt/+server.ts`

```typescript
import type { RequestHandler } from "./$types";
import docs from "../docs.md?raw";

export const GET: RequestHandler = async () => {
  return new Response(docs, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
```

### Folder Structure Reference

```markdown
folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── your-component/
                ├── your-component.svelte
                └── index.ts`,
```

OR

```markdown
folderStructure: `src/
	lib/
	├── components/
	│   └── magic/
	│       └── warp-background/
	│           ├── warp-background.svelte
	│           └── index.ts
  ```

## Step 3: Add Component to `[registry.json|spell-registry.json]`

Add your component entry to the `items` array in `registry.json` (Magic) or `spell-registry.json` (Spell):

```json
{
  "name": "your-component",
  "type": "registry:block",
  "title": "Your Component",
  "description": "Brief description of the component.",
  "files": [
    {
      "path": "./src/lib/components/magic/your-component/your-component.svelte",
      "type": "registry:component",
      "target": "magic/your-component/your-component.svelte"
    },
    {
      "path": "./src/lib/components/magic/your-component/index.ts",
      "type": "registry:file",
      "target": "magic/your-component/index.ts"
    }
  ],
  "registryDependencies": [],
  "dependencies": ["motion-sv"]
}
```

### Adding CSS/Keyframes

For components with custom CSS animations:

```json
{
  "name": "your-component",
  "cssVars": {
    "theme": {
      "animate-your-animation": "your-animation 2s ease infinite"
    }
  },
  "css": {
    "@keyframes your-animation": {
      "0%": { "opacity": "0" },
      "100%": { "opacity": "1" }
    }
  }
}
```

---

## Step 4: Build Registry

Run the registry build command:

```bash
pnpm registry:build   # Magic UI → static/r/
pnpm spell:build      # Spell UI → static/s/
```

This generates JSON files for each component, enabling CLI installation.

---

## Step 5: Test Component Installation

Test the component can be installed correctly:

```bash
# In a test Svelte project with shadcn-svelte installed
npx shadcn-svelte@latest add "http://localhost:5173/r/your-component.json"
```

### Verify:

- [ ] Component files are copied correctly
- [ ] Dependencies are added to `package.json`
- [ ] CSS variables are added (if any)
- [ ] Component works as expected

---

## Step 6: Make a PR

1. **Create a branch**:

   ```bash
   git checkout -b feat/your-component
   ```

2. **Commit changes**:

   ```bash
   git add .
   git commit -m "feat: add your-component"
   ```

3. **Push and create PR**:

   ```bash
   git push origin feat/your-component
   ```

4. **PR Checklist**:
   - [ ] Component created in `src/lib/components/[magic|spell]/`
   - [ ] Route created in `src/routes/[magic/docs/components|spell]/`
   - [ ] `+page.svelte` with proper SEO
   - [ ] `llms.txt/+server.ts` serving `docs.md`
   - [ ] `docs.md` with AI-readable documentation
   - [ ] `examples/` with `preview.svelte` and any variants
   - [ ] `data.ts` with proper types, code, SEO, examples
   - [ ] Component added to `[registry.json|spell-registry.json]`
   - [ ] Registry built successfully (`pnpm [registry:build|spell:build]`)
   - [ ] Component tested via installation
   - [ ] **(Spell only)** Entry added to `spell_ui.ts` with correct category
   - [ ] **(Spell only)** Preview imported in `showcase-data.ts`

---

## Best Practices

- **Naming**: Use kebab-case for folder/file names and component IDs
- **Props**: Document all props with types and defaults
- **Examples**: Create at least one preview and one variant example
- **Dependencies**: Only include necessary npm packages
- **CSS**: Use Tailwind classes when possible; use `cssVars`/`css` for animations. Put custom `@keyframes` in `src/routes/layout.css` rather than component `<style>` blocks so Tailwind can process them
- **Svelte 5**: Use `$state`, `$derived`, `$props()` runes — avoid legacy `export let` props
- **Testing**: Always test installation in a fresh project before PR; run `pnpm check` to catch type/a11y warnings
