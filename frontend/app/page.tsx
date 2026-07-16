import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Learning from "@/components/sections/Learning";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Stats from "@/components/sections/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <PersonalProjects  />
      <Skills />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}