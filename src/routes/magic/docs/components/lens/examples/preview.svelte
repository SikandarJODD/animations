<script lang="ts">
	import { Lens } from "#lib/components/magic/lens/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
</script>

<Card.Root class="relative max-w-md shadow-none">
	<Card.Header>
		<Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
			<img
				src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="image_placeholder"
				width={500}
				height={500}
			/>
		</Lens>
	</Card.Header>
	<Card.Content>
		<Card.Title class="text-2xl">Your next camp</Card.Title>
		<Card.Description>
			See our latest and best camp destinations all across the five continents of the globe.
		</Card.Description>
	</Card.Content>
	<Card.Footer class="space-x-4">
		<Button>Let&apos;s go</Button>
		<Button variant="secondary">Another time</Button>
	</Card.Footer>
</Card.Root>
