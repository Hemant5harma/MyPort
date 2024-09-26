
import Header from "./section/Header";
import FeaturedProjects from "./section/Projects";
import Hero from "./section/Hero";
import AboutMe from "./section/About";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <FeaturedProjects/>
      <AboutMe/>
    </div>
  );
}
