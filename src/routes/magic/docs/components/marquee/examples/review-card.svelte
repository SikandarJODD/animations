<script lang="ts">
	import { cn } from "#lib/utils.ts";
	let {
		img,
		name,
		username,
		body,
	}: {
		img: string;
		name: string;
		username: string;
		body: string;
	} = $props();
</script>

<figure
	class={cn(
		"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
		// light styles
		"border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
		// dark styles
		"dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
	)}
>
	<div class="flex flex-row items-center gap-2">
		<img class="rounded-full" width="32" height="32" alt="" src={img} />
		<div class="flex flex-col">
			<figure>
				<figcaption class="text-sm font-medium dark:text-white">
					{name}
				</figcaption>
			</figure>
			<p class="text-xs font-medium dark:text-white/40">{username}</p>
		</div>
	</div>
	<blockquote class="mt-2 text-sm">{body}</blockquote>
</figure>
