<script lang="ts">
	import { AnimatedList } from "#lib/components/magic/animated-list/index.js";
	import { cn } from "#lib/utils.js";
	import Notification from "./notification.svelte";

	interface NotificationItem {
		name: string;
		description: string;
		icon: string;
		color: string;
		time: string;
		id: number;
	}

	interface AnimatedListDemoProps {
		class?: string;
	}

	let { class: className }: AnimatedListDemoProps = $props();

	let baseNotifications = [
		{
			name: "Payment received",
			description: "Magic UI",
			time: "15m ago",
			icon: "💸",
			color: "#00C9A7",
		},
		{
			name: "User signed up",
			description: "Magic UI",
			time: "10m ago",
			icon: "👤",
			color: "#FFB800",
		},
		{
			name: "New message",
			description: "Magic UI",
			time: "5m ago",
			icon: "💬",
			color: "#FF3D71",
		},
		{
			name: "New event",
			description: "Magic UI",
			time: "2m ago",
			icon: "🗞️",
			color: "#1E86FF",
		},
	];

	// Create 10 copies of the notifications with unique IDs
	let notifications: NotificationItem[] = Array.from({ length: 10 }, (_, i) =>
		baseNotifications.map((notif, j) => ({
			...notif,
			id: i * baseNotifications.length + j,
		}))
	).flat();
</script>

<div class={cn("relative flex h-125 w-full flex-col overflow-hidden p-2", className)}>
	<AnimatedList items={notifications}>
		{#snippet children(item, i)}
			<Notification {...item} />
		{/snippet}
	</AnimatedList>

	<div
		class="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"
	></div>
</div>
