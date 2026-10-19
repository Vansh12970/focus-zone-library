
import { AssetImage, Container, SectionHeader } from "./primitives";
import { site } from "@/content/site";
import { libraryAssets } from "@/config/library-assets";

export function About() {
  return (
    <section id="about" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-2 lg:col-span-5">
            <AssetImage
              src={libraryAssets.interior.entrance}
              alt="Entrance of Focus Zone Library, City Heart, Kharar"
              placeholder="[LIBRARY ENTRANCE PHOTO]"
              ratio="4 / 5"
            />
            <p className="label mt-3 text-muted-foreground">
              LIBRARY INTERIOR
            </p>
          </div>

          <div className="order-1 lg:order-1 lg:col-span-7 lg:pr-12">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
