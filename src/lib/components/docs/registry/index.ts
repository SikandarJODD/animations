/**
 * Component Registry
 *
 * Central export for all UI library registries.
 * Each library has its own file with component metadata.
 */

export * from "./magic-ui";
export {
	spellUIComponents,
	type SpellComponent,
	getPrevNext as getSpellPrevNext,
} from "./spell_ui";
export {
	fancyUIComponents,
	type FancyComponent,
	getPrevNext as getFancyPrevNext,
} from "./fancy_ui";

// Future libraries:
// export * from "./aceternity-ui";
// export * from "./luxe-ui";
// export * from "./indie-ui";
// export * from "./magi-ui";
