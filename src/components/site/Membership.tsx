import { ArrowRight } from "lucide-react";
import { Container, SectionHeader } from "./primitives";
import { plans, site } from "@/content/site";

export function Membership() {
  return (
    <section id="membership" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              index="06"
              kicker="MEMBERSHIP"
              heading={
                <>
                  Make the library
                  <br />
                  part of your routine.
                </>
              }
            />
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-24">
            <p className="text-muted-foreground">{site.membershipNote}</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 border-t border-foreground md:grid-cols-3">
          {plans.map((p) => (
            <li
              key={p.term}
              className={`border-b p-8 md:border-l md:first:border-l-0 ${
                p.featured ? "border-b-2 border-foreground md:border-l-2" : ""
              }`}
            >
              <p className="label text-muted-foreground">{p.term}</p>
              <p
                className={`mt-6 font-display ${
                  p.featured ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"
                }`}
              >
                {p.price}
              </p>
              <ul className="mt-8 border-t pt-6">
                {p.benefits.map((b, i) => (
                  <li key={i} className="border-b py-3 text-[0.95rem] text-muted-foreground last:border-b-0">
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t-2 border-foreground pt-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="text-2xl md:text-3xl">Membership plans</h3>
            <p className="mt-3 max-w-[46ch] text-muted-foreground">
              Contact us for current fees, availability and membership details.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            <a href="#contact" className="btn-solid w-full sm:w-auto">
              ENQUIRE ABOUT MEMBERSHIP <ArrowRight size={13} strokeWidth={1.25} aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
