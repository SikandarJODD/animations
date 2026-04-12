<script lang="ts">
	import { CopyButton } from "$lib/components/spell/copy-button";
</script>

<div class="flex items-center justify-center gap-6 py-12">
	<div class="flex flex-col items-center gap-2">
		<CopyButton text="Small copy" size="sm" />
		<span class="text-muted-foreground text-xs">sm</span>
	</div>
	<div class="flex flex-col items-center gap-2">
		<CopyButton text="Default copy" size="default" />
		<span class="text-muted-foreground text-xs">default</span>
	</div>
	<div class="flex flex-col items-center gap-2">
		<CopyButton text="Large copy" size="lg" />
		<span class="text-muted-foreground text-xs">lg</span>
	</div>
</div>
