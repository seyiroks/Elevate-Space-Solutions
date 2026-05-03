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
      <Navbar onQuoteClick={() => openQuoteModal()} />

      <section id="home">
        <Hero onQuoteClick={() => openQuoteModal()} />
      </section>

      <section id="about">
        <TrustBar />
      </section>

      <Services onQuoteClick={openQuoteModal} />

      <BeforeAfterSlider />

      <section id="why-choose-us">
        <WhyChooseUs onQuoteClick={() => openQuoteModal()} />
      </section>

      <section id="process">
        <HowItWorks onQuoteClick={() => openQuoteModal()} />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <CTA onQuoteClick={() => openQuoteModal()} />

      <section id="contact">
        <Contact />
      </section>

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