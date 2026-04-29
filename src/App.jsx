import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import BeforeAfterSlider from "./components/Transformation";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;