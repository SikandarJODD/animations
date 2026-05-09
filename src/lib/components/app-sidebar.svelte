<script lang="ts" module>
	import { magicUIComponents, type BadgeType } from "$lib/components/docs/registry/magic-ui";

	type NavItem = {
		title: string;
		url: string;
		badge?: BadgeType;
	};

	// Build navigation from registry
	const data = {
		navMain: [
			{
				title: "Getting Started",
				url: "#",
				items: [
					{
						title: "Introduction",
						url: "/magic/docs",
					},
					{
						title: "Installation",
						url: "/magic/docs/installation",
					},
				] as NavItem[],
			},
			{
				title: "Components",
				url: "#",
				items: magicUIComponents.map((c) => ({
					title: c.name,
					url: c.href,
					badge: c.badge,
				})) as NavItem[],
			},
		],
	};
</script>

<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { ScrollArea, ScrollFadeEffect } from "$lib/components/ui/scroll-area/index.js";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import { page } from "$app/state";
	import type { ComponentProps } from "svelte";
	import { GalleryVerticalEndIcon } from "@lucide/svelte";

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root class="mt-16" {...restProps} bind:ref>
	<ScrollArea
		class="max-h-[calc(100vh-6rem)] py-4 pr-1"
		scrollbarXClasses="hidden"
		scrollbarYClasses="hidden"
	>
		<Sidebar.Content>
			<!-- We create a Sidebar.Group for each parent. -->
			{#each data.navMain as group (group.title)}
				<Sidebar.Group>
					<Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
					<Sidebar.GroupContent>
						<Sidebar.Menu>
							{#each group.items as item}
								<Sidebar.MenuItem>
									<Sidebar.MenuButton isActive={page.url.pathname === item.url}>
										{#snippet child({ props })}
											<a href={item.url} {...props}>
												{item.title}
												{#if item.badge}
													<Badge
														variant="secondary"
														class={[
															item.badge === "New" &&
																" border-green-500/30 bg-green-500/20  text-[10px] text-green-600 dark:bg-green-500/15 dark:text-green-400",
															item.badge === "Beta" &&
																" border-yellow-500/30 bg-yellow-500/20 text-[10px] text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
															item.badge === "Updated" &&
																"border-cyan-500/30 bg-cyan-500/20  text-[10px] text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-400",
															"ml-auto px-1.5 py-0 text-[10px]",
														]}
													>
														{item.badge}
													</Badge>
												{/if}
											</a>
										{/snippet}
									</Sidebar.MenuButton>
								</Sidebar.MenuItem>
							{/each}
						</Sidebar.Menu>
					</Sidebar.GroupContent>
				</Sidebar.Group>
			{/each}
		</Sidebar.Content>
	</ScrollArea>
	<!-- <Sidebar.Rail /> -->
</Sidebar.Root>
