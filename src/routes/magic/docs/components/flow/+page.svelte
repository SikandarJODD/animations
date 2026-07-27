<script lang="ts">
	import ComponentDocPage from "$lib/components/docs/base/ComponentDocPage.svelte";
	import { data } from "./data";
</script>

<ComponentDocPage
	id={data.id}
	title={data.title}
	description={data.description}
	seo={data.seo}
	installPathPrefix="r"
	preview={data.preview}
	previewCode={data.previewCode}
	previewClass={data.previewClass}
	installCodeBlocks={data.installBlock?.installCode}
	installPackages={data.installBlock?.packages}
	installFolderStructure={data.installBlock?.folderStructure}
	installTailwindCode={data.installBlock?.tailwind}
	usage={data.usage}
	examples={data.examples}
	propsTables={data.props}
/>
