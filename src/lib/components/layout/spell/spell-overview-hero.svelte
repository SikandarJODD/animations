<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
</script>

<!-- 46 vh orignal -->
<section class="flex min-h-[46vh] items-center py-14 sm:py-18">
	<div class="mx-auto w-full max-w-3xl text-center">
		<h1 class="text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl md:text-6xl">
			Svelte Spell UI
		</h1>

		<p class="text-muted-foreground mx-auto mt-5 max-w-2xl text-base leading-8 text-balance">
			Svelte Spell UI is a port of the original Spell UI by Tom. It offers a collection of
			high-quality components that you can copy-paste into any project.
		</p>

		<div class="mt-8 flex justify-center">
			<Button href="/spell/perspective-book" size="lg" class="rounded-full px-6">
				Explore Components
				<ArrowRightIcon class="size-4" />
			</Button>
		</div>
	</div>
</section>
