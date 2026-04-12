<script lang="ts">
	import { Backlight } from "$lib/components/magic/backlight";
</script>

<div class="flex min-h-100 w-full items-center justify-center">
	<Backlight blur={40} class="w-full">
		<iframe
			class="mx-auto aspect-video w-full max-w-lg rounded-2xl"
			src="https://www.youtube.com/embed/B2MhkPtBWs4?si=EFiavzs7uNWyfYby"
			title="The Complete Svelte 5 Course"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		></iframe>
	</Backlight>
</div>
