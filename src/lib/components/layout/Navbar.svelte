<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Icons from "$lib/components/icons";
	import BookOpenIcon from "@lucide/svelte/icons/book-open";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import { onMount, type Component } from "svelte";
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
	import Badge from "../spell/badge/badge.svelte";
	import { PersistedState } from "runed";
	import { scale } from "svelte/transition";

	type NavigationItem = {
		href: string;
		title: string;
		description: string;
		icon?: Component;
		badge?: "new";
	};

	const navigationItems: NavigationItem[] = [
		{
			href: "/magic/docs/components/animated-beam",
			title: "Svelte Magic UI",
			description: "50+ Animations & Effects for Svelte",
			icon: SparklesIcon,
		},
		{
			href: "/spell",
			title: "Svelte Spell UI",
			description: "Refined UI components for Design Engineers.",
			icon: BookOpenIcon,
			badge: "new",
		},
	];

	const componentsHasUpdates = navigationItems.some((item) => item.badge === "new");

	function formatBadgeLabel(badge?: NavigationItem["badge"]) {
		return badge === "new" ? "New" : "";
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

	let isNew = new PersistedState("is_new_present", true);
	let updateIsNew = () => {
		isNew.current = false;
	};
</script>

<header
	class="bg-background/95 supports-backdrop-filter:bg-background/60 fixed top-0 right-0 left-0 z-40 border-b px-4 backdrop-blur md:px-6"
>
	<div class="flex h-16 items-center justify-between gap-4">
		<!-- Left side  -->
		<div class="flex items-center gap-2">
			<!-- Mobile menu trigger  -->
			<MobileNavbarSheet />
			<!-- Main nav  -->
			<div class="flex items-center gap-6">
				<a href="/" class="text-primary hover:text-primary/90"> Svelte Animations </a>
				<NavigationMenuRoot
					class="max-md:hidden"
					delayDuration={0}
					viewport={false}
					onValueChange={(v) => updateIsNew()}
				>
					<NavigationMenuList class="gap-1">
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
								<ul class="grid w-[18rem] gap-2 p-1 md:grid-cols-1">
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
																		class="size-4"
																		strokeWidth={1.6}
																	/>
																</div>
															{/if}
															<div class="space-y-1">
																<div
																	class="flex items-center gap-2"
																>
																	<div
																		class="text-sm leading-none font-medium"
																	>
																		{item.title}
																	</div>
																	{#if item.badge}
																		<Badge
																			variant="green"
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
				class="hidden md:inline-flex"
			>
				<Icons.Twitter class="size-4" />
			</Button>
			<LightSwitch variant="ghost" />
		</div>
	</div>
</header>
