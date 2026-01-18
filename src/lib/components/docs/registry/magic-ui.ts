/**
 * Magic UI Component Registry
 *
 * This file exports all component metadata for Magic UI.
 * Used for sidebar navigation and prev/next navigation.
 */

import type { ComponentMeta } from "$lib/types/structure";
import { meta as animatedGradientText } from "../../../../routes/magic/docs/components/animated-gradient-text/data";

/**
 * All Magic UI components metadata
 * Add new components here as they are created
 */
export const magicUIComponents: ComponentMeta[] = [
  animatedGradientText,
  // Add more components here...
];

/**
 * Group components by category for sidebar
 */
export function getComponentsByCategory(components: ComponentMeta[]) {
  return Object.groupBy(components, (c) => c.category ?? "other");
}

/**
 * Get prev/next components for navigation
 */
export function getPrevNext(currentId: string, components: ComponentMeta[]) {
  const index = components.findIndex((c) => c.id === currentId);
  return {
    prev: index > 0 ? components[index - 1] : null,
    next: index < components.length - 1 ? components[index + 1] : null,
  };
}
