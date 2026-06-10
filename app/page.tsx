import { Nav } from "@/components/Nav";
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
