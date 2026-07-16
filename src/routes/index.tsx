import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  burgers,
  snacks,
  pomfriti,
  palacinke,
  sosevi,
  WOLT_RESTAURANT_URL,
  GLOVO_RESTAURANT_URL,
  INSTAGRAM_URL,
} from "@/data/menu";

import { NorteLogo } from "@/components/norte/Logo";
import { OrderButtons } from "@/components/norte/OrderButtons";
import { CursorGlow } from "@/components/norte/CursorGlow";
import { BurgerCard } from "@/components/norte/BurgerCard";
import { MobileAppNav } from "@/components/norte/MobileAppNav";
import heroAsset from "@/assets/hero-truffle.jpg.asset.json";
import smashBlueAsset from "@/assets/smash-blue.jpg.asset.json";
import tripleDoubleAsset from "@/assets/triple-double.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NORTE — Smash Burger Novi Sad | Poruči preko Wolt & Glovo" },
      {
        name: "description",
        content:
          "NORTE Smash Burger, Kornelija Stankovića 11, Novi Sad. 100% junetina, hrskava slaninica, cheddar. Poruči preko Wolt-a ili Glovo-a.",
      },
      { property: "og:title", content: "NORTE — Smash Burger Novi Sad | Poruči preko Wolt & Glovo" },
      {
        property: "og:description",
        content:
          "NORTE Smash Burger, Kornelija Stankovića 11, Novi Sad. 100% junetina, hrskava slaninica, cheddar. Poruči preko Wolt-a ili Glovo-a.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroAsset.url },
    ],
  }),
  component: Home,
});

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function StickyOrderBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 hidden transition-all duration-300 md:block ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{
        background: "rgba(10,11,20,0.92)",
        backdropFilter: "blur(10px)",
        borderTop: "1px solid rgba(47,111,255,0.35)",
        boxShadow: "0 -8px 40px rgba(47,111,255,0.15)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="hidden text-sm font-semibold uppercase tracking-wider text-white sm:block">
          Gladni ste?
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
          <a
            href={WOLT_RESTAURANT_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 rounded-full px-4 py-2 text-center text-xs font-bold uppercase tracking-wider sm:flex-none sm:text-sm"
            style={{
              background: "#00c2b0",
              color: "#0a0b14",
              boxShadow: "0 0 18px rgba(0,194,176,0.4)",
            }}
          >
            Wolt
          </a>
          <a
            href={GLOVO_RESTAURANT_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 rounded-full px-4 py-2 text-center text-xs font-bold uppercase tracking-wider sm:flex-none sm:text-sm"
            style={{
              background: "#ffc244",
              color: "#0a0b14",
              boxShadow: "0 0 18px rgba(255,194,68,0.4)",
            }}
          >
            Glovo
          </a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header
      className="sticky top-0 z-40 w-full animate-nav-down nav-smooth"
      style={{
        background: "rgba(10,11,20,0.72)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="animate-float-slow">
          <NorteLogo />
        </a>
        <nav className="hidden gap-6 text-xs font-semibold uppercase tracking-widest text-text-secondary md:flex">
          <a href="#meni" className="hover:text-white">Meni</a>
          <a href="#o-nama" className="hover:text-white">O nama</a>
          <a href="#pracenje" className="hover:text-white">Praćenje</a>
          <a href="#lokacija" className="hover:text-white">Lokacija</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-0"
        style={{
          backgroundImage: `url(${heroAsset.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.25}px) scale(1.08)`,
          filter: "brightness(0.75)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to top, var(--bg-primary) 5%, rgba(10,11,20,0.55) 55%, rgba(10,11,20,0.35) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:pb-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-neon-pink">
            Novi Sad · Kornelija Stankovića 11
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] text-white sm:text-7xl md:text-8xl">
            JEDINI ODGOVOR
            <br />
            <span className="neon-pink-text">NA GLAD</span>
          </h1>
          <p className="mt-5 max-w-xl font-display text-xl italic tracking-wide text-text-secondary sm:text-2xl">
            Tvoj savršeni smash burger.
          </p>
          <div className="mt-8">
            <OrderButtons size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuTitle() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="flex items-center justify-center gap-4 sm:gap-6">
      <div
        className="h-px flex-1 max-w-[140px]"
        style={{
          background: "var(--neon-blue)",
          boxShadow: "0 0 10px var(--neon-blue)",
        }}
      />
      <h2
        className={`font-display text-6xl font-bold tracking-[0.15em] sm:text-7xl md:text-8xl ${inView ? "animate-neon-flicker" : "opacity-0"}`}
        style={{
          color: "transparent",
          WebkitTextStroke: "1.5px var(--neon-blue)",
          textShadow:
            "0 0 12px rgba(47,111,255,0.7), 0 0 40px rgba(47,111,255,0.4)",
        }}
      >
        MENI
      </h2>
      <div
        className="h-px flex-1 max-w-[140px]"
        style={{
          background: "var(--neon-blue)",
          boxShadow: "0 0 10px var(--neon-blue)",
        }}
      />
    </div>
  );
}

function SectionPanel({
  title,
  icon,
  children,
  className = "",
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`neon-border-pink rounded-2xl bg-bg-secondary/60 p-5 sm:p-6 ${className}`}>
      <div className="mb-4 flex items-center gap-3 border-b border-white/5 pb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="neon-pink-text font-display text-2xl font-bold tracking-wider sm:text-3xl">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function PriceRow({ name, price }: { name: string; price: string | number }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-1.5">
      <span className="neon-blue-text text-sm font-bold uppercase tracking-wider sm:text-base">
        {name}
      </span>
      <span className="font-display text-lg font-bold text-neon-pink">
        {price}
      </span>
    </div>
  );
}

function Menu() {
  return (
    <section id="meni" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <MenuTitle />

        {/* BURGERI — main wide */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="lg:col-span-3">
            <div className="neon-border-pink rounded-2xl bg-bg-secondary/60 p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3 border-b border-white/5 pb-3">
                <span className="text-2xl">🍔</span>
                <h3 className="neon-pink-text font-display text-3xl font-bold tracking-wider sm:text-4xl">
                  BURGERI
                </h3>
              </div>
              <div className="grid gap-4">
                {burgers.map((b) => (
                  <BurgerCard key={b.name} row={b} />
                ))}
              </div>
            </div>
          </div>

          {/* Left column: SNACKS + PALAČINKE */}
          <div className="flex flex-col gap-5">
            <SectionPanel title="SNACKS" icon="🧀">
              <div className="divide-y divide-white/5">
                {snacks.map((s) => (
                  <PriceRow key={s.name} name={s.name} price={s.price} />
                ))}
              </div>
            </SectionPanel>
            <SectionPanel title="PALAČINKE" icon="🥞">
              <div className="divide-y divide-white/5">
                {palacinke.map((s) => (
                  <PriceRow key={s.name} name={s.name} price={s.price} />
                ))}
              </div>
            </SectionPanel>
          </div>

          {/* Middle column: image */}
          <div className="hidden lg:block">
            <div className="neon-border-blue h-full overflow-hidden rounded-2xl bg-bg-secondary/60">
              <img
                src={tripleDoubleAsset.url}
                alt="Triple Double burger"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right column: POMFRITI + SOSEVI */}
          <div className="flex flex-col gap-5">
            <SectionPanel title="POMFRITI" icon="🍟">
              <div className="divide-y divide-white/5">
                {pomfriti.map((s) => (
                  <PriceRow key={s.name} name={s.name} price={s.price} />
                ))}
              </div>
            </SectionPanel>
            <SectionPanel title="SOSEVI I DODACI" icon="🥫">
              <p className="mb-3 text-xs uppercase tracking-widest text-text-secondary">
                Svaki po <span className="neon-pink-text font-bold">80 RSD</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {sosevi.map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      border: "1px solid rgba(47,111,255,0.4)",
                      color: "var(--neon-blue)",
                      background: "rgba(47,111,255,0.06)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </SectionPanel>
          </div>
        </div>

        {/* Repeat CTA */}
        <div className="mt-16 flex flex-col items-center gap-6 text-center">
          <h3 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Gladni ste?{" "}
            <span className="neon-pink-text">Poručite odmah.</span>
          </h3>
          <OrderButtons size="lg" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nama" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-blue">
            O nama
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            Smash burger,
            <br />
            <span className="neon-pink-text">bez kompromisa.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
            {/* Placeholder — replace with real about text */}
            NORTE je smash burger kuhinja u srcu Novog Sada. 100% junetina,
            sveže mešane sosove, hrskavi bacon i buns koji drže sve na svom
            mestu. Pravimo po porudžbini, brzo i vruće.
          </p>
        </div>
        <div className="neon-border-blue overflow-hidden rounded-2xl">
          <img
            src={smashBlueAsset.url}
            alt="NORTE smash burger"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}


function Location() {
  return (
    <section id="lokacija" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-blue">
            Lokacija
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Nađite nas u <span className="neon-pink-text">Novom Sadu</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="neon-border-blue rounded-2xl bg-bg-secondary/60 p-6">
            <h3 className="font-display text-2xl font-bold text-white">
              NORTE Smash Burger
            </h3>
            <div className="mt-5 space-y-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-text-secondary">
                  Adresa
                </div>
                <div className="mt-1 text-base text-white">
                  Kornelija Stankovića 11, Novi Sad
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-text-secondary">
                  Telefon
                </div>
                <a
                  href="tel:+381691629063"
                  className="mt-1 block font-display text-2xl font-bold text-neon-pink"
                >
                  069 162 90 63
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-text-secondary">
                  Radno vreme
                </div>
                <div className="mt-1 text-base text-white">
                  Pon – Ned · 12:00 – 00:00
                </div>
              </div>
            </div>
          </div>
          <div className="neon-border-pink overflow-hidden rounded-2xl">
            <iframe
              title="NORTE lokacija"
              src="https://www.google.com/maps?q=Kornelija+Stankovi%C4%87a+11,+Novi+Sad&output=embed"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
        <div className="space-y-2">
          <NorteLogo />
          <div className="text-sm text-text-secondary">
            Kornelija Stankovića 11, Novi Sad · 069 162 90 63
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-widest text-text-secondary">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" className="hover:text-white">
            Instagram
          </a>
          <a href={WOLT_RESTAURANT_URL} target="_blank" rel="noreferrer noopener" className="hover:text-white">
            Wolt
          </a>
          <a href={GLOVO_RESTAURANT_URL} target="_blank" rel="noreferrer noopener" className="hover:text-white">
            Glovo
          </a>
        </div>
        <div className="text-xs text-text-secondary">
          © {new Date().getFullYear()} NORTE. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <CursorGlow />
      <Nav />
      <Hero />
      <Menu />
      <About />
      <Location />

      <Footer />
      <StickyOrderBar />
      <MobileAppNav />
    </div>
  );
}
