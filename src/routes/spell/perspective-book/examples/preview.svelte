<script lang="ts">
	import { PerspectiveBook } from "#lib/components/spell/perspective-book/index.js";
	import Code2Icon from "@lucide/svelte/icons/code-2";
</script>

<div class="py-10">
	<PerspectiveBook size="lg" textured class="bg-[#5f4638] text-stone-100">
		<div class="flex h-full flex-col justify-between">
			<div class="space-y-4">
				<div class="flex items-start justify-between gap-4">
					<h2 class="max-w-[12ch] text-lg leading-5 font-semibold sm:text-xl">
						Perspective Interfaces
					</h2>
					<Code2Icon class="mt-0.5 size-6 shrink-0" />
				</div>

				<p
					class="max-w-[18ch] text-xs/relaxed font-medium text-stone-200/80 sm:text-sm/relaxed"
				>
					A layered cover that turns any slot content into a dramatic book-style reveal.
				</p>
			</div>

			<div class="space-y-1">
				<p
					class="text-[0.65rem] font-semibold tracking-[0.28em] text-stone-200/70 uppercase"
				>
					Spell Collection
				</p>
				<span class="font-serif text-base font-medium sm:text-lg">Svelte Animations</span>
			</div>
		</div>
	</PerspectiveBook>
</div>
