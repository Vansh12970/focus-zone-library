import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./primitives";
import { navItems, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = [...navItems.map((n) => n.href.slice(1)), "visit"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground bg-background">
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center border border-foreground font-mono text-[0.625rem]"
          >
            L
          </span>
          <span className="font-display text-lg tracking-tight">{site.name}</span>
          <span className="sr-only">{site.name} — home</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={active === n.href ? "true" : undefined}
              className={`label border-b py-1 transition-colors duration-100 ${
                active === n.href ? "border-foreground" : "border-transparent hover:border-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#visit" className="label hidden items-center gap-2 lg:inline-flex">
            VISIT US <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="label flex h-11 items-center gap-2 border border-foreground px-4 lg:hidden"
          >
            {open ? <X size={15} strokeWidth={1.25} aria-hidden /> : <Menu size={15} strokeWidth={1.25} aria-hidden />}
            MENU
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t border-foreground bg-background lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {[...navItems, { label: "VISIT US", href: "#visit" }].map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="label flex min-h-[52px] items-center justify-between border-b px-6 hover:bg-surface"
              >
                {n.label}
                <ArrowRight size={14} strokeWidth={1.25} aria-hidden />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
