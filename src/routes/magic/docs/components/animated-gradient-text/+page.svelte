<script lang="ts">
  import { page } from "$app/state";
  import { H1, H2, Paragraph, H3 } from "$lib/components/docs/markdown/index";
  import AnimatedGradientTextRaw from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte?raw";
  import type { CodeBlock } from "$lib/components/ui/code";

  import { PreviewComponent } from "$lib/components/ui/preview-component";
  import InstallComponent from "$lib/components/docs/base/InstallComponent.svelte";
  import APITable from "$lib/components/docs/base/APITable.svelte";
  import { data } from "./data";

  const code: CodeBlock = {
    filename: "AnimatedGradientText.svelte",
    filecode: AnimatedGradientTextRaw,
    lang: "svelte",
    isExpand: true,
  };

  const PreviewComp = $derived(data.preview);
  const installUrl = $derived(`${page.url.origin}/r/${data.id}.json`);
</script>

<div>
  <H1 id="introduction">{data.title}</H1>
  <Paragraph>
    {data.description}
  </Paragraph>

  <!-- Preview Component -->
  <div class="my-6">
    <PreviewComponent code={data.previewCode}>
      {#if PreviewComp}
        <PreviewComp />
      {/if}
    </PreviewComponent>
  </div>

  <H2 id="installation">Installation</H2>
  <InstallComponent
    {installUrl}
    tailwindConfig={data.tailwind ? { code: data.tailwind } : undefined}
    codeBlocks={[code]}
    class="my-4"
  />

  <H2 id="examples">Examples</H2>
  {#each data.examples as example}
    {@const ExampleComp = example.preview}
    <div class="my-8">
      <H3 id={example.name.toLowerCase().replace(/\s+/g, "-")}>
        {example.name}
      </H3>
      {#if example.description}
        <Paragraph>{example.description}</Paragraph>
      {/if}
      <div class="my-4">
        <PreviewComponent code={example.code}>
          <ExampleComp />
        </PreviewComponent>
      </div>
    </div>
  {/each}

  {#if data.props && data.props.length > 0}
    <H2 id="props">Props</H2>
    <div class="my-4">
      <APITable
        headers={["Prop", "Type", "Default"]}
        keys={["name", "type", "default"]}
        data={data.props}
      />
    </div>
  {/if}
</div>
