<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
	// add any colors: https://oklch.com
	// customize as you like
</script>

<div class="flex flex-wrap items-start justify-center gap-12">
	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Color: Teal</p>
		<PulsatingButton
			pulseColor="oklch(0.6434 0.1 166 / 44.6%)"
			class="bg-teal-500"
			distance="12px"
		>
			Play Now
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Color: Yellow</p>
		<PulsatingButton
			pulseColor="oklch(0.8663 0.153 91.69 / 90%)"
			class="bg-yellow-400 text-yellow-50 dark:text-yellow-950"
			distance="12px"
		>
			Slow and Steady
		</PulsatingButton>
	</div>

	<div class="space-y-6">
		<p class="text-muted-foreground text-sm">Color: Red</p>
		<PulsatingButton
			pulseColor="oklch(0.6434 0.2634 27.11 / 54.6%)"
			class="bg-red-500 text-red-100 "
			distance="12px"
		>
			Aggressive
		</PulsatingButton>
	</div>
</div>
