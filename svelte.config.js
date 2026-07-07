import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			"magic/*": "./src/lib/components/magic/*",
			"spell/*": "./src/lib/components/spell/*",
			"fancy/*": "./src/lib/components/fancy/*",
			"luxe/*": "./src/lib/components/luxe/*",
			"aceternity/*": "./src/lib/components/aceternity/*"
		},
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: "ctrl-shift",
			holdMode: true,
			showToggleButton: "always",
			toggleButtonPos: "bottom-right",
		},
	},
};

export default config;
