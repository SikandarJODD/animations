<script>
	import Meteors from "#lib/components/magic/meteors/meteors.svelte";
</script>

<div
	class="bg-background relative flex h-fit w-full max-w-lg items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl"
>
	<Meteors number={30} />
	<p
		class="z-10 bg-linear-to-br from-white to-blue-900/40 bg-clip-text text-center text-5xl font-semibold tracking-tight whitespace-pre-wrap text-transparent"
	>
		Meteors
	</p>
</div>
