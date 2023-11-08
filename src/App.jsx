import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Projects";
import NavBar from "./components/Navbar";
import Tech from "./components/Tech";
// import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Experience from "./components/Experiences";
import Cert from "./components/Certifications";
import Feedback from "./components/Feedbacks";
import { Element } from "react-scroll";
import StarsCanvas from "./components/canvas/Star";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-slate-800">
          <NavBar />
          <Element name="hero-section">
            <div className="relative z-0">
              <Hero id="hero-section" />
              <StarsCanvas />
            </div>
          </Element>
          <Element name="about-section">
            <About id="about-section" />
          </Element>
          <Element name="tech-section">
            <Tech id="tech-section" />
          </Element>
          <Element name="projects-section">
            <div className="relative z-0">
              <Project id="projects-section" />
              <StarsCanvas />
            </div>
          </Element>
          <Element name="experience-section">
            <div className="relative z-0">
              <Experience id="experience-section" />
            </div>
          </Element>
          <Element name="cert-section">
            <div className="relative z-0">
              <Cert id="cert-section" />
            </div>
          </Element>
          <Element name="testimonials-section">
            <Feedback />
          </Element>
          {/* <Element name="contact-section">
            <div className="relative z-0">
              <Contact id="contact-section" />
              <StarsCanvas />
            </div>
          </Element> */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
