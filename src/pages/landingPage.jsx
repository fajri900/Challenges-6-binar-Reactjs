import Navigation from "../components/Navbar";
import Hero from "../components/Hero";
import OurService from "../components/OurService";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import CardSewa from "../components/CardSewa";
import Faq from "../components/Faq";
import Footer from "../components/footer";
export default function LandingPage() {
  return (
    <>
      {/* <Navigation /> */}
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <CardSewa />
      <Faq />
      {/* <Footer /> */}
    </>
  );
}
