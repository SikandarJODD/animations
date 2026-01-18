<script lang="ts">
  import { page } from "$app/state";
  import Toc from "$lib/components/docs/base/toc/toc.svelte";
  import DocsNavigation from "$lib/components/docs/navigation/DocsNavigation.svelte";
  import { UseToc } from "$lib/hooks/use-toc.svelte";
  import { getPrevNext } from "$lib/components/docs/registry/magic-ui";

  let { children } = $props();

  let toc = new UseToc();

  // Extract component ID from URL path
  const componentId = $derived(() => {
    const path = page.url.pathname;
    const parts = path.split("/");
    return parts[parts.length - 1] || "";
  });

  const navigation = $derived(() => {
    const id = componentId();
    const { prev, next } = getPrevNext(id);
    return {
      previous: prev ? { title: prev.name, href: prev.href } : null,
      next: next ? { title: next.name, href: next.href } : null,
    };
  });
</script>

<div
  class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-6 sm:px-6 lg:pl-8 lg:pr-4"
>
  <!-- <aside class="sticky top-8 hidden w-44 shrink-0 lg:block">
  </aside> -->

  <main class="w-full sm:max-w-4xl" bind:this={toc.ref}>
    <!-- Main area -->
    {@render children()}

    <!-- Prev/Next Navigation -->
    <DocsNavigation previous={navigation().previous} next={navigation().next} />
  </main>

  <aside class="sticky top-24 hidden w-56 shrink-0 xl:block">
    <div>
      <h2 class="mb-2 text-sm font-medium">On this page</h2>
    </div>
    <Toc toc={toc.current}></Toc>
  </aside>
</div>
