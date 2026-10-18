import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ActionLink, Container, SectionHeader, mailHref, mapHref, telHref, waHref } from "./primitives";
import { site } from "@/content/site";

export function Visit() {
  return (
    <section id="visit" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <SectionHeader index="06" kicker="VISIT THE LIBRARY" heading="Find your way here." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <dl className="border-t border-foreground">
              <div className="flex items-start gap-4 border-b py-6">
                <MapPin size={16} strokeWidth={1.25} aria-hidden className="mt-1 shrink-0" />
                <div>
                  <dt className="label text-muted-foreground">ADDRESS</dt>
                  <dd className="mt-1 text-lg">
                    {site.address}
                    <br />
                    {site.addressLine2}
                  </dd>
                </div>
              </div>
              {[
                { k: "OPENING HOURS", v: site.openingHours, Icon: Clock, href: undefined },
                { k: "PHONE", v: site.phone, Icon: Phone, href: telHref(site.phone) },
                { k: "EMAIL", v: site.email, Icon: Mail, href: mailHref(site.email) },
              ].map(({ k, v, Icon, href }) => (
                <div key={k} className="flex items-start gap-4 border-b py-6">
                  <Icon size={16} strokeWidth={1.25} aria-hidden className="mt-1 shrink-0" />
                  <div>
                    <dt className="label text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-lg">
                      {href ? (
                        <a href={href} className="underline-offset-4 hover:underline">
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ActionLink href={mapHref()} variant="solid" external>
                GET DIRECTIONS <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
              </ActionLink>
              <ActionLink href={telHref(site.phone)}>
                CALL THE LIBRARY <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
              </ActionLink>
              <ActionLink href={waHref(site.whatsapp, site.whatsappMessage)} external>
                WHATSAPP US <MessageCircle size={13} strokeWidth={1.25} aria-hidden />
              </ActionLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <a
              href={mapHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${site.name} location in Google Maps`}
              className="group relative flex aspect-[16/12] w-full flex-col items-center justify-center gap-4 border border-foreground bg-surface transition-colors duration-100 hover:bg-background"
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
              <MapPin size={28} strokeWidth={1.25} aria-hidden className="relative" />
              <span className="label relative text-muted-foreground">
                {site.address}, {site.addressLine2}
              </span>
              <span className="label relative inline-flex items-center gap-2 border border-foreground px-4 py-2 group-hover:bg-foreground group-hover:text-background">
                OPEN IN GOOGLE MAPS <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
              </span>
            </a>
            <p className="label mt-3 text-muted-foreground">
              FIG. 04 — LOCATION, {site.locality}, {site.city}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
