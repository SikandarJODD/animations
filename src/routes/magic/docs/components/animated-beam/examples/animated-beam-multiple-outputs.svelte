<script lang="ts">
	import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
	import Circle from "./circle.svelte";
	import GoogleDriveIcon from "./google-drive-icon.svelte";
	import GoogleDocsIcon from "./google-docs-icon.svelte";
	import WhatsappIcon from "./whatsapp-icon.svelte";
	import MessengerIcon from "./messenger-icon.svelte";
	import NotionIcon from "./notion-icon.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
	let div3Ref: HTMLDivElement | null = $state(null);
	let div4Ref: HTMLDivElement | null = $state(null);
	let div5Ref: HTMLDivElement | null = $state(null);
	let div6Ref: HTMLDivElement | null = $state(null);
	let div7Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
	bind:this={containerRef}
>
	<div class="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
		<div class="flex flex-col justify-center">
			<Circle bind:ref={div7Ref}>
				<UserIcon />
			</Circle>
		</div>
		<div class="flex flex-col justify-center">
			<Circle bind:ref={div6Ref} class="size-16">
				<OpenaiIcon />
			</Circle>
		</div>
		<div class="flex flex-col justify-center gap-2">
			<Circle bind:ref={div1Ref}>
				<GoogleDriveIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<GoogleDocsIcon />
			</Circle>
			<Circle bind:ref={div3Ref}>
				<WhatsappIcon />
			</Circle>
			<Circle bind:ref={div4Ref}>
				<MessengerIcon />
			</Circle>
			<Circle bind:ref={div5Ref}>
				<NotionIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam {containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} />
	<AnimatedBeam {containerRef} fromRef={div6Ref} toRef={div7Ref} duration={3} />
</div>
