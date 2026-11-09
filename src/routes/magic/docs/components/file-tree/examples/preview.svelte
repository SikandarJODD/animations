<script lang="ts">
	import {
		Tree,
		Folder,
		File,
		CollapseButton,
		type TreeViewElement,
	} from "#lib/components/magic/file-tree/index.js";

	const ELEMENTS: TreeViewElement[] = [
		{
			id: "1",
			name: "src",
			children: [
				{
					id: "2",
					name: "lib",
					children: [
						{ id: "3", name: "index.ts" },
						{ id: "4", name: "utils.ts" },
					],
				},
				{
					id: "5",
					name: "routes",
					children: [
						{ id: "6", name: "+page.svelte" },
						{ id: "7", name: "+layout.svelte" },
					],
				},
			],
		},
		{
			id: "8",
			name: "package.json",
		},
		{
			id: "9",
			name: "README.md",
		},
	];
</script>

<div
	class="bg-background relative mx-auto flex h-80 w-70 flex-col items-center justify-center overflow-hidden rounded-lg border md:m-6 md:mx-auto"
>
	<Tree
		class="bg-background mx-auto overflow-hidden rounded-md p-4"
		initialSelectedId="7"
		initialExpandedItems={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
		elements={ELEMENTS}
	>
		<Folder element="src" value="1">
			<Folder value="2" element="app">
				<File value="3">
					<p>layout.tsx</p>
				</File>
				<File value="4">
					<p>page.tsx</p>
				</File>
			</Folder>
			<Folder value="5" element="components">
				<Folder value="6" element="ui">
					<File value="7">
						<p>button.tsx</p>
					</File>
				</Folder>
				<File value="8">
					<p>header.tsx</p>
				</File>
				<File value="9">
					<p>footer.tsx</p>
				</File>
			</Folder>
			<Folder value="10" element="lib">
				<File value="11">
					<p>utils.ts</p>
				</File>
			</Folder>
		</Folder>
	</Tree>
</div>
