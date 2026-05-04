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
  const [selectedService, setSelectedService] = useState("");

  const openQuoteModal = (service = "") => {
    setSelectedService(service);
    setIsQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setSelectedService("");
  };

  return (
    <>
      <Navbar onQuoteClick={openQuoteModal} />

      <section id="home">
        <Hero onQuoteClick={openQuoteModal} />
      </section>

      <TrustBar />

      <Services onQuoteClick={openQuoteModal} />

      <BeforeAfterSlider />

      <WhyChooseUs onQuoteClick={openQuoteModal} />

      <HowItWorks onQuoteClick={openQuoteModal} />

      <Testimonials />

      <CTA onQuoteClick={openQuoteModal} />

      <Contact />

      <Footer />

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={closeQuoteModal}
        selectedService={selectedService}
      />
    </>
  );
}

export default App;