<script lang="ts">
	import { VerticalCutReveal } from "$lib/components/fancy/vertical-cut-reveal";
</script>

<div
	class="flex min-h-80 flex-col justify-center gap-2 rounded-xl bg-white px-6 py-8 text-left text-[1.35rem] font-semibold text-[#1131d8] uppercase sm:px-8"
>
	<VerticalCutReveal splitBy="characters" staggerDuration={0.018} staggerFrom="first">
		Hello Devs 😁
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.018}
		staggerFrom="center"
		transition={{ type: "spring", stiffness: 210, damping: 24, delay: 0.2 }}
	>
		Welcome to
	</VerticalCutReveal>
	<VerticalCutReveal
		splitBy="characters"
		staggerDuration={0.018}
		reverse={true}
		transition={{ type: "spring", stiffness: 210, damping: 24, delay: 0.45 }}
	>
		Svelte Fancy Components 🎉
	</VerticalCutReveal>
</div>
