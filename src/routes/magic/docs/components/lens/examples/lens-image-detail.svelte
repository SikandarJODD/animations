<script lang="ts">
	import { Lens } from "#lib/components/magic/lens/index.js";
</script>

<figure class="w-full max-w-lg">
	<Lens zoomFactor={2} lensSize={180} ariaLabel="inspect mountain detail" class="rounded-lg">
		<img
			src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1000&q=85"
			alt="mountains reflected in a lake"
			width="1000"
			height="667"
			class="aspect-3/2 w-full object-cover"
		/>
	</Lens>
	<figcaption class="text-muted-foreground mt-3 text-sm">
		move over the image to inspect the detail
	</figcaption>
</figure>
