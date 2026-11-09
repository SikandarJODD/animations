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
	let thirdRow = $derived(reviews.slice(0, reviews.length / 2));
	let fourthRow = $derived(reviews.slice(reviews.length / 2));
</script>

<div
	class="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden perspective-near"
>
	<div
		class="flex flex-row items-center gap-4"
		style="transform:translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg);"
	>
		<Marquee pauseOnHover vertical class="[--duration:20s]">
			{#each firstRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:20s]" vertical>
			{#each secondRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
		<Marquee reverse pauseOnHover class="[--duration:20s]" vertical>
			{#each thirdRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
		<Marquee pauseOnHover class="[--duration:20s]" vertical>
			{#each fourthRow as review}
				<ReviewCard {...review} />
			{/each}
		</Marquee>
	</div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"
	></div>
	<div
		class="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"
	></div>
</div>
