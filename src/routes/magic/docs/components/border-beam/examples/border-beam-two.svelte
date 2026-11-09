<script lang="ts">
	import { BorderBeam } from "#lib/components/magic/border-beam/index.js";
	import Button from "#lib/components/ui/button/button.svelte";
	import * as Card from "#lib/components/ui/card/index.js";

	import Play from "@lucide/svelte/icons/play";
	import SkipBack from "@lucide/svelte/icons/skip-back";
	import SkipForward from "@lucide/svelte/icons/skip-forward";
</script>

<Card.Root class="relative w-87.5 overflow-hidden">
	<Card.Header>
		<Card.Title>Now Playing</Card.Title>
		<Card.Description>Stairway to Heaven - Led Zeppelin</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex flex-col items-center gap-4">
			<div class="h-48 w-48 rounded-lg bg-linear-to-br from-purple-500 to-pink-500"></div>

			<div class="bg-secondary h-1 w-full rounded-full">
				<div class="bg-primary h-full w-1/3 rounded-full"></div>
			</div>
			<div class="text-muted-foreground flex w-full justify-between text-sm">
				<span>2:45</span>
				<span>8:02</span>
			</div>
		</div>
	</Card.Content>
	<Card.Footer class="flex justify-center gap-4">
		<Button variant="outline" size="icon" class="rounded-full">
			<SkipBack class="size-4" />
		</Button>
		<Button size="icon" class="rounded-full">
			<Play class="size-4" />
		</Button>
		<Button variant="outline" size="icon" class="rounded-full">
			<SkipForward class="size-4" />
		</Button>
	</Card.Footer>
	<BorderBeam duration={6} size={400} class="from-transparent via-red-500 to-transparent" />
	<BorderBeam
		duration={6}
		delay={3}
		size={400}
		borderWidth={2}
		class="from-transparent via-blue-500 to-transparent"
	/>
</Card.Root>
