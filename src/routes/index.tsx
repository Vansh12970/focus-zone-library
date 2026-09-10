import { createFileRoute } from "@tanstack/react-router";

import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Introduction } from "@/components/site/Introduction";
import { Facilities } from "@/components/site/Facilities";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Owner } from "@/components/site/Owner";
import { Membership } from "@/components/site/Membership";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Visit } from "@/components/site/Visit";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { MobileContactBar } from "@/components/site/MobileContactBar";
import { site } from "@/content/site";

const title = `${site.name} — Library & Reading Space in ${site.city}`;
const description = `${site.name} is a quiet library and reading space in ${site.locality}, ${site.city}. Reading room, study desks, Wi-Fi and membership details.`;

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
          openingHours: site.openingHours,
          foundingDate: site.established,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address,
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
        <Owner />
        <Membership />
        <Gallery />
        <Testimonials />
        <Visit />
        <Faq />
        <Contact />
      </main>
      <Footer year={year} />
      <MobileContactBar />
    </div>
  );
}
