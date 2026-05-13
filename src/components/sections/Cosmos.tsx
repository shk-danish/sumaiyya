"use client";

import { useEffect, useRef } from "react";
import Core, { damp } from "smooothy";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

type ProjectType = "web" | "branding" | "social" | "marketing";

type Project = {
  catalog: string;
  name: string;
  type: ProjectType;
  deliverable: string;
  classification: string;
  year: string;
  tools: string;
  image: string;
  accent: string;
};

const ROW_TOP: Project[] = [
  {
    catalog: "PRJ 01",
    name: "LuxeStore",
    type: "web",
    deliverable: "E-commerce UI",
    classification: "WEB DEV",
    year: "2024 / REDESIGN",
    tools: "Next.js · Tailwind",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    accent: "#fbbf24",
  },
  {
    catalog: "PRJ 02",
    name: "BrandBloom",
    type: "branding",
    deliverable: "Brand Identity",
    classification: "BRANDING",
    year: "2024 / STARTUP",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    accent: "#a855f7",
  },
  {
    catalog: "PRJ 03",
    name: "NovaClinic",
    type: "web",
    deliverable: "Landing Page",
    classification: "UI / UX",
    year: "2024 / HEALTH",
    tools: "Figma · Next.js",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    accent: "#3b82f6",
  },
  {
    catalog: "PRJ 04",
    name: "GlowKit",
    type: "social",
    deliverable: "Social Media Kit",
    classification: "CANVA",
    year: "2024 / BEAUTY",
    tools: "Canva · Reels",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    accent: "#f43f5e",
  },
  {
    catalog: "PRJ 05",
    name: "UrbanThreads",
    type: "branding",
    deliverable: "Logo + Identity",
    classification: "BRANDING",
    year: "2025 / FASHION",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    accent: "#fb923c",
  },
  {
    catalog: "PRJ 06",
    name: "PulseSaaS",
    type: "web",
    deliverable: "Product Website",
    classification: "WEB DEV",
    year: "2025 / TECH",
    tools: "Next.js · Tailwind",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    accent: "#22d3ee",
  },
  {
    catalog: "PRJ 07",
    name: "AuraReels",
    type: "social",
    deliverable: "Reel Templates",
    classification: "MARKETING",
    year: "2025 / CONTENT",
    tools: "Canva · CapCut",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    accent: "#34d399",
  },
  {
    catalog: "PRJ 08",
    name: "ZenSpace",
    type: "web",
    deliverable: "Booking UI",
    classification: "UI / UX",
    year: "2025 / WELLNESS",
    tools: "Figma · React",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&q=80",
    accent: "#0ea5e9",
  },
];

const ROW_BOTTOM: Project[] = [
  {
    catalog: "PRJ 09",
    name: "DropZone",
    type: "marketing",
    deliverable: "Ad Campaign Kit",
    classification: "MARKETING",
    year: "2024 / D2C",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
    accent: "#a78bfa",
  },
  {
    catalog: "PRJ 10",
    name: "SolarFoods",
    type: "branding",
    deliverable: "Packaging Design",
    classification: "BRANDING",
    year: "2024 / FOOD",
    tools: "Canva · Illustrator",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80",
    accent: "#fbbf24",
  },
  {
    catalog: "PRJ 11",
    name: "MindPath",
    type: "web",
    deliverable: "App Landing Page",
    classification: "WEB DEV",
    year: "2025 / HEALTH",
    tools: "Next.js · Tailwind",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
    accent: "#7c3aed",
  },
  {
    catalog: "PRJ 12",
    name: "FestivalX",
    type: "marketing",
    deliverable: "Event Posters",
    classification: "GRAPHIC",
    year: "2024 / EVENTS",
    tools: "Canva · Photoshop",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
    accent: "#ec4899",
  },
  {
    catalog: "PRJ 13",
    name: "VaultWear",
    type: "social",
    deliverable: "Instagram Kit",
    classification: "SOCIAL",
    year: "2025 / FASHION",
    tools: "Canva · Reels",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    accent: "#67e8f9",
  },
  {
    catalog: "PRJ 14",
    name: "ClearPath",
    type: "web",
    deliverable: "Portfolio Site",
    classification: "UI / UX",
    year: "2025 / PERSONAL",
    tools: "Next.js · Figma",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    accent: "#f43f5e",
  },
  {
    catalog: "PRJ 15",
    name: "BloomBrand",
    type: "branding",
    deliverable: "Full Brand Kit",
    classification: "BRANDING",
    year: "2025 / STARTUP",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    accent: "#fde68a",
  },
  {
    catalog: "PRJ 16",
    name: "ClickAds",
    type: "marketing",
    deliverable: "Meta Ad Creatives",
    classification: "MARKETING",
    year: "2025 / E-COMM",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80",
    accent: "#f97316",
  },
];

