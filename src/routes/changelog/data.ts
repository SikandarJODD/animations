import type { Component } from "svelte";
import May11_26 from "./content/May11-26.svelte";
import May2_26 from "./content/May2-26.svelte";
import April21_26 from "./content/April21-26.svelte";
import April18_26 from "./content/April18-26.svelte";

export type ChangelogEntry = {
	id: string;
	component: Component;
};

export const changelogEntries: ChangelogEntry[] = [
	{
		id: "2026-05-11",
		component: May11_26,
	},
	{
		id: "2026-05-02",
		component: May2_26,
	},
	{
		id: "2026-04-21",
		component: April21_26,
	},
	{
		id: "2026-04-18",
		component: April18_26,
	},
];
