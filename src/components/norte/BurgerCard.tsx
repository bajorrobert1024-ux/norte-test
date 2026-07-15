import { useRef } from "react";
import { AnimatedPrice } from "./AnimatedPrice";
import type { BurgerRow } from "@/data/menu";
import { priceColumns } from "@/data/menu";

export function BurgerCard({ row }: { row: BurgerRow }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-4px)`;
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="card-hover neon-border-blue rounded-2xl bg-bg-secondary p-5 sm:p-6"
      style={{ willChange: "transform" }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
        <div className="min-w-0">
          <h3 className="neon-blue-text font-display text-2xl font-bold sm:text-3xl">
            {row.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            {row.ingredients}
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-3 gap-y-1 sm:min-w-[320px]">
          {priceColumns.map((label, i) => (
            <div key={label} className="text-center">
              <div className="neon-blue-text text-[10px] font-semibold uppercase tracking-widest opacity-90">
                {label.split(" ").map((w, k) => (
                  <div key={k}>{w}</div>
                ))}
              </div>
              <div className="mt-1 font-display text-xl font-bold text-neon-pink sm:text-2xl">
                <AnimatedPrice value={row.prices[i]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