function Tile({ obj, idx, total }: { obj: Project; idx: number; total: number }) {
  return (
    <div className="cosmic-slide flex-shrink-0 px-2.5 md:px-3">
      <div
        className="cosmic-tile relative aspect-[3/4] w-[72vw] max-w-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-black md:w-[26vw] md:max-w-[360px]"
        data-tile
      >
        {/* Real project image */}
        <img
          src={obj.image}
          alt={obj.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Subtle accent color tint on top */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-color"
          style={{ backgroundColor: obj.accent }}
        />

        {/* Film grain */}
        <div className="film-grain" aria-hidden />

        {/* Top bar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/85">
            {obj.catalog}
          </div>
          <div className="rounded-full border border-white/15 bg-black/40 px-2 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
            {obj.classification}
          </div>
        </div>

        {/* Vertical tools label */}
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.32em] text-white/35 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
            {obj.tools}
          </div>
        </div>

        {/* Bottom info card */}
        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 rounded-[16px] border border-white/12 bg-black/55 p-3 backdrop-blur-xl backdrop-saturate-150">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold leading-none tracking-tight text-white md:text-lg">
              {obj.name}
            </h3>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
              {String(idx + 1).padStart(2, "0")} / {total}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
            <span
              className="h-1 w-1 rounded-full"
              style={{ backgroundColor: obj.accent }}
            />
            <span>{obj.deliverable}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span className="truncate text-white/45">{obj.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function useSmoothRow(opts: {
  lerp?: number;
  drag?: number;
  reverse?: boolean;
  skew?: number;
  drift?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let lerpedSpeed = 0;

    const slider = new Core(wrapper, {
      infinite: true,
      snap: false,
      lerpFactor: opts.lerp ?? 0.08,
      dragSensitivity: opts.drag ?? 0.005,
      scrollInput: false,
      speedDecay: 0.92,
    });

    const tiles = Array.from(
      wrapper.querySelectorAll<HTMLElement>("[data-tile]")
    );

    const driftRate = reduce ? 0 : opts.drift ?? 0.18;
    const driftDir = opts.reverse ? -1 : 1;

    const tick = () => {
      slider.update();
      const dt = slider.deltaTime || 0.016;

      if (driftRate > 0 && !slider.isDragging && !slider.isTouching) {
        slider.target += driftDir * dt * driftRate;
      }

      lerpedSpeed = damp(lerpedSpeed, slider.speed, 6, dt);
      const clamped = Math.max(-0.6, Math.min(0.6, lerpedSpeed));
      const skew = reduce ? 0 : clamped * (opts.skew ?? 14);
      const sy = reduce ? 1 : 1 - Math.min(0.05, Math.abs(clamped) * 0.45);
      const blur =
        reduce || Math.abs(clamped) < 0.05
          ? 0
          : Math.min(5, Math.abs(clamped) * 9);
      const transform = `skewX(${skew.toFixed(2)}deg) scaleY(${sy.toFixed(3)})`;
      const filter = blur > 0 ? `blur(${blur.toFixed(1)}px)` : "";

      for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.transform = transform;
        tiles[i].style.filter = filter;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      slider.destroy();
    };
  }, [opts.lerp, opts.drag, opts.reverse, opts.skew, opts.drift]);

  return ref;
}

export function Cosmos() {
  const topRow = useSmoothRow({ lerp: 0.07, skew: 16, drift: 0.18 });
  const botRow = useSmoothRow({ lerp: 0.09, skew: 11, reverse: true, drift: 0.12 });

  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-24 md:pb-32 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,90,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(251,191,36,0.06),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-white/10" />

      <div className="relative z-10 mb-10 flex items-center justify-between px-6 md:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
          WORK / 003
        </div>
        <div className="hidden font-mono text-[11px] uppercase tracking-[0.28em] text-white/50 md:block">
          Drag · Explore the portfolio
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
        <EyebrowBadge className="!border-white/15 !bg-white/5 !text-white/70">
          Chapter III · The Work
        </EyebrowBadge>
        <h2 className="mt-6 max-w-[20ch] text-4xl font-semibold leading-[0.98] tracking-tighter text-white md:text-6xl lg:text-[88px]">
          Sixteen projects.
          <br />
          <span className="bg-gradient-to-r from-amber-200 via-white to-amber-300 bg-clip-text text-transparent">
            One standard.
          </span>
        </h2>
        <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
          From brand identities to full websites, every project is built with
          the same obsession — make it beautiful, make it work. Drag to explore.
        </p>
      </div>

      <div className="relative z-10 mt-14 select-none md:mt-16">
        <div
          ref={topRow}
          data-slider
          className="cosmic-slider flex cursor-grab overflow-hidden will-change-transform active:cursor-grabbing"
        >
          {ROW_TOP.map((obj, i) => (
            <Tile
              key={`t-${obj.catalog}`}
              obj={obj}
              idx={i}
              total={ROW_TOP.length + ROW_BOTTOM.length}
            />
          ))}
        </div>
        <div
          ref={botRow}
          data-slider
          className="cosmic-slider mt-5 flex cursor-grab overflow-hidden will-change-transform active:cursor-grabbing md:mt-6"
        >
          {ROW_BOTTOM.map((obj, i) => (
            <Tile
              key={`b-${obj.catalog}`}
              obj={obj}
              idx={i + ROW_TOP.length}
              total={ROW_TOP.length + ROW_BOTTOM.length}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-14 flex items-center justify-between px-6 md:mt-16 md:px-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
          16 / projects · All original
        </div>
        <div className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 md:flex">
          <span>← drag</span>
          <span className="h-3 w-[1px] bg-white/15" />
          <span>infinite</span>
          <span className="h-3 w-[1px] bg-white/15" />
          <span>release →</span>
        </div>
      </div>
    </section>
  );
}