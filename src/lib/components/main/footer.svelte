<script lang="ts">
	import { github_repo } from "#lib/config/repo.js";
	import { seo_config } from "#lib/config/seo.js";

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative">
	<div
		class="text-muted-foreground flex flex-col items-center justify-center gap-1 px-4 py-3 text-center text-xs sm:flex-row sm:gap-2"
	>
		<p>&copy; {currentYear} {seo_config.title}.</p>
		<p class="flex items-center justify-center gap-1">
			<span>Built by</span>
			<a
				class="text-foreground hover:text-muted-foreground inline-flex items-center gap-1.5 font-medium transition-colors"
				href="https://bhide.dev?utm_source=animations&utm_medium=footer"
				rel="noreferrer"
				target="_blank"
			>
				<img
					alt="Bhide Svelte avatar"
					class="border-border/80 size-5 rounded-full border object-cover"
					height="20"
					src="https://avatars.githubusercontent.com/u/93428946?v=4"
					width="20"
				/>
				Bhide Svelte
			</a>
		</p>
	</div>
</footer>
