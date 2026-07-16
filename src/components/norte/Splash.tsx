import { useEffect, useState } from "react";
import { NorteLogo } from "./Logo";

/**
 * Full-screen brand splash. Fades out on mount (after paint) — not a fixed timer.
 * Kept lightweight and inline-rendered so it appears before hero image loads.
 */
export function Splash() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Wait for first paint + microtask so content behind is ready, then fade.
    const raf = requestAnimationFrame(() => {
      const t = window.setTimeout(() => setHidden(true), 350);
      return () => window.clearTimeout(t);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setGone(true), 350);
    return () => window.clearTimeout(t);
  }, [hidden]);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-300"
      style={{
        background: "var(--bg-primary)",
        opacity: hidden ? 0 : 1,
      }}
    >
      <div className="animate-splash-pulse">
        <NorteLogo />
      </div>
      <div
        className="mt-8 h-[2px] w-40 overflow-hidden rounded-full"
        style={{ background: "rgba(255,62,142,0.15)" }}
      >
        <div
          className="h-full w-full origin-left animate-splash-bar"
          style={{
            background: "var(--neon-pink)",
            boxShadow: "0 0 12px var(--neon-pink)",
          }}
        />
      </div>
    </div>
  );
}
