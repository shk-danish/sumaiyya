"use client";

import { useEffect, useRef, useState } from "react";
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
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=75",
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
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=75",
    accent: "#a855f7",
  },
  {
    catalog: "PRJ 03",
    name: "GlowKit",
    type: "social",
    deliverable: "Social Media Kit",
    classification: "CANVA",
    year: "2024 / BEAUTY",
    tools: "Canva · Reels",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=75",
    accent: "#f43f5e",
  },
  {
    catalog: "PRJ 04",
    name: "PulseSaaS",
    type: "web",
    deliverable: "Product Website",
    classification: "WEB DEV",
    year: "2025 / TECH",
    tools: "Next.js · Tailwind",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=75",
    accent: "#22d3ee",
  },
  {
    catalog: "PRJ 05",
    name: "UrbanThreads",
    type: "branding",
    deliverable: "Logo + Identity",
    classification: "BRANDING",
    year: "2025 / FASHION",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=75",
    accent: "#fb923c",
  },
];

const ROW_BOTTOM: Project[] = [
  {
    catalog: "PRJ 06",
    name: "AuraReels",
    type: "social",
    deliverable: "Reel Templates",
    classification: "MARKETING",
    year: "2025 / CONTENT",
    tools: "Canva · CapCut",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=75",
    accent: "#34d399",
  },
  {
    catalog: "PRJ 07",
    name: "DropZone",
    type: "marketing",
    deliverable: "Ad Campaign Kit",
    classification: "MARKETING",
    year: "2024 / D2C",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=75",
    accent: "#a78bfa",
  },
  {
    catalog: "PRJ 08",
    name: "NovaClinic",
    type: "web",
    deliverable: "Landing Page",
    classification: "UI / UX",
    year: "2024 / HEALTH",
    tools: "Figma · Next.js",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=75",
    accent: "#3b82f6",
  },
  {
    catalog: "PRJ 09",
    name: "FestivalX",
    type: "marketing",
    deliverable: "Event Posters",
    classification: "GRAPHIC",
    year: "2024 / EVENTS",
    tools: "Canva · Photoshop",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=75",
    accent: "#ec4899",
  },
  {
    catalog: "PRJ 10",
    name: "BloomBrand",
    type: "branding",
    deliverable: "Full Brand Kit",
    classification: "BRANDING",
    year: "2025 / STARTUP",
    tools: "Canva · Figma",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=75",
    accent: "#fde68a",
  },
];

function Tile({ obj, idx, total }: { obj: Project; idx: number; total: number }) {
  return (
    <div className="cosmic-slide flex-shrink-0 px-2.5 md:px-3">
      <div
        className="cosmic-tile relative aspect-[3/4] w-[72vw] max-w-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-black md:w-[26vw] md:max-w-[360px]"
        data-tile
      >
        {/* Project image */}
        <img
          src={obj.image}
          alt={obj.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Accent tint */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-color"
          style={{ backgroundColor: obj.accent }}
        />

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

        {/* Vertical tools */}
        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
          <div className="font-mono text-[8.5px] uppercase tracking-[0.32em] text-white/35 [writing-mode:vertical-rl] [transform:rotate(180deg)]">
            {obj.tools}
          </div>
        </div>

        {/* Bottom info */}
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
  isMobile?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const mobile = opts.isMobile ?? false;

    // Mobile: faster lerp, less drag resistance, slower drift
    const lerp    = mobile ? 0.18 : (opts.lerp ?? 0.08);
    const drag    = mobile ? 0.012 : (opts.drag ?? 0.005);
    const drift   = mobile ? 0.04 : (opts.drift ?? 0.18);
    const skewMax = mobile ? 4 : (opts.skew ?? 14);
    const blurMax = mobile ? 1.5 : 5;
    const decay   = mobile ? 0.78 : 0.92;

    let raf = 0;
    let lerpedSpeed = 0;

    const slider = new Core(wrapper, {
      infinite: true,
      snap: false,
      lerpFactor: lerp,
      dragSensitivity: drag,
      scrollInput: false,
      speedDecay: decay,
    });

    const tiles = Array.from(
      wrapper.querySelectorAll<HTMLElement>("[data-tile]")
    );

    const driftDir = opts.reverse ? -1 : 1;

    const tick = () => {
      slider.update();
      const dt = slider.deltaTime || 0.016;

      if (drift > 0 && !slider.isDragging && !slider.isTouching) {
        slider.target += driftDir * dt * drift;
      }

      lerpedSpeed = damp(lerpedSpeed, slider.speed, mobile ? 10 : 6, dt);
      const clamped = Math.max(-0.6, Math.min(0.6, lerpedSpeed));
      const skew = reduce ? 0 : clamped * skewMax;
      const sy = reduce ? 1 : 1 - Math.min(0.03, Math.abs(clamped) * 0.3);
      const blur =
        reduce || Math.abs(clamped) < 0.05
          ? 0
          : Math.min(blurMax, Math.abs(clamped) * (mobile ? 3 : 9));
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
  }, [opts.isMobile]);

  return ref;
}

export function Cosmos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const topRow = useSmoothRow({ lerp: 0.07, skew: 16, drift: 0.18, isMobile });
  const botRow = useSmoothRow({ lerp: 0.09, skew: 11, reverse: true, drift: 0.12, isMobile });

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
          Ten projects.
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
          10 / projects · All original
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