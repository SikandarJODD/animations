import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

function getToken(id: string): string {
	return ((Number(id) / 1e15) * Math.PI).toString(36).replace(/(0+|\.)/g, "");
}

const FEATURES =
	"tfw_timeline_list:;tfw_follower_count_sunset:true;tfw_tweet_edit_backend:on;tfw_refsrc_session:on;tfw_show_business_verified_badge:on;tfw_duplicate_counts_bump:5;tfw_show_blue_verified_badge:on;tfw_legacy_timeline_sunset:true;tfw_show_gov_verified_badge:on;tfw_tweet_edit_frontend:on";

export interface TweetEntity {
	type: "text" | "url" | "hashtag" | "mention";
	text: string;
	href?: string;
}

export interface TweetPhoto {
	url: string;
	width: number;
	height: number;
}

export interface TweetVideoVariant {
	src: string;
	type: string;
}

export interface TweetData {
	id: string;
	url: string;
	created_at: string;
	favorite_count: number;
	user: {
		name: string;
		screen_name: string;
		profile_image_url: string;
		verified: boolean;
		is_blue_verified: boolean;
	};
	entities: TweetEntity[];
	photos?: TweetPhoto[];
	video?: {
		poster: string;
		variants: TweetVideoVariant[];
	};
}

interface ErrorResponse {
	error: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildEntities(text: string, rawEntities: any, mediaUrls: Set<string>): TweetEntity[] {
	type Seg = { start: number; end: number; entity: TweetEntity | null };
	const segs: Seg[] = [];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	for (const url of (rawEntities?.urls ?? []) as any[]) {
		segs.push({
			start: url.indices[0],
			end: url.indices[1],
			entity: mediaUrls.has(url.url)
				? null
				: { type: "url", text: url.display_url, href: url.expanded_url },
		});
	}

	// entities.media holds the t.co media URL with its text indices — always skip it.
	// The syndication API uses inclusive end indices here, so use end+1 to consume
	// the final character of the URL (otherwise it leaks as a stray character).
	// +1 is safe even if indices are exclusive: the extra char is whitespace that gets trimmed.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	for (const m of (rawEntities?.media ?? []) as any[]) {
		if (m.indices) {
			segs.push({ start: m.indices[0], end: m.indices[1] + 1, entity: null });
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	for (const ht of (rawEntities?.hashtags ?? []) as any[]) {
		segs.push({
			start: ht.indices[0],
			end: ht.indices[1],
			entity: {
				type: "hashtag",
				text: `#${ht.text}`,
				href: `https://x.com/hashtag/${encodeURIComponent(ht.text)}`,
			},
		});
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	for (const mn of (rawEntities?.user_mentions ?? []) as any[]) {
		segs.push({
			start: mn.indices[0],
			end: mn.indices[1],
			entity: {
				type: "mention",
				text: `@${mn.screen_name}`,
				href: `https://x.com/${mn.screen_name}`,
			},
		});
	}

	segs.sort((a, b) => a.start - b.start);

	const result: TweetEntity[] = [];
	let pos = 0;

	for (const seg of segs) {
		if (seg.start > pos) {
			result.push({ type: "text", text: text.slice(pos, seg.start) });
		}
		if (seg.entity !== null) result.push(seg.entity);
		pos = seg.end;
	}

	const remaining = text.slice(pos).trim();
	if (remaining) result.push({ type: "text", text: remaining });

	// Trim trailing whitespace from last text entity (left behind by stripped media URLs)
	if (result.length > 0) {
		const last = result[result.length - 1];
		if (last.type === "text") {
			const trimmed = last.text.trimEnd();
			if (trimmed) result[result.length - 1] = { ...last, text: trimmed };
			else result.pop();
		}
	}

	return result;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildTweetData(raw: any): TweetData {
	const extMedia: any[] = raw.mediaDetails ?? []; // eslint-disable-line @typescript-eslint/no-explicit-any

	const mediaUrls = new Set<string>();
	for (const m of extMedia) {
		if (m.url) mediaUrls.add(m.url);
	}

	const text: string = raw.full_text ?? raw.text ?? "";
	const entities = buildEntities(text, raw.entities, mediaUrls);

	const photos: TweetPhoto[] = [];
	let video: TweetData["video"];

	for (const m of extMedia) {
		if (m.type === "photo") {
			// Append quality params — the bare media_url_https is small/low-res
			const baseUrl: string = m.media_url_https ?? "";
			const photoUrl = baseUrl.includes("?")
				? baseUrl
				: `${baseUrl}?format=jpg&name=large`;
			photos.push({
				url: photoUrl,
				width: m.original_info?.width ?? 0,
				height: m.original_info?.height ?? 0,
			});
		} else if ((m.type === "video" || m.type === "animated_gif") && !video) {
			video = {
				poster: m.media_url_https,
				variants: (m.video_info?.variants ?? []).map(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(v: any) => ({ src: v.url, type: v.content_type }),
				),
			};
		}
	}

	const tweetId: string = raw.id_str ?? String(raw.id ?? "");
	const screenName: string = raw.user?.screen_name ?? "";

	return {
		id: tweetId,
		url: `https://x.com/${screenName}/status/${tweetId}`,
		created_at: raw.created_at ?? "",
		favorite_count: raw.favorite_count ?? 0,
		user: {
			name: raw.user?.name ?? "",
			screen_name: screenName,
			// Upgrade _normal (48×48) → _400x400 for crisp display
			profile_image_url: (raw.user?.profile_image_url_https ?? "").replace(
				/_normal\.(jpg|png|gif|webp)$/i,
				"_400x400.$1",
			),
			verified: raw.user?.verified ?? false,
			is_blue_verified: raw.user?.is_blue_verified ?? false,
		},
		entities,
		photos: photos.length > 0 ? photos : undefined,
		video,
	};
}

export const GET: RequestHandler = async ({ params, fetch }) => {
	const { id } = params;

	if (!id || !/^\d+$/.test(id)) {
		return json({ error: "Invalid tweet ID" } satisfies ErrorResponse, { status: 400 });
	}

	const token = getToken(id);
	const apiUrl = `https://cdn.syndication.twimg.com/tweet-result?id=${id}&lang=en&features=${encodeURIComponent(FEATURES)}&token=${token}`;

	try {
		const response = await fetch(apiUrl, {
			headers: {
				"user-agent":
					"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
				accept: "*/*",
				"accept-language": "en-US,en;q=0.9",
				origin: "https://platform.twitter.com",
				referer: "https://platform.twitter.com/",
			},
		});

		if (!response.ok) {
			if (response.status === 404) {
				return json({ error: "Tweet not found" } satisfies ErrorResponse, { status: 404 });
			}
			throw new Error(`HTTP ${response.status}`);
		}

		const raw = await response.json();

		if (!raw || raw.__typename === "TweetTombstone") {
			return json({ error: "Tweet not found" } satisfies ErrorResponse, { status: 404 });
		}

		return json(buildTweetData(raw) satisfies TweetData);
	} catch {
		return json({ error: "Failed to fetch tweet" } satisfies ErrorResponse, { status: 500 });
	}
};
