<script lang="ts">
	import { PulsatingButton } from "$lib/components/magic/pulsating-button";
</script>

<div class="flex justify-center">
	<div class="space-y-5 text-center">
		<p class="text-muted-foreground text-sm">Minimal Cyan Example</p>

		<!-- add any olkch colors: https://oklch.com -->
		<PulsatingButton
			variant="ripple"
			pulseColor="oklch(0.5794 0.1549 196.52 / 85.28%)"
			class="bg-cyan-500 font-mono font-medium"
			duration="2.4s"
			distance="10px"
		>
			Play Now
		</PulsatingButton>
	</div>
</div>
