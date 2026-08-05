<script lang="ts">
	import BugIcon from "@lucide/svelte/icons/bug";
	import LightbulbIcon from "@lucide/svelte/icons/lightbulb";
	let { class: className = "" }: { class?: string } = $props();

	const githubBase = "https://github.com/SikandarJODD/animations";
</script>

<div class={`border-border/60 mt-4 border-t pt-2.5 ${className}`}>
	<h2 class="text-xs font-medium">Contribute</h2>

	<nav class="mt-3">
		<ul class="space-y-1.5">
			<li>
				<a
					class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2.5 text-xs transition-colors"
					href={`${githubBase}/issues/new?template=bug_report.md`}
					target="_blank"
					rel="noreferrer"
				>
					<BugIcon class="size-3.5 shrink-0" />
					<span>Report an issue</span>
				</a>
			</li>
			<li>
				<a
					class="text-muted-foreground hover:text-foreground inline-flex items-center gap-2.5 text-xs transition-colors"
					href={`${githubBase}/issues/new?template=feature_request.md`}
					target="_blank"
					rel="noreferrer"
				>
					<LightbulbIcon class="size-3.5 shrink-0" />
					<span>Request a feature</span>
				</a>
			</li>
		</ul>
	</nav>
</div>
