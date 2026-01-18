<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { cn } from "$lib/utils";

  interface Props {
    class?: string;
    children?: import("svelte").Snippet;
    align?: "start" | "center" | "end";
    preventScroll?: boolean;
  }

  let {
    class: className = "",
    align = "start",
    preventScroll = true,
    children,
    ...restProps
  }: Props = $props();
</script>

<DropdownMenu.Content
  {align}
  {preventScroll}
  class={cn("w-[240px]", className)}
  {...restProps}
>
  {@render children?.()}
</DropdownMenu.Content>
