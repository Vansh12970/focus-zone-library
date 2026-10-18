import { AssetImage, Container, SectionHeader } from "./primitives";
import { libraryAssets } from "@/config/library-assets";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section id="experience" className="paper bg-foreground py-16 text-background md:py-28">
      <Container>
        <SectionHeader
          index="03"
          kicker="THE EXPERIENCE"
          invert
          heading={
            <>
              Arrive.
              <br />
              Focus.
              <br />
              Stay.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ul className="border-t border-background/40">
              {experience.map((e) => (
                <li key={e.n} className="grid grid-cols-12 gap-6 border-b border-background/40 py-8">
                  <span className="col-span-2 font-mono text-[0.75rem] opacity-60">{e.n}</span>
                  <div className="col-span-10">
                    <h3 className="text-3xl md:text-5xl">{e.title}</h3>
                    <p className="mt-4 max-w-[46ch] opacity-70">{e.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <AssetImage src={libraryAssets.interior.studyDesks} alt="Study desks at Focus Zone Library" placeholder="[STUDY AREA PHOTO]" ratio="3 / 4" invert />
            <p className="label mt-3 opacity-60">FIG. 02 — STUDY AREA</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
