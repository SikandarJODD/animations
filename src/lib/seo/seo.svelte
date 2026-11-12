<script lang="ts">
	import { page } from "$app/state";
	import { seo_config } from "#lib/config/seo.js";
	import { github_repo } from "#lib/config/repo.js";
	import type { SEO } from "#lib/types/seo.js";
	import { JsonLd, MetaTags } from "svelte-meta-tags";

	const unpublishedRoutes = new Set([
		"/magic/docs/components/confetti",
		"/magic/docs/components/shiny-button",
		"/magic/docs/components/stagger-text",
		"/magic/docs/components/terminal",
	]);

	function titleCaseSlug(slug: string) {
		return slug
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}

	function inferPageType(pathname: string): NonNullable<SEO["pageType"]> {
		if (pathname.startsWith("/magic/docs/components/")) return "component";
		if (pathname.startsWith("/spell/") && pathname !== "/spell/introduction")
			return "component";
		if (pathname.startsWith("/fancy/") && pathname !== "/fancy/introduction")
			return "component";
		return "article";
	}

	function inferBreadcrumbs(pathname: string, title: string) {
		const home = { name: "Svelte Animations", path: "/" };
		if (pathname.startsWith("/magic/docs/components/")) {
			return [
				home,
				{ name: "Svelte Magic UI", path: "/magic" },
				{ name: "Documentation", path: "/magic/docs" },
				{ name: title, path: pathname },
			];
		}
		if (pathname.startsWith("/spell/") && pathname !== "/spell/introduction") {
			return [
				home,
				{ name: "Svelte Spell UI", path: "/spell" },
				{ name: title, path: pathname },
			];
		}
		if (pathname.startsWith("/fancy/") && pathname !== "/fancy/introduction") {
			return [
				home,
				{ name: "Svelte Fancy Components", path: "/fancy" },
				{ name: title, path: pathname },
			];
		}

		const labels: Record<string, string> = {
			magic: "Svelte Magic UI",
			docs: "Documentation",
			components: "Components",
			spell: "Svelte Spell UI",
			fancy: "Svelte Fancy Components",
		};
		const segments = pathname.split("/").filter(Boolean);
		return [
			home,
			...segments.map((segment, index) => ({
				name:
					index === segments.length - 1
						? title
						: (labels[segment] ?? titleCaseSlug(segment)),
				path: `/${segments.slice(0, index + 1).join("/")}`,
			})),
		];
	}

	type Props = SEO;
	let {
		title,
		description,
		titleTemplate = seo_config.title_template,
		keywords,
		canonicalPath,
		robots = "index,follow",
		siteName = seo_config.site_name,
		socialTitle,
		openGraphType,
		author = "Sikandar Bhide",
		images,
		pageType,
		breadcrumbs,
		structuredData,
	}: Props = $props();

	let canonical = $derived(new URL(canonicalPath ?? page.url.pathname, seo_config.url).href);
	let resolvedRobots = $derived(
		unpublishedRoutes.has(page.url.pathname) ? "noindex,nofollow" : robots
	);
	let resolvedPageType = $derived(pageType ?? inferPageType(page.url.pathname));
	let resolvedTitle = $derived(
		resolvedPageType === "component" && !/svelte/i.test(title) ? `${title} for Svelte 5` : title
	);
	let resolvedDescription = $derived(
		resolvedPageType === "component" && !/\bsvelte\b/i.test(description)
			? `${description.replace(/\.$/, "")} for Svelte 5.`
			: description
	);
	let resolvedSocialTitle = $derived(socialTitle ?? resolvedTitle);
	let resolvedOpenGraphType = $derived(
		openGraphType ??
			(resolvedPageType === "website" || resolvedPageType === "collection"
				? "website"
				: "article")
	);
	let resolvedImages = $derived(
		images ?? [
			{
				url: `${seo_config.url}/og.png`,
				width: 1200,
				height: 630,
				alt: `${resolvedTitle} preview`,
			},
		]
	);
	let primaryImage = $derived(resolvedImages[0]);
	let resolvedBreadcrumbs = $derived(
		breadcrumbs ?? inferBreadcrumbs(page.url.pathname, resolvedTitle)
	);
	let jsonLd = $derived.by(() => {
		if (resolvedRobots.includes("noindex")) return undefined;

		const breadcrumbId = `${canonical}#breadcrumb`;
		const webpageId = `${canonical}#webpage`;
		const graph: Record<string, unknown>[] = [
			{
				"@type": "Organization",
				"@id": `${seo_config.url}/#organization`,
				name: seo_config.site_name,
				url: seo_config.url,
				sameAs: [github_repo.url, "https://x.com/Sikandar_Bhide"],
			},
			{
				"@type": "WebSite",
				"@id": `${seo_config.url}/#website`,
				name: seo_config.site_name,
				url: seo_config.url,
				publisher: { "@id": `${seo_config.url}/#organization` },
				inLanguage: "en",
			},
			{
				"@type": resolvedPageType === "component" ? ["WebPage", "TechArticle"] : "WebPage",
				"@id": webpageId,
				url: canonical,
				name: resolvedTitle,
				headline: resolvedTitle,
				description: resolvedDescription,
				isPartOf: { "@id": `${seo_config.url}/#website` },
				breadcrumb: { "@id": breadcrumbId },
				author: { "@id": `${seo_config.url}/#organization` },
				publisher: { "@id": `${seo_config.url}/#organization` },
				image: primaryImage?.url,
				inLanguage: "en",
			},
			{
				"@type": "BreadcrumbList",
				"@id": breadcrumbId,
				itemListElement: resolvedBreadcrumbs.map((item, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: item.name,
					item: new URL(item.path, seo_config.url).href,
				})),
			},
		];

		if (resolvedPageType === "component") {
			graph.push({
				"@type": "SoftwareSourceCode",
				"@id": `${canonical}#source`,
				name: resolvedTitle,
				description: resolvedDescription,
				url: canonical,
				mainEntityOfPage: { "@id": webpageId },
				codeRepository: github_repo.url,
				programmingLanguage: { "@type": "ComputerLanguage", name: "Svelte" },
				runtimePlatform: "Svelte 5",
				license: `${github_repo.url}/blob/main/LICENSE`,
				author: { "@id": `${seo_config.url}/#organization` },
				isAccessibleForFree: true,
			});
		}

		if (structuredData) {
			graph.push(...(Array.isArray(structuredData) ? structuredData : [structuredData]));
		}

		return { "@graph": graph };
	});
</script>

<MetaTags
	title={resolvedTitle}
	{titleTemplate}
	{keywords}
	description={resolvedDescription}
	{canonical}
	robots={resolvedRobots}
	additionalRobotsProps={{
		maxSnippet: -1,
		maxImagePreview: "large",
		maxVideoPreview: -1,
	}}
	openGraph={{
		url: canonical,
		title: resolvedSocialTitle,
		description: resolvedDescription,
		type: resolvedOpenGraphType,
		locale: "en_US",
		images: resolvedImages,
		siteName,
	}}
	twitter={{
		creator: "@Sikandar_Bhide",
		site: "@Sikandar_Bhide",
		cardType: "summary_large_image",
		title: resolvedSocialTitle,
		description: resolvedDescription,
		image: primaryImage?.url,
		imageAlt: primaryImage?.alt,
	}}
	additionalMetaTags={[{ name: "author", content: author }]}
/>

{#if jsonLd}
	<JsonLd schema={jsonLd} />
{/if}
