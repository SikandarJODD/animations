<script lang="ts">
	import { Signature } from "$lib/components/spell/signature";
</script>

<div class="flex flex-col items-center justify-center gap-4">
	<Signature once={false} inView class="dark:invert-100" text="Svelte is Cool" fontSize={10} />
	<Signature once={false} inView class="dark:invert-100" text="Svelte is Cool" fontSize={16} />
	<Signature once={false} inView class="dark:invert-100" text="Svelte is Cool" fontSize={24} />
</div>
