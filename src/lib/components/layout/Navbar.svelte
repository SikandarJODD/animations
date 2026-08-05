<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Icons from "$lib/components/icons";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import { type Component } from "svelte";
	import {
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuRoot,
		NavigationMenuTrigger,
	} from "$lib/components/ui/navigation-menu";
	import LightSwitch from "../ui/light-switch/light-switch.svelte";
	import DocsSearchNavigation from "../docs/navigation/DocsSearchNavigation.svelte";
	import MobileNavbarSheet from "./MobileNavbarSheet.svelte";
	import { cn } from "$lib/utils";
	import Badge, { type BadgeVariant } from "../spell/badge/badge.svelte";
	import { PersistedState } from "runed";
	import { scale } from "svelte/transition";
	import { BlocksIcon } from "@lucide/svelte";

	type NavigationItem = {
		href: string;
		title: string;
		description: string;
		icon?: Component;
		badge?: "new" | "beta" | "updated";
		badgeVariant?: BadgeVariant;
	};

	type ProjectItem = {
		title: string;
		description: string;
		url: string;
		github: string;
		slug: string;
	};

	const navigationItems: NavigationItem[] = [
		{
			href: "/magic",
			title: "Svelte Magic UI",
			description: "50+ Animations & Effects for Svelte",
			icon: SparklesIcon,
		},
		{
			href: "/spell",
			title: "Svelte Spell UI",
			description: "Refined UI components for Design Engineers.",
			icon: BookOpenIcon,
		},
		{
			href: "/fancy",
			title: "Svelte Fancy Components",
			description: "Unique, eye-catching components for Svelte.",
			icon: BlocksIcon,
			badge: "new",
			badgeVariant: "lime",
		},
	];

	const projectItems: ProjectItem[] = [
		{
			title: "Svelte Animation",
			description: "A curated collection of animations and effects for Svelte.",
			url: "https://sv-animations.vercel.app/",
			github: "https://github.com/SikandarJODD/animations",
			slug: "svelte-animation",
		},
		{
			title: "Svelte Marketing Blocks",
			description: "Reusable marketing sections and landing-page blocks.",
			url: "https://sv-blocks.vercel.app/",
			github: "https://github.com/SikandarJODD/cnblocks",
			slug: "svelte-marketing-blocks",
		},
		{
			title: "Svelte Quality Marketing Blocks",
			description: "Polished marketing blocks for high-quality Svelte sites.",
			url: "https://sv-efferd.pages.dev/",
			github: "https://github.com/SikandarJODD/sv-efferd",
			slug: "svelte-quality-marketing-blocks",
		},
		{
			title: "Svelte AI Elements",
			description: "Composable Svelte elements for AI product interfaces.",
			url: "https://svelte-ai-elements.vercel.app/",
			github: "https://github.com/SikandarJODD/ai-elements",
			slug: "svelte-ai-elements",
		},
		{
			title: "Svelte Particles",
			description: "Interactive particle effects and examples for Svelte.",
			url: "https://sv-particles.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-particles",
			slug: "svelte-particles",
		},
		{
			title: "Svelte Data Table Components & Examples",
			description: "Data table components, patterns, and practical examples.",
			url: "https://sv-table.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-table",
			slug: "svelte-data-table",
		},
		{
			title: "Svelte Globe Examples",
			description: "Interactive globe examples and visual experiments.",
			url: "https://sv-globe.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-globe",
			slug: "svelte-globe",
		},
		{
			title: "Svelte Dot Matrix Loaders",
			description: "Customizable dot-matrix loading animations for Svelte.",
			url: "https://sv-matrix.vercel.app/",
			github: "https://github.com/SikandarJODD/sv-matrix",
			slug: "svelte-dot-matrix-loaders",
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

	const componentsHasUpdates = navigationItems.some((item) => item.badge === "new");

	function formatBadgeLabel(badge?: NavigationItem["badge"]) {
		return badge === "new"
			? "New"
			: badge === "beta"
				? "Beta"
				: badge === "updated"
					? "Updated"
					: "";
	}
	/*
	// {
		// 	href: "/a/components",
		// 	title: "Svelte Aceternity UI",
		// 	description: "20+ Animations Components",
		// 	icon: ZapIcon,
		// },
		// {
		// 	href: "/luxe/components",
		// 	title: "Svelte Luxe UI",
		// 	description: "20+ Premium Components for Svelte",
		// 	icon: ZapIcon,
		// },
		// {
		// 	href: "/in/components",
		// 	title: "Svelte Indie UI",
		// 	description: "20+ Components for Indie Developers",
		// 	icon: ZapIcon,
		// },
		// {
		// 	href: "/sn/components",
		// 	title: "Svelte Spinner UI",
		// 	description: "20+ Components for Indie Developers",
		// 	icon: ZapIcon,
		// },
	*/

	let isNew = new PersistedState("is_new", true);
	let updateIsNew = () => {
		isNew.current = false;
	};
</script>

<header
	class="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 border-b px-4 backdrop-blur md:px-6"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
		<!-- Left side  -->
		<div class="flex items-center gap-2">
			<!-- Mobile menu trigger  -->
			<MobileNavbarSheet />
			<!-- Main nav  -->
			<div class="flex items-center gap-6">
				<a href="/" class="text-primary hover:text-primary/90"> Svelte Animations </a>
				<NavigationMenuRoot
					class="max-lg:hidden"
					delayDuration={0}
					viewport={false}
					onValueChange={(v) => updateIsNew()}
				>
					<NavigationMenuList>
						<!-- Home Link -->
						<NavigationMenuItem id="home">
							<NavigationMenuLink
								href="/"
								class="text-muted-foreground hover:text-primary focus:text-primary data-active:bg-accent/50 data-active:text-accent-foreground bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent"
							>
								Home
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem id="components">
							<NavigationMenuTrigger
								class="text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary relative bg-transparent px-4 py-2 text-sm font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
							>
								Components
								{#if isNew.connected && isNew.current}
									<span
										in:scale|global={{ duration: 200, delay: 600 }}
										out:scale|global={{ duration: 200, delay: 600 }}
										aria-hidden="true"
										class="outline-background absolute end-1 top-1 size-2 rounded-full bg-emerald-500 outline-2"
									></span>
								{/if}
							</NavigationMenuTrigger>
							<NavigationMenuContent class="p-0">
								<ul class="grid w-[22rem] gap-0 p-1 md:grid-cols-1">
									{#each navigationItems as item (item.href)}
										<li>
											<NavigationMenuLink href={item.href}>
												{#snippet child({ props })}
													<a
														{...props}
														class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group block rounded-md p-3 no-underline transition-colors outline-none select-none"
													>
														<div class="flex items-start gap-3">
															{#if item.icon}
																{@const Icon = item.icon}
																<div
																	class={cn(
																		"bg-secondary outline-border/60 [&_svg]:text-foreground flex aspect-square size-9 items-center justify-center rounded-lg border shadow-xs outline outline-offset-2  [&_svg]:size-4"
																	)}
																>
																	<Icon
																		class={cn("size-4")}
																		strokeWidth={1.6}
																	/>
																</div>
															{/if}
															<div class="space-y-1">
																<div
																	class="flex items-center gap-2"
																>
																	<div
																		class={cn(
																			"text-sm leading-none font-medium"
																		)}
																	>
																		{item.title}
																	</div>
																	{#if item.badge}
																		<Badge
																			variant={item.badgeVariant ||
																				"default"}
																			size="sm"
																		>
																			{formatBadgeLabel(
																				item.badge
																			)}
																		</Badge>
																	{/if}
																</div>
																<p
																	class="text-muted-foreground line-clamp-1 text-xs leading-snug"
																>
																	{item.description}
																</p>
															</div>
														</div>
													</a>
												{/snippet}
											</NavigationMenuLink>
										</li>
									{/each}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem id="other-projects">
							<NavigationMenuTrigger
								class="text-muted-foreground hover:text-primary focus:text-primary data-[state=open]:text-primary bg-transparent px-4 py-2 text-sm font-medium hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
							>
								Other Project
							</NavigationMenuTrigger>
							<NavigationMenuContent class="p-0">
								<div class="w-[42rem]">
									<ul class="grid grid-cols-2 gap-1 p-2">
										{#each projectItems as project (project.url)}
											<li
												class="hover:bg-accent focus-within:bg-accent group flex min-w-0 items-start gap-2 rounded-md p-2.5 transition-colors"
											>
												<a
													href={withUtm(project.url, `navbar-${project.slug}`)}
													target="_blank"
													rel="noopener noreferrer"
													class="min-w-0 flex-1 rounded-sm outline-none"
												>
													<div class="truncate text-sm leading-none font-medium">
														{project.title}
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
													class="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 -mt-0.5 shrink-0 rounded-sm p-1 outline-none transition-colors focus-visible:ring-[3px]"
												>
													<Icons.GitHub class="size-3" />
												</a>
											</li>
										{/each}
									</ul>
									<div
										class="text-muted-foreground flex items-center justify-center gap-1.5 border-t px-3 py-2.5 text-xs"
									>
										<span>Built by</span>
										<a
											href={withUtm("https://bhide.dev", "navbar-owner")}
											target="_blank"
											rel="noopener noreferrer"
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
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem id="changelog">
							<NavigationMenuLink
								href="/changelog"
								class="text-muted-foreground hover:text-primary focus:text-primary data-active:bg-accent/50 data-active:text-accent-foreground bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent"
							>
								Changelog
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenuRoot>
			</div>
		</div>
		<!-- Right side  -->
		<div class="flex items-center gap-2 md:gap-2">
			<!-- Search Bar -->
			<DocsSearchNavigation />
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/SikandarJODD/animations"
				target="_blank"
			>
				<Icons.GitHub class="size-4" />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				href="https://x.com/Sikandar_Bhide"
				target="_blank"
				class="hidden lg:inline-flex"
			>
				<Icons.Twitter class="size-4" />
			</Button>
			<LightSwitch variant="ghost" />
		</div>
	</div>
</header>
