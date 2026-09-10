import { BookOpen, Car, Clock, MapPin, Snowflake, Wifi, Zap } from "lucide-react";
import { Container, SectionHeader } from "./primitives";
import { facilities } from "@/content/site";

const icons = { BookOpen, Car, Clock, MapPin, Snowflake, Wifi, Zap } as const;

export function Facilities() {
  return (
    <section id="facilities" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeader
              index="02"
              kicker="FACILITIES"
              heading={
                <>
                  Everything you need
                  <br />
                  to focus.
                </>
              }
            />
          </div>
        </div>

        <ul className="grid grid-cols-1 border-t border-foreground sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => {
            const Icon = icons[f.icon as keyof typeof icons];
            return (
              <li
                key={f.n}
                className={`group border-b p-6 transition-colors duration-100 hover:bg-surface sm:p-8 ${
                  i % 2 === 1 ? "sm:border-l" : ""
                } lg:border-l lg:first:border-l-0 lg:[&:nth-child(5)]:border-l-0`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl">{f.n}</span>
                  <Icon size={18} strokeWidth={1.25} aria-hidden />
                </div>
                <h3 className="mt-8 font-mono text-[0.8125rem] uppercase tracking-[0.12em] leading-relaxed">
                  {f.title}
                </h3>
                <p className="mt-3 text-[0.95rem] text-muted-foreground">{f.body}</p>
              </li>
            );
          })}
        </ul>
        <p className="label mt-6 text-muted-foreground">
          LIST TO BE CONFIRMED — SHOW ONLY FACILITIES THAT ACTUALLY EXIST
        </p>
      </Container>
    </section>
  );
}
