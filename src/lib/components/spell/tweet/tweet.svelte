<script lang="ts">
	import { browser } from "$app/environment";
	import { cn } from "$lib/utils.js";
	import XIcon from "$lib/components/icons/twitter.svelte";

	export type TweetEntity = {
		type: "text" | "url" | "hashtag" | "mention";
		text: string;
		href?: string;
	};

	export type TweetData = {
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
		photos?: { url: string; width: number; height: number }[];
		video?: {
			poster: string;
			variants: { src: string; type: string }[];
		};
	};

	export type TweetProps = {
		id: string;
		showDate?: boolean;
		showLikeButton?: boolean;
		showCopyLink?: boolean;
		class?: string;
	};

	let {
		id,
		showDate = true,
		showLikeButton = true,
		showCopyLink = true,
		class: className,
	}: TweetProps = $props();

	let data = $state<TweetData | null>(null);
	let isLoading = $state(true);
	let hasError = $state(false);
	let isCopied = $state(false);
	let requestVersion = 0;

	$effect(() => {
		if (!browser) return;

		const currentId = id.trim();
		const currentRequest = ++requestVersion;
		const controller = new AbortController();

		data = null;
		hasError = false;
		isLoading = true;

		if (!currentId) {
			hasError = true;
			isLoading = false;
			return () => controller.abort();
		}

		void (async () => {
			try {
				const response = await fetch(`/api/tweet/${encodeURIComponent(currentId)}`, {
					signal: controller.signal,
				});

				if (controller.signal.aborted || currentRequest !== requestVersion) return;
				if (!response.ok) throw new Error(`HTTP ${response.status}`);

				const result = (await response.json()) as TweetData | { error: string };

				if (controller.signal.aborted || currentRequest !== requestVersion) return;
				if ("error" in result) throw new Error(result.error);

				data = result;
			} catch {
				if (controller.signal.aborted || currentRequest !== requestVersion) return;
				hasError = true;
			} finally {
				if (controller.signal.aborted || currentRequest !== requestVersion) return;
				isLoading = false;
			}
		})();

		return () => controller.abort();
	});

	function formatNumber(num: number): string {
		if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
		if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
		return num.toString();
	}

	function formatDate(dateString: string): string {
		const date = new Date(dateString);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		const hour12 = hours % 12 || 12;
		const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		return `${hour12}:${minutes.toString().padStart(2, "0")} ${ampm} · ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
	}

	function handleCopyLink() {
		if (!data) return;
		navigator.clipboard.writeText(data.url).catch(() => {});
		isCopied = true;
		setTimeout(() => (isCopied = false), 1500);
	}

	function getBestVideoSource(video: TweetData["video"]) {
		if (!video?.variants?.length) return null;
		const mp4 = video.variants
			.filter((v) => v.type === "video/mp4")
			.sort((a, b) => {
				const res = (url: string) => {
					const m = url.match(/\/(\d+)x(\d+)\//);
					return m ? parseInt(m[1]) * parseInt(m[2]) : 0;
				};
				return res(b.src) - res(a.src);
			});
		return mp4[0] ?? video.variants[0];
	}

	const cardClass =
		"w-full max-w-[590px] rounded-xl p-4 dark:border dark:border-muted not-dark:shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)]";
</script>

{#if isLoading}
	<div class={cn(cardClass, className)}>
		<div class="flex items-center gap-2">
			<div class="size-[38px] shrink-0 animate-pulse rounded-full bg-muted"></div>
			<div class="flex flex-col gap-1">
				<div class="h-4 w-24 animate-pulse rounded bg-muted"></div>
				<div class="h-3 w-16 animate-pulse rounded bg-muted"></div>
			</div>
		</div>
		<div class="mt-4 space-y-2">
			<div class="h-4 w-full animate-pulse rounded bg-muted"></div>
			<div class="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
		</div>
	</div>
{:else if hasError || !data}
	<div
		class={cn(
			"flex w-full max-w-[590px] flex-col items-center justify-center gap-2 rounded-xl p-6 text-muted-foreground dark:border dark:border-muted not-dark:shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)]",
			className,
		)}
	>
		<p class="text-sm">Tweet not found</p>
	</div>
{:else}
	{@const videoSource = getBestVideoSource(data.video)}
	<div class={cn(cardClass, className)}>
		<!-- Header -->
		<div class="flex items-start justify-between">
			<div class="flex items-center gap-2">
				<img
					src={data.user.profile_image_url}
					alt={data.user.name}
					loading="lazy"
					width={38}
					height={38}
					referrerpolicy="no-referrer"
					class="size-[38px] shrink-0 rounded-full object-cover"
				/>
				<div class="flex flex-col">
					<span class="flex items-center gap-1 text-[15px] font-semibold text-primary">
						{data.user.name}
						{#if data.user.verified || data.user.is_blue_verified}
							<svg
								viewBox="0 0 22 22"
								class="size-4 text-[#1C9BF1]"
								fill="currentColor"
								aria-label="Verified account"
								role="img"
							>
								<path
									d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
								/>
							</svg>
						{/if}
					</span>
					<span class="-mt-0.5 text-[13px] text-muted-foreground">@{data.user.screen_name}</span>
				</div>
			</div>
			<a
				href={data.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-primary"
				aria-label="View on X"
			>
				<XIcon class="size-4" />
			</a>
		</div>

		<!-- Body -->
		<p class="mt-3 whitespace-pre-wrap leading-6 text-primary">
			{#each data.entities as entity}
				{#if entity.type === "text"}
					{entity.text}
				{:else}
					<a
						href={entity.href}
						target="_blank"
						rel="noopener noreferrer"
						class="text-[#1C9BF1] hover:underline">{entity.text}</a
					>
				{/if}
			{/each}
		</p>

		<!-- Media -->
		{#if data.video && videoSource}
			<div class="mt-4">
				<video
					poster={data.video.poster}
					autoplay
					loop
					muted
					playsinline
					class="w-full rounded-lg"
				>
					<source src={videoSource.src} type={videoSource.type} />
				</video>
			</div>
		{:else if data.photos && data.photos.length > 0}
			<div
				class={cn(
					"mt-4 grid gap-1",
					data.photos.length === 1 ? "grid-cols-1" : "grid-cols-2",
				)}
			>
				{#each data.photos as photo, idx}
					<img
						src={photo.url}
						alt={`Photo ${idx + 1}`}
						loading="lazy"
						referrerpolicy="no-referrer"
						class={cn(
							"w-full rounded-lg object-cover",
							data.photos?.length === 3 && idx === 0 && "row-span-2",
						)}
					/>
				{/each}
			</div>
		{/if}

		<!-- Date -->
		{#if showDate && data.created_at}
			<div class="mt-4">
				<time class="text-sm text-muted-foreground" datetime={data.created_at}>
					{formatDate(data.created_at)}
				</time>
			</div>
		{/if}

		<!-- Footer actions -->
		{#if showLikeButton || showCopyLink}
			<div class="mt-2.5 flex gap-4 border-t border-muted pt-3.5">
				{#if showLikeButton}
					<a
						href={`https://x.com/intent/like?tweet_id=${data.id}`}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-1.5 text-muted-foreground"
					>
						<svg
							class="text-pink-600"
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M12.164,2c-1.195,.015-2.324,.49-3.164,1.306-.84-.815-1.972-1.291-3.178-1.306-2.53,.015-4.582,2.084-4.572,4.609,0,5.253,5.306,8.429,6.932,9.278,.256,.133,.537,.2,.818,.2s.562-.067,.817-.2c1.626-.848,6.933-4.024,6.933-9.275,.009-2.528-2.042-4.597-4.586-4.612Z"
							/>
						</svg>
						<span class="text-medium text-sm transition-colors hover:text-pink-600">
							{formatNumber(data.favorite_count)}
						</span>
					</a>
				{/if}
				{#if showCopyLink}
					<button
						onclick={handleCopyLink}
						class="flex cursor-pointer items-center gap-1.5 text-muted-foreground"
					>
						{#if isCopied}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4 text-emerald-500"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<polyline points="20 6 9 17 4 12" />
							</svg>
						{:else}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="size-4"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M9 17H7A5 5 0 0 1 7 7h2" />
								<path d="M15 7h2a5 5 0 1 1 0 10h-2" />
								<line x1="8" x2="16" y1="12" y2="12" />
							</svg>
						{/if}
						<span class="text-medium text-sm">Copy link</span>
					</button>
				{/if}
			</div>
		{/if}
	</div>
{/if}
