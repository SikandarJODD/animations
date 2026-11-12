import { seo_config } from "#lib/config/seo.js";
import type { RequestHandler } from "./$types";

export const prerender = true;

const pageModules = import.meta.glob("/src/routes/**/+page.svelte");
const excludedRoutes = new Set([
	"/demo",
	"/magic/docs/components/confetti",
	"/magic/docs/components/shiny-button",
	"/magic/docs/components/stagger-text",
	"/magic/docs/components/terminal",
]);

function routeFromFile(file: string): string | null {
	const routeFile = file.slice("/src/routes".length, -"/+page.svelte".length);
	const segments = routeFile
		.split("/")
		.filter((segment) => segment && !(segment.startsWith("(") && segment.endsWith(")")));

	if (segments.some((segment) => segment.includes("["))) return null;

	return segments.length ? `/${segments.join("/")}` : "/";
}

function escapeXml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

const routes = Object.keys(pageModules)
	.map(routeFromFile)
	.filter((route): route is string => route !== null && !excludedRoutes.has(route))
	.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

export const GET: RequestHandler = () => {
	const urls = routes
		.map((route) => {
			const location = new URL(route, `${seo_config.url}/`).href;
			return `  <url>\n    <loc>${escapeXml(location)}</loc>\n  </url>`;
		})
		.join("\n");

	const sitemap = [
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		urls,
		"</urlset>",
		"",
	].join("\n");

	return new Response(sitemap, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=0, s-maxage=3600",
		},
	});
};
