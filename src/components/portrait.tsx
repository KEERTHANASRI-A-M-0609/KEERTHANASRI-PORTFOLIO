import { PORTRAIT_URL } from "@/lib/profile";

export function Portrait({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <img
      src={PORTRAIT_URL}
      alt="Portrait of Keerthanasri A M"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={`block w-full h-full object-cover object-top ${className}`}
    />
  );
}