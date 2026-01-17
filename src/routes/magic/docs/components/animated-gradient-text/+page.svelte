<script lang="ts">
  import { page } from "$app/state";
  import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
  import AnimatedGradientText from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte";
  import AnimatedGradientTextRaw from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte?raw";
  import type { CodeBlock } from "$lib/components/ui/code";

  import { PMCommand } from "$lib/components/ui/pm-command";
  import { PreviewComponent } from "$lib/components/ui/preview-component";

  let code: CodeBlock = {
    filename: "AnimatedGradientText.svelte",
    filecode: AnimatedGradientTextRaw,
    lang: "svelte",
    isExpand: true,
  };
  import { data } from "./data";
  let MainPreviewComponent = $derived(data.preview_component);
  let installation_url = $derived(
    page.url.origin + "/r/" + data.installation_url,
  );
</script>

<div>
  <H1 id="introduction">{data.title}</H1>
  <Paragraph>
    {data.description}
  </Paragraph>

  <!-- Preview Component -->
  <div class="my-6">
    <PreviewComponent code={data.preview_code}>
      <MainPreviewComponent />
    </PreviewComponent>
  </div>

  <H2 id="installation">Installation</H2>
  <!-- <Paragraph>
    Install the component by copying it into your project or install via npm
    package manager.
  </Paragraph> -->
  <PMCommand
    command="execute"
    args={["shadcn-svelte@latest", "add", installation_url]}
    class="my-2"
  />

  <H2 id="examples">Examples</H2>
  {#each data.examples as example}
    {@const ExampleComponent = example.preview_component}
    <div class="my-8">
      <H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}
        >{example.name}</H3
      >
      {#if example.description}
        <Paragraph>{example.description}</Paragraph>
      {/if}
      <div class="my-4">
        <PreviewComponent code={example.source_code}>
          <ExampleComponent />
        </PreviewComponent>
      </div>
    </div>
  {/each}
</div>
