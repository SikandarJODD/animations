<script lang="ts">
	import { Marquee } from "#lib/components/spell/marquee/index.js";
	import { cn } from "#lib/utils.ts";

	const notifications = [
		{ text: "New message received", time: "2 min ago", type: "info" },
		{ text: "Upload completed", time: "5 min ago", type: "success" },
		{ text: "Meeting starting soon", time: "10 min ago", type: "warning" },
		{ text: "Task completed", time: "15 min ago", type: "success" },
		{ text: "New follower", time: "20 min ago", type: "info" },
		{ text: "System update available", time: "30 min ago", type: "warning" },
	];
</script>

<div class="h-75">
	<Marquee direction="up" class="h-full">
		{#each notifications as notification, index}
			<div class="bg-card mx-4 my-2 flex items-center gap-3 rounded-md border p-3">
				<div
					class={cn(
						"h-2 w-2 rounded-full",
						notification.type === "success" && "bg-green-500",
						notification.type === "warning" && "bg-yellow-500",
						notification.type === "info" && "bg-blue-500"
					)}
				></div>
				<div class="flex-1">
					<p class="text-sm font-medium">{notification.text}</p>
					<p class="text-muted-foreground text-xs">
						{notification.time}
					</p>
				</div>
			</div>
		{/each}
	</Marquee>
</div>
