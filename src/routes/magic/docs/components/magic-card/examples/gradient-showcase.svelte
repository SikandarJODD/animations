<script>
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
</script>

<div class="flex flex-col gap-6 sm:flex-row">
	<MagicCard
		gradientSize={200}
		gradientColor="#4338CA"
		gradientOpacity={0.6}
		gradientFrom="#6366F1"
		gradientTo="#8B5CF6"
		class="flex h-48 w-full cursor-pointer flex-col items-center justify-center p-6 text-center whitespace-nowrap sm:w-64"
	>
		<h3 class="text-xl font-bold">Purple Gradient</h3>
		<p class="text-muted-foreground mt-2 text-sm">Hover to see the magic</p>
	</MagicCard>

	<MagicCard
		gradientSize={200}
		gradientColor="#059669"
		gradientOpacity={0.6}
		gradientFrom="#10B981"
		gradientTo="#34D399"
		class="flex h-48 w-full cursor-pointer flex-col items-center justify-center p-6 text-center whitespace-nowrap sm:w-64"
	>
		<h3 class="text-xl font-bold">Green Gradient</h3>
		<p class="text-muted-foreground mt-2 text-sm">Hover to see the magic</p>
	</MagicCard>

	<MagicCard
		gradientSize={200}
		gradientColor="#DC2626"
		gradientOpacity={0.6}
		gradientFrom="#EF4444"
		gradientTo="#F97316"
		class="flex h-48 w-full cursor-pointer flex-col items-center justify-center p-6 text-center whitespace-nowrap sm:w-64"
	>
		<h3 class="text-xl font-bold">Red Gradient</h3>
		<p class="text-muted-foreground mt-2 text-sm">Hover to see the magic</p>
	</MagicCard>
</div>
