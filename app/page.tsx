import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/marquee";
import { Intro } from "@/components/sections/intro";
import { Carousel } from "@/components/sections/carousel";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <Intro />
      <Carousel />
      <Services />
      <Process />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
