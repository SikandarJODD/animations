import type { Component } from "svelte";
import April21_26 from "./content/April21-26.svelte";
import April18_26 from "./content/April18-26.svelte";

export type ChangelogEntry = {
	id: string;
	component: Component;
};

export const changelogEntries: ChangelogEntry[] = [
	{
		id: "2026-04-21",
		component: April21_26,
	},
	{
		id: "2026-04-18",
		component: April18_26,
	},
];
