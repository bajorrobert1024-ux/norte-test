import { useEffect, useState } from "react";

/**
 * Small top-banner when offline. If a cached SW response is being served,
 * show the "sačuvana verzija" note. Falls back to prompting reconnect.
 */
export function OfflineBanner() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(navigator.onLine);
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);

  if (online) return null;

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-[60] px-4 py-2 text-center text-xs font-semibold uppercase tracking-wider text-white animate-fade-in"
      style={{
        background: "rgba(10,11,20,0.95)",
        borderBottom: "1px solid var(--neon-pink)",
        boxShadow: "0 2px 20px rgba(255,62,142,0.25)",
      }}
    >
      Offline — prikazuje se sačuvana verzija menija. Cene mogu biti neažurne.{" "}
      <button
        onClick={() => window.location.reload()}
        className="ml-2 underline decoration-neon-pink underline-offset-2"
      >
        Pokušaj ponovo
      </button>
    </div>
  );
}
