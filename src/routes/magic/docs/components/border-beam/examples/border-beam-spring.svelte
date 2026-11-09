<script lang="ts">
	import { BorderBeam } from "#lib/components/magic/border-beam/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
</script>

<Button class="relative overflow-hidden" size="lg" variant="outline">
	Buy Now
	<BorderBeam
		size={40}
		initialOffset={20}
		class="from-transparent via-yellow-500 to-transparent"
		transition={{
			type: "spring",
			stiffness: 60,
			damping: 20,
		}}
	/>
</Button>
