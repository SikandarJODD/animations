<script lang="ts">
	import * as Tabs from "#lib/components/ui/tabs/index.js";
	import type { Snippet } from "svelte";
	import type { CodeBlock as MagicCode } from "#lib/components/ui/code/index.js";
	import * as Code from "#lib/components/ui/code/index.js";
	import { Button } from "#lib/components/ui/button/index.js";
	import * as Tooltip from "#lib/components/ui/tooltip/index.js";
	import { cn } from "#lib/utils.js";

	interface PreviewComponentProps {
		children: Snippet;
		code?: MagicCode | MagicCode[];
		showRetry?: boolean;
		isCentered?: boolean;
		class?: string;
	}

	let {
		code,
		children,
		showRetry = true,
		isCentered = true,
		class: className = "",
	}: PreviewComponentProps = $props();

	type TabValue = "preview" | "code";
	let value: TabValue = $state("preview");
	let retryKey = $state(0);

	function handleRetry() {
		retryKey += 1;
	}
</script>

<div class="mt-2 w-full">
	<Tabs.Root bind:value>
		<Tabs.List class="h-auto gap-1 bg-transparent p-0">
			<Tabs.Trigger
				value="preview"
				class="hover:bg-muted dark:data-active:bg-muted h-8 flex-none cursor-pointer rounded-full border-none bg-transparent px-3 text-sm shadow-none! transition-none data-active:bg-neutral-200/60"
			>
				Preview
			</Tabs.Trigger>
			<Tabs.Trigger
				value="code"
				class="hover:bg-muted dark:data-active:bg-muted h-8 flex-none cursor-pointer rounded-full border-none bg-transparent px-3 text-sm shadow-none! transition-none data-active:bg-neutral-200/60"
			>
				Code
			</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="preview" data-toc-ignore>
			<div
				class={cn(
					"border-border relative flex min-h-64 w-full overflow-hidden rounded-xl border p-6",
					isCentered ? "items-center justify-center" : "",
					className
				)}
			>
				{#if showRetry}
					<Tooltip.Provider delayDuration={300}>
						<Tooltip.Root>
							<Tooltip.Trigger>
								{#snippet child({ props })}
									<Button
										{...props}
										variant="ghost"
										size="icon-sm"
										onclick={handleRetry}
										aria-label="Replay animation"
										class="text-muted-foreground hover:text-foreground group absolute top-2 right-2 z-30 transition-colors duration-150 motion-reduce:transform-none motion-reduce:transition-none"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											aria-hidden="true"
											class="transition-transform duration-150 ease-out group-hover:rotate-30 motion-reduce:transform-none motion-reduce:transition-none"
										>
											<path
												d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
											/>
											<path d="M21 3v5h-5" />
										</svg>
									</Button>
								{/snippet}
							</Tooltip.Trigger>
							<Tooltip.Content sideOffset={6} class="motion-reduce:animate-none">
								Replay animation
							</Tooltip.Content>
						</Tooltip.Root>
					</Tooltip.Provider>
				{/if}
				{#key retryKey}
					{#if children}
						{@render children?.()}
					{:else}
						<p class="text-muted-foreground">
							No component provided. Please provide a component to render.
						</p>
					{/if}
				{/key}
			</div>
		</Tabs.Content>

		<Tabs.Content value="code" class="min-h-64" data-toc-ignore>
			<div class="w-full">
				{#if Array.isArray(code)}
					<Code.FileBrowser {code} />
				{:else if code}
					<Code.Frame {code} />
				{:else}
					<div
						class="border-border text-muted-foreground flex min-h-64 items-center justify-center rounded-xl border p-6 text-center"
					>
						No code provided for this preview.
					</div>
				{/if}
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
