<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Frame from "$lib/components/ui/frame";
	import { mode } from "mode-watcher";
	import type { MagicOverviewShowcaseItem } from "./showcase-data";

	let { item }: { item: MagicOverviewShowcaseItem } = $props();

	let retry = $state(0);

	function replayPreview() {
		retry = (retry + 1) % Number.MAX_SAFE_INTEGER;
	}
</script>

<article class="group h-full">
	<Frame.Root class="h-full bg-card/70">
		<Frame.Header class="gap-3 py-1 pr-1 pl-3 sm:flex-row sm:items-center sm:justify-between">
			<div class="min-w-0 space-y-1">
				<Frame.Title class="font-figtree text-sm font-medium tracking-[-0.01em]">
					{item.name}
				</Frame.Title>
			</div>
			<div class="hidden shrink-0 items-center gap-1 md:flex">
				<Button
					href={item.href}
					class="font-figtree rounded-full"
					variant={mode.current === "light" ? "outline" : "secondary"}
					size="sm"
				>
					Visit
				</Button>
				<Button
					onclick={replayPreview}
					class="group cursor-pointer rounded-full"
					variant={mode.current === "light" ? "outline" : "secondary"}
					size="icon-sm"
					aria-label={`Replay ${item.name} preview`}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						class="size-5"
					>
						<path
							fill="currentColor"
							d="M11.896 18a.75.75 0 0 1-.75.75c-3.792 0-6.896-3.005-6.896-6.75s3.104-6.75 6.896-6.75c3.105 0 5.749 2.015 6.605 4.801l.603-1.02a.75.75 0 0 1 1.292.763l-1.63 2.755a.75.75 0 0 1-1.014.272L14.18 11.23a.75.75 0 1 1 .737-1.307l1.472.83c-.574-2.288-2.691-4.003-5.242-4.003C8.149 6.75 5.75 9.117 5.75 12s2.399 5.25 5.396 5.25a.75.75 0 0 1 .75.75"
						/>
					</svg>
				</Button>
			</div>
		</Frame.Header>

		<Frame.Panel class="min-h-80 overflow-hidden p-0">
			{#key retry}
				<item.preview />
			{/key}
		</Frame.Panel>

		<Frame.Footer class="flex items-center gap-2 px-3 py-3 md:hidden">
			<Button
				href={item.href}
				class="font-figtree flex-1 rounded-full"
				variant={mode.current === "light" ? "outline" : "secondary"}
				size="sm"
			>
				Visit
			</Button>
			<Button
				onclick={replayPreview}
				class="group cursor-pointer rounded-full"
				variant={mode.current === "light" ? "outline" : "secondary"}
				size="icon-sm"
				aria-label={`Replay ${item.name} preview`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					class="size-5"
				>
					<path
						fill="currentColor"
						d="M11.896 18a.75.75 0 0 1-.75.75c-3.792 0-6.896-3.005-6.896-6.75s3.104-6.75 6.896-6.75c3.105 0 5.749 2.015 6.605 4.801l.603-1.02a.75.75 0 0 1 1.292.763l-1.63 2.755a.75.75 0 0 1-1.014.272L14.18 11.23a.75.75 0 1 1 .737-1.307l1.472.83c-.574-2.288-2.691-4.003-5.242-4.003C8.149 6.75 5.75 9.117 5.75 12s2.399 5.25 5.396 5.25a.75.75 0 0 1 .75.75"
					/>
				</svg>
			</Button>
		</Frame.Footer>
	</Frame.Root>
</article>
