<script lang="ts">
	import { QRCode } from "#lib/components/spell/qrcode/index.js";
</script>

<div
	class="dark:border-input w-[140px] rounded-lg p-2 shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)] dark:border [&_svg]:h-auto [&_svg]:w-full"
>
	<QRCode value="https://sv-agentation.com" size={140} />
</div>
