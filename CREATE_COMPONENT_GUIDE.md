# Create Component Guide

This guide walks you through the complete process of creating and publishing a new component in the svelte animationss.

---

## Quick Overview

1. Create main component in `src/lib/components/magic/`
2. Create route in `src/routes/magic/docs/components/`
3. Add component to `registry.json`
4. Build registry: `pnpm registry:build`
5. Test component installation
6. Make a PR

---

## Step 1: Create Main Component

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

## Step 2: Create Route

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
│ └── magic/
│ └── warp-background/
│ ├── warp-background.svelte
│ └── index.ts
```

## Step 3: Add Component to `registry.json`

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

## Step 4: Build Registry

Run the registry build command:

```bash
pnpm registry:build
```

This generates JSON files in `static/r/` for each component, enabling CLI installation.

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

## Best Practices

- **Naming**: Use kebab-case for folder/file names and component IDs
- **Props**: Document all props with types and defaults
- **Examples**: Create at least one preview and one variant example
- **Dependencies**: Only include necessary npm packages
- **CSS**: Use Tailwind classes when possible; use `cssVars`/`css` for animations
- **Testing**: Always test installation in a fresh project before PR
