<script lang="ts">
	import { page } from "$app/state";
	import Toc from "$lib/components/docs/base/toc/toc.svelte";
	import DocsNavigation from "$lib/components/docs/navigation/DocsNavigation.svelte";
	import { getPrevNext } from "$lib/components/docs/registry/spell_ui";
	import SpellSidebar from "$lib/components/spell-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { UseToc } from "$lib/hooks/use-toc.svelte";

	let { children } = $props();

	let toc = new UseToc();

	let isOverviewPage = $derived(page.url.pathname === "/spell");

	let componentId = $derived.by(() => {
		if (page.url.pathname === "/spell") {
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
	<SpellSidebar />
	{#if isOverviewPage}
		<div class="min-w-0 flex-1">
			{@render children()}
		</div>
	{:else}
		<div
			class="mx-auto grid min-w-0 flex-1 max-w-7xl grid-cols-1 gap-y-10 px-4 py-6 sm:px-6 lg:pr-4 lg:pl-10 xl:grid-cols-[minmax(0,1fr)_14rem] xl:items-start xl:gap-x-14 xl:gap-y-0"
		>
			<main
				class="w-full max-w-5xl min-w-0 xl:justify-self-center 2xl:max-w-6xl"
				bind:this={toc.ref}
			>
				{@render children()}
				<DocsNavigation previous={navigation.previous} next={navigation.next} />
			</main>

			<aside class="sticky top-20 hidden w-full xl:block">
				<div>
					<h2 class="mb-2 text-sm font-medium">On this page</h2>
				</div>
				<Toc toc={toc.current} />
			</aside>
		</div>
	{/if}
</Sidebar.Provider>
