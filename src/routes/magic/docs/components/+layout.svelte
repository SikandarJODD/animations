<script lang="ts">
  import Toc from "$lib/components/docs/base/toc/toc.svelte";
  import { UseToc } from "$lib/hooks/use-toc.svelte";

  let { children } = $props();

  let toc = new UseToc();
</script>

<div
  class="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-4 sm:px-6 lg:px-8"
>
  <!-- <aside class="sticky top-8 hidden w-44 shrink-0 lg:block">
  </aside> -->

  <main class="flex-1" bind:this={toc.ref}>
    <!-- Main area -->
    {@render children()}
  </main>

  <aside class="sticky top-24 hidden w-64 shrink-0 xl:block">
    <div>
      <h2 class="mb-4 text-sm font-semibold">On this page</h2>
    </div>
    <Toc toc={toc.current}></Toc>
  </aside>
</div>
