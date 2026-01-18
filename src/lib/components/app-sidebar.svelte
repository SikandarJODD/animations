<script lang="ts" module>
  import { magicUIComponents } from "$lib/components/docs/registry/magic-ui";

  // Build navigation from registry
  const data = {
    navMain: [
      {
        title: "Getting Started",
        url: "#",
        items: [
          {
            title: "Installation",
            url: "#",
            isActive: true,
          },
          {
            title: "Project Structure",
            url: "#",
          },
        ],
      },
      {
        title: "Text Animations",
        url: "#",
        items: magicUIComponents.map((c) => ({
          title: c.name,
          url: c.href,
          badge: c.badge,
        })),
      },
    ],
  };
</script>

<script lang="ts">
  import SearchForm from "./search-form.svelte";
  import VersionSwitcher from "./version-switcher.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
  import type { ComponentProps } from "svelte";

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps} bind:ref class="mt-16">
  <Sidebar.Header>
    <!-- <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} /> -->
    <!-- <SearchForm /> -->
  </Sidebar.Header>
  <ScrollArea class="max-h-[calc(100vh-6rem)]">
    <Sidebar.Content>
      <!-- We create a Sidebar.Group for each parent. -->
      {#each data.navMain as group (group.title)}
        <Sidebar.Group>
          <Sidebar.GroupLabel>{group.title}</Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              {#each group.items as item (item.title)}
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton>
                    <!-- isActive={item.isActive} -->
                    {#snippet child({ props })}
                      <a href={item.url} {...props}>{item.title}</a>
                    {/snippet}
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              {/each}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      {/each}
    </Sidebar.Content>
  </ScrollArea>
  <Sidebar.Rail />
</Sidebar.Root>
