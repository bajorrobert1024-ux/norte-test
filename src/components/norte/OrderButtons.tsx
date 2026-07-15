import { WOLT_RESTAURANT_URL, GLOVO_RESTAURANT_URL } from "@/data/menu";

type Size = "sm" | "md" | "lg";

const sizeCls: Record<Size, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-4 text-base",
};

export function OrderButtons({ size = "md" }: { size?: Size }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={WOLT_RESTAURANT_URL}
        target="_blank"
        rel="noreferrer noopener"
        className={`group inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-all ${sizeCls[size]}`}
        style={{
          background: "var(--bg-secondary)",
          color: "#00c2b0",
          border: "1.5px solid #00c2b0",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 18px rgba(255,62,142,0.55), 0 0 40px rgba(255,62,142,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        }}
      >
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: "#00c2b0", boxShadow: "0 0 8px #00c2b0" }}
        />
        Poruči preko Wolt-a
      </a>
      <a
        href={GLOVO_RESTAURANT_URL}
        target="_blank"
        rel="noreferrer noopener"
        className={`group inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-wider transition-all ${sizeCls[size]}`}
        style={{
          background: "var(--bg-secondary)",
          color: "#ffc244",
          border: "1.5px solid #ffc244",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 18px rgba(255,62,142,0.55), 0 0 40px rgba(255,62,142,0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
        }}
      >
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: "#ffc244", boxShadow: "0 0 8px #ffc244" }}
        />
        Poruči preko Glovo-a
      </a>
    </div>
  );
}
