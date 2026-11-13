<script lang="ts">
	import { AnimatedBeam } from "#lib/components/magic/animated-beam/index.js";
	import Circle from "./circle.svelte";
	import OpenaiIcon from "./openai-icon.svelte";
	import UserIcon from "./user-icon.svelte";

	let containerRef: HTMLDivElement | null = $state(null);
	let div1Ref: HTMLDivElement | null = $state(null);
	let div2Ref: HTMLDivElement | null = $state(null);
</script>

<div
	class="relative flex min-w-70 items-center justify-center overflow-hidden p-10 md:min-w-125"
	bind:this={containerRef}
>
	<div class="flex size-full flex-col items-stretch justify-between gap-10">
		<div class="flex flex-row justify-between">
			<Circle bind:ref={div1Ref}>
				<UserIcon />
			</Circle>
			<Circle bind:ref={div2Ref}>
				<OpenaiIcon />
			</Circle>
		</div>
	</div>

	<AnimatedBeam duration={3} {containerRef} fromRef={div1Ref} toRef={div2Ref} reverse={true} />
</div>
