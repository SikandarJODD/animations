<script lang="ts">
	import Autoplay from "embla-carousel-autoplay";
	import { SpotifyCard } from "$lib/components/spell/spotify-card";
	import { Carousel, CarouselContent, CarouselItem } from "$lib/components/ui/carousel";

	const tracks = [
		"https://open.spotify.com/track/2OZVskV28xxJjjhQqKTLSg",
		"https://open.spotify.com/track/7tTRFVlFzk6yTnoMcParmi",
		"https://open.spotify.com/track/2EiGLWYEH6x79f9ir0VEah",
	];
</script>

<Carousel
	class="w-full max-w-[330px]"
	plugins={[Autoplay({ delay: 2000 })]}
>
	<CarouselContent>
		{#each tracks as url}
			<CarouselItem>
				<SpotifyCard {url} />
			</CarouselItem>
		{/each}
	</CarouselContent>
</Carousel>
