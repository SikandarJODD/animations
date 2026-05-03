<script lang="ts">
	import { NumberTicker } from "$lib/components/magic/number-ticker";
</script>

<NumberTicker
	value={100.50}
	decimalPlaces={2}
	startValue={70}
  prefix="$"
  suffix="USD"
	class="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
/>
