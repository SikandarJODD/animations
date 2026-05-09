<script lang="ts">
	import { Spinner } from "$lib/components/spell/spinner";
</script>

<div class="flex items-center gap-8">
	<div class="flex flex-col items-center gap-2">
		<Spinner speed="slow" />
		<span class="text-muted-foreground text-xs">Slow</span>
	</div>
	<div class="flex flex-col items-center gap-2">
		<Spinner speed="normal" />
		<span class="text-muted-foreground text-xs">Normal</span>
	</div>
	<div class="flex flex-col items-center gap-2">
		<Spinner speed="fast" />
		<span class="text-muted-foreground text-xs">Fast</span>
	</div>
</div>
