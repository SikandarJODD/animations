import ConnectorsSvelteRaw from "$lib/components/magic/flow/connectors.svelte?raw";
import ConnectorsTsRaw from "$lib/components/magic/flow/connectors.ts?raw";
import DescendantsSvelteTsRaw from "$lib/components/magic/flow/descendants.svelte.ts?raw";
import DiagramContextSvelteTsRaw from "$lib/components/magic/flow/diagram-context.svelte.ts?raw";
import FlowAnchorSvelteRaw from "$lib/components/magic/flow/flow-anchor.svelte?raw";
import FlowNodeListSvelteRaw from "$lib/components/magic/flow/flow-node-list.svelte?raw";
import FlowNodeSvelteRaw from "$lib/components/magic/flow/flow-node.svelte?raw";
import FlowParallelSvelteRaw from "$lib/components/magic/flow/flow-parallel.svelte?raw";
import FlowRootSvelteRaw from "$lib/components/magic/flow/flow-root.svelte?raw";
import IndexTsRaw from "$lib/components/magic/flow/index.ts?raw";
import NodeContextSvelteTsRaw from "$lib/components/magic/flow/node-context.svelte.ts?raw";
import RenderPropsTsRaw from "$lib/components/magic/flow/render-props.ts?raw";
import TypesTsRaw from "$lib/components/magic/flow/types.ts?raw";
import KumoCssRaw from "$lib/styles/kumo.css?raw";

import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "$lib/types/structure";
import type { SEO } from "$lib/types/seo";
import {
	Basic,
	BasicRaw,
	CenteredAlignment,
	CenteredAlignmentRaw,
	ComplexFlow,
	ComplexFlowRaw,
	CustomAnchorPoints,
	CustomAnchorPointsRaw,
	CustomNodeStyling,
	CustomNodeStylingRaw,
	DisabledNodes,
	DisabledNodesRaw,
	NestedNodeList,
	NestedNodeListRaw,
	ParallelNodeAdjustment,
	ParallelNodeAdjustmentRaw,
	PanningLargeDiagrams,
	PanningLargeDiagramsRaw,
	ParallelBranches,
	ParallelBranchesRaw,
	Simple,
	SimpleRaw,
	Vertical,
	VerticalRaw,
	VerticalParallel,
	VerticalParallelRaw,
} from "./examples";

export const meta: ComponentMeta = {
	id: "flow",
	title: "Flow",
	description:
		"A group of components for building directed flow diagrams with nodes and connectors. Inspired by Kumo UI.",
	category: "magic",
};

const seo: SEO = {
	title: "Flow",
	description:
		"A group of components for building directed flow diagrams with nodes and connectors. Inspired by Kumo UI.",
	keywords: ["Svelte", "Flow", "Flow Diagram", "Svelte Kumo UI", "Diagram"],
};

const installBlock: InstallComponentDocs = {
	packages: [],
	installCode: [
		{
			filename: "connectors.svelte",
			filecode: ConnectorsSvelteRaw,
			lang: "svelte",
			isExpand: true,
		},
		{ filename: "connectors.ts", filecode: ConnectorsTsRaw, lang: "typescript" },
		{ filename: "descendants.svelte.ts", filecode: DescendantsSvelteTsRaw, lang: "typescript" },
		{
			filename: "diagram-context.svelte.ts",
			filecode: DiagramContextSvelteTsRaw,
			lang: "typescript",
		},
		{ filename: "flow-anchor.svelte", filecode: FlowAnchorSvelteRaw, lang: "svelte" },
		{ filename: "flow-node-list.svelte", filecode: FlowNodeListSvelteRaw, lang: "svelte" },
		{ filename: "flow-node.svelte", filecode: FlowNodeSvelteRaw, lang: "svelte" },
		{ filename: "flow-parallel.svelte", filecode: FlowParallelSvelteRaw, lang: "svelte" },
		{ filename: "flow-root.svelte", filecode: FlowRootSvelteRaw, lang: "svelte" },
		{ filename: "index.ts", filecode: IndexTsRaw, lang: "typescript" },
		{
			filename: "node-context.svelte.ts",
			filecode: NodeContextSvelteTsRaw,
			lang: "typescript",
		},
		{ filename: "render-props.ts", filecode: RenderPropsTsRaw, lang: "typescript" },
		{ filename: "types.ts", filecode: TypesTsRaw, lang: "typescript" },
	],
	tailwind: {
		filename: "src/lib/styles/kumo.css",
		filecode: KumoCssRaw,
		lang: "css",
	},
	folderStructure: `src/
└── lib/
    └── components/
        └── magic/
            └── flow/
                ├── connectors.svelte
                ├── connectors.ts
                ├── descendants.svelte.ts
				├── diagram-context.svelte.ts
				├── flow-anchor.svelte
				├── flow-node-list.svelte
				├── flow-node.svelte
				├── flow-parallel.svelte
				├── flow-root.svelte
				├── node-context.svelte.ts
				├── render-props.ts
				├── types.ts
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Basic,
	previewCode: {
		filename: "preview.svelte",
		filecode: BasicRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [
		{
			name: "Sequential Flow",
			preview: Simple,
			code: {
				filename: "simple.svelte",
				filecode: SimpleRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Parallel Branches",
			preview: ParallelBranches,
			code: {
				filename: "parallel-branches.svelte",
				filecode: ParallelBranchesRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Vertical Orientation",
			preview: Vertical,
			code: {
				filename: "vertical.svelte",
				filecode: VerticalRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Custom Node Styling",
			preview: CustomNodeStyling,
			code: {
				filename: "custom-node-styling.svelte",
				filecode: CustomNodeStylingRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Centered Alignment",
			preview: CenteredAlignment,
			code: {
				filename: "centered-alignment.svelte",
				filecode: CenteredAlignmentRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Complex Flow",
			preview: ComplexFlow,
			code: {
				filename: "complex-flow.svelte",
				filecode: ComplexFlowRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Custom Anchor Points",
			preview: CustomAnchorPoints,
			code: {
				filename: "custom-anchor-points.svelte",
				filecode: CustomAnchorPointsRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Panning Large Diagrams",
			preview: PanningLargeDiagrams,
			code: {
				filename: "panning-large-diagrams.svelte",
				filecode: PanningLargeDiagramsRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Disabled Nodes",
			preview: DisabledNodes,
			code: {
				filename: "disabled-nodes.svelte",
				filecode: DisabledNodesRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Parallel Node Alignment",
			preview: ParallelNodeAdjustment,
			code: {
				filename: "parallel-node-adjustment.svelte",
				filecode: ParallelNodeAdjustmentRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Nested Node Lists in Parallel",
			preview: NestedNodeList,
			code: {
				filename: "nested-node-list.svelte",
				filecode: NestedNodeListRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
		{
			name: "Vertical Parallel",
			preview: VerticalParallel,
			code: {
				filename: "vertical-parallel.svelte",
				filecode: VerticalParallelRaw,
				lang: "svelte",
				hideLines: true,
			},
		},
	],
	seo,
	// props: [],
};
