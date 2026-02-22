import { useState } from "react";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import DoctorSection from "../components/DoctorSection";
import ConsultSection from "../components/ConsultSection";
import FooterSection from "../components/FooterSection";
import ConsultationModal from "../components/ConsultationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openConsultation = () => setIsModalOpen(true);
  const closeConsultation = () => setIsModalOpen(false);

  return (
    <>
      <TopBar openConsultation={openConsultation} />
      <Hero openConsultation={openConsultation} />
     <DoctorSection openConsultation={openConsultation} />
      <ConsultSection openConsultation={openConsultation} />
      <FooterSection openConsultation={openConsultation} />

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={closeConsultation}
      />
    </>
  );
}