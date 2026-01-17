<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import type { Snippet } from "svelte";
  import * as Code from "$lib/components/ui/code";
  import type { SupportedLanguage } from "$lib/components/ui/code/shiki";
  import type { CodeBlock as MagicCode } from "$lib/components/ui/code/index";
  import MultipleCode from "$lib/components/ui/code/multiple-code.svelte";
  import SingleCodeFilename from "../code/single-code-filename.svelte";
  let {
    code,
    children,
    lang = "svelte",
  }: {
    children: Snippet;
    code?: MagicCode | MagicCode[];
    lang?: SupportedLanguage;
  } = $props();
  type TabValue = "preview" | "code";
  let value: TabValue = $state("preview");
</script>

<Tabs.Root bind:value>
  <Tabs.List>
    <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
    <Tabs.Trigger value="code">Code</Tabs.Trigger>
  </Tabs.List>
  <div>
    {#if value === "preview"}
      <div>
        <!-- <ComponentView> -->
        <div
          class="bg-primary-foreground/50 border-border relative flex min-h-64 w-full items-center justify-center rounded-lg border p-6"
        >
          {#if children}
            {@render children?.()}
          {:else}
            <p class="text-muted-foreground">
              No component provided. Please provide a component to render.
            </p>
          {/if}
        </div>
      </div>
    {:else if value === "code"}
      <div>
        {#if Array.isArray(code)}
          <MultipleCode {code} />
        {:else if code}
          <SingleCodeFilename {code} />
        {/if}
      </div>
    {/if}
  </div>
</Tabs.Root>
