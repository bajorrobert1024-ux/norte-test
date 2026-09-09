import { useEffect, useState } from "react";
import {
  burgers,
  snacks,
  pomfriti,
  palacinke,
  sosevi,
  WOLT_RESTAURANT_URL,
  GLOVO_RESTAURANT_URL,
} from "@/data/menu";

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconInfo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8h.01M11 12h1v5h1" />
    </svg>
  );
}
function IconBurger() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8c1.5-3 6-5 9-5s7.5 2 9 5" />
      <path d="M3 12h18" />
      <path d="M4 16h16c0 2-2 4-4 4H8c-2 0-4-2-4-4Z" />
    </svg>
  );
}
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DigitalMenuModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex flex-col"
      style={{ background: "rgba(6,7,14,0.96)", backdropFilter: "blur(14px)" }}
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-4"
        style={{ borderBottom: "1px solid rgba(255,62,142,0.25)" }}
      >
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neon-blue">
            Digitalni meni
          </div>
          <div className="neon-pink-text font-display text-2xl font-bold tracking-wider">
            NORTE
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Zatvori"
          className="grid h-10 w-10 place-items-center rounded-full"
          style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "white" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 py-5 pb-32">
        <div className="mx-auto max-w-3xl space-y-6">
          {/* Burgers */}
          <section>
            <h3 className="neon-pink-text mb-3 font-display text-2xl font-bold tracking-wider">
              🍔 BURGERI
            </h3>
            <div className="grid gap-2">
              <div className="grid grid-cols-[1fr_repeat(4,minmax(0,52px))] gap-2 px-1 text-[9px] font-bold uppercase tracking-wider text-text-secondary">
                <span></span>
                <span className="text-right">D</span>
                <span className="text-right">T</span>
                <span className="text-right">DD</span>
                <span className="text-right">TD</span>
              </div>
              {burgers.map((b) => (
                <div
                  key={b.name}
                  className="rounded-xl p-3"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(47,111,255,0.25)",
                  }}
                >
                  <div className="grid grid-cols-[1fr_repeat(4,minmax(0,52px))] items-center gap-2">
                    <div className="min-w-0">
                      <div className="neon-blue-text truncate text-sm font-bold uppercase tracking-wider">
                        {b.name}
                      </div>
                    </div>
                    {b.prices.map((p, i) => (
                      <div key={i} className="text-right font-display text-sm font-bold text-neon-pink">
                        {p}
                      </div>
                    ))}
                  </div>
                  <p className="mt-1.5 text-[11px] leading-snug text-text-secondary">
                    {b.ingredients}
                  </p>
                </div>
              ))}
              <p className="mt-1 text-[10px] uppercase tracking-widest text-text-secondary">
                D=Double · T=Triple · DD=Double Double · TD=Triple Double · Cene u RSD
              </p>
            </div>
          </section>

          {/* Snacks + Palačinke + Pomfriti */}
          {[
            { title: "🧀 SNACKS", items: snacks },
            { title: "🍟 POMFRITI", items: pomfriti },
            { title: "🥞 PALAČINKE", items: palacinke },
          ].map((sec) => (
            <section key={sec.title}>
              <h3 className="neon-pink-text mb-3 font-display text-2xl font-bold tracking-wider">
                {sec.title}
              </h3>
              <div
                className="divide-y rounded-xl px-3"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,62,142,0.2)",
                  borderColor: "rgba(255,62,142,0.2)",
                }}
              >
                {sec.items.map((it) => (
                  <div key={it.name} className="flex items-baseline justify-between gap-3 py-2.5">
                    <span className="neon-blue-text text-sm font-bold uppercase tracking-wider">
                      {it.name}
                    </span>
                    <span className="font-display text-lg font-bold text-neon-pink">
                      {it.price}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Sosevi */}
          <section>
            <h3 className="neon-pink-text mb-3 font-display text-2xl font-bold tracking-wider">
              🥫 SOSEVI I DODACI
            </h3>
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
          </section>
        </div>
      </div>

      {/* Order CTAs fixed bottom */}
      <div
        className="fixed inset-x-0 bottom-0 z-[71] px-4 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-4"
        style={{
          background: "linear-gradient(to top, rgba(6,7,14,1) 60%, rgba(6,7,14,0))",
        }}
      >
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={WOLT_RESTAURANT_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 rounded-full px-4 py-3 text-center text-sm font-bold uppercase tracking-wider"
            style={{
              background: "#00c2b0",
              color: "#0a0b14",
              boxShadow: "0 0 22px rgba(0,194,176,0.5)",
            }}
          >
            Wolt
          </a>
          <a
            href={GLOVO_RESTAURANT_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 rounded-full px-4 py-3 text-center text-sm font-bold uppercase tracking-wider"
            style={{
              background: "#ffc244",
              color: "#0a0b14",
              boxShadow: "0 0 22px rgba(255,194,68,0.5)",
            }}
          >
            Glovo
          </a>
        </div>
      </div>
    </div>
  );
}

export function MobileAppNav() {
  const [open, setOpen] = useState(false);
  const [trackOpen, setTrackOpen] = useState(false);

  return (
    <>
      <DigitalMenuModal open={open} onClose={() => setOpen(false)} />
      <TrackingModal open={trackOpen} onClose={() => setTrackOpen(false)} />

      <nav
        className="fixed inset-x-0 bottom-0 z-[60] animate-nav-up nav-smooth md:hidden"
        style={{
          background: "rgba(10,11,20,0.92)",
          backdropFilter: "blur(14px)",
          borderTop: "1px solid rgba(255,62,142,0.25)",
          boxShadow: "0 -10px 40px rgba(255,62,142,0.12)",
        }}
        aria-label="Mobilna navigacija"
      >
        <div
          className="relative mx-auto flex max-w-md items-end justify-between px-6 pb-0 pt-2"
          style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 14px)" }}
        >
          <NavItem
            label="Početna"
            onClick={() => scrollToId("top")}
            icon={<IconHome />}
          />
          <NavItem
            label="O nama"
            onClick={() => scrollToId("o-nama")}
            icon={<IconInfo />}
          />

          {/* Center order button */}
          <div className="flex w-16 justify-center">
            <button
              onClick={() => setOpen(true)}
              aria-label="Otvori meni za poručivanje"
              className="relative -mt-8 grid h-16 w-16 place-items-center rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #ff6bb0 0%, #ff3e8e 55%, #c81f6a 100%)",
                boxShadow:
                  "0 0 0 4px rgba(10,11,20,0.95), 0 0 22px rgba(255,62,142,0.7), 0 0 45px rgba(255,62,142,0.35)",
                color: "#0a0b14",
              }}
            >
              <IconBurger />
              <span
                className="absolute -bottom-4 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "var(--neon-pink)" }}
              >
                Poruči
              </span>
            </button>
          </div>

          <NavItem
            label="Praćenje"
            onClick={() => setTrackOpen(true)}
            icon={<IconTruck />}
          />
          <NavItem
            label="Lokacija"
            onClick={() => scrollToId("lokacija")}
            icon={<IconMap />}
          />


        </div>
      </nav>
    </>
  );
}

function NavItem({
  label,
  icon,
  onClick,
  href,
}: {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const cls =
    "flex w-14 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-text-secondary transition-colors active:text-white";
  const content = (
    <>
      <span className="text-white/85">{icon}</span>
      <span className="truncate">{label}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
