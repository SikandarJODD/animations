<script lang="ts">
	import { WarpBackground } from "#lib/components/magic/warp-background/index.js";
	import * as Card from "#lib/components/ui/card/index.js";
</script>

<WarpBackground>
	<Card.Root class="w-80">
		<Card.Content class="flex flex-col gap-2 p-4">
			<Card.Title>Congratulations on Your Promotion!</Card.Title>
			<Card.Description>
				Your hard work and dedication have paid off. We&apos;re thrilled to see you take
				this next step in your career. Keep up the fantastic work!
			</Card.Description>
		</Card.Content>
	</Card.Root>
</WarpBackground>
