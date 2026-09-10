import type { ReactNode } from "react";
import { isPlaceholder, site } from "@/content/site";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1200px] px-6 md:px-10 ${className}`}>{children}</div>;
}

export function SectionHeader({
  index,
  kicker,
  heading,
  invert = false,
}: {
  index: string;
  kicker: string;
  heading: ReactNode;
  invert?: boolean;
}) {
  return (
    <header className="mb-12 md:mb-20">
      <p className={`label ${invert ? "opacity-60" : "text-muted-foreground"}`}>
        {index} / {kicker}
      </p>
      <h2
        className={`mt-6 max-w-[22ch] text-[2.5rem] leading-[0.95] md:text-[3.5rem] lg:text-[4.25rem] ${
          invert ? "" : ""
        }`}
      >
        {heading}
      </h2>
    </header>
  );
}

export function PhotoPlaceholder({
  label,
  ratio = "4 / 5",
  invert = false,
  className = "",
}: {
  label: string;
  ratio?: string | undefined;
  invert?: boolean | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={`relative flex w-full items-center justify-center overflow-hidden border ${
        invert ? "border-background/40 bg-background/5" : "border-foreground bg-surface"
      } ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0 1px, transparent 1px 9px)",
        }}
      />
      <span className={`label relative px-6 text-center ${invert ? "" : "text-muted-foreground"}`}>
        {label}
      </span>
    </div>
  );
}

export function Meta({
  items,
  invert = false,
}: {
  items: { k: string; v: string }[];
  invert?: boolean;
}) {
  return (
    <dl className={`grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3`}>
      {items.map((it) => (
        <div key={it.k} className={`border-t pt-3 ${invert ? "border-background/30" : ""}`}>
          <dt className={`label ${invert ? "opacity-60" : "text-muted-foreground"}`}>{it.k}</dt>
          <dd className="mt-2 font-mono text-[0.8125rem]">{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* Contact links: never fabricate destinations for placeholder values. */
export const telHref = (v: string) => (isPlaceholder(v) ? undefined : `tel:${v.replace(/\s+/g, "")}`);
export const mailHref = (v: string) => (isPlaceholder(v) ? undefined : `mailto:${v}`);
export const waHref = (v: string) =>
  isPlaceholder(v) ? undefined : `https://wa.me/${v.replace(/[^\d]/g, "")}`;
export const mapHref = () => {
  if (site.mapUrl) return site.mapUrl;
  if (isPlaceholder(site.address)) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
};

export function ActionLink({
  href,
  children,
  variant = "outline",
  className = "",
}: {
  href?: string | undefined;
  children: ReactNode;
  variant?: "solid" | "outline" | "invert" | undefined;
  className?: string | undefined;
}) {
  const cls = `${
    variant === "solid" ? "btn-solid" : variant === "invert" ? "btn-invert" : "btn-outline"
  } ${className} ${href ? "" : "cursor-not-allowed opacity-50"}`;

  if (!href) {
    return (
      <span className={cls} aria-disabled="true" title="Awaiting real contact details">
        {children}
      </span>
    );
  }
  return (
    <a className={cls} href={href}>
      {children}
    </a>
  );
}
