<script lang="ts">
	import { Meteors } from "#lib/components/magic/meteors/index.js";
</script>

<div
	class="bg-background relative flex h-64 w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border"
>
	<Meteors number={20} angle={215} minDuration={3} maxDuration={6} />
	<p class="text-foreground relative z-10 text-4xl font-medium">meteors</p>
</div>
