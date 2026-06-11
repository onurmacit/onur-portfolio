import { Nav } from "@/components/Nav";
import {
  Hero,
  About,
  Experience,
  Education,
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
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
