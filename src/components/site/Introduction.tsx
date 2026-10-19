import { AssetImage, Container, Meta, SectionHeader } from "./primitives";
import { site } from "@/content/site";
import { libraryAssets } from "@/config/library-assets";

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
                  A space for focus...
                </>
              }
            />
            <p className="dropcap max-w-[40ch] text-lg text-justify">{site.introduction}
            </p>
          </div>

          <div className="lg:col-span-7">
            <AssetImage
              src={libraryAssets.interior.readingRoom01}
              alt="Main reading room at Focus Zone Library"
              placeholder="[READING ROOM PHOTO]"
              ratio="16 / 11"
            />
            <p className="label mt-3 text-muted-foreground">READING ROOM</p>
          </div>
        </div>

        <div className="mt-16 border-t-2 border-foreground pt-8">
          <Meta
            items={[
              { k: "LIBRARY", v: site.name },
              { k: "LOCATION", v: `${site.locality}, ${site.city}` },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
