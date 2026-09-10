import { Container } from "./primitives";
import { site } from "@/content/site";

export function TopBar({ year }: { year: string }) {
  const items = [site.volume, year, `${site.locality} / ${site.city}`, site.openingHours];
  return (
    <div className="border-b bg-background">
      <Container className="flex h-9 items-center overflow-x-auto whitespace-nowrap">
        <p className="label flex items-center gap-4 text-muted-foreground">
          {items.map((it, i) => (
            <span key={i} className="flex items-center gap-4">
              {i > 0 && <span aria-hidden className="opacity-40">|</span>}
              {it}
            </span>
          ))}
        </p>
      </Container>
    </div>
  );
}
