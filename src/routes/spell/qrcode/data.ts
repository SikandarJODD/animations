import QRCodeRaw from "#lib/components/spell/qrcode/qrcode.svelte?raw";
import IndexTsRaw from "#lib/components/spell/qrcode/index.ts?raw";
import type { ComponentDoc, ComponentMeta, InstallComponentDocs } from "#lib/types/structure.js";
import type { SEO } from "#lib/types/seo.js";
import Preview from "./examples/preview.svelte";
import PreviewCodeRaw from "./examples/preview.svelte?raw";
import CustomColorsExample from "./examples/custom-colors-example.svelte";
import CustomColorsExampleRaw from "./examples/custom-colors-example.svelte?raw";

export const meta: ComponentMeta = {
	id: "qrcode",
	title: "QRCode",
	description: "QR code generator with rounded finder patterns and dot-style data modules.",
	category: "spell",
};

const seo: SEO = {
	title: "QRCode",
	description:
		"Learn how to use the QRCode spell component in Svelte, including size control, custom colors, and error-correction tuning.",
	keywords: ["Svelte", "QRCode", "Spell", "Svelte Animations", "QR", "qrcode"],
};

const installBlock: InstallComponentDocs = {
	installCode: [
		{
			filename: "qrcode.svelte",
			filecode: QRCodeRaw,
			lang: "svelte",
			isExpand: true,
		},
		{
			filename: "index.ts",
			filecode: IndexTsRaw,
			lang: "typescript",
		},
	],
	packages: ["qrcode"],
	folderStructure: `src/
└── lib/
    └── components/
        └── spell/
            └── qrcode/
                ├── qrcode.svelte
                └── index.ts`,
};

export const data: ComponentDoc = {
	...meta,
	preview: Preview,
	previewCode: {
		filename: "preview.svelte",
		filecode: PreviewCodeRaw,
		lang: "svelte",
		hideLines: true,
	},
	installBlock,
	examples: [
		{
			name: "Custom Colors",
			description:
				"Override the foreground, background, size, and error-correction level to fit branded tickets, packaging, or event cards.",
			preview: CustomColorsExample,
			code: {
				filename: "custom-colors-example.svelte",
				filecode: CustomColorsExampleRaw,
				lang: "svelte",
			},
		},
	],
	seo,
	props: [
		{
			props: [
				{
					name: "value",
					type: "string",
					required: true,
					description: "The encoded text or URL used to generate the QR code.",
				},
				{
					name: "size",
					type: "number",
					default: "268",
					description: "Controls the rendered width and height of the SVG in pixels.",
				},
				{
					name: "fgColor",
					type: "string",
					default: '"var(--foreground)"',
					description:
						"Sets the foreground color used for the modules and finder patterns.",
				},
				{
					name: "bgColor",
					type: "string",
					default: '"var(--background)"',
					description: "Sets the background color of the QR surface.",
				},
				{
					name: "errorCorrectionLevel",
					type: '"L" | "M" | "Q" | "H"',
					default: '"M"',
					description: "Controls the QR error correction level passed to the generator.",
				},
				{
					name: "class",
					type: "ClassValue",
					default: "''",
					description: "Custom classes merged onto the root SVG element.",
				},
			],
		},
	],
};
