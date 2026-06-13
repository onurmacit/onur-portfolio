import { Nav } from "@/components/Nav";
import { Hero, Work, Writing, Contact, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
