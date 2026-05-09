<script lang="ts">
	import ComponentDocPage from "$lib/components/docs/base/ComponentDocPage.svelte";
	import { data } from "./data";
</script>

<ComponentDocPage
	id={data.id}
	title={data.title}
	description={data.description}
	seo={data.seo}
	preview={data.preview}
	previewCode={data.previewCode}
	installCodeBlocks={data.installBlock?.installCode}
	installPackages={data.installBlock?.packages}
	installFolderStructure={data.installBlock?.folderStructure}
	installTailwindCode={data.installBlock?.tailwind}
	examples={data.examples}
	propsTables={data.props}
	descriptionClass="max-w-xl"
/>
