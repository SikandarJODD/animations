<script lang="ts">
	import { ExplodingInput } from "#lib/components/spell/exploding-input/index.js";

	function makeBadgeDataUrl(fill: string, accent: string) {
		const svg = `
			<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
				<rect x="6" y="6" width="60" height="60" rx="18" fill="${fill}" />
				<circle cx="36" cy="26" r="10" fill="${accent}" />
				<path d="M20 50c6-8 11-12 16-12s10 4 16 12" fill="${accent}" />
			</svg>
		`;

		return `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}`;
	}

	const badges = [
		makeBadgeDataUrl("#fde68a", "#ea580c"),
		makeBadgeDataUrl("#a7f3d0", "#047857"),
		makeBadgeDataUrl("#bfdbfe", "#1d4ed8"),
		makeBadgeDataUrl("#fecdd3", "#be123c"),
	];
</script>

<div class="flex justify-center py-8">
	<label class="block">
		<input
			type="text"
			placeholder="drop image particles"
			class="bg-background h-10 w-80 rounded-none border-b p-0 text-base font-medium outline-none placeholder:font-medium"
		/>
		<ExplodingInput
			items={badges}
			count={2}
			duration={2.6}
			gravity={0.35}
			direction={{ horizontal: "center", vertical: "top" }}
		>
			{#snippet children(src)}
				<img
					{src}
					alt=""
					class="h-9 w-9 rounded-xl object-cover shadow-[0_8px_24px_rgba(15,23,42,0.16)]"
				/>
			{/snippet}
		</ExplodingInput>
	</label>
</div>
