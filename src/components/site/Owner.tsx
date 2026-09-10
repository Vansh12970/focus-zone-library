import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  ActionLink,
  Container,
  PhotoPlaceholder,
  SectionHeader,
  mailHref,
  telHref,
  waHref,
} from "./primitives";
import { site } from "@/content/site";

export function Owner() {
  return (
    <section id="owner" className="border-b border-foreground bg-surface py-16 md:py-28">
      <Container>
        <SectionHeader index="05" kicker="THE PERSON BEHIND THE LIBRARY" heading={site.owner.name} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <PhotoPlaceholder label="[OWNER PHOTO]" ratio="4 / 5" />
            <p className="label mt-3 text-muted-foreground">{site.owner.title}</p>
          </div>

          <div className="lg:col-span-8 lg:border-l lg:border-foreground lg:pl-12">
            <p className="max-w-[54ch] text-lg">{site.owner.bio}</p>

            <blockquote className="mt-12 border-t border-foreground pt-10">
              <p className="max-w-[30ch] font-display text-3xl italic leading-tight md:text-5xl">
                “{site.owner.quote}”
              </p>
              <footer className="label mt-6 text-muted-foreground">
                {site.owner.name} — {site.owner.title}
              </footer>
            </blockquote>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <ActionLink href={telHref(site.phone)}>
                <Phone size={14} strokeWidth={1.25} aria-hidden /> CALL
              </ActionLink>
              <ActionLink href={waHref(site.whatsapp)}>
                <MessageCircle size={14} strokeWidth={1.25} aria-hidden /> WHATSAPP
              </ActionLink>
              <ActionLink href={mailHref(site.email)}>
                <Mail size={14} strokeWidth={1.25} aria-hidden /> EMAIL
              </ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
