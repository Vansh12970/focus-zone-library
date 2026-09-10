import { Container, SectionHeader } from "./primitives";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <SectionHeader index="08" kicker="FROM OUR MEMBERS" heading="In their words." />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div aria-hidden className="hidden font-display text-[9rem] leading-[0.6] lg:col-span-2 lg:block">
            “
          </div>
          <div className="lg:col-span-9">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="border-t pt-8 pb-10 first:border-t-2 first:border-foreground">
                <p className="max-w-[34ch] font-display text-3xl italic leading-tight md:text-[3rem]">
                  {t.quote}
                </p>
                <footer className="label mt-8 text-muted-foreground">
                  {t.name} <span aria-hidden className="mx-2 opacity-40">|</span> {t.meta}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
