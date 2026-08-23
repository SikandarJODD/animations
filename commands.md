# Commands

## Generate routes

```bash
# From a component source path
pnpm create:route fancy/animated-gradient-svg

# Custom route name and source
pnpm create:route animated-gradient-svg --source fancy/animated-gradient-svg

# Choose an export, preview changes, or overwrite an existing route
pnpm create:route animated-gradient-svg --source fancy/animated-gradient-svg --export AnimatedGradientSvg --dry-run
pnpm create:route fancy/animated-gradient-svg --force

# Generate multiple routes
pnpm create:routes spell/badge magic/backlight
```

## Generate docs

```bash
# Specific components
pn docs:magic component-name

# All components in a group
pnpm docs:fancy -- --all
pnpm docs:components -- --group magic --all

# Generate a range or preview it
pnpm docs:magic -- --after animated-list --count 10
pnpm docs:spell -- --after badge --count 5 --dry-run

# List available components
pnpm docs:components -- --group magic --list
```
