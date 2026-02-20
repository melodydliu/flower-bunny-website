import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/marquee";
import { Intro } from "@/components/sections/intro";
import { Work } from "@/components/sections/work";
import { Carousel } from "@/components/sections/carousel";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Press } from "@/components/sections/press";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <Intro />
      <Work />
      <Carousel />
      <Services />
      <About />
      <Process />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
