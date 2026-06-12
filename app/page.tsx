import { Nav } from "@/components/Nav";
import {
  Hero,
  Stats,
  Featured,
  Experience,
  Products,
  Projects,
  Writing,
  Skills,
  Education,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Featured />
        <Experience />
        <Products />
        <Projects />
        <Writing />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
