<script lang="ts">
	import SpellOverviewHero from "#lib/components/layout/spell/spell-overview-hero.svelte";
	import SpellOverviewShowcase from "#lib/components/layout/spell/spell-overview-showcase.svelte";
	import {
		buildSpellKeywords,
		SPELL_SOCIAL_IMAGE,
		SPELL_TITLE_TEMPLATE,
	} from "#lib/seo/spell.js";
	import SEOComponent from "#lib/seo/seo.svelte";

	const title = "Refined Svelte 5 Components for Design Engineers";
	const description =
		"Explore Svelte Spell UI, a polished collection of refined Svelte 5 components inspired by Spell UI and built with Tailwind CSS and Motion SV for modern product interfaces.";
	const keywords = buildSpellKeywords([
		"Svelte 5 UI components",
		"Svelte design system",
		"polished Svelte components",
		"modern Svelte interface",
		"Svelte frontend components",
		"interactive Svelte UI",
		"Svelte animation components",
		"reusable Svelte components",
		"UI components for design engineers",
		"product interface components",
	]);
	const socialTitle = `${title} | Svelte Spell UI`;
</script>

<SEOComponent
	{title}
	titleTemplate={SPELL_TITLE_TEMPLATE}
	{description}
	{keywords}
	{socialTitle}
	siteName="Svelte Spell UI"
	images={[SPELL_SOCIAL_IMAGE]}
	author="Sikandar Jodd"
/>

<div class="w-full">
	<div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
		<SpellOverviewHero />
	</div>

	<SpellOverviewShowcase />
</div>
