import logoAsset from "@/assets/nortelogo.png.asset.json";

export function NorteLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="NORTE logo"
      className={`h-9 w-auto object-contain sm:h-10 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
