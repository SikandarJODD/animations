<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Accordion from "$lib/components/ui/accordion";
	import { LightSwitch } from "$lib/components/ui/light-switch";
	import { Portal, PortalBackdrop } from "$lib/components/ui/portal";
	import { ScrollFadeEffect } from "$lib/components/ui/scroll-area";
	import { github_repo } from "$lib/config/repo";
	import { GitHub, Twitter } from "$lib/components/icons";
	import { cn } from "$lib/utils";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import XIcon from "@lucide/svelte/icons/x";
	import { magicUIComponents } from "$lib/components/docs/registry/magic-ui";
	import { spellUIComponents } from "$lib/components/docs/registry/spell_ui";
	import { fancyUIComponents } from "$lib/components/docs/registry/fancy_ui";
	import { projectItems, withUtm } from "./nav-links";

	let open = $state(false);

	const linkClass =
		"rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

	const componentSections = [
		{
			name: "Svelte Magic UI",
			items: magicUIComponents,
		},
		{
			name: "Svelte Spell UI",
			items: spellUIComponents,
		},
		{
			name: "Svelte Fancy Components",
			items: fancyUIComponents,
		},
	];
</script>

<div class="flex items-center gap-1 md:hidden">
	<LightSwitch />
	<Button
		aria-controls="mobile-menu"
		aria-expanded={open}
		aria-label="Toggle menu"
		class="md:hidden"
		onclick={() => (open = !open)}
		size="icon-sm"
		variant="secondary"
	>
		<div class={cn("transition-all", open ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
			<XIcon />
		</div>
		<div
			class={cn(
				"absolute transition-all",
				open ? "scale-0 opacity-0" : "scale-100 opacity-100"
			)}
		>
			<MenuIcon />
		</div>
	</Button>

	{#if open}
		<Portal class="top-10">
			<PortalBackdrop class="bg-background! backdrop-blur-none duration-200" />
			<div
				id="mobile-menu"
				class={cn(
					"flex size-full min-h-0 flex-col p-4"
					// "ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97"
				)}
				data-slot={open ? "open" : "closed"}
			>
				<ScrollFadeEffect class="min-h-0 flex-1">
					<nav class="flex flex-col gap-1 pb-4">
						<a class={linkClass} href="/" onclick={() => (open = false)}> Home </a>

						<Accordion.Root type="single" class="gap-1">
							{#each componentSections as section (section.name)}
								<Accordion.Item value={section.name} class="not-last:border-b-0">
									<Accordion.Trigger
										class={cn(linkClass, "items-center hover:no-underline")}
									>
										{section.name}
									</Accordion.Trigger>
									<Accordion.Content class="pb-0 pl-4 [&_a]:no-underline">
										<div class="flex flex-col">
											{#each section.items as item (item.href)}
												<a
													class="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
													href={item.href}
													onclick={() => (open = false)}
												>
													{item.name}
												</a>
											{/each}
										</div>
									</Accordion.Content>
								</Accordion.Item>
							{/each}
						</Accordion.Root>

						<a class={linkClass} href="/changelog" onclick={() => (open = false)}>
							Changelog
						</a>

						<div class="flex flex-col gap-1">
							<span class={linkClass}>Other Projects</span>
							<div class="flex flex-col pl-4">
								{#each projectItems as project (project.url)}
									<a
										class="text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:ring-ring rounded-md px-3 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
										href={withUtm(project.url, `mobile-navbar-${project.slug}`)}
										target="_blank"
										rel="noopener noreferrer"
										onclick={() => (open = false)}
									>
										{project.title}
									</a>
								{/each}
							</div>
						</div>
					</nav>
				</ScrollFadeEffect>

				<div class="flex justify-end gap-1 pt-2 pb-4">
					<Button
						aria-label="GitHub"
						href={github_repo.url}
						rel="noopener noreferrer"
						size="icon"
						target="_blank"
						variant="ghost"
					>
						<GitHub class="size-4" />
					</Button>
					<Button
						aria-label="X (Twitter)"
						href="https://x.com/Sikandar_Bhide"
						rel="noopener noreferrer"
						size="icon"
						target="_blank"
						variant="secondary"
					>
						<Twitter class="size-4" />
					</Button>
				</div>
			</div>
		</Portal>
	{/if}
</div>
