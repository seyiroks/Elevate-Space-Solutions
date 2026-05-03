import { useState } from "react";
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
import QuoteModal from "./components/QuoteModal";

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <Navbar onQuoteClick={() => setIsQuoteOpen(true)} />

      <section id="home">
        <Hero onQuoteClick={() => setIsQuoteOpen(true)} />
      </section>

      <section id="about">
        <TrustBar />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="work">
        <BeforeAfterSlider />
      </section>

      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      <section id="process">
        <HowItWorks />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <CTA />

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}

export default App;