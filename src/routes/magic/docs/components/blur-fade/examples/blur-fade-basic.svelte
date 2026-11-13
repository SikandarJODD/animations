<script lang="ts">
	import { BlurFade } from "#lib/components/magic/blur-fade/index.js";
</script>

<div class="flex flex-col items-center justify-center gap-4 rounded-lg border p-8">
	<BlurFade delay={0}>
		<h3 class="text-3xl font-bold text-black dark:text-white">Welcome to BlurFade</h3>
	</BlurFade>
	<BlurFade delay={0.2}>
		<p class="text-lg text-slate-600 dark:text-slate-300">
			Beautiful blur and fade animations for your content
		</p>
	</BlurFade>
</div>
