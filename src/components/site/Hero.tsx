import { ArrowRight, ArrowDown } from "lucide-react";
import { Container, PhotoPlaceholder } from "./primitives";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="paper border-b border-foreground">
      <Container className="grid grid-cols-1 gap-10 py-14 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 lg:pr-10">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-3 w-3 bg-foreground" />
            <p className="label text-muted-foreground">THE LIBRARY — {site.volume}</p>
          </div>

          <h1 className="mt-8 text-[3rem] leading-[0.92] sm:text-[4.25rem] md:text-[5.5rem] lg:text-[6.5rem]">
            A quiet place
            <br />
            to read,
            <br />
            learn &amp; grow.
          </h1>

          <p className="mt-8 max-w-[46ch] border-l border-foreground pl-5 text-lg text-muted-foreground">
            {site.tagline} — {site.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="btn-solid w-full sm:w-auto">
              EXPLORE THE LIBRARY <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              CONTACT US <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
            </a>
          </div>

        </div>

        <div className="lg:col-span-5 lg:row-span-2">
          <PhotoPlaceholder label="[LIBRARY HERO PHOTO]" ratio="3 / 4" />
          <p className="label mt-3 text-muted-foreground">FIG. 00 — THE LIBRARY</p>
        </div>

        <dl className="grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3 lg:col-span-7 lg:pr-10">
          {[
            { k: "ESTABLISHED", v: site.established },
            { k: "LOCALITY", v: site.locality },
            { k: "HOURS", v: site.openingHours },
          ].map((m) => (
            <div key={m.k}>
              <dt className="label text-muted-foreground">{m.k}</dt>
              <dd className="mt-1 font-mono text-[0.8125rem]">{m.v}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container className="flex items-center gap-3 border-t py-4">
        <ArrowDown size={13} strokeWidth={1.25} aria-hidden />
        <p className="label text-muted-foreground">SCROLL TO EXPLORE</p>
      </Container>
    </section>
  );
}
