<script lang="ts">
	import * as Sheet from "$lib/components/ui/sheet";
	import { Badge } from "$lib/components/ui/badge";
	import { ArrowUpRightIcon, PackageIcon, PanelLeftIcon } from "@lucide/svelte";
	import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
	import HistoryIcon from "@lucide/svelte/icons/history";
	import HomeIcon from "@lucide/svelte/icons/home";
	import { magicUISidebarGroups } from "$lib/components/docs/registry/magic-ui";
	import { spellUIComponents } from "$lib/components/docs/registry/spell_ui";
	import { fancyUIComponents } from "$lib/components/docs/registry/fancy_ui";
	import { Separator } from "$lib/components/ui/separator";
	import { page } from "$app/state";
	import GitHubIcon from "$lib/components/icons/github.svelte";

	let { open = $bindable(false) } = $props();

	type MobileNavItem = {
		href: string;
		label: string;
		description?: string;
		badge?: string;
	};

	type ProjectItem = {
		title: string;
		description: string;
		url: string;
		github: string;
		slug: string;
		accent?: "amber";
	};

	const getStartedItems: MobileNavItem[] = [
		{
			href: "/magic",
			label: "Overview",
			description: "Main landing page for Svelte Magic UI",
		},
		{
			href: "/magic/docs",
			label: "Introduction",
			description: "Get started with Magic UI components",
		},
		{
			href: "/magic/docs/installation",
			label: "Installation",
			description: "How to install and set up",
		},
	];

	const magicSections = magicUISidebarGroups.map((group) => ({
		title: group.title,
		items: group.items.map((component) => ({
			href: component.href,
			label: component.name,
			description: component.desc,
			badge: component.badge,
		})) as MobileNavItem[],
	}));

	const spellItems: MobileNavItem[] = spellUIComponents.map((component) => ({
		href: component.href,
		label: component.name,
		description: component.desc,
		badge: component.badge,
	}));

	const fancyItems: MobileNavItem[] = fancyUIComponents.map((component) => ({
		href: component.href,
		label: component.name,
		description: component.desc,
		badge: component.badge,
	}));

	const projectItems: ProjectItem[] = [
		{
			title: "Svelte Marketing Blocks",
			description: "Reusable marketing and landing-page blocks.",
			url: "https://sv-blocks.vercel.app/",
			github: "https://github.com/SikandarJODD/cnblocks",
			slug: "svelte-marketing-blocks",
		},
		{
			title: "Svelte Quality Marketing Blocks",
			description: "Polished blocks for high-quality Svelte sites.",
			url: "https://sv-efferd.pages.dev/",
			github: "https://github.com/SikandarJODD/sv-efferd",
			slug: "svelte-quality-marketing-blocks",
		},
		{
			title: "Svelte AI Elements",
			description: "Composable elements for AI interfaces.",
			url: "https://svelte-ai-elements.vercel.app/",
			github: "https://github.com/SikandarJODD/ai-elements",
			slug: "svelte-ai-elements",
		},
		{
			title: "Svelte Particles",
			description: "Interactive particle effects and examples.",
			url: "https://sv-particles.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-particles",
			slug: "svelte-particles",
		},
		{
			title: "Svelte Data Table Components & Examples",
			description: "Data table components and practical examples.",
			url: "https://sv-table.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-table",
			slug: "svelte-data-table",
		},
		{
			title: "Svelte Globe Examples",
			description: "Interactive globe examples and experiments.",
			url: "https://sv-globe.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-globe",
			slug: "svelte-globe",
		},
		{
			title: "Svelte Dot Matrix Loaders",
			description: "Customizable dot-matrix loading animations.",
			url: "https://sv-matrix.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-matrix",
			slug: "svelte-dot-matrix-loaders",
		},
		{
			title: "Svelte Agentation",
			description: "Visual feedback and annotation tools for AI coding agents.",
			url: "https://sv-agentation.com/",
			github: "https://github.com/SikandarJODD/sv-agentation",
			slug: "svelte-agentation",
			accent: "amber",
		},
	];

	function withUtm(url: string, content: string) {
		const params = new URLSearchParams({
			utm_source: "sv-animations",
			utm_medium: "referral",
			utm_campaign: "other-projects",
			utm_content: content,
		});

		return `${url}?${params.toString()}`;
	}

	const hasSpellUIUpdates = spellItems.some((item) => item.badge === "New");
	const hasFancyUIUpdates = fancyItems.some((item) => item.badge === "New");

	function isActive(href: string) {
		const pathname = page.url.pathname;
		return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
	}

	function isSectionOpen(items: MobileNavItem[]) {
		return items.some((item) => isActive(item.href));
	}

	function handleLinkClick() {
		open = false;
	}

	const sections = [
		{ title: "Get Started", items: getStartedItems, open: true, badge: undefined },
		...magicSections.map((section) => ({
			...section,
			open: isSectionOpen(section.items),
			badge: undefined,
		})),
		{
			title: "Svelte Spell UI",
			items: spellItems,
			open: isSectionOpen(spellItems),
			badge: hasSpellUIUpdates ? "New" : undefined,
		},
		{
			title: "Svelte Fancy Components",
			items: fancyItems,
			open: isSectionOpen(fancyItems),
			badge: hasFancyUIUpdates ? "New" : undefined,
		},
	];
</script>

