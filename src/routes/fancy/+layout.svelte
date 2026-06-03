<script lang="ts">
	import { page } from "$app/state";
	import Toc from "$lib/components/docs/base/toc/toc.svelte";
	import DocsNavigation from "$lib/components/docs/navigation/DocsNavigation.svelte";
	import ContributeCard from "$lib/components/layout/contribute-card.svelte";
	import { getPrevNext } from "$lib/components/docs/registry/fancy_ui";
	import FancySidebar from "$lib/components/fancy-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { UseToc } from "$lib/hooks/use-toc.svelte";
	import SupportWork from "$lib/components/docs/base/support-work.svelte";

	let { children } = $props();

	let toc = new UseToc();

	let isOverviewPage = $derived(page.url.pathname === "/fancy");

	let componentId = $derived.by(() => {
		if (page.url.pathname === "/fancy") {
			return "overview";
		}

		const path = page.url.pathname;
		const parts = path.split("/");
		return parts[parts.length - 1] || "";
	});

	let navigation = $derived.by(() => {
		let { prev, next } = getPrevNext(componentId);
		return {
			previous: prev ? { title: prev.name, href: prev.href, desc: prev.desc } : null,
			next: next ? { title: next.name, href: next.href, desc: next.desc } : null,
		};
	});
</script>

<Sidebar.Provider>
	<FancySidebar />
	{#if isOverviewPage}
		{@render children()}
	{:else}
		<div
			class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-10 px-4 py-6 sm:px-6 lg:pr-2 lg:pl-12 xl:grid-cols-[minmax(0,1fr)_16rem] xl:items-start xl:gap-x-14 xl:gap-y-0"
		>
			<main
				class="w-full max-w-5xl min-w-0 xl:justify-self-center 2xl:max-w-6xl"
				bind:this={toc.ref}
			>
				{@render children()}
				<DocsNavigation previous={navigation.previous} next={navigation.next} />
			</main>

			<aside class="hidden h-full w-full xl:block">
				<div class="sticky top-24">
					<div class="flex h-[calc(100vh-8rem)] min-h-0 flex-col">
						<div>
							<h2 class="mb-2 text-sm font-medium">On this page</h2>
						</div>
						<div class="min-h-0 overflow-y-auto pr-2">
							<Toc toc={toc.current} />
						</div>
						<ContributeCard />
						<div class="mt-auto">
							<SupportWork />
						</div>
					</div>
				</div>
			</aside>
		</div>
	{/if}
</Sidebar.Provider>
