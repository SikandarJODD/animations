<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";

  interface Props {
    class?: string;
    children?: import("svelte").Snippet;
  }

  let { children, ...restProps }: Props = $props();
</script>

<DropdownMenu.Trigger {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    <Button type="button" variant="outline">
      Open in chat
      <ChevronDown class="ml-2 size-4" />
    </Button>
  {/if}
</DropdownMenu.Trigger>
