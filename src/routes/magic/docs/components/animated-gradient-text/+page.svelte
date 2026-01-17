<script lang="ts">
  import {
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
</script>

<div data-doc-content>
  <H2 id="introduction">Introduction</H2>
  <Paragraph>
    The Animated Gradient Text component creates stunning text effects with
    smoothly transitioning gradients. This component is perfect for hero
    sections, headings, and any text that needs to stand out with dynamic visual
    appeal.
  </Paragraph>

  <H2 id="installation">Installation</H2>
  <Paragraph>
    Install the component by copying it into your project or install via npm
    package manager.
  </Paragraph>

  <H3 id="npm-install">Using NPM</H3>
  <Paragraph>
    Run the following command to install the required dependencies:
  </Paragraph>
  <OrderedList>
    <ListItem
      >Install the package: <Strong
        >npm install @magic-ui/animated-gradient-text</Strong
      ></ListItem
    >
    <ListItem>Import the component in your Svelte file</ListItem>
    <ListItem>Configure your gradient colors and animation duration</ListItem>
    <ListItem>Add the component to your markup</ListItem>
  </OrderedList>

  <H3 id="manual-install">Manual Installation</H3>
  <UnorderedList>
    <ListItem>Copy the component file to your components directory</ListItem>
    <ListItem>Ensure all dependencies are installed</ListItem>
    <ListItem>Import and use in your project</ListItem>
  </UnorderedList>

  <H2 id="component-usage">Component Usage</H2>
  <Paragraph>
    The component is designed to be simple and flexible. Here's a basic example
    of how to use it:
  </Paragraph>
  <Blockquote>
    Remember to wrap your text content inside the component tags for the
    gradient effect to apply correctly.
  </Blockquote>

  <H3 id="basic-example">Basic Example</H3>
  <Paragraph>
    Import the component and use it with default settings for a quick start.
  </Paragraph>

  <H2 id="configuration-options">Configuration Options</H2>
  <Paragraph>
    The component accepts several props to customize its appearance and
    behavior. Below is a comprehensive table of all available options:
  </Paragraph>

  <Table>
    <Thead>
      <Tr>
        <Th>Property</Th>
        <Th>Type</Th>
        <Th>Default</Th>
        <Th>Description</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>duration</Td>
        <Td>number</Td>
        <Td>3000</Td>
        <Td>Animation duration in milliseconds</Td>
      </Tr>
      <Tr>
        <Td>colors</Td>
        <Td>string[]</Td>
        <Td>['#ff0080', '#7928ca', '#ff0080']</Td>
        <Td>Array of gradient colors</Td>
      </Tr>
      <Tr>
        <Td>direction</Td>
        <Td>string</Td>
        <Td>'to right'</Td>
        <Td>Gradient direction</Td>
      </Tr>
      <Tr>
        <Td>class</Td>
        <Td>string</Td>
        <Td>''</Td>
        <Td>Additional CSS classes</Td>
      </Tr>
      <Tr>
        <Td>animated</Td>
        <Td>boolean</Td>
        <Td>true</Td>
        <Td>Enable/disable animation</Td>
      </Tr>
    </Tbody>
  </Table>

  <H2 id="animation-types">Animation Types</H2>
  <Paragraph>
    Different animation styles are available to suit various design needs:
  </Paragraph>

  <div data-level="2">
    <H3 id="available-animations">Available Animations</H3>
    <OrderedList>
      <ListItem
        ><Strong>Horizontal Slide:</Strong> Gradient moves from left to right</ListItem
      >
      <ListItem
        ><Strong>Vertical Slide:</Strong> Gradient transitions top to bottom</ListItem
      >
      <ListItem
        ><Strong>Diagonal Flow:</Strong> Creates a diagonal movement effect</ListItem
      >
      <ListItem
        ><Strong>Radial Pulse:</Strong> Gradient expands from center outward</ListItem
      >
      <ListItem
        ><Strong>Wave Effect:</Strong> Smooth wave-like motion across the text</ListItem
      >
    </OrderedList>
  </div>

  <H2 id="browser-support">Browser Support</H2>
  <Paragraph>
    The component is tested and works across all modern browsers. Below is the
    compatibility table:
  </Paragraph>

  <Table>
    <Thead>
      <Tr>
        <Th>Browser</Th>
        <Th>Version</Th>
        <Th>Support</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Chrome</Td>
        <Td>90+</Td>
        <Td>✅ Full Support</Td>
      </Tr>
      <Tr>
        <Td>Firefox</Td>
        <Td>88+</Td>
        <Td>✅ Full Support</Td>
      </Tr>
      <Tr>
        <Td>Safari</Td>
        <Td>14+</Td>
        <Td>✅ Full Support</Td>
      </Tr>
      <Tr>
        <Td>Edge</Td>
        <Td>90+</Td>
        <Td>✅ Full Support</Td>
      </Tr>
      <Tr>
        <Td>Opera</Td>
        <Td>76+</Td>
        <Td>✅ Full Support</Td>
      </Tr>
    </Tbody>
  </Table>

  <H2 id="best-practices">Best Practices</H2>
  <Paragraph>
    Follow these recommendations to get the most out of the animated gradient
    text component:
  </Paragraph>

  <UnorderedList>
    <ListItem>Use high-contrast colors for better readability</ListItem>
    <ListItem
      >Keep animation duration between 2-5 seconds for optimal effect</ListItem
    >
    <ListItem>Test on different screen sizes to ensure responsiveness</ListItem>
    <ListItem>Consider accessibility by providing fallback styles</ListItem>
    <ListItem>Avoid using too many animated elements on a single page</ListItem>
    <ListItem
      >Ensure proper color contrast ratios for accessibility compliance</ListItem
    >
  </UnorderedList>

  <H2 id="troubleshooting">Troubleshooting</H2>
  <Paragraph>Common issues and their solutions:</Paragraph>

  <H3 id="common-issues">Common Issues</H3>
  <OrderedList>
    <ListItem>
      <Strong>Animation not working:</Strong> Ensure CSS animations are enabled in
      your browser
    </ListItem>
    <ListItem>
      <Strong>Colors not displaying:</Strong> Check that color values are valid CSS
      color formats
    </ListItem>
    <ListItem>
      <Strong>Performance issues:</Strong> Reduce animation complexity or increase
      duration
    </ListItem>
  </OrderedList>

  <H3 id="performance-tips">Performance Tips</H3>
  <UnorderedList>
    <ListItem>Use CSS custom properties for dynamic color changes</ListItem>
    <ListItem>Enable GPU acceleration with transform properties</ListItem>
    <ListItem>Limit the number of gradient stops to 3-5 colors</ListItem>
    <ListItem
      >Consider using <Strong>prefers-reduced-motion</Strong> media query</ListItem
    >
  </UnorderedList>

  <H2 id="accessibility">Accessibility Considerations</H2>
  <Paragraph>
    Making your animated gradient text accessible to all users is important:
  </Paragraph>

  <Table>
    <Thead>
      <Tr>
        <Th>Feature</Th>
        <Th>Implementation</Th>
        <Th>Priority</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Color Contrast</Td>
        <Td>Maintain WCAG AA standards (4.5:1 ratio)</Td>
        <Td>High</Td>
      </Tr>
      <Tr>
        <Td>Motion Sensitivity</Td>
        <Td>Respect prefers-reduced-motion setting</Td>
        <Td>High</Td>
      </Tr>
      <Tr>
        <Td>Screen Readers</Td>
        <Td>Text remains readable without visual effects</Td>
        <Td>Medium</Td>
      </Tr>
      <Tr>
        <Td>Focus Indicators</Td>
        <Td>Ensure visible focus states for keyboard navigation</Td>
        <Td>Medium</Td>
      </Tr>
    </Tbody>
  </Table>

  <Blockquote>
    Always test your implementation with accessibility tools and real users to
    ensure everyone can enjoy your content.
  </Blockquote>
</div>
