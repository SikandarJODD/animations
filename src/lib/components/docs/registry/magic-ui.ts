/**
 * Magic UI Component Registry
 *
 * Single source of truth for all Magic UI components.
 * Used for sidebar navigation and prev/next navigation.
 */

export type BadgeType = "New" | "Updated" | "Beta";

export interface MagicComponent {
  id: string;
  name: string;
  href: string;
  badge?: BadgeType;
}

/**
 * All Magic UI components
 * Add new components here as they are created
 */
export const magicUIComponents: MagicComponent[] = [
  {
    id: "animated-gradient-text",
    name: "Animated Gradient Text",
    href: "/magic/docs/components/animated-gradient-text",
  },
  {
    id: "animated-shiny-text",
    name: "Animated Shiny Text",
    href: "/magic/docs/components/animated-shiny-text",
    badge: "New",
  },
  {
    id: "aurora-text",
    name: "Aurora Text",
    href: "/magic/docs/components/aurora-text",
    badge: "New",
  },
  {
    id: "avatar-circles",
    name: "Avatar Circles",
    href: "/magic/docs/components/avatar-circles",
    badge: "New",
  },
  {
    id: "bento-grid",
    name: "Bento Grid",
    href: "/magic/docs/components/bento-grid",
    badge: "New",
  },
  {
    id: "pulsating-button",
    name: "Pulsating Button",
    href: "/magic/docs/components/pulsating-button",
    badge: "New",
  },
];

/**
 * Get prev/next components for navigation
 */
export function getPrevNext(currentId: string) {
  const index = magicUIComponents.findIndex((c) => c.id === currentId);
  return {
    prev: index > 0 ? magicUIComponents[index - 1] : null,
    next: index < magicUIComponents.length - 1 ? magicUIComponents[index + 1] : null,
  };
}

/**
 * Get component by ID
 */
export function getComponentById(id: string) {
  return magicUIComponents.find((c) => c.id === id) ?? null;
}


