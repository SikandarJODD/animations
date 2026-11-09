<script lang="ts">
	import { QRCode } from "#lib/components/spell/qrcode/index.js";
</script>

<div class="flex flex-wrap items-center justify-center gap-6">
	<div
		class="dark:border-input w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode
			value="https://sv-blocks.vercel.app"
			size={140}
			fgColor="#c2410c"
			bgColor="var(--background)"
		/>
	</div>
	<div
		class="dark:border-input w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode
			value="https://sv-efferd.pages.dev"
			size={140}
			fgColor="#1d4ed8"
			bgColor="var(--background)"
		/>
	</div>
	<div
		class="dark:border-input w-[105px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] md:w-[140px] dark:border [&_svg]:h-auto [&_svg]:w-full"
	>
		<QRCode
			value="https://svelte-ai-elements.vercel.app"
			size={140}
			fgColor="#15803d"
			bgColor="var(--background)"
		/>
	</div>
</div>
