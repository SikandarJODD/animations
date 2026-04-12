<script lang="ts">
	import { FallbackAvatar } from "$lib/components/spell/fallback-avatar";
</script>

<div class="flex flex-wrap items-center gap-6">
	<div class="flex flex-col items-center gap-2">
		<FallbackAvatar class="border" name="animated" size={56} />
		<div class="text-center">
			<p class="text-sm font-medium">Animated</p>
			<p class="text-muted-foreground text-xs">Hover to animate</p>
		</div>
	</div>

	<div class="flex flex-col items-center gap-2">
		<FallbackAvatar class="border" name="animated" size={56} animated={false} />
		<div class="text-center">
			<p class="text-sm font-medium">Static</p>
			<p class="text-muted-foreground text-xs">Animation disabled</p>
		</div>
	</div>
</div>
