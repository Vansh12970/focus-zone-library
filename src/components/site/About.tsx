import { AssetImage, Container, Meta, SectionHeader } from "./primitives";
import { site } from "@/content/site";
import { libraryAssets } from "@/config/library-assets";

export function About() {
  return (
    <section id="about" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:order-2">
            <AssetImage
              src={libraryAssets.interior.entrance}
              alt="Entrance of Focus Zone Library, City Heart, Kharar"
              placeholder="[LIBRARY ENTRANCE PHOTO]"
              ratio="4 / 5"
            />
            <p className="label mt-3 text-muted-foreground">FIG. 03 — ENTRANCE</p>
          </div>

          <div className="lg:col-span-7 lg:order-1 lg:pr-12">
            <SectionHeader
              index="04"
              kicker="ABOUT THE LIBRARY"
              heading={
                <>
                  Where dream
                  <br />
                  meets reality.
                </>
              }
            />
            <p className="max-w-[52ch] text-lg">{site.story}</p>

            <div className="mt-12 border-t pt-8">
              <Meta
                items={[
                  { k: "LOCATION", v: `${site.locality}, ${site.city}` },
                  { k: "HOURS", v: site.openingHours },
                  { k: "TYPE", v: site.type },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
