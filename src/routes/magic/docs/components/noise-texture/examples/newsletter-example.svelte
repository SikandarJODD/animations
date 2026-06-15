<script lang="ts">
	import { NoiseTexture } from "$lib/components/magic/noise-texture";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>

<div class="flex justify-center p-4">
	<Card.Root class="bg-card/80 relative w-full overflow-hidden border md:w-120">
		<NoiseTexture noiseOpacity={0.45} />
		<Card.Header class="relative z-10 space-y-1 pb-4">
			<Card.Title class="text-xl">The weekly digest</Card.Title>
			<Card.Description>
				One email on Sundays—new components, tips, and changelog highlights. No spam,
				unsubscribe anytime.
			</Card.Description>
		</Card.Header>
		<Card.Content class="relative z-10 space-y-4 pt-0">
			<div class="space-y-2">
				<Label for="newsletter-email">Email</Label>
				<Input
					id="newsletter-email"
					autocomplete="email"
					placeholder="you@company.com"
					type="email"
				/>
			</div>
			<Button class="w-full" type="button">Subscribe</Button>
		</Card.Content>
	</Card.Root>
</div>
