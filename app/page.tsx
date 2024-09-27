
import Header from "./section/Header";
import FeaturedProjects from "./section/Projects";
import Hero from "./section/Hero";
import AboutMe from "./section/About";
import Footer from "./section/Footer";
import ContactSection from "./section/Contact";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProjects/>
      <AboutMe/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
