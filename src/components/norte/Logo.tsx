export function NorteLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full"
        style={{
          background: "var(--neon-blue)",
          boxShadow:
            "0 0 12px rgba(47,111,255,0.6), 0 0 30px rgba(47,111,255,0.35), inset 0 0 0 2px rgba(255,255,255,0.15)",
        }}
        aria-hidden
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path
            d="M3 12c3-4 7-4 10 0 3 4 7 4 10 0"
            stroke="#fff"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="17" cy="11" r="1.3" fill="#fff" />
        </svg>
      </div>
      <span className="font-display text-2xl font-bold tracking-widest text-white">
        N<span className="neon-blue-text">O</span>RTE
      </span>
    </div>
  );
}
