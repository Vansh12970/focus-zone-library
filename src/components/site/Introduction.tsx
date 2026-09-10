import { Container, Meta, PhotoPlaceholder, SectionHeader } from "./primitives";
import { isPlaceholder, site } from "@/content/site";

export function Introduction() {
  return (
    <section id="introduction" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              index="01"
              kicker="THE LIBRARY"
              heading={
                <>
                  A space
                  <br />
                  for focus.
                </>
              }
            />
            <p
              className={`max-w-[42ch] text-lg ${
                isPlaceholder(site.introduction) ? "" : "dropcap"
              }`}
            >
              {site.introduction}
            </p>
            <p className="mt-8 max-w-[42ch] text-muted-foreground">{site.description}</p>
          </div>

          <div className="lg:col-span-7">
            <PhotoPlaceholder label="[READING ROOM PHOTO]" ratio="16 / 11" />
            <p className="label mt-3 text-muted-foreground">FIG. 01 — MAIN READING ROOM</p>
          </div>
        </div>

        <div className="mt-16 border-t-2 border-foreground pt-8">
          <Meta
            items={[
              { k: "LIBRARY", v: site.name },
              { k: "LOCATION", v: `${site.locality}, ${site.city}` },
              { k: "ESTABLISHED", v: site.established },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
