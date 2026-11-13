import type { Preview, SpotifyUrlInfoModule } from "spotify-url-info";
import type { RequestHandler } from "./$types";

interface SpotifyPreviewResponse {
	title: string;
	artist: string;
	image: string;
	link: string;
	audio?: string;
}

interface SpotifyErrorResponse {
	error: string;
}

const previewRequestOptions: RequestInit = {
	headers: {
		"user-agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
		"accept-language": "en-US,en;q=0.9",
	},
};

function normalizeSpotifyUrl(url: string): string {
	return url.replace(/\/intl-[a-z]{2}\//i, "/");
}

function toPreviewResponse(preview: Preview): SpotifyPreviewResponse {
	return {
		title: preview.title,
		artist: preview.artist,
		image: preview.image ?? "",
		link: preview.link,
		audio: preview.audio,
	};
}

export const GET: RequestHandler = async ({ url, fetch }) => {
	const spotifyUrl = url.searchParams.get("url");

	if (!spotifyUrl) {
		return Response.json({ error: "URL is required" } satisfies SpotifyErrorResponse, {
			status: 400,
		});
	}

	try {
		const normalizedUrl = normalizeSpotifyUrl(spotifyUrl);
		const spotifyUrlInfoModule = (await import("spotify-url-info")) as unknown as {
			default?: SpotifyUrlInfoModule;
		} & SpotifyUrlInfoModule;
		const createSpotifyUrlInfo = spotifyUrlInfoModule.default ?? spotifyUrlInfoModule;
		const { getPreview } = createSpotifyUrlInfo(fetch);
		const preview = await getPreview(normalizedUrl, previewRequestOptions);

		return Response.json(toPreviewResponse(preview) satisfies SpotifyPreviewResponse);
	} catch (error) {
		if (error instanceof TypeError) {
			return Response.json({ error: error.message } satisfies SpotifyErrorResponse, {
				status: 400,
			});
		}

		return Response.json(
			{ error: "Failed to fetch Spotify data" } satisfies SpotifyErrorResponse,
			{ status: 500 }
		);
	}
};
