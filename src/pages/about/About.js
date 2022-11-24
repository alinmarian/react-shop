import MainNavbar from "../../main-navbar/MainNavbar"
import AboutHeroImage from "./AboutHeroImage"
import AboutIntroSection from "./AboutIntroSection"
import Benefits from "./Benefits"
import Testimonials from "./Testimonials"
import Footer from "../../footer/Footer";

function About() {
  return (
    <div>
        <MainNavbar />
        <AboutHeroImage />
        <AboutIntroSection />
        <Benefits />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default About