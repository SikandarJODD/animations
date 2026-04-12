<script lang="ts">
	import { cn } from "$lib/utils.js";

	export type TweetCardProps = {
		authorName: string;
		authorHandle: string;
		authorAvatar?: string;
		text: string;
		date?: string;
		likes?: number;
		retweets?: number;
		verified?: boolean;
		url?: string;
		class?: string;
	};

	let {
		authorName,
		authorHandle,
		authorAvatar,
		text,
		date,
		likes,
		retweets,
		verified = false,
		url,
		class: className,
	}: TweetCardProps = $props();

	let isCopied = $state(false);

	function formatNumber(num: number): string {
		if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
		if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
		return num.toString();
	}

	function handleCopyLink() {
		const link = url ?? `https://x.com/${authorHandle}`;
		navigator.clipboard.writeText(link).catch(() => {});
		isCopied = true;
		setTimeout(() => (isCopied = false), 1500);
	}

	// Derive initials for avatar fallback
	const initials = $derived(
		authorName
			.split(" ")
			.map((w) => w[0])
			.join("")
			.slice(0, 2)
			.toUpperCase(),
	);
</script>

<div
	class={cn(
		"w-full max-w-[590px] rounded-xl p-4 dark:border dark:border-muted not-dark:shadow-[0_0_0_1px_rgba(0,0,0,.08),_0px_2px_2px_rgba(0,0,0,.04)]",
		className,
	)}
>
	<!-- Header -->
	<div class="flex items-start justify-between">
		<div class="flex items-center gap-2">
			{#if authorAvatar}
				<img
					src={authorAvatar}
					alt={authorName}
					loading="lazy"
					width={38}
					height={38}
					class="size-[38px] shrink-0 rounded-full object-cover"
				/>
			{:else}
				<div
					class="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-muted text-[13px] font-semibold text-muted-foreground"
				>
					{initials}
				</div>
			{/if}
			<div class="flex flex-col">
				<span class="flex items-center gap-1 text-[15px] font-semibold text-primary">
					{authorName}
					{#if verified}
						<!-- Verified badge -->
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
				<span class="-mt-0.5 text-[13px] text-muted-foreground">@{authorHandle}</span>
			</div>
		</div>
		<!-- X / Twitter icon -->
		<a
			href={url ?? `https://x.com/${authorHandle}`}
			target="_blank"
			rel="noopener noreferrer"
			class="text-primary"
			aria-label="View on X"
		>
			<svg
				class="size-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"
				/>
			</svg>
		</a>
	</div>

	<!-- Body -->
	<p class="mt-3 leading-6 text-primary">{text}</p>

	<!-- Date -->
	{#if date}
		<div class="mt-4">
			<time class="text-sm text-muted-foreground">{date}</time>
		</div>
	{/if}

	<!-- Footer actions -->
	<div class="mt-2.5 flex gap-4 border-t border-muted pt-3.5">
		{#if likes !== undefined}
			<a
				href={url
					? `https://x.com/intent/like?tweet_id=${url.split("/").pop()}`
					: `https://x.com/${authorHandle}`}
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
					{formatNumber(likes)}
				</span>
			</a>
		{/if}

		<button
			onclick={handleCopyLink}
			class="flex cursor-pointer items-center gap-1.5 text-muted-foreground"
		>
			{#if isCopied}
				<!-- Check icon -->
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
				<!-- Link2 icon -->
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
	</div>
</div>
