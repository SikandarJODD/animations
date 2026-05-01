<script lang="ts">
	import { Chart } from "$lib/components/spell/chart";

	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const data = [8, 14, 11, 19, 17, 25, 22, 30, 27, 34, 31, 40];
</script>

<div class="w-full max-w-2xl px-4">
	<Chart {data} labels={months} name="Growth" color="#10b981" />
</div>
