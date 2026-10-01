<script lang="ts">
	import { github_repo } from "$lib/config/repo";
	import { seo_config } from "$lib/config/seo";

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative">
	<div
		class="flex flex-col items-center justify-center gap-1 px-4 py-3 text-center text-xs text-muted-foreground sm:flex-row sm:gap-2"
	>
		<p>&copy; {currentYear} {seo_config.title}.</p>
		<p class="flex items-center justify-center gap-1">
			<span>Built by</span>
			<a
				class="inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-muted-foreground"
				href={github_repo.url}
				rel="noreferrer"
				target="_blank"
			>
				<img
					alt="Bhide Svelte avatar"
					class="size-5 rounded-full border border-border/80 object-cover"
					height="20"
					src="https://avatars.githubusercontent.com/u/93428946?v=4"
					width="20"
				/>
				Bhide Svelte
			</a>
		</p>
	</div>
</footer>
