import { Nav } from "@/components/Nav";
import { Hero, Experience, Projects, Writing, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
