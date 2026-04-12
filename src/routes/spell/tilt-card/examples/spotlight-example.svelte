<script lang="ts">
	import { TiltCard } from "$lib/components/spell/tilt-card";
</script>

<div class="flex items-center justify-center gap-6 py-12">
	<TiltCard
		class="flex h-40 w-64 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 font-semibold text-white shadow-xl"
		spotlight={true}
	>
		With Spotlight
	</TiltCard>
	<TiltCard
		class="flex h-40 w-64 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 font-semibold text-white shadow-xl"
		spotlight={false}
	>
		No Spotlight
	</TiltCard>
</div>
