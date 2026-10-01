<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Github from "$icons/github.svelte";
	import X from "$icons/twitter.svelte";
	import { cn } from "$lib/utils";
	import { Annotation } from "$ui/annotation";

	type Sponsor = {
		name: string;
		handle: string;
		avatar: string;
		github: string;
		role?: string;
		x?: string;
		current?: boolean;
	};

	const sponsorUrl = "https://github.com/sponsors/SikandarJODD";

	const sponsors: Sponsor[] = [
		{
			name: "Guillermo Rauch",
			handle: "rauchg",
			avatar: "https://avatars.githubusercontent.com/u/13041?v=4",
			github: "https://github.com/rauchg",
			role: "CEO of Vercel",
			x: "https://x.com/rauchg",
			current: true,
		},
		{
			name: "Hunter Johnston",
			handle: "huntabyte",
			avatar: "https://avatars.githubusercontent.com/u/64506580?v=4",
			github: "https://github.com/huntabyte",
			x: "https://x.com/huntabyte",
		},
		{
			name: "Aidan Bleser",
			handle: "ieedan",
			avatar: "https://avatars.githubusercontent.com/u/117548273?v=4",
			github: "https://github.com/ieedan",
			role: "Frontend Engineer",
			x: "https://x.com/ieeeedan",
		},
		{
			name: "Nono Martínez Alonso",
			handle: "nonoesp",
			avatar: "https://avatars.githubusercontent.com/u/1243210?v=4",
			github: "https://github.com/nonoesp",
			role: "Host of Getting Simple",
			x: "https://x.com/nonoesp",
		},
		{
			name: "ZerGo0",
			handle: "ZerGo0",
			avatar: "https://avatars.githubusercontent.com/u/18653821?v=4",
			github: "https://github.com/ZerGo0",
			role: "Software Engineer",
		},
		{
			name: "Francisco Sainz",
			handle: "pacosw1",
			avatar: "https://avatars.githubusercontent.com/u/12486003?v=4",
			github: "https://github.com/pacosw1",
		},
		{
			name: "Joe Krump",
			handle: "joekrump",
			avatar: "https://avatars.githubusercontent.com/u/3317231?v=4",
			github: "https://github.com/joekrump",
			role: "Senior Software Developer",
		},
		{
			name: "Yashash Pugalia",
			handle: "yashash-pugalia",
			avatar: "https://avatars.githubusercontent.com/u/89068816?v=4",
			github: "https://github.com/yashash-pugalia",
			x: "https://x.com/yashash_pugalia",
		},
		{
			name: "Ever",
			handle: "ruizdiazever",
			avatar: "https://avatars.githubusercontent.com/u/29817086?v=4",
			github: "https://github.com/ruizdiazever",
			role: "Developer",
			x: "https://x.com/everruizdiazo",
		},
		{
			name: "hahaha-helpme",
			handle: "hahaha-helpme",
			avatar: "https://avatars.githubusercontent.com/u/43705134?v=4",
			github: "https://github.com/hahaha-helpme",
		},
	];
</script>

<section
	class="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24 md:px-4"
	aria-labelledby="landing-sponsors"
>
	<h2
		id="landing-sponsors"
		class="font-gp-circle text-foreground pl-1 text-3xl font-medium sm:text-4xl"
	>
		Sponsors
	</h2>

	<div class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-8 lg:grid-cols-6">
		{#each sponsors as sponsor (sponsor.handle)}
			<article class="min-w-0 p-2">
				<div
					class="after:border-ink/40 relative aspect-square w-full p-1.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-dashed after:content-[''] dark:after:border-emerald-500/40"
				>
					<img
						src={sponsor.avatar}
						alt={sponsor.name}
						class={cn(
							"size-full rounded-lg border-2 object-cover",
							sponsor.current ? "border-foreground/25" : "border-border"
						)}
						loading="lazy"
					/>
				</div>

				<div class="mt-3 pl-1">
					<h3 class="text-foreground truncate text-sm font-semibold">
						{sponsor.name}
					</h3>
					<p class="text-muted-foreground mt-0.5 truncate text-xs">
						{sponsor.role ?? `@${sponsor.handle}`}
					</p>

					<div class="mt-2 flex items-center gap-1">
						{#if sponsor.x}
							<Button
								href={sponsor.x}
								target="_blank"
								rel="noreferrer"
								variant="ghost"
								size="icon-sm"
								aria-label={`${sponsor.name} on X`}
							>
								<X class="size-3" />
							</Button>
						{/if}

						<Button
							href={sponsor.github}
							target="_blank"
							rel="noreferrer"
							variant="ghost"
							size="icon-sm"
							aria-label={`${sponsor.name} on GitHub`}
						>
							<Github class="size-3.5" />
						</Button>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<div class="mt-10 flex justify-center">
		<Annotation targetGap="0.6rem" lowerLabelGap="0.1rem" note="😁" noMark rotate="-12deg">
			<Button
				href={sponsorUrl}
				target="_blank"
				rel="noreferrer"
				variant="outline"
				class="rounded-full px-4"
			>
				Sponsor my work
			</Button>
		</Annotation>
	</div>
</section>
