<script lang="ts">
	import { DiaTextReveal } from "$lib/components/magic/dia-text-reveal";
</script>

<div class="text-foreground flex min-h-80 items-center justify-center">
	<h1 class="text-center text-3xl font-semibold tracking-tight md:text-4xl">
		Learn to{" "}
		<DiaTextReveal
			repeat
			repeatDelay={1.2}
			text={["build faster", "ship smarter", "scale easier"]}
		/>
	</h1>
</div>
