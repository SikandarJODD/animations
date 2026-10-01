<script lang="ts">
	import * as NavigationMenu from "$lib/components/ui/navigation-menu/index";
	import { ArrowUpRightIcon, PackageIcon } from "@lucide/svelte";
	import LinkItem from "./link-item.svelte";
	import { navs, projectItems, withUtm } from "./nav-links";
	import Github from "$icons/github.svelte";
</script>

<NavigationMenu.Root class="hidden md:flex">
	<NavigationMenu.List class="gap-0.5">
		{#each navs as nav}
			{#if nav.sub}
				<NavigationMenu.Item>
					<NavigationMenu.Trigger class="hover:bg-accent/60! h-fit rounded-full py-1.5!"
						>{nav.name}</NavigationMenu.Trigger
					>
					<NavigationMenu.Content class="p-0">
						<div class="bg-popover grid w-sm grid-cols-1 gap-1 p-1 shadow">
							{#each nav.sub as item (item.href)}
								<NavigationMenu.Link class="rounded-lg!">
									<LinkItem {...item} />
								</NavigationMenu.Link>
							{/each}
						</div>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
			{:else}
				<NavigationMenu.Item>
					<NavigationMenu.Link class="hover:bg-accent! rounded-full px-3 py-1.5">
						{#snippet child({ props })}
							<a href={nav.href} {...props}>{nav.name}</a>
						{/snippet}
					</NavigationMenu.Link>
				</NavigationMenu.Item>
			{/if}
		{/each}
		<NavigationMenu.Item id="other-projects">
			<NavigationMenu.Trigger
				class="hover:bg-accent/80! h-fit rounded-full py-1.5! pr-2.5 pl-3 font-normal"
				>Other Projects</NavigationMenu.Trigger
			>
			<NavigationMenu.Content class="p-0!">
				<div class="w-2xl">
					<ul class="grid grid-cols-2 gap-1 p-1">
						{#each projectItems as project (project.url)}
							<li
								class="group/project-card focus-within:bg-accent hover:bg-accent relative flex min-w-0 items-start gap-2 rounded-md p-2.5 transition-colors"
							>
								<a
									href={withUtm(project.url, `navbar-${project.slug}`)}
									target="_blank"
									rel="noopener noreferrer"
									class="min-w-0 flex-1 rounded-sm outline-none"
								>
									<div
										class="flex items-center gap-1.5 text-sm leading-none font-medium"
									>
										<span class="truncate">{project.title}</span>
										{#if project.accent === "amber"}
											<PackageIcon
												aria-label="Library"
												class="size-3 shrink-0 text-amber-500"
											/>
										{/if}
									</div>
									<p
										class="text-muted-foreground mt-1 line-clamp-2 text-xs leading-snug"
									>
										{project.description}
									</p>
								</a>
								<a
									href={withUtm(project.github, `navbar-${project.slug}-github`)}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} on GitHub`}
									class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 -mt-0.5 shrink-0 rounded-sm p-1 transition-colors outline-none focus-visible:ring-[3px]"
								>
									<Github class="size-3" />
								</a>
								<span
									aria-hidden="true"
									class="bg-muted text-muted-foreground pointer-events-none absolute right-2 bottom-2 translate-y-1 rounded-md p-1 opacity-0 shadow-xs transition-all duration-200 group-hover/project-card:translate-y-0 group-hover/project-card:opacity-100"
								>
									<ArrowUpRightIcon class="size-3" />
								</span>
							</li>
						{/each}
					</ul>
					<div
						class="text-muted-foreground flex h-11 items-center justify-center gap-1.5 border-t px-3 text-xs"
					>
						<span>Built by</span>
						<a
							href={withUtm("https://bhide.dev", "navbar-owner")}
							target="_blank"
							rel="noopener noreferrer"
							class="text-foreground hover:text-primary focus-visible:ring-ring/50 inline-flex items-center gap-1.5 rounded-sm font-medium transition-colors outline-none focus-visible:ring-[3px]"
						>
							<img
								src="https://github.com/SikandarJODD.png"
								alt=""
								width="16"
								height="16"
								class="size-4 rounded-full"
							/>
							Bhide Svelte
						</a>
					</div>
				</div>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
	<NavigationMenu.Viewport />
</NavigationMenu.Root>
