<script lang="ts">
	import Marquee from "#lib/components/magic/marquee/marquee.svelte";
	import ReviewCard from "./review-card.svelte";

	let reviews = $state([
		{
			name: "Jack",
			username: "@jack",
			body: "I've never seen anything like this before. It's amazing. I love it.",
			img: "https://avatar.vercel.sh/jack",
		},
		{
			name: "Jill",
			username: "@jill",
			body: "I don't know what to say. I'm speechless. This is amazing.",
			img: "https://avatar.vercel.sh/jill",
		},
		{
			name: "John",
			username: "@john",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/john",
		},
		{
			name: "Jane",
			username: "@jane",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jane",
		},
		{
			name: "Jenny",
			username: "@jenny",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/jenny",
		},
		{
			name: "James",
			username: "@james",
			body: "I'm at a loss for words. This is amazing. I love it.",
			img: "https://avatar.vercel.sh/james",
		},
	]);

	let firstRow = $derived(reviews.slice(0, reviews.length / 2));
	let secondRow = $derived(reviews.slice(reviews.length / 2));
</script>

<div class="relative flex h-125 w-full flex-row items-center justify-center overflow-hidden">
	<Marquee pauseOnHover vertical class="[--duration:20s]">
		{#each firstRow as review}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover vertical class="[--duration:20s]">
		{#each secondRow as review}
			<ReviewCard {...review} />
		{/each}
	</Marquee>
	<div
		class="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"
	></div>
</div>
