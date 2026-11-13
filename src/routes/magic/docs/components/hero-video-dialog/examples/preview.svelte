<script lang="ts">
	import { HeroVideoDialog } from "#lib/components/magic/hero-video-dialog/index.js";
</script>

<div class="relative">
	<HeroVideoDialog
		class="block dark:hidden"
		animationStyle="from-center"
		videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4?si=VgqpxuoBVCw2QLqT"
		thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
		thumbnailAlt="Hero Video"
	/>
	<HeroVideoDialog
		class="hidden dark:block"
		animationStyle="from-center"
		videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4?si=VgqpxuoBVCw2QLqT"
		thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
		thumbnailAlt="Hero Video"
	/>
</div>
