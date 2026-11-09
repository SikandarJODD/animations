import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			// vitePlugin: {
			// 	inspector: {
			// 		toggleKeyCombo: "ctrl-shift",
			// 		holdMode: true,
			// 		showToggleButton: "always",
			// 		toggleButtonPos: "bottom-right",
			// 	},
			// },

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),

			// alias: {
			// 	"$magic/*": "./src/lib/components/magic/*",
			// 	"$spell/*": "./src/lib/components/spell/*",
			// 	"$fancy/*": "./src/lib/components/fancy/*",
			// 	"$luxe/*": "./src/lib/components/luxe/*",
			// 	"$aceternity/*": "./src/lib/components/aceternity/*",
			// 	$ui: "./src/lib/components/ui",
			// 	$icons: "./src/lib/components/icons",
			// },
		}),
	],
});
