<script lang="ts">
  import {
    H1,
    H2,
    Paragraph,
    H3,
    OrderedList,
    UnorderedList,
    ListItem,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Strong,
    Blockquote,
  } from "$lib/components/docs/markdown/index";
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
</script>

<div data-doc-content>
  <H1 id="introduction">Animated Gradient Text</H1>
  <Paragraph>
    An animated gradient background which transitions between colors for text.
  </Paragraph>

  <!-- Preview Component -->
  <div class="my-6">
    <PreviewComponent {code}>
      <AnimatedGradientText class="text-4xl font-bold">
        Animated Gradient Text
      </AnimatedGradientText>
    </PreviewComponent>
  </div>

  <H2 id="installation">Installation</H2>
  <Paragraph>
    Install the component by copying it into your project or install via npm
    package manager.
  </Paragraph>
  <PMCommand
    command="execute"
    args={["add", "animated-gradient-text"]}
    class="my-2"
  />

  <!-- <H2 id="examples">Examples</H2> -->
  <!-- <H3 id="custom-speed">Custom Speed</H3> -->
</div>
