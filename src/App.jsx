import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectFeatured from './components/ProjectFeatured';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function SectionSep() {
  return <div className="section-sep"></div>;
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionSep />
      <ProjectFeatured />
      <SectionSep />
      <Projects />
      <SectionSep />
      <Skills />
      <SectionSep />
      <Contact />
      <Footer />
    </>
  );
}
