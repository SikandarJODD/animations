<script lang="ts">
	import { Button } from "#lib/components/ui/button/index.js";
	import FaviconLink from "#lib/components/ui/favicon-link/favicon-link.svelte";
</script>

<section class="flex min-h-96 items-center px-6 py-14 text-center sm:px-10">
	<div class="mx-auto w-full max-w-3xl text-center">
		<h1 class="text-3xl leading-16 font-semibold text-balance sm:text-5xl md:text-6xl">
			Svelte Spell UI
		</h1>

		<p class="text-muted-foreground mx-auto mt-5 max-w-2xl text-base text-balance">
			Svelte Spell UI is a port of the original Spell UI by
			<FaviconLink href="https://tomm.page/" class="my-0">Tom</FaviconLink>. It offers a
			collection of high-quality components that you can copy-paste into any project.
		</p>

		<div class="mt-8 flex items-center justify-center">
			<Button href="/spell/perspective-book" size="lg" class="rounded-full px-4">
				Explore Components
			</Button>
		</div>
	</div>
</section>
