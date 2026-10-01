import type { LucideIcon } from "@lucide/svelte";
import type { Component } from "svelte";
import type { BadgeVariant } from "$lib/components/spell/badge";

export type LinkItemType = {
	name: string;
	description?: string;
	icon?: LucideIcon | Component;
	badge?: string;
	badgeVariant?: BadgeVariant;
	href: string;
};

export type NavType = {
	name: string;
	description?: string;
	icon?: LucideIcon | Component;
	href: string;
	sub?: LinkItemType[];
};

export type ProjectItemType = {
	title: string;
	description: string;
	url: string;
	github: string;
	slug: string;
	accent?: "amber";
};
