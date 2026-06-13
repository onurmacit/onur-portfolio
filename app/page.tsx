import { Nav } from "@/components/Nav";
import {
  Hero,
  Stats,
  Featured,
  Products,
  Timeline,
  Writing,
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
        <Products />
        <Timeline />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
