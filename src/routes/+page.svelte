<script lang="ts">
  import AnimatedGradientText from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte";
  import AnimatedGradientTextRaw from "$lib/components/magic-ui/animated-gradient-text/animated-gradient-text.svelte?raw";
  import type { CodeBlock } from "$lib/components/ui/code";
  // Import preview components - adjust paths as needed
  import { PreviewComponent } from "$lib/components/ui/preview-component/index";

  let multipleCodes: CodeBlock[] = [
    {
      filename: "AnimatedGradientText.svelte",
      filecode: AnimatedGradientTextRaw,
      lang: "svelte",
    },
    {
      filename: "styles.css",
      filecode: `
.animated-gradient-text {
  background: linear-gradient(270deg, #ff6ec4, #7873ff, #4ade80);
  background-size: 600% 600%;
  -webkit-background-clip: text;
    }
  `,
      lang: "typescript",
    },
  ];
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>

<div>
  <AnimatedGradientText class="text-4xl font-semibold">
    Animated Gradient Text Example
  </AnimatedGradientText>
</div>

<section class="preview-components">
  <h2>Preview Components</h2>

  <div class="preview-section">
    <h3>1. Preview + Single File Code</h3>
    <PreviewComponent code={multipleCodes}>
      <AnimatedGradientText class="text-2xl font-semibold">
        Single File Example
      </AnimatedGradientText>
    </PreviewComponent>
  </div>

  <div class="preview-section">
    <h3>2. Preview Component + Multiple File Code</h3>
    <PreviewComponent code={multipleCodes[0]}>
      <AnimatedGradientText class="text-2xl font-semibold">
        Multiple Files Example
      </AnimatedGradientText>
    </PreviewComponent>
  </div>
</section>
