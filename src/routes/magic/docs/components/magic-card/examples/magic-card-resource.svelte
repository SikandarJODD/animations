<script lang="ts">
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<MagicCard
	gradientSize={180}
	gradientColor="var(--color-orange-400)"
	gradientOpacity={0.1}
	gradientFrom="var(--color-orange-400)"
	gradientTo="var(--color-orange-700)"
	class="w-full max-w-sm rounded-lg"
>
	<a
		href="/magic/docs/components/magic-card#props"
		class="block rounded-[inherit] p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
	>
		<h3 class="font-medium text-orange-800 dark:text-orange-200">spotlight settings &rarr;</h3>
		<p class="text-muted-foreground mt-2 text-sm">
			Adjust the radius, border colors, and overlay opacity.
		</p>
	</a>
</MagicCard>
