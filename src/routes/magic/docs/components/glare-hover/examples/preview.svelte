<script lang="ts">
	import { GlareHover } from "$lib/components/magic/glare-hover";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";

	let items = ["Unlimited projects", "Team collaboration", "Advanced analytics"];
</script>

<GlareHover class="rounded-xl" duration={600}>
	<Card.Root class="w-85">
		<Card.Header>
			<div class="flex items-center justify-between">
				<Card.Title>Pro</Card.Title>
				<Badge>Popular</Badge>
			</div>
			<Card.Description>For teams that need more.</Card.Description>
			<div class="flex items-baseline gap-1 pt-2">
				<span class="text-4xl font-semibold tracking-tight">$49</span>
				<span class="text-muted-foreground text-sm">/mo</span>
			</div>
		</Card.Header>
		<Card.Content class="flex flex-col gap-2.5">
			{#each items as item}
				<div class="flex items-center gap-2 text-sm">
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
						<path
							d="M12.5 3.5L6 10L2.5 6.5"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					{item}
				</div>
			{/each}
			<div class="text-muted-foreground flex items-center gap-2 text-sm">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none">
					<circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" opacity="0.4" />
				</svg>
				SSO (coming soon)
			</div>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Get started</Button>
		</Card.Footer>
	</Card.Root>
</GlareHover>
