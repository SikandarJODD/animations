<script lang="ts">
	import { IconCloud } from "#lib/components/magic/icon-cloud/index.js";

	const slugs = [
		"typescript",
		"javascript",
		"dart",
		"java",
		"svelte",
		"flutter",
		"android",
		"html5",
		"css3",
		"nodedotjs",
		"express",
		"nextdotjs",
		"prisma",
		"amazonaws",
		"postgresql",
		"firebase",
		"nginx",
		"vercel",
		"testinglibrary",
		"jest",
		"cypress",
		"docker",
		"git",
		"jira",
		"github",
		"gitlab",
		"visualstudiocode",
		"androidstudio",
		"sonarqube",
		"figma",
	];

	let images = $state(slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`));
</script>

<div class="relative flex size-full items-center justify-center overflow-hidden">
	<IconCloud {images} />
</div>
