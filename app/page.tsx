import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Bento from "./components/bento/Bento";
import FeaturedProjects from "./components/projects/FeaturedProjects";
import JourneyTimeline from "./components/timeline/JourneyTimeline";
import SkillsArchitecture from "./components/skills/SkillsArchitecture";
import CurrentlyExploring from "./components/exploring/CurrentlyExploring";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bento />
      <FeaturedProjects />
      <JourneyTimeline />
      <SkillsArchitecture />
      <CurrentlyExploring />
      <Contact />
      <Footer />
    </>
  );
}
