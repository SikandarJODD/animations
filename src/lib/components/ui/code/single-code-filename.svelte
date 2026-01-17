<script lang="ts">
  import { TypeScript } from "$lib/components/icons";
  import * as Code from "$lib/components/ui/code";
  import type { CodeBlock as MagicCode } from "$lib/components/ui/code/index";

  type Props = {
    code: MagicCode;
  };
  let { code }: Props = $props();
</script>

<div class="w-full p-6">
  <div class="border-border rounded-lg border">
    <div
      class="border-border flex h-9 items-center justify-between border-b px-6"
    >
      <div class="flex items-center gap-2">
        <TypeScript class="size-4" />
        <span class="text-sm font-medium">{code.filename}</span>
      </div>
    </div>
    <!-- <Code.Root
      lang={code.lang}
      class="w-full"
      code={code.filecode}
      highlight={code.highlight}
    >
      <Code.CopyButton />
    </Code.Root> -->
    {#if code.isExpand}
      <Code.Overflow>
        <Code.Root
          lang={code.lang}
          class="w-full"
          code={code.filecode}
          highlight={code.highlight}
        >
          <Code.CopyButton />
        </Code.Root>
      </Code.Overflow>
    {:else}
      <Code.Root
        lang={code.lang}
        class="w-full"
        code={code.filecode}
        highlight={code.highlight}
      >
        <Code.CopyButton />
      </Code.Root>
    {/if}
  </div>
</div>
