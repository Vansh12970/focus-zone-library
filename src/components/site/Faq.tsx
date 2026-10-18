import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Container, SectionHeader } from "./primitives";
import { faqs } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-foreground bg-surface py-16 md:py-28">
      <Container>
        <SectionHeader index="07" kicker="FAQ" heading="Questions, answered." />

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <ul className="border-t border-foreground">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="border-b">
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        id={`faq-button-${i}`}
                        className="flex w-full min-h-[64px] items-center justify-between gap-6 py-5 text-left"
                      >
                        <span className="font-mono text-[0.8125rem] uppercase tracking-[0.1em]">
                          {item.q}
                        </span>
                        <span className="shrink-0 transition-transform duration-100" aria-hidden>
                          {isOpen ? (
                            <Minus size={18} strokeWidth={1.25} />
                          ) : (
                            <Plus size={18} strokeWidth={1.25} />
                          )}
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        className="max-w-[60ch] pb-8 text-muted-foreground"
                      >
                        {item.a}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
