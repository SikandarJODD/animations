<script lang="ts">
	import { page } from "$app/state";
	import Toc from "$lib/components/docs/base/toc/toc.svelte";
	import DocsNavigation from "$lib/components/docs/navigation/DocsNavigation.svelte";
	import { getPrevNext } from "$lib/components/docs/registry/fancy_ui";
	import FancySidebar from "$lib/components/fancy-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { UseToc } from "$lib/hooks/use-toc.svelte";

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
			class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-10 px-4 py-6 sm:px-6 lg:pr-2 lg:pl-12 xl:grid-cols-[minmax(0,1fr)_14rem] xl:items-start xl:gap-x-14 xl:gap-y-0"
		>
			<main
				class="w-full max-w-5xl min-w-0 xl:justify-self-center 2xl:max-w-6xl"
				bind:this={toc.ref}
			>
				{@render children()}
				<DocsNavigation previous={navigation.previous} next={navigation.next} />
			</main>

			<aside class="sticky top-24 hidden w-full xl:block">
				<div>
					<h2 class="mb-2 text-sm font-medium">On this page</h2>
				</div>
				<Toc toc={toc.current} />
			</aside>
		</div>
	{/if}
</Sidebar.Provider>
