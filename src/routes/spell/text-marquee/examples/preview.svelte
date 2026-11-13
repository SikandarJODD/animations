<script lang="ts">
	import { TextMarquee } from "#lib/components/spell/text-marquee/index.js";

	let phrases = ["Magic", "Spell", "Aceternity", "Luxe", "Indie", "Motion"];
</script>

<TextMarquee items={phrases} height={120} itemHeight={40} speed={0.85}>
	{#snippet prefix()}
		<span class="text-muted-foreground/75 text-3xl font-medium">sv-animations/ </span>
	{/snippet}

	{#snippet children(item)}
		<span class="text-3xl font-medium">{item}</span>
	{/snippet}
</TextMarquee>
