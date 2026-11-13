<script lang="ts">
	import { Lens } from "#lib/components/magic/lens/index.js";
</script>

<figure class="w-full max-w-lg">
	<Lens
		duration={0}
		zoomFactor={1.5}
		lensSize={100}
		ariaLabel="inspect request flow labels"
		class="rounded-lg border"
	>
		<svg
			viewBox="0 0 500 200"
			class="bg-background block h-auto w-full"
			role="img"
			aria-label="a browser sends a request to a router, which reads from the cache on a hit or the origin on a miss"
		>
			<g fill="none" stroke="var(--color-sky-500)" stroke-width="1">
				<path d="M120 100H180 M270 100H315V60H380 M315 100V140H380" />
			</g>
			<g fill="var(--background)" stroke="var(--border)">
				<rect x="20" y="80" width="100" height="40" rx="6" />
				<rect x="180" y="80" width="90" height="40" rx="6" />
				<rect x="380" y="40" width="100" height="40" rx="6" />
				<rect x="380" y="120" width="100" height="40" rx="6" />
			</g>
			<g
				fill="var(--foreground)"
				text-anchor="middle"
				dominant-baseline="middle"
				font-size="12"
				font-family="monospace"
			>
				<text x="70" y="100">browser</text>
				<text x="225" y="100">router</text>
				<text x="430" y="60">cache</text>
				<text x="430" y="140">origin</text>
			</g>
			<g
				fill="var(--color-sky-600)"
				class="dark:fill-sky-400"
				text-anchor="middle"
				font-size="9"
				font-family="monospace"
			>
				<text x="150" y="90">request</text>
				<text x="347" y="50">hit</text>
				<text x="347" y="130">miss</text>
			</g>
		</svg>
	</Lens>
	<figcaption class="text-muted-foreground mt-3 text-sm">
		hover to inspect the request path
	</figcaption>
</figure>
