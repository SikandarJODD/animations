export type SEO = {
	title: string;
	description: string;
	keywords?: string[];
	titleTemplate?: string;
	canonicalPath?: string;
	robots?: string;
	siteName?: string;
	socialTitle?: string;
	openGraphType?: "website" | "article";
	author?: string;
	images?: {
		url: string;
		width?: number;
		height?: number;
		alt?: string;
	}[];
	pageType?: "website" | "collection" | "article" | "component";
	breadcrumbs?: {
		name: string;
		path: string;
	}[];
	structuredData?: Record<string, unknown> | Record<string, unknown>[];
};
