import { Container } from "./primitives";
import { navItems, site } from "@/content/site";

export function Footer({ year }: { year: string }) {
  return (
    <footer className="paper bg-foreground text-background">
      <Container className="py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center border border-background font-mono text-[0.625rem]"
              >
                L
              </span>
              <span className="font-display text-xl">{site.name}</span>
            </div>
            <p className="mt-6 max-w-[34ch] opacity-70">{site.description}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <p className="label opacity-60">SECTIONS</p>
            <ul className="mt-4 space-y-2">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="label underline-offset-4 hover:underline">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="label opacity-60">VISIT</p>
            <p className="mt-4">{site.address}</p>
            <p className="label mt-3 opacity-70">{site.openingHours}</p>
          </div>

          <div className="md:col-span-3">
            <p className="label opacity-60">CONTACT</p>
            <ul className="mt-4 space-y-2">
              <li>{site.phone}</li>
              <li>{site.email}</li>
              <li>{site.whatsapp}</li>
            </ul>
            <p className="label mt-6 opacity-60">SOCIAL</p>
            <ul className="mt-3 space-y-2">
              <li className="label">{site.instagram}</li>
              <li className="label">{site.facebook}</li>
            </ul>
          </div>
        </div>

        <p className="mt-20 font-display text-[2.5rem] leading-[0.95] md:text-[4.5rem]">
          A place to read.
          <br />
          A place to focus.
        </p>
      </Container>

      <div className="border-t border-background/30">
        <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="label flex items-center gap-4 opacity-70">
            {site.volume} <span aria-hidden className="opacity-40">|</span> {year}{" "}
            <span aria-hidden className="opacity-40">|</span> {site.name}
          </p>
          <p className="label opacity-70">
            © {year} {site.name}
          </p>
          <p className="label flex gap-6 opacity-70">
            <span>PRIVACY</span>
            <span>TERMS</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
