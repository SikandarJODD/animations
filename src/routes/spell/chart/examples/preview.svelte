<script lang="ts">
	import { Chart } from "$lib/components/spell/chart";

	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const revenue = [12400, 18200, 15600, 24100, 22800, 31500, 28900, 36200, 43800, 38400, 49100, 57600];
</script>

<div class="w-full max-w-2xl px-4">
	<Chart
		data={revenue}
		labels={months}
		name="Revenue"
		formatValue={(v) => `$${(v / 1000).toFixed(1)}k`}
	/>
</div>
