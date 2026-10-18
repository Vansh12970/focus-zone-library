import { Container, AssetImage, SectionHeader } from "./primitives";
import { gallery } from "@/content/site";
import { libraryAssets, type GalleryKey } from "@/config/library-assets";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-5",
  "lg:col-span-7",
];
const ratios = ["16 / 11", "3 / 4", "4 / 5", "16 / 10", "1 / 1", "16 / 11"];

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-foreground py-16 md:py-28">
      <Container>
        <SectionHeader index="05" kicker="INSIDE THE LIBRARY" heading="A look inside." />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {gallery.map((g, i) => (
            <figure key={g.fig} className={`${spans[i]} group`}>
              <div className="border border-foreground transition-all duration-100 group-hover:border-2">
                <AssetImage
                  src={libraryAssets.gallery[g.key as GalleryKey]}
                  alt={`Focus Zone Library — ${g.caption.toLowerCase()}`}
                  placeholder={`[${g.caption} PHOTO]`}
                  ratio={ratios[i]}
                  className="border-0"
                />
              </div>
              <figcaption className="label mt-3 flex gap-3 text-muted-foreground">
                <span>{g.fig}</span>
                <span aria-hidden>—</span>
                <span>{g.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
