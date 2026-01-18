<script lang="ts">
  import { cn } from "$lib/utils";
  import type { Snippet } from "svelte";

  type AnimatedGradientTextProps = {
    speed?: number;
    colorFrom?: string;
    colorTo?: string;
    children: Snippet;
    class?: string;
    rest: Record<string, any>;
  };

  let {
    speed = 1,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    children,
    class: className = "",
    ...rest
  }: AnimatedGradientTextProps = $props();
</script>

<span
  style="--color-from:{colorFrom}; --color-to:{colorTo}; --bg-size:{300 *
    speed}%"
  {...rest}
  class={cn(
    `animate-gradient inline bg-linear-to-r from-(--color-from) via-(--color-to) to-(--color-from) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent`,
    className,
  )}
>
  {@render children?.()}
</span>
