<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
	import { cn } from "$lib/utils";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";
	import GridPattern from "../magic/grid-pattern/grid-pattern.svelte";
	import Badge from "../spell/badge/badge.svelte";
	import gsap from "gsap";
	import { SplitText } from "gsap/SplitText";

	let animateEffect = (node: HTMLElement) => {
		let h1tag = node.getElementsByTagName("h1")[0];
		let ctas = node.querySelectorAll("#svelte-animations-cta > a");
		let tools = node.querySelectorAll("#tools .card");
		let ptag = node.getElementsByTagName("p")[0];
		let fancy_badge = node.querySelector("#fancy-badge");

		gsap.registerPlugin(SplitText);
		let chars = new SplitText(h1tag, { type: "chars", mask: "chars" }).chars;

		let tl = gsap
			.timeline({})
			.from(chars, {
				y: 60,
				opacity: 0,
				stagger: 0.03,
				duration: 0.6,
				ease: "power4.out",
			})
			.from(
				ptag,
				{
					y: 20,
					opacity: 0,
				},
				"-=0.5"
			)
			.fromTo(
				ctas,
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.6,
					ease: "elastic.out(1, 0.5)",
				},
				"-=0.1"
			)
			.fromTo(
				tools,
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.1,
					duration: 0.6,
					ease: "elastic.out(1, 0.5)",
				},
				"-=0.5"
			)
			.to(
				fancy_badge,
				{
					keyframes: [
						{ scale: 1.4, duration: 0.15 },
						{ scale: 0.9, duration: 0.15 },
						{ scale: 1, duration: 0.2 },
					],
				},
				"+=0.2"
			);
		// i want after small delay new badge scale a bit then come to original scale to draw attention
	};
</script>

