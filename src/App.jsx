import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BotonWhatsApp from "./components/whatsaap";
import Experiencia from "./components/Experiencia";
export default function App() {
  return (
    <div className="min-h-screen text-ink dark:text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experiencia />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <BotonWhatsApp />
      <Footer />
    </div>
  );
}
