import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ActionLink, Container, SectionHeader, mapHref, telHref } from "./primitives";
import { site } from "@/content/site";

export function Visit() {
  return (
    <section id="visit" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <SectionHeader index="09" kicker="VISIT THE LIBRARY" heading="Find your way here." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <dl className="border-t border-foreground">
              {[
                { k: "ADDRESS", v: site.address, Icon: MapPin },
                { k: "OPENING HOURS", v: site.openingHours, Icon: Clock },
                { k: "PHONE", v: site.phone, Icon: Phone },
                { k: "EMAIL", v: site.email, Icon: Mail },
              ].map(({ k, v, Icon }) => (
                <div key={k} className="flex items-start gap-4 border-b py-6">
                  <Icon size={16} strokeWidth={1.25} aria-hidden className="mt-1 shrink-0" />
                  <div>
                    <dt className="label text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-lg">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={mapHref()} variant="solid">
                GET DIRECTIONS <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
              </ActionLink>
              <ActionLink href={telHref(site.phone)}>
                CALL THE LIBRARY <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
              </ActionLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              role="img"
              aria-label="Map placeholder: [GOOGLE MAP]"
              className="relative flex aspect-[16/12] w-full items-center justify-center border border-foreground bg-surface"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <span className="label relative text-muted-foreground">[GOOGLE MAP]</span>
            </div>
            <p className="label mt-3 text-muted-foreground">
              FIG. 04 — LOCATION, {site.locality}, {site.city}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
