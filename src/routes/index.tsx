import { createFileRoute } from "@tanstack/react-router";

import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Introduction } from "@/components/site/Introduction";
import { Facilities } from "@/components/site/Facilities";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Visit } from "@/components/site/Visit";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { site } from "@/content/site";

const title = `${site.name} — Quiet Study & Reading Space in ${site.city}`;
const description = `${site.name}, ${site.address}. Air-conditioned study space with spacious desks, Wi-Fi and personal storage. Open ${site.openingHours}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Library",
          name: site.name,
          description,
          telephone: site.phone,
          email: site.email,
          openingHours: "Mo-Su 07:00-22:00",
          url: site.mapUrl,
          sameAs: [site.instagramUrl],
          address: {
            "@type": "PostalAddress",
            streetAddress: `${site.address}, ${site.addressLine2}`,
            addressLocality: site.city,
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const year = String(new Date().getFullYear());

  return (
    <div className="min-h-screen pb-[52px] lg:pb-0">
      <TopBar year={year} />
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Facilities />
        <Experience />
        <About />
        <Gallery />
        <Visit />
        <Faq />
        <Contact />
      </main>
      <Footer year={year} />
      <MobileContactBar />
    </div>
  );
}
