<script>
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
	import { mode } from "mode-watcher";

	const features = [
		{
			title: "Fast Performance",
			description: "Lightning-fast load times and optimal rendering.",
			icon: "⚡",
		},
		{
			title: "Responsive Design",
			description: "Looks great on all devices and screen sizes.",
			icon: "📱",
		},
		{
			title: "Easy to Use",
			description: "Intuitive interface that anyone can master.",
			icon: "🎯",
		},
		{
			title: "Secure",
			description: "Enterprise-grade security for your peace of mind.",
			icon: "🔒",
		},
	];
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each features as feature}
		<MagicCard
			gradientSize={180}
			gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
			class="flex cursor-pointer flex-col p-6"
		>
			<div class="mb-3 text-4xl">{feature.icon}</div>
			<h3 class="mb-2 text-lg font-semibold">{feature.title}</h3>
			<p class="text-muted-foreground text-sm">{feature.description}</p>
		</MagicCard>
	{/each}
</div>
