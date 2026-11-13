<script lang="ts">
	import { Backlight } from "#lib/components/magic/backlight/index.js";
</script>

<div class="flex min-h-100 w-full items-center justify-center">
	<div class="relative isolate w-full max-w-lg">
		<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
			<Backlight blur={40} class="w-full">
				<img
					class="aspect-video w-full rounded-2xl object-cover"
					src="https://i.ytimg.com/vi/B2MhkPtBWs4/hqdefault.jpg"
					alt=""
				/>
			</Backlight>
		</div>
		<iframe
			class="aspect-video w-full rounded-2xl"
			src="https://www.youtube.com/embed/B2MhkPtBWs4?si=EFiavzs7uNWyfYby"
			title="The Complete Svelte 5 Course"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
		></iframe>
	</div>
</div>
