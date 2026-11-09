<script lang="ts">
	import { BentoCard, BentoGrid } from "#lib/components/magic/bento-grid/index.js";

	// Icons
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import InputIcon from "@lucide/svelte/icons/file-input";
	import GlobeIcon from "@lucide/svelte/icons/globe";
	import CalendarIcon from "@lucide/svelte/icons/calendar";
	import BellIcon from "@lucide/svelte/icons/bell";

	import type { Snippet } from "svelte";

	type Feature = {
		Icon: typeof FileTextIcon;
		name: string;
		background: Snippet;
		description: string;
		href: string;
		cta: string;
		class: string;
		iconClass?: string;
	};

	let features: Feature[] = [
		{
			Icon: FileTextIcon,
			name: "Save your files",
			background: bg,
			description: "We automatically save your files as you type.",
			href: "/",
			cta: "Learn more",
			class: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: InputIcon,
			name: "Full text search",
			background: bg,
			description: "Search through all your files in one place.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: GlobeIcon,
			name: "Multilingual",
			background: bg,
			description: "Supports 100+ languages and counting.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: CalendarIcon,
			name: "Calendar",
			background: bg,
			description: "Use the calendar to filter your files by date.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
			iconClass: "stroke-[1.4]",
		},
		{
			Icon: BellIcon,
			name: "Notifications",
			background: bg,
			description: "Get notified when someone shares a file or mentions you in a comment.",
			href: "/",
			cta: "Learn more",
			class: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
			iconClass: "stroke-[1.4]",
		},
	];
</script>

<!-- background  -->
{#snippet bg()}
	<img src="" alt="demo" class="absolute -top-20 -right-20 opacity-60" />
{/snippet}

<BentoGrid class="lg:grid-rows-3">
	{#each features as feature}
		<BentoCard {...feature} />
	{/each}
</BentoGrid>
