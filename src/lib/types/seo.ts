export type SEO = {
	title: string;
	description: string;
	keywords?: string[];
	titleTemplate?: string;
	images?: {
		url: string;
		width?: number;
		height?: number;
		alt?: string;
	}[];
};
