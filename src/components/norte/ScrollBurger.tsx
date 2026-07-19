import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import bunBottom from "@/assets/burger/bun-bottom.png.asset.json";
import sauce from "@/assets/burger/sauce.png.asset.json";
import pickles from "@/assets/burger/pickles.png.asset.json";
import lettuce from "@/assets/burger/lettuce.png.asset.json";
import patty from "@/assets/burger/patty.png.asset.json";
import cheese from "@/assets/burger/cheese.png.asset.json";
import bacon from "@/assets/burger/bacon.png.asset.json";
import bunTop from "@/assets/burger/bun-top.png.asset.json";

gsap.registerPlugin(ScrollTrigger);

/**
 * Order (bottom to top of the finished burger):
 * bun-bottom, sauce, pickles, lettuce, patty, cheese, bacon, bun-top
 * Each layer drops in from above as you scroll.
 */
const LAYERS = [
  { src: bunBottom.url, alt: "Donji deo zemičke", y: 220, h: 90, z: 1 },
  { src: sauce.url, alt: "Sos", y: 175, h: 40, z: 2 },
  { src: pickles.url, alt: "Kiseli krastavci", y: 150, h: 40, z: 3 },
  { src: lettuce.url, alt: "Zelena salata", y: 115, h: 70, z: 4 },
  { src: patty.url, alt: "Junetina", y: 65, h: 90, z: 5 },
  { src: cheese.url, alt: "Cheddar", y: 30, h: 65, z: 6 },
  { src: bacon.url, alt: "Slaninica", y: 5, h: 55, z: 7 },
  { src: bunTop.url, alt: "Gornji deo zemičke", y: -85, h: 140, z: 8 },
];

export function ScrollBurger() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const layers = gsap.utils.toArray<HTMLElement>(".sb-layer");
      if (!layers.length) return;

      // starting state: bun bottom visible, others above the frame, rotated
      layers.forEach((el, i) => {
        if (i === 0) {
          gsap.set(el, { y: 0, opacity: 1, rotate: 0, scale: 1 });
        } else {
          gsap.set(el, {
            y: reduce ? 0 : -520,
            opacity: reduce ? 1 : 0,
            rotate: reduce ? 0 : (i % 2 === 0 ? -8 : 8),
            scale: reduce ? 1 : 0.92,
          });
        }
      });

      if (reduce) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2800",
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      layers.slice(1).forEach((el) => {
        tl.to(
          el,
          {
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "+=0.15",
        );
      });

      // final subtle "settle"
      tl.to(
        ".sb-stage",
        { scale: 1.03, duration: 0.4, ease: "power2.out", yoyo: true, repeat: 1 },
        "+=0.1",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="NORTE burger sklapa se pred vašim očima"
      className="relative overflow-hidden bg-bg-primary"
      style={{ height: "100vh" }}
    >
      {/* subtle glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 60%, rgba(47,111,255,0.18), transparent 70%), radial-gradient(50% 40% at 50% 40%, rgba(255,45,146,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-neon-blue">
          Sloj po sloj
        </p>
        <h2 className="text-center font-display text-4xl font-bold leading-none text-white sm:text-6xl md:text-7xl">
          SKLOPI SVOJ <span className="neon-pink-text">NORTE</span>
        </h2>

        <div
          ref={stageRef}
          className="sb-stage relative mt-8 w-full max-w-[520px]"
          style={{ height: 460 }}
        >
          {LAYERS.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.alt}
              className="sb-layer absolute left-1/2 w-full -translate-x-1/2 select-none"
              style={{
                top: `calc(50% + ${l.y}px - ${l.h / 2}px)`,
                height: l.h,
                objectFit: "contain",
                zIndex: l.z,
                filter: "drop-shadow(0 12px 18px rgba(0,0,0,0.55))",
              }}
              draggable={false}
              loading="lazy"
              width={1024}
              height={512}
            />
          ))}
        </div>

        <p className="mt-6 text-center text-sm uppercase tracking-widest text-text-secondary">
          Skroluj ↓
        </p>
      </div>
    </section>
  );
}
