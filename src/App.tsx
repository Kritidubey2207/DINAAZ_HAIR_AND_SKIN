import { useState } from "react";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import DoctorSection from "./components/DoctorSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ResultsSection from "./components/ResultsSection";
import ConsultSection from "./components/ConsultSection";
import FooterSection from "./components/FooterSection";
import ConsultationModal from "./components/ConsultationModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openConsultation = () => setIsModalOpen(true);
  const closeConsultation = () => setIsModalOpen(false);

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <TopBar openConsultation={openConsultation} />

      <section id="hero" className="scroll-mt-24">
        <Hero openConsultation={openConsultation} />
      </section>

      <section id="doctor" className="scroll-mt-24">
        <DoctorSection openConsultation={openConsultation} />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      <section id="services" className="scroll-mt-24">
        <ServicesSection openConsultation={openConsultation} />
      </section>

      <section id="results" className="scroll-mt-24">
        <ResultsSection />
      </section>

      <section id="consult" className="scroll-mt-24">
        <ConsultSection openConsultation={openConsultation} />
      </section>

      <FooterSection openConsultation={openConsultation} />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={closeConsultation}
      />
    </div>
  );
}

export default App;