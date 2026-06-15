<script lang="ts">
	import { GlareHover } from "$lib/components/magic/glare-hover";
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
</script>

<GlareHover class="rounded-xl" color="#505050" duration={700}>
	<Card.Root class="w-160 py-10 text-center">
		<Card.Header>
			<p class="text-muted-foreground text-xs font-medium tracking-widest uppercase">
				14-day free trial · No card required
			</p>
			<Card.Title class="text-2xl tracking-tight">Ready to get started?</Card.Title>
			<Card.Description class="mx-auto max-w-sm">
				Join 4,000+ teams already using our platform to ship faster.
			</Card.Description>
		</Card.Header>
		<Card.Footer class="justify-center gap-2">
			<Button>Start free trial</Button>
			<Button variant="outline">View demo</Button>
		</Card.Footer>
	</Card.Root>
</GlareHover>
