<script lang="ts">
	import { SpotifyCard } from "#lib/components/spell/spotify-card/index.js";
</script>

<div class="bg-card mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-3xl border p-6 shadow-sm">
	<div class="space-y-1">
		<h3 class="text-sm font-medium tracking-tight">Featured listen</h3>
		<p class="text-muted-foreground text-sm">
			Drop the card into a narrower column or media shelf by constraining its width with
			utility classes.
		</p>
	</div>

	<div class="max-w-[360px]">
		<SpotifyCard url="https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b" class="w-full" />
	</div>
</div>
