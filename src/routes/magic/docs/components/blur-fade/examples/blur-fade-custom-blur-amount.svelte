<script lang="ts">
	import { BlurFade } from "#lib/components/magic/blur-fade/index.js";
</script>

<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
	<BlurFade blur="2px" delay={0}>
		<div class="rounded-lg border p-6">
			<h4 class="font-semibold text-black dark:text-white">Light Blur</h4>
			<p class="text-sm text-slate-600 dark:text-slate-300">blur="2px"</p>
		</div>
	</BlurFade>
	<BlurFade blur="6px" delay={0.1}>
		<div class="rounded-lg border p-6">
			<h4 class="font-semibold text-black dark:text-white">Medium Blur</h4>
			<p class="text-sm text-slate-600 dark:text-slate-300">blur="6px" (default)</p>
		</div>
	</BlurFade>
	<BlurFade blur="12px" delay={0.2}>
		<div class="rounded-lg border p-6">
			<h4 class="font-semibold text-black dark:text-white">Heavy Blur</h4>
			<p class="text-sm text-slate-600 dark:text-slate-300">blur="12px"</p>
		</div>
	</BlurFade>
</div>
