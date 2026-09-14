import { useEffect } from "react";
import type { BurgerRow } from "@/data/menu";
import { Button } from "@/components/ui/button";
import burgerPhotoAsset from "@/assets/burger-placeholder.png.asset.json";

export const burgerPhotoUrl = burgerPhotoAsset.url;

export function BurgerPhotoDialog({
  burger,
  onClose,
}: {
  burger: BurgerRow | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!burger) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [burger, onClose]);

  if (!burger) return null;

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-bg-primary/95 p-4 backdrop-blur-md sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Fotografija burgera ${burger.name}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="neon-border-pink relative w-full max-w-3xl overflow-hidden rounded-2xl bg-bg-secondary shadow-2xl">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Zatvori fotografiju"
          className="absolute right-3 top-3 z-10 rounded-full border border-text-primary/25 bg-bg-primary/80 text-text-primary backdrop-blur-md hover:bg-bg-primary"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </Button>

        <div className="aspect-[4/3] w-full overflow-hidden bg-bg-primary sm:aspect-[16/10]">
          <img
            src={burgerPhotoUrl}
            alt={`${burger.name} burger`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="border-t border-neon-blue/20 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-neon-blue">
            Privremena fotografija
          </p>
          <h2 className="neon-pink-text mt-1 font-display text-3xl font-bold sm:text-4xl">
            {burger.name}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
            {burger.ingredients}
          </p>
        </div>
      </div>
    </div>
  );
}