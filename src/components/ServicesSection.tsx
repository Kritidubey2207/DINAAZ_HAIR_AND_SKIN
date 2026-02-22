import React from "react";
import "./ServicesSection.css";
import ServiceCard from "./ServiceCard";

// icons (use your own)
import hairIcon from "../assets/icons.png";
import skinIcon from "../assets/icons (1).png";
import dermIcon from "../assets/icons (2).png";
type Props = {
  openConsultation: () => void;
};



export default function ServicesSection({ openConsultation }: Props) {
  return (
     
    <section className="services-section">
      <div className="services-container">
        <p className="services-tag">SERVICES</p>
        <h2 className="services-title">Treatments Available</h2>
         <button onClick={openConsultation}>
      Book A Consultation
    </button>

        <div className="services-grid">
          <ServiceCard
            icon={hairIcon}
            title="Hair Treatments"
            variant="hair"
          />

          <ServiceCard
            icon={skinIcon}
            title="Skin Treatments"
            variant="skin"
            points={[
              "Acne & acne scar treatment",
              "Pigmentation & melasma",
              "Medical skin conditions",
              "Anti-aging & rejuvenation",
            ]}
          />

          <ServiceCard
            icon={dermIcon}
            title="Aesthetic Dermatology"
            variant="derma"
          />
        </div>
      </div>
    </section>
  );
}