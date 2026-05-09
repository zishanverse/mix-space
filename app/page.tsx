"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StudioSection = {
	index: string;
	label: string;
	eyebrow: string;
	title: string;
	description: string;
};

const sections: StudioSection[] = [
	{
		index: "[01]",
		label: "ABOUT NOIR",
		eyebrow: "WEB3 BRANDING & DESIGN",
		title: "Creating brands for the new internet.",
		description:
			"A dark, cinematic homepage structure inspired by noir.io with clear hierarchy, wide spacing, and future-proof asset zones.",
	},
	{
		index: "[02]",
		label: "OUR CAPABILITIES",
		eyebrow: "STRATEGY / IDENTITY / DIGITAL",
		title: "We turn disruptive ideas into category-defining companies.",
		description:
			"Sticky navigation, section labels, and scroll-reactive markers are wired in to match the pacing and rhythm of the reference site.",
	},
	{
		index: "[03]",
		label: "RECENT WORK",
		eyebrow: "SELECTED PROJECTS",
		title: "From pre-seed to launch and beyond.",
		description:
			"Every asset area is kept black and modular so videos, stills, and mockups can be inserted later without breaking the layout.",
	},
	{
		index: "[04]",
		label: "SIGNATURE ENGAGEMENTS",
		eyebrow: "LONG-TERM PARTNERSHIPS",
		title: "A specialist team built for sprint-based and ongoing work.",
		description:
			"The last panel is designed like a closing CTA section with a strong headline and a clear action for booking a call.",
	},
];

const capabilities = [
	"Brand strategy",
	"Identity systems",
	"UX / UI design",
	"Website development",
	"Brand motion",
	"Content systems",
];

const workCards = [
	{
		title: "Numbers",
		text: "Provenance infrastructure for humans and AI.",
	},
	{
		title: "Crypto Autos",
		text: "Redefining access to luxury cars.",
	},
	{
		title: "Verse World",
		text: "The internet of reality.",
	},
];

function LogoMark() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 48 48"
			className="h-10 w-10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="2.5" y="2.5" width="43" height="43" rx="4" fill="#000" stroke="rgba(255,255,255,0.28)" />
			<path d="M10 9L36.5 35.5" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
			<path d="M14.5 38.5L38.5 14.5" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" opacity="0.35" />
		</svg>
	);
}

function ChatIcon() {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			className="h-4 w-4 shrink-0"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7 18.5 3.5 21V6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v7A2.5 2.5 0 0 1 18 15.5H7Z"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SectionFrame({ section }: { section: StudioSection }) {
	return (
		<section id={section.label.toLowerCase().replace(/ /g, "-")} data-section className="relative min-h-screen border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
			<div className="mx-auto flex h-full w-full max-w-420 flex-col justify-center gap-12">
				<div className="pointer-events-none absolute inset-x-0 top-8 grid grid-cols-[1fr_auto_1fr] items-start px-4 sm:px-6 lg:px-8">
					<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-start">
						{section.index}
					</span>
					<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-center">
						{section.label}
					</span>
					<span aria-hidden className="opacity-0 justify-self-end">&nbsp;</span>
				</div>

				<div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
					<div className="space-y-8">
						<p className="text-[11px] uppercase tracking-[0.45em] text-white/40">{section.eyebrow}</p>
						<h2 className="max-w-[12ch] text-5xl font-medium leading-[0.92] tracking-tighter text-white sm:text-6xl lg:text-[104px]">
							{section.title}
						</h2>
						<p className="max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
							{section.description}
						</p>
					</div>

					<div className="grid gap-4 sm:grid-cols-2">
						<div className="asset-placeholder aspect-4/5 animate-pulse" />
						<div className="grid gap-4">
							<div className="asset-placeholder aspect-16/10" />
							<div className="asset-placeholder aspect-16/10" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	const [hasScrolled, setHasScrolled] = useState(false);
	const rootRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onScroll = () => {
			setHasScrolled(window.scrollY > 100);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const sectionsEl = gsap.utils.toArray<HTMLElement>("[data-section]");

			sectionsEl.forEach((section) => {
				const markers = section.querySelectorAll<HTMLElement>("[data-scroll-marker]");

				markers.forEach((marker) => {
					gsap.fromTo(
						marker,
						{ autoAlpha: 0, y: 12 },
						{
							autoAlpha: 1,
							y: 0,
							ease: "none",
							scrollTrigger: {
								trigger: section,
								start: "top 70%",
								end: "bottom 35%",
								scrub: true,
							},
						},
					);
				});
			});
		}, rootRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={rootRef} className="min-h-screen bg-black text-white">
			<header
				className={`fixed left-0 top-0 z-50 w-full bg-transparent transition-[border-color] duration-300 ${
					hasScrolled ? "border-b border-white/8" : "border-b border-transparent"
				}`}
			>
				<div className="mx-auto grid h-20 max-w-420 grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6 lg:px-8">
					<a href="#top" className="flex items-center">
						<LogoMark />
					</a>

					<nav className="hidden items-center justify-center gap-10 md:flex">
						{[
							["Work", "#work"],
							["Studio", "#studio"],
							["Ventures", "#ventures"],
							["News", "#news"],
							["Contact", "#contact"],
						].map(([label, href]) => (
							<a
								key={label}
								href={href}
								className="text-[15px] text-white transition-opacity duration-200 hover:opacity-60"
							>
								{label}
							</a>
						))}
					</nav>

					<a
						href="#contact"
						className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-[#171717] px-5 py-3 text-[15px] text-white transition-colors duration-200 hover:bg-white hover:text-black"
					>
						<ChatIcon />
						<span>Work with us</span>
					</a>
				</div>
			</header>

			<main id="top" className="pt-20">
				<section className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
					  <div className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-420 flex-col justify-between gap-10">
						<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,85,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(66,46,255,0.16),transparent_26%)]" />

						<div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
							<div className="flex flex-col justify-end gap-8 pt-12 lg:pt-28">
								<p className="text-[11px] uppercase tracking-[0.45em] text-[#666]">
									Web3 branding, product design, digital systems
								</p>
								<h1 className="max-w-[10ch] text-[clamp(4rem,10vw,8rem)] font-medium leading-[0.88] tracking-[-0.06em] text-white">
									Creating brands of the future
								</h1>
								<p className="max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
									Noir-inspired studio homepage built for dark, cinematic storytelling with fixed navigation, scroll-reactive section markers, and black asset zones ready for media.
								</p>
							</div>

							<div className="grid gap-4 lg:pt-20">
								<div className="asset-placeholder aspect-16/10 animate-pulse" />
								<div className="grid gap-4 sm:grid-cols-2">
									<div className="asset-placeholder aspect-4/5" />
									<div className="asset-placeholder aspect-4/5" />
								</div>
							</div>
						</div>

						<div className="relative flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[#666]">
							<span>Selected by founders and teams building for the new internet.</span>
						</div>
					</div>
				</section>

				<div id="studio">
					<SectionFrame section={sections[0]} />
				</div>

				<div id="ventures">
					<section className="relative min-h-screen border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
						<div className="mx-auto flex h-full w-full max-w-420 flex-col justify-center gap-12">
							<div className="pointer-events-none absolute inset-x-0 top-8 grid grid-cols-[1fr_auto_1fr] items-start px-4 sm:px-6 lg:px-8">
								<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-start">
									[02]
								</span>
								<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-center">
									OUR CAPABILITIES
								</span>
								<span aria-hidden className="opacity-0 justify-self-end">&nbsp;</span>
							</div>

							<div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
								<div className="space-y-6">
									<p className="text-[11px] uppercase tracking-[0.45em] text-white/40">Strategy / identity / digital</p>
									  <h2 className="max-w-[12ch] text-5xl font-medium leading-[0.94] tracking-tighter text-white sm:text-6xl lg:text-[92px]">
										We turn disruptive ideas into category-defining companies.
									</h2>
									<p className="max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
										Section labels and indices fade in as each panel enters view, matching the floating editorial feel in the screenshots you shared.
									</p>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									{capabilities.map((item, index) => (
										<article key={item} className="border border-white/8 bg-white/3 p-5">
											<div className="mb-10 flex items-start justify-between text-[11px] uppercase tracking-[0.35em] text-[#666]">
												<span>{`0${index + 1}`}</span>
												<span>Capability</span>
											</div>
											  <div className="asset-placeholder mb-5 aspect-4/5" />
											<p className="text-lg leading-7 text-white/86">{item}</p>
										</article>
									))}
								</div>
							</div>
						</div>
					</section>
				</div>

				<div id="work">
					<section className="relative min-h-screen border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
						<div className="mx-auto flex h-full w-full max-w-420 flex-col justify-center gap-12">
							<div className="pointer-events-none absolute inset-x-0 top-8 grid grid-cols-[1fr_auto_1fr] items-start px-4 sm:px-6 lg:px-8">
								<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-start">
									[03]
								</span>
								<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-center">
									RECENT WORK
								</span>
								<span aria-hidden className="opacity-0 justify-self-end">&nbsp;</span>
							</div>

							<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
								<div className="space-y-6">
									<p className="text-[11px] uppercase tracking-[0.45em] text-white/40">Selected projects</p>
									  <h2 className="max-w-[12ch] text-5xl font-medium leading-[0.94] tracking-tighter text-white sm:text-6xl lg:text-[92px]">
										From pre-seed to launch.
									</h2>
									<p className="max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
										The asset zones remain black placeholders so that real videos and stills can be dropped in later without affecting alignment.
									</p>
								</div>

								<div className="grid gap-4">
									{workCards.map((card, index) => (
										<article key={card.title} className="grid gap-4 border border-white/8 bg-white/3 p-4 sm:grid-cols-[0.9fr_1.1fr]">
											<div className="asset-placeholder aspect-4/5" />
											<div className="flex flex-col justify-between gap-6 p-2 sm:p-3">
												<div>
													<p className="mb-2 text-[11px] uppercase tracking-[0.35em] text-[#666]">0{index + 1}</p>
													<h3 className="text-2xl text-white">{card.title}</h3>
												</div>
												<p className="text-base leading-7 text-white/62">{card.text}</p>
											</div>
										</article>
									))}
								</div>
							</div>
						</div>
					</section>
				</div>

				<div id="news">
					<section className="relative min-h-screen border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
						<div className="mx-auto flex h-full w-full max-w-420 flex-col justify-center gap-12">
							<div className="pointer-events-none absolute inset-x-0 top-8 grid grid-cols-[1fr_auto_1fr] items-start px-4 sm:px-6 lg:px-8">
								<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-start">
									[04]
								</span>
								<span data-scroll-marker className="text-[11px] uppercase tracking-[0.42em] text-[#666] opacity-0 justify-self-center">
									SIGNATURE ENGAGEMENTS
								</span>
								<span aria-hidden className="opacity-0 justify-self-end">&nbsp;</span>
							</div>

							<div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
								<div className="space-y-6">
									<p className="text-[11px] uppercase tracking-[0.45em] text-white/40">Long-term partnerships</p>
									  <h2 className="max-w-[12ch] text-5xl font-medium leading-[0.94] tracking-tighter text-white sm:text-6xl lg:text-[92px]">
										A specialist team built for founders.
									</h2>
									<p className="max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
										This closing section adds the same editorial cadence as noir.io, with a clear call to action and high-contrast visual weight.
									</p>
								</div>

								<div className="grid gap-4">
									<div className="asset-placeholder aspect-16/10" />
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="asset-placeholder aspect-4/5" />
										<div className="asset-placeholder aspect-4/5" />
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<section id="contact" className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
					<div className="mx-auto flex w-full max-w-420 flex-col items-center gap-8 text-center">
						<p className="text-[11px] uppercase tracking-[0.42em] text-[#666]">[05] CONTACT</p>
						<h2 className="max-w-[12ch] text-5xl font-medium leading-[0.94] tracking-tighter text-white sm:text-6xl lg:text-[92px]">
							Get in touch to discuss your project.
						</h2>
						<a
							href="mailto:hello@example.com"
							className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-[#171717] px-6 py-4 text-[15px] text-white transition-colors duration-200 hover:bg-white hover:text-black"
						>
							<ChatIcon />
							<span>Book a call today</span>
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}
