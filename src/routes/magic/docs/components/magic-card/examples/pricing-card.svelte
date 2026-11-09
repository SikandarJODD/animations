<script>
	import { MagicCard } from "#lib/components/magic/magic-card/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import { mode } from "mode-watcher";
</script>

<div class="flex flex-col gap-6 sm:flex-row">
	<MagicCard
		gradientSize={160}
		gradientColor={mode.current === "dark" ? "#262626" : "#D9D9D955"}
		class="flex w-full cursor-pointer flex-col p-0 sm:w-80"
	>
		<div class="flex flex-col gap-4 p-6">
			<div>
				<h3 class="text-2xl font-bold">Free</h3>
				<p class="text-muted-foreground mt-1 text-sm">Perfect for getting started</p>
			</div>
			<div class="flex items-baseline">
				<span class="text-4xl font-bold">$0</span>
				<span class="text-muted-foreground ml-2 text-sm">/month</span>
			</div>
			<ul class="space-y-2 text-sm">
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Up to 10 projects</span>
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Basic support</span>
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Community access</span>
				</li>
			</ul>
			<Button variant="outline" class="w-full">Get Started</Button>
		</div>
	</MagicCard>

	<MagicCard
		gradientSize={160}
		gradientColor="#4338CA"
		gradientOpacity={0.6}
		gradientFrom="#6366F1"
		gradientTo="#8B5CF6"
		class="flex w-full cursor-pointer flex-col p-0 sm:w-80"
	>
		<div class="flex flex-col gap-4 p-6">
			<div>
				<h3 class="text-2xl font-bold">Pro</h3>
				<p class="text-muted-foreground mt-1 text-sm">For professional developers</p>
			</div>
			<div class="flex items-baseline">
				<span class="text-4xl font-bold">$29</span>
				<span class="text-muted-foreground ml-2 text-sm">/month</span>
			</div>
			<ul class="space-y-2 text-sm">
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Unlimited projects</span>
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Priority support</span>
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Advanced analytics</span>
				</li>
				<li class="flex items-center gap-2">
					<span class="text-green-500">✓</span>
					<span>Custom integrations</span>
				</li>
			</ul>
			<Button class="w-full">Upgrade Now</Button>
		</div>
	</MagicCard>
</div>
