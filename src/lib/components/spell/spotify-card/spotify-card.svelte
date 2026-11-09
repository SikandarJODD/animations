<script lang="ts">
	import { browser } from "$app/env";
	import { cn, type WithElementRef } from "#lib/utils.js";
	import { onDestroy, untrack } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	interface SpotifyData {
		title: string;
		artist: string;
		image: string;
		link: string;
		audio?: string;
	}

	interface SpotifyErrorResponse {
		error: string;
	}

	type Props = WithElementRef<
		HTMLAttributes<HTMLDivElement> & {
			url: string;
		},
		HTMLDivElement
	>;

	let { ref = $bindable(null), url, class: className, ...restProps }: Props = $props();

	let data = $state<SpotifyData | null>(null);
	let isLoading = $state(true);
	let hasError = $state(false);
	let isPlaying = $state(false);
	let audio: HTMLAudioElement | null = null;
	let requestVersion = 0;
	let uniqueId = $props.id();

	let maskId = $derived(`${uniqueId}-mask`);
	let filterId0 = $derived(`${uniqueId}-filter0`);
	let filterId1 = $derived(`${uniqueId}-filter1`);
	let filterId2 = $derived(`${uniqueId}-filter2`);
	let filterId3 = $derived(`${uniqueId}-filter3`);
	let filterId4 = $derived(`${uniqueId}-filter4`);
	let filterId5 = $derived(`${uniqueId}-filter5`);
	let filterId6 = $derived(`${uniqueId}-filter6`);
	let filterId7 = $derived(`${uniqueId}-filter7`);
	let filterId8 = $derived(`${uniqueId}-filter8`);
	let filterId9 = $derived(`${uniqueId}-filter9`);

	function handleAudioEnded() {
		isPlaying = false;
	}

	function stopAudio() {
		if (audio) {
			audio.pause();
			audio.currentTime = 0;
			audio.removeEventListener("ended", handleAudioEnded);
			audio = null;
		}

		isPlaying = false;
	}

	async function handlePlayPause() {
		const previewUrl = data?.audio;

		if (!previewUrl || !browser) return;

		if (!audio || audio.src !== previewUrl) {
			stopAudio();
			audio = new Audio(previewUrl);
			audio.volume = 0.3;
			audio.addEventListener("ended", handleAudioEnded);
		}

		if (isPlaying) {
			audio.pause();
			isPlaying = false;
			return;
		}

		try {
			await audio.play();
			isPlaying = true;
		} catch {
			isPlaying = false;
		}
	}

	onDestroy(() => {
		untrack(() => stopAudio());
	});

	$effect(() => {
		data?.audio;
		untrack(() => stopAudio());
	});

	$effect(() => {
		if (!browser) return;

		const currentUrl = url.trim();
		const currentRequest = ++requestVersion;
		const controller = new AbortController();

		data = null;
		hasError = false;
		isLoading = true;
		untrack(() => stopAudio());

		if (!currentUrl) {
			hasError = true;
			isLoading = false;
			return () => controller.abort();
		}

		void (async () => {
			try {
				const response = await fetch(`/api/spotify?url=${encodeURIComponent(currentUrl)}`, {
					signal: controller.signal,
				});

				if (!response.ok) {
					throw new Error("Failed to fetch Spotify data");
				}

				const result = (await response.json()) as SpotifyData | SpotifyErrorResponse;

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

		return () => {
			controller.abort();
		};
	});
</script>

{#if isLoading}
	<div
		bind:this={ref}
		data-slot="spotify-card-skeleton"
		class={cn(
			"border-border bg-muted/50 relative flex h-full max-h-[100px] w-full items-stretch justify-center overflow-hidden rounded-2xl border p-3",
			className
		)}
		{...restProps}
	>
		<div
			class="bg-muted aspect-square w-full max-w-[75px] animate-pulse self-center rounded-lg"
		></div>
		<div class="z-10 flex w-full flex-col justify-end">
			<div class="flex flex-col items-end gap-1 pl-6">
				<div class="bg-muted h-4 w-24 animate-pulse rounded"></div>
				<div class="bg-muted h-4 w-16 animate-pulse rounded"></div>
			</div>
		</div>
	</div>
{:else if hasError || !data}
	<div
		bind:this={ref}
		data-slot="spotify-card-error"
		class={cn(
			"border-border bg-muted/50 text-muted-foreground flex h-[100px] w-full items-center justify-center rounded-2xl border p-6",
			className
		)}
		{...restProps}
	>
		<p class="text-sm">Failed to load Spotify data</p>
	</div>
{:else}
	<div
		bind:this={ref}
		data-slot="spotify-card"
		class={cn(
			"border-border relative flex h-full max-h-[100px] w-full items-stretch justify-center overflow-hidden rounded-2xl border p-3",
			className
		)}
		{...restProps}
	>
		<div
			class="pointer-events-none absolute top-1/2 left-1/2 z-0 block aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2"
		>
			<div class="pointer-events-none flex h-full opacity-100 select-none">
				<img
					src={data.image}
					alt=""
					class="absolute top-0 left-0 block h-full w-full blur-[50px] brightness-150"
				/>
				<div
					class="absolute top-0 left-0 h-full w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0,_rgba(0,_0,_0,_.8))]"
				></div>
			</div>
		</div>

		<button
			type="button"
			onclick={handlePlayPause}
			class={cn(
				"group relative z-[1] w-full max-w-[75px] self-center",
				data.audio ? "cursor-pointer" : "cursor-default"
			)}
			aria-label={data.audio
				? isPlaying
					? `Pause preview for ${data.title}`
					: `Play preview for ${data.title}`
				: `${data.title} cover art`}
		>
			<img
				src={data.image}
				alt={data.title}
				class={cn(
					"pointer-events-none relative z-[1] min-h-[75px] w-full min-w-[75px] rounded-lg object-cover shadow-md transition-transform duration-300 ease-out select-none",
					data.audio && "group-hover:-translate-x-0.5",
					isPlaying && "-translate-x-0.5"
				)}
			/>

			{#if data.audio}
				<div
					class={cn(
						"absolute top-1/2 left-1/2 -z-[1] size-[80%] -translate-y-1/2 transition-all duration-300",
						isPlaying
							? "translate-x-[-10%]"
							: "translate-x-[-50%] group-hover:translate-x-[-10%]"
					)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 110 110"
						class="size-full animate-spin"
						style={`animation-duration: 3s; animation-play-state: ${isPlaying ? "running" : "paused"};`}
						aria-hidden="true"
					>
						<circle cx="55" cy="55" r="55" fill="#000"></circle>
						<mask
							id={maskId}
							width="110"
							height="110"
							x="0"
							y="0"
							maskUnits="userSpaceOnUse"
							style="mask-type: alpha;"
							><circle cx="55" cy="55" r="55" fill="#000"></circle></mask
						>

						<g mask={`url(#${maskId})`}>
							<g filter={`url(#${filterId0})`}>
								<circle cx="55" cy="55" r="51.5" stroke="#fff" stroke-opacity="0.21"
								></circle>
							</g>
							<g filter={`url(#${filterId1})`}>
								<circle cx="55" cy="55" r="47.5" stroke="#fff" stroke-opacity="0.21"
								></circle>
							</g>
							<g filter={`url(#${filterId2})`}>
								<circle cx="55" cy="55" r="45.5" stroke="#fff" stroke-opacity="0.21"
								></circle>
							</g>
							<g filter={`url(#${filterId3})`}>
								<circle cx="55" cy="55" r="43.5" stroke="#fff" stroke-opacity="0.21"
								></circle>
							</g>
							<g filter={`url(#${filterId4})`}>
								<circle cx="55" cy="55" r="37.5" stroke="#fff" stroke-opacity="0.21"
								></circle>
							</g>
							<g filter={`url(#${filterId5})`}>
								<circle cx="55" cy="55" r="34.5" stroke="#fff" stroke-opacity="0.21"
								></circle>
							</g>

							<g filter={`url(#${filterId6})`} opacity="0.4"
								><path fill="#fff" d="M-14 38l68 19.579L-14 74V38z"></path></g
							>
							<g filter={`url(#${filterId7})`} opacity="0.4"
								><path fill="#fff" d="M123 38L55 57.579 123 74V38z"></path></g
							>

							<g filter={`url(#${filterId8})`} opacity="0.4">
								<path fill="#fff" d="M36.5 124.5l19.579-68 16.421 68h-36z"></path>
							</g>
							<g filter={`url(#${filterId9})`} opacity="0.4">
								<path fill="#fff" d="M36.5-12.5l19.579 68 16.421-68h-36z"></path>
							</g>
						</g>
						<defs>
							<filter
								id={filterId0}
								width="108"
								height="108"
								x="1"
								y="1"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="1"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId1}
								width="100"
								height="100"
								x="5"
								y="5"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="1"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId2}
								width="96"
								height="96"
								x="7"
								y="7"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="1"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId3}
								width="92"
								height="92"
								x="9"
								y="9"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="1"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId4}
								width="80"
								height="80"
								x="15"
								y="15"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="1"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId5}
								width="74"
								height="74"
								x="18"
								y="18"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="1"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId6}
								width="100"
								height="68"
								x="-30"
								y="22"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="8"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId7}
								width="100"
								height="68"
								x="39"
								y="22"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="8"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId8}
								width="68"
								height="100"
								x="20.5"
								y="40.5"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="8"
								></feGaussianBlur>
							</filter>
							<filter
								id={filterId9}
								width="68"
								height="100"
								x="20.5"
								y="-28.5"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
								<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"
								></feBlend>
								<feGaussianBlur
									result="effect1_foregroundBlur_6138_16576"
									stdDeviation="8"
								></feGaussianBlur>
							</filter>
						</defs>
					</svg>
				</div>
			{/if}
		</button>

		<div class="z-10 flex w-full flex-col justify-between">
			<div class="flex self-end">
				<a
					href={data.link}
					target="_blank"
					rel="noopener noreferrer"
					class="cursor-pointer text-[#BAAEBA]"
					aria-label={`Open ${data.title} on Spotify`}
				>
					<svg
						viewBox="0 0 24 24"
						class="size-[18px]"
						fill="currentColor"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<path
							d="M7.6 9.4c3.3-1 6.8-.6 9.3.8"
							stroke="#111"
							stroke-width="1.5"
							stroke-linecap="round"
							fill="none"
						></path>
						<path
							d="M8.4 12.2c2.6-.7 5.4-.4 7.4.7"
							stroke="#111"
							stroke-width="1.4"
							stroke-linecap="round"
							fill="none"
						></path>
						<path
							d="M9.2 14.8c1.9-.4 3.8-.2 5.3.5"
							stroke="#111"
							stroke-width="1.3"
							stroke-linecap="round"
							fill="none"
						></path>
					</svg>
				</a>
			</div>

			<div class="pl-6 text-end">
				<h2
					class="text-sm font-semibold tracking-[-.006em] whitespace-nowrap text-[#D6D1D4]"
				>
					{data.title}
				</h2>
				<h2 class="text-sm font-medium tracking-[-.006em] whitespace-nowrap text-[#BAAEBA]">
					{data.artist}
				</h2>
			</div>
		</div>
	</div>
{/if}
