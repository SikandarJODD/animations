<script lang="ts">
	import SEOComponent from "#lib/seo/seo.svelte";
	import CatLookinUp from "./illustrations/cat-lookin-up.svelte";
	import CatSleeping from "./illustrations/cat-sleeping.svelte";
	import DevCoffe from "./illustrations/dev-coffe.svelte";
	import { changelogEntries } from "./data";
</script>

<SEOComponent
	title="Changelog | Svelte 5 Animations"
	description="Latest component additions, fixes, examples, and updates for Svelte 5 Animations."
	titleTemplate="%s"
	siteName="Svelte 5 Animations"
/>

<section
	class="font-figtree relative min-h-[calc(100vh-4rem)] overflow-x-clip px-5 py-10 sm:px-6 sm:py-14"
>
	<div class="relative mx-auto w-full max-w-6xl">
		<!-- <div
			class="pointer-events-none absolute inset-y-0 left-4 hidden w-36 pt-44 xl:block"
			aria-hidden="true"
		>
			<DevCoffe
				class="fixed top-80 block h-auto w-36 text-amber-600/35 dark:text-cyan-600"
				focusable="false"
			/>
		</div> -->
		<div
			class="pointer-events-none absolute inset-y-0 right-5 hidden w-28 pt-[34rem] xl:block"
			aria-hidden="true"
		>
			<CatLookinUp
				class="fixed bottom-40 block h-auto w-28 -scale-x-100 text-emerald-600/35 dark:text-emerald-500/60"
				focusable="false"
			/>
		</div>

		<div class="mx-auto w-full max-w-2xl">
			<header class="relative mb-8 -ml-0.5 sm:mb-10">
				<h1 class="text-2xl font-semibold tracking-normal sm:text-3xl">Changelog</h1>
				<CatSleeping
					class="pointer-events-none absolute top-1 right-8 h-auto w-10 text-amber-900/70 sm:top-1.5 sm:left-50 sm:w-12 dark:text-amber-200/70"
					aria-hidden="true"
					focusable="false"
				/>
			</header>

			<div class="space-y-10 sm:space-y-12">
				{#each changelogEntries as entry, index (entry.id)}
					{@const Entry = entry.component}
					<div>
						<Entry />
						{#if index === 0}
							<aside class="border-border/70 mt-8 border-t pt-4 text-sm leading-6">
								<p class="text-muted-foreground">
									Found a bug or have a feature in mind?
									<a
										href="https://x.com/Sikandar_Bhide"
										target="_blank"
										rel="noreferrer"
										class="text-foreground decoration-border hover:decoration-foreground font-medium underline underline-offset-4 transition-colors"
									>
										DM me on X
									</a>
									or
									<a
										href="https://github.com/SikandarJODD/animations/issues"
										target="_blank"
										rel="noreferrer"
										class="text-foreground decoration-border hover:decoration-foreground font-medium underline underline-offset-4 transition-colors"
									>
										open an issue
									</a>.
								</p>
							</aside>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
