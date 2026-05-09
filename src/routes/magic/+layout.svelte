<script lang="ts">
	let { children } = $props();
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<Sidebar.Provider>
	<AppSidebar />
	<div class="flex-1 min-w-0">
		{@render children()}
	</div>
</Sidebar.Provider>
