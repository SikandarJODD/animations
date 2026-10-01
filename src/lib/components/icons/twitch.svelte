<script lang="ts">
	import type { Props } from "./index";
	import { cn } from "$lib/utils";

	let { class: className, ...rest }: Props = $props();
</script>

<svg xml:space="preserve" viewBox="0 0 2400 2800" class={cn("size-4", className)} {...rest}
	><path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z" /><g fill="#9146ff"
		><path
			d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"
		/><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z" /></g
	></svg
>
