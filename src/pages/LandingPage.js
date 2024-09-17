import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Platform from "../components/Platform";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Case_study from "../components/Case_study";
import Work_process from "../components/Work_process";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Platform />
      <Services />
      <CTA />
      <Case_study />
      <Work_process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
