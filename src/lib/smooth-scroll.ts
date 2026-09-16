/**
 * Glatko skrolovanje do sekcije po ID-u, sa custom easingom
 * (easeInOutCubic) — konzistentno na svim uređajima i pregledačima,
 * umesto naglog skoka ili nepouzdanog CSS smooth scroll-a.
 */
export function smoothScrollToId(id: string, offset = 64) {
  const el = document.getElementById(id);
  if (!el) return;

  const start = window.scrollY;
  const targetRaw =
    id === "top"
      ? 0
      : el.getBoundingClientRect().top + start - offset;
  const target = Math.max(0, targetRaw);
  const distance = target - start;

  if (Math.abs(distance) < 2) return;

  // Dužina animacije raste sa razdaljinom, sa granicama 500–1200ms.
  const duration = Math.min(1200, Math.max(500, Math.abs(distance) * 0.45));
  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / duration);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