<Sheet.Root bind:open>
	<Sheet.Overlay class="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm " />
	<Sheet.Trigger
		class="hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors lg:hidden"
	>
		<PanelLeftIcon class="size-5" />
	</Sheet.Trigger>
	<Sheet.Content side="left" class="flex w-75 flex-col p-0 sm:w-100">
		<!-- Fixed Header -->
		<Sheet.Header class="border-b px-6 py-4">
			<Sheet.Title class="text-lg font-medium">Svelte Animations</Sheet.Title>
		</Sheet.Header>

		<div class="flex-1 overflow-y-auto px-2 pb-4">
			<div class="mb-4 pt-2">
				<a
					href="/"
					onclick={handleLinkClick}
					class="text-muted-foreground hover:text-primary block rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive(
						'/'
					)
						? 'bg-accent text-accent-foreground'
						: 'hover:bg-accent/50'}"
				>
					<div class="flex items-center gap-2">
						<HomeIcon class="size-4 shrink-0" />
						<span>Home</span>
					</div>
				</a>
				<a
					href="/changelog"
					onclick={handleLinkClick}
					class="text-muted-foreground hover:text-primary block rounded-md px-3 py-2 text-sm font-medium transition-colors {isActive(
						'/changelog'
					)
						? 'bg-accent text-accent-foreground'
						: 'hover:bg-accent/50'}"
				>
					<div class="flex items-center gap-2">
						<HistoryIcon class="size-4 shrink-0" />
						<span>Changelog</span>
					</div>
				</a>
			</div>

			<Separator class="my-4" />
			<div class="space-y-2">
				{#each sections as section (section.title)}
					<details
						class="group border-border overflow-hidden rounded-lg border"
						open={section.open}
					>
						<summary
							class="hover:bg-accent/50 flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium"
						>
							<div class="flex items-center gap-2">
								<span>{section.title}</span>
								{#if section.badge}
									<Badge
										variant="secondary"
										class="bg-primary/10 text-primary hover:bg-primary/20 h-5 px-1.5 text-[10px] font-semibold tracking-[0.12em] uppercase"
									>
										{section.badge}
									</Badge>
								{/if}
							</div>
							<ChevronDownIcon
								class="text-muted-foreground size-4 transition-transform group-open:rotate-180"
							/>
						</summary>
						<div class="space-y-1 px-2 pb-2">
							{#each section.items as item (item.href)}
								<a
									href={item.href}
									onclick={handleLinkClick}
									class="block rounded-md px-3 py-2 text-sm transition-colors {isActive(
										item.href
									)
										? 'bg-accent text-accent-foreground font-medium'
										: 'text-muted-foreground hover:text-primary hover:bg-accent/50'}"
								>
									<div class="flex items-start justify-between gap-2">
										<div class="space-y-1">
											<div class="font-medium">{item.label}</div>
											{#if item.description}
												<div
													class="text-muted-foreground/60 line-clamp-2 text-xs"
												>
													{item.description}
												</div>
											{/if}
										</div>
										{#if item.badge}
											<Badge
												variant="secondary"
												class="bg-primary/10 text-primary hover:bg-primary/20 mt-0.5 h-5 shrink-0 px-1.5 text-xs font-medium"
											>
												{item.badge}
											</Badge>
										{/if}
									</div>
								</a>
							{/each}
						</div>
					</details>
				{/each}
				<details class="group border-border overflow-hidden rounded-lg border">
					<summary
						class="hover:bg-accent/50 flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium"
					>
						<span>Other Projects</span>
						<ChevronDownIcon
							class="text-muted-foreground size-4 transition-transform group-open:rotate-180"
						/>
					</summary>
					<div class="space-y-0.5 px-2 pb-2">
						{#each projectItems as project (project.url)}
							<div
								class="hover:bg-accent/50 focus-within:bg-accent/50 group/project-card relative flex items-start gap-1 rounded-md px-2 py-2 transition-colors"
							>
								<a
									href={withUtm(project.url, `mobile-navbar-${project.slug}`)}
									target="_blank"
									rel="noopener noreferrer"
									onclick={handleLinkClick}
									class="min-w-0 flex-1 rounded-sm outline-none"
								>
									<div
										class="text-foreground flex items-center gap-1.5 text-xs font-medium leading-snug"
									>
										<span>{project.title}</span>
										{#if project.accent === "amber"}
											<PackageIcon
												aria-label="Library"
												class="size-3 shrink-0 text-amber-500"
											/>
										{/if}
									</div>
									<div
										class="text-muted-foreground/70 mt-0.5 line-clamp-2 text-[11px] leading-snug"
									>
										{project.description}
									</div>
								</a>
								<a
									href={withUtm(
										project.github,
										`mobile-navbar-${project.slug}-github`
									)}
									target="_blank"
									rel="noopener noreferrer"
									onclick={handleLinkClick}
									aria-label={`View ${project.title} on GitHub`}
									class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 shrink-0 rounded-sm p-1.5 outline-none transition-colors focus-visible:ring-[3px]"
								>
									<GitHubIcon class="size-3" />
								</a>
								<span
									aria-hidden="true"
									class="bg-muted text-muted-foreground pointer-events-none absolute right-1.5 bottom-1.5 rounded-md p-1 opacity-0 shadow-xs transition-opacity duration-200 group-hover/project-card:opacity-100"
								>
									<ArrowUpRightIcon class="size-3" />
								</span>
							</div>
						{/each}
					</div>
					<div
						class="text-muted-foreground flex items-center justify-center gap-1.5 border-t px-3 py-2.5 text-[11px]"
					>
						<span>Built by</span>
						<a
							href={withUtm("https://bhide.dev", "mobile-navbar-owner")}
							target="_blank"
							rel="noopener noreferrer"
							onclick={handleLinkClick}
							class="text-foreground hover:text-primary focus-visible:ring-ring/50 inline-flex items-center gap-1.5 rounded-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
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
				</details>
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
