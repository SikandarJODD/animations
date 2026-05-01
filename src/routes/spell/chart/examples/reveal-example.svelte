<script lang="ts">
	import { Chart } from "$lib/components/spell/chart";

	const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"];
	const data = [42, 38, 51, 47, 63, 58, 71, 66, 80, 75, 88, 95];
</script>

<div class="w-full max-w-2xl px-4">
	<Chart {data} labels={weeks} name="Score" reveal />
</div>