<div {@attach animateEffect}>
	<main class="min-h-[calc(100dvh-4.1rem)] overflow-hidden">
		<GridPattern
			width={45}
			height={45}
			strokeDashArray="4 2"
			class={cn("mask-[radial-gradient(800px_circle_at_top_center,white,transparent)]")}
		/>
		<section>
			<div class="pt-14 md:pt-15">
				<div class="mx-auto max-w-7xl px-2 md:px-6">
					<div class="text-center sm:mx-auto lg:mt-0 lg:mr-auto">
						<div class="mt-0">
							<a
								href="/magic/docs/components/flow"
								class="hover:bg-muted dark:hover:border-t-border bg-muted dark:bg-muted/60 group mx-auto flex w-fit max-w-[min(100%,30rem)] items-center gap-2 rounded-full border p-1 pl-3 shadow-md shadow-zinc-950/5 backdrop-blur-xs transition-colors duration-300 sm:pl-4 dark:border-t-white/5 dark:shadow-zinc-950"
							>
								<span
									class="text-foreground flex min-w-0 items-center gap-2 text-left text-xs sm:text-sm"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										class="mb-0.5 shrink-0 fill-sky-500 text-sky-500"
										fill-opacity="0.1"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										role="img"
										stroke-opacity="0.7"
									>
										<path
											d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z"
											stroke="currentColor"
											stroke-width="1.5"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</svg>
									<span class="font-mono leading-snug text-balance">
										New Flow Component!
									</span>
								</span>
								<div
									class="bg-muted group-hover:bg-muted size-6 shrink-0 overflow-hidden rounded-full duration-500"
								>
									<div class="flex size-6">
										<ArrowRight class="m-auto size-3" />
									</div>
								</div>
							</a>
						</div>

						<div
							class="font-display relative mx-auto mt-6 max-w-3xl bg-linear-to-br from-neutral-900 via-neutral-700 to-neutral-600 bg-clip-text pb-2 font-medium text-balance text-transparent lg:mt-16 dark:from-neutral-100 dark:via-neutral-300 dark:to-neutral-400"
						>
							<div
								class="absolute -top-10 -left-20 hidden w-fit -rotate-12 gap-1 rounded-t-sm border-b border-dashed border-green-500 bg-green-100 pt-0.5 pr-1.5 pl-1 text-sm font-normal text-green-500 underline-offset-3 lg:flex dark:bg-green-900/40 dark:text-green-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-zap h-auto w-3"
									><path
										d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
									></path></svg
								>Free
							</div>
							<div
								class="absolute top-14 -left-24 hidden w-fit -rotate-12 gap-1 rounded-t-sm border-b border-dashed border-yellow-500 bg-yellow-100/80 pt-0.5 pr-1.5 pl-1.5 text-sm font-normal text-yellow-500 underline-offset-3 lg:flex dark:bg-yellow-900/30 dark:text-yellow-400"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-code-xml-icon lucide-code-xml w-3"
									><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path
										d="m14.5 4-5 16"
									/></svg
								>
								Open Source
							</div>
							<div
								class="absolute -top-10 -right-24 hidden w-fit rotate-12 gap-1 rounded-t-sm border-b border-dashed border-teal-500 bg-teal-100 pt-0.5 pr-1 pl-1.5 text-sm font-normal text-teal-600 underline-offset-3 lg:flex dark:bg-teal-900/40 dark:text-teal-400"
							>
								CLI Support<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-star h-auto w-3"
									><path
										d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
									></path></svg
								>
							</div>
							<div
								class="absolute top-14 -right-28 hidden w-fit rotate-12 gap-1 rounded-t-sm border-b border-dashed border-orange-500 bg-orange-100 pt-0.5 pr-1 pl-1.5 text-sm font-normal text-orange-500 underline-offset-3 lg:flex dark:bg-orange-900/40 dark:text-orange-400"
							>
								Responsive<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-circle-check h-auto w-3"
									><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"
									></path></svg
								>
							</div>
							<h1
								id="svelte-animations"
								class="text-primary text-3xl md:text-4xl xl:text-6xl/tight"
							>
								Svelte Animations
							</h1>
							<!-- <h2
								class="text-muted-foreground mt-2 text-lg font-normal md:text-xl lg:text-3xl"
							>
								<span class="font-mono!">40+</span> Copy-Paste Components
							</h2> -->
						</div>
						<p
							id="svelte-animations-desc"
							class="text-muted-foreground mx-auto mt-6 max-w-3xl px-1 text-base text-balance md:mt-10 md:px-0 md:text-lg"
						>
							50+ free and open-source animated components and effects. Built with
							Svelte, Typescript, Tailwind CSS, and Motion SV.
						</p>

						<div
							id="svelte-animations-cta"
							class="mt-18 flex flex-col items-center justify-center gap-4 md:mt-14 md:flex-row"
						>
							<Button
								href="/magic"
								size="lg"
								class="rounded-full bg-fuchsia-500 px-5 text-base text-fuchsia-50 opacity-0 transition-none duration-0 hover:bg-fuchsia-600 dark:bg-fuchsia-400 dark:text-fuchsia-950 dark:hover:bg-fuchsia-500"
							>
								<span class="text-nowrap">Magic UI</span>
							</Button>
							<Button
								href="/spell"
								size="lg"
								class="rounded-full bg-yellow-500 px-5 text-base text-yellow-50 opacity-0 transition-none duration-0 hover:bg-yellow-600 dark:bg-yellow-400 dark:text-yellow-950 dark:hover:bg-yellow-500"
							>
								<span class="text-nowrap">Spell UI</span>
							</Button>
							<Button
								href="/fancy"
								size="lg"
								class="relative rounded-full bg-emerald-400 px-5 text-base text-emerald-50 opacity-0 transition-none duration-0 hover:bg-emerald-500 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-600"
							>
								<Badge
									id="fancy-badge"
									class="absolute -top-4 right-2.5 rotate-6 rounded-full dark:bg-orange-600 dark:text-orange-50"
									variant="orange">New</Badge
								>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									><g fill="currentColor"
										><circle
											cx="14.5"
											cy="8.5"
											r="2.5"
											fill="currentColor"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
										></circle><rect
											x="5"
											y="12"
											width="5"
											height="5"
											rx="1"
											ry="1"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											fill="currentColor"
										></rect><path
											d="m5.1889,3.7146l-2.1169,3.5282c-.2.3333.0401.7572.4287.7572h4.2338c.3886,0,.6287-.424.4287-.7572l-2.1169-3.5282c-.1942-.3237-.6633-.3237-.8575,0Z"
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											fill="currentColor"
										></path></g
									></svg
								>
								<span class="text-nowrap">Fancy Components</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="tools" class="bg-background pt-0 pb-0 md:pb-10">
			<div class="relative m-auto max-w-5xl px-6">
				<div class="mx-auto mt-4 flex max-w-2xl justify-center gap-4 lg:mt-16">
					<div
						class="card hover:bg-secondary bg-secondary/50 flex rounded-lg border p-2 opacity-0 backdrop-blur-sm"
					>
						<svg
							viewBox="0 0 256 308"
							class="mx-auto h-10 w-10"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid"
							><path
								d="M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244"
								fill="#FF3E00"
							/><path
								d="M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398"
								fill="#FFF"
							/></svg
						>
					</div>
					<div
						class="card hover:bg-secondary bg-secondary/50 flex rounded-lg border p-2 opacity-0 backdrop-blur-sm"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 54 33"
							class="mx-auto h-10 w-10"
							><g clip-path="url(#a)"
								><path
									fill="#38bdf8"
									fill-rule="evenodd"
									d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
									clip-rule="evenodd"
								/></g
							><defs
								><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath
								></defs
							></svg
						>
					</div>
					<div
						class="card hover:bg-secondary bg-secondary/50 flex rounded-lg border p-2 opacity-0 backdrop-blur-sm"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							class="mx-auto h-10 w-10"
							><path fill="none" d="M0 0h256v256H0z" /><path
								fill="none"
								class="stroke-[#EB4F27]"
								stroke-width="25"
								stroke-linecap="round"
								d="M208 128l-80 80M192 40L40 192"
							/></svg
						>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>
