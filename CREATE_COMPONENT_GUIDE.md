# Create Component Guide

This guide walks you through the complete process of creating and publishing a new component. The project has two component libraries: **Magic UI** (the original) and **Spell UI** (ported from [spell.sh](https://spell.sh)). Each has its own folder structure, registry, and conventions.

---

## Which library should my component go in?

| Library | Source inspiration | Component folder | Route folder | Registry file |
|---------|-------------------|-----------------|--------------|---------------|
| **Magic UI** | [magicui.design](https://magicui.design) | `src/lib/components/magic/` | `src/routes/magic/docs/components/` | `registry.json` |
| **Spell UI** | [spell.sh](https://spell.sh) | `src/lib/components/spell/` | `src/routes/spell/` | `spell-registry.json` |

If you are porting a component from spell.sh, follow the **Spell UI** path below. Otherwise, use **Magic UI**.

---

## Magic UI — Quick Overview

1. Create main component in `src/lib/components/magic/`
2. Create route in `src/routes/magic/docs/components/`
3. Add component to `registry.json`
4. Build registry: `pnpm registry:build`
5. Test component installation
6. Make a PR

---

## Magic UI — Step 1: Create Main Component

Create your component folder inside `src/lib/components/magic/`.

### Folder Structure

```
src/lib/components/magic/
└── your-component/
    ├── your-component.svelte    # Main component
    ├── index.ts                 # Exports
    ├── types.ts                 # (optional) TypeScript hooks
    └── use-*.svelte.ts          # (optional) Composable
```

## Magic UI — Step 2: Create Route

Create a new folder inside `src/routes/magic/docs/components/` with your component name.

### Required Files Structure

```
src/routes/magic/docs/components/your-component/
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

## Magic UI — Step 3: Add Component to `registry.json`

Add your component entry to the `items` array in `registry.json`:

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

## Magic UI — Step 4: Build Registry

Run the registry build command:

```bash
pnpm registry:build
```

This generates JSON files in `static/r/` for each component, enabling CLI installation.

---

## Magic UI — Step 5: Test Component Installation

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

## Magic UI — Step 6: Make a PR

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
   - [ ] Component created in `src/lib/components/magic/`
   - [ ] Route created in `src/routes/magic/docs/components/`
   - [ ] `+page.svelte` with proper SEO
   - [ ] `llms.txt/+server.ts` serving `docs.md`
   - [ ] `docs.md` with AI-readable documentation
   - [ ] `examples/` with `preview.svelte` and any variants
   - [ ] `data.ts` with proper types, code, SEO, examples
   - [ ] Component added to `registry.json`
   - [ ] Registry built successfully (`pnpm registry:build`)
   - [ ] Component tested via installation

---

---

# Spell UI Components

Spell UI components are ported from [spell.sh](https://spell.sh). They follow a similar pattern to Magic UI but use a different folder structure and registry.

## Spell UI — Quick Overview

1. Create main component in `src/lib/components/spell/`
2. Create route in `src/routes/spell/`
3. Add component to `spell-registry.json`
4. Build registry: `pnpm spell:build` (generates `static/s/`)
5. Register component in `src/lib/components/docs/registry/spell_ui.ts`
6. Add preview to `src/lib/components/layout/spell/showcase-data.ts`
7. Make a PR

---

## Spell UI — Step 1: Create Main Component

Create your component folder inside `src/lib/components/spell/`.

```
src/lib/components/spell/
└── your-component/
    ├── your-component.svelte    # Main component
    └── index.ts                 # Exports (re-export the component)
```

### `index.ts` pattern

```typescript
export { default as YourComponent } from "./your-component.svelte";
```

---

## Spell UI — Step 2: Create Route

Create a folder inside `src/routes/spell/` (not inside `docs/components/` — Spell routes live at the top level of `/spell/`).

```
src/routes/spell/your-component/
├── +page.svelte          # Page — copy from another Spell component
├── docs.md               # AI-readable documentation
├── data.ts               # Component data (meta, SEO, install, examples)
├── examples/
│   ├── preview.svelte    # Main preview
│   └── *.svelte          # Variant examples
└── llms.txt/
    └── +server.ts        # Serves docs.md as plain text (copy verbatim)
```

### `+page.svelte` pattern

```svelte
<script lang="ts">
  import ComponentDocPage from "$lib/components/docs/base/ComponentDocPage.svelte";
  import { data } from "./data";
</script>

<ComponentDocPage
  id={data.id}
  title={data.title}
  description={data.description}
  seo={data.seo}
  preview={data.preview}
  previewCode={data.previewCode}
  installCodeBlocks={data.installBlock?.installCode}
  installPackages={data.installBlock?.packages}
  installFolderStructure={data.installBlock?.folderStructure}
  examples={data.examples}
  propsTables={data.props}
  descriptionClass="max-w-xl"
/>
```

### `data.ts` pattern

```typescript
import YourComponentRaw from "$lib/components/spell/your-component/your-component.svelte?raw";
import IndexTsRaw from "$lib/components/spell/your-component/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";

export const meta: ComponentMeta = {
  id: "your-component",
  title: "Your Component",
  description: "One-sentence description shown on the docs page.",
  category: "Components", // One of the SpellCategory values
};

const seo: SEO = {
  title: "Your Component",
  description: "Longer SEO description.",
  keywords: ["Svelte", "Your Component", "Spell", "Svelte Animations"],
};

const installBlock: InstallComponentDocs = {
  installCode: [
    {
      filename: "your-component.svelte",
      filecode: YourComponentRaw,
      lang: "svelte",
      isExpand: true,
    },
    {
      filename: "index.ts",
      filecode: IndexTsRaw,
      lang: "typescript",
    },
  ],
  folderStructure: `src/
lib/
  components/
    spell/
      your-component/
        your-component.svelte
        index.ts`,
};

export const data: ComponentDoc = {
  ...meta,
  seo,
  preview: Preview,
  previewCode: {
    filename: "preview.svelte",
    filecode: PreviewCodeRaw,
    lang: "svelte",
    hideLines: true,
  },
  installBlock,
  examples: [
    // additional examples go here
  ],
};
```

### `llms.txt/+server.ts` (copy verbatim)

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

---

## Spell UI — Step 3: Add to `spell-registry.json`

Add an entry to the `items` array in `spell-registry.json`:

```json
{
  "name": "your-component",
  "type": "registry:block",
  "title": "Your Component",
  "description": "Brief description.",
  "files": [
    {
      "path": "./src/lib/components/spell/your-component/your-component.svelte",
      "type": "registry:component",
      "target": "spell/your-component/your-component.svelte"
    },
    {
      "path": "./src/lib/components/spell/your-component/index.ts",
      "type": "registry:file",
      "target": "spell/your-component/index.ts"
    }
  ],
  "registryDependencies": []
}
```

---

## Spell UI — Step 4: Build Registry

```bash
pnpm spell:build
```

This generates `static/s/your-component.json` and updates `static/s/index.json`.

---

## Spell UI — Step 5: Register in `spell_ui.ts`

Add your component to `src/lib/components/docs/registry/spell_ui.ts`:

```typescript
{
  id: "your-component",
  name: "Your Component",
  href: "/spell/your-component",
  category: "Components",  // must be a valid SpellCategory
  desc: "One-sentence description for the sidebar.",
  badge: "New",            // optional: "New" | "Beta" | "Updated"
},
```

Place it in the correct category section. The category must be one of:
`"Overview"` | `"Components"` | `"Text Animations"` | `"Buttons"` | `"Inputs"` | `"Feedback"` | `"Backgrounds"` | `"Interactive"`

---

## Spell UI — Step 6: Add to Overview Showcase

Import your preview in `src/lib/components/layout/spell/showcase-data.ts`:

```typescript
import YourComponentPreview from "../../../../routes/spell/your-component/examples/preview.svelte";

// In previewById:
"your-component": YourComponentPreview,
```

The overview page will automatically include it if the component is in `spellUIComponents`.

---

## Spell UI — Step 7: Make a PR

**PR Checklist**:
- [ ] Component created in `src/lib/components/spell/`
- [ ] Route created in `src/routes/spell/your-component/`
- [ ] `+page.svelte` using `ComponentDocPage`
- [ ] `docs.md` with AI-readable documentation
- [ ] `llms.txt/+server.ts` serving `docs.md`
- [ ] `data.ts` with `meta`, `seo`, `installBlock`, and `examples`
- [ ] `examples/preview.svelte` plus at least one variant
- [ ] Entry added to `spell-registry.json`
- [ ] Registry built (`pnpm spell:build`) — `static/s/your-component.json` exists
- [ ] Entry added to `spell_ui.ts` with correct category
- [ ] Preview imported in `showcase-data.ts`

---

## Best Practices

- **Naming**: Use kebab-case for folder/file names and component IDs
- **Props**: Document all props with types and defaults in `docs.md`
- **Examples**: Create at least a `preview.svelte` and one meaningful variant
- **Dependencies**: Only include necessary npm packages; document them in `installBlock.packages`
- **CSS**: Use Tailwind classes when possible; avoid component-scoped `<style>` blocks for keyframes (put them in `src/routes/layout.css` instead so Tailwind can process them)
- **svelte-check**: Run `pnpm check` before submitting — fix all type errors and a11y warnings
- **Svelte 5**: Use `$state`, `$derived`, `$props()` runes; avoid legacy `export let` style props
