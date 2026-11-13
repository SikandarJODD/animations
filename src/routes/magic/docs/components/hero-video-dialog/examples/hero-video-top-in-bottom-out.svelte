<script lang="ts">
	import { HeroVideoDialog } from "#lib/components/magic/hero-video-dialog/index.js";
</script>

<div>
	<div class="relative">
		<HeroVideoDialog
			class="block dark:hidden"
			animationStyle="top-in-bottom-out"
			videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
			thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
			thumbnailAlt="Hero Video"
		/>
		<HeroVideoDialog
			class="hidden dark:block"
			animationStyle="top-in-bottom-out"
			videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
			thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
			thumbnailAlt="Hero Video"
		/>
	</div>
</div>

<style>
</style>
