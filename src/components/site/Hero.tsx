import { ArrowRight, ArrowDown } from "lucide-react";
import { AssetImage, Container } from "./primitives";
import { site } from "@/content/site";
import { libraryAssets } from "@/config/library-assets";

export function Hero() {
  return (
    <section id="top" className="paper border-b border-foreground">
      <Container className="grid grid-cols-1 gap-10 py-14 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 lg:pr-10">
          <div className="flex items-center gap-4">
            <span aria-hidden className="h-3 w-3 bg-foreground" />
            <p className="label text-muted-foreground">
              {site.name.toUpperCase()} — {site.tagline.toUpperCase()}
            </p>
          </div>

          <h1 className="mt-8 text-[3rem] leading-[0.92] sm:text-[4.25rem] md:text-[5.5rem] lg:text-[6.5rem]">
            A quiet place
            <br />
            to read,
            <br />
            learn &amp; grow.
          </h1>

          <p className="mt-8 max-w-[46ch] border-l border-foreground pl-5 text-lg text-muted-foreground">
            {site.description} A quiet, disciplined study space in {site.locality}, {site.city}.
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
        <video
          className="aspect-[3/4] w-full border border-foreground object-cover"
          src="/images/focus-zone-library/videos/library-tour.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Introduction video showing Focus Zone Library in Kharar"
        >
          Your browser does not support HTML video.
        </video>

        <p className="label mt-3 text-muted-foreground">
          FOCUS ZONE LIBRARY
        </p>
      </div>

        <dl className="grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3 lg:col-span-7 lg:pr-10">
          {[
            { k: "LOCATION", v: `${site.locality}, ${site.city}` },
            { k: "LANDMARK", v: site.addressLine2 },
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
