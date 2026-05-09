<script lang="ts">
	import { ShimmerText } from "$lib/components/spell/shimmer-text";
</script>

<div class="flex flex-col gap-4 font-medium">
	<ShimmerText duration={0.8} delay={0} repeatDelay={0.5}>Fast shimmer</ShimmerText>
	<ShimmerText duration={2} delay={0} repeatDelay={3}>Slow shimmer with long pause</ShimmerText>
	<ShimmerText duration={1.5} delay={0} repeatDelay={1.5}>Default timing</ShimmerText>
</div>
