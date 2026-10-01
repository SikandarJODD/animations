<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import DesktopNav from "./desktop-nav.svelte";
	import MobileNav from "./mobile-nav.svelte";
	import { GitHubButton, getStars } from "$lib/components/ui/github-button";
	import { onMount } from "svelte";
	import { Twitter } from "$lib/components/icons";
	import { LightSwitch } from "$lib/components/ui/light-switch";
	import { github_repo } from "$lib/config/repo";
	import SearchNavigation from "$lib/components/docs/navigation/DocsSearchNavigation.svelte";

	let stars = $state(github_repo.fallback_stars);
	const repo = { owner: github_repo.owner, repo: "animations" };
	onMount(async () => {
		stars = await getStars({ ...repo, fallback: github_repo.fallback_stars });
	});
</script>

<header
	class="border-border bg-background/95 supports-backdrop-filter:bg-background/50 sticky top-0 z-50 w-full border-b backdrop-blur-sm"
>
	<nav class="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
		<div class="flex items-center gap-5">
			<a class="" href="/"> Svelte Animations </a>
			<DesktopNav />
		</div>
		<div class="flex items-center gap-1">
			<SearchNavigation />
			<div class="hidden items-center gap-1 md:flex">
				<Button
					variant="ghost"
					size="icon"
					target="_blank"
					href="https://x.com/Sikandar_Bhide"
					rel="noopener noreferrer"
				>
					<Twitter class="size-4" />
				</Button>
				<GitHubButton {repo} {stars} target="_blank" />
				<LightSwitch />
			</div>
			<MobileNav />
		</div>
	</nav>
</header>
