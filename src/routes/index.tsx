import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { PageLoader } from "@/components/PageLoader";
import { CursorGlow } from "@/components/CursorGlow";
import { Hero } from "@/components/sections/Hero";
import { TechCarousel } from "@/components/sections/TechCarousel";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Testimonials } from "@/components/sections/Testimonials";
import { GithubStats } from "@/components/sections/GithubStats";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jonie Quirino — Full Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jonie Quirino — student Full Stack Web Developer building modern, responsive React, Node and PHP applications.",
      },
      { property: "og:title", content: "Jonie Quirino — Full Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Modern, responsive web applications by Jonie Quirino — React, TypeScript, Node.js, PHP, MongoDB and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jonie Quirino",
          jobTitle: "Full Stack Web Developer",
          url: "/",
          sameAs: ["https://github.com/JonYang0108", "https://www.facebook.com/jonie.quirino.73"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Antipolo City",
            addressRegion: "Rizal",
            addressCountry: "PH",
          },
          email: "joniequirino@gmail.com",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <TechCarousel />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <GithubStats />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
