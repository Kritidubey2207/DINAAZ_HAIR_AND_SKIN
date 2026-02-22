import React from "react";
import "./ProcessSection.css";
import arrow from "../icons/arrow.svg"

import doctorImg from "../assets/img (3).png";
import ellipse from "../assets/Group 9 (1).png";

const steps = [
  {
    no: "01",
    title: "Medical Consultation",
    desc: "A detailed evaluation by a dermatologist.",
  },
  {
    no: "02",
    title: "Accurate Diagnosis",
    desc: "Understanding the root cause of your concern.",
  },
  {
    no: "03",
    title: "Personalized Treatment Plan",
    desc: "Only treatments that are medically necessary.",
  },
  {
    no: "04",
    title: "Ongoing Care & Follow-Ups",
    desc: "Focused on long-term skin and hair health.",
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="process-container">
        {/* Heading */}
        <p className="process-tag">OUR PROCESS</p>
        <h2 className="process-title">
          What To Expect At <br /> Dinaaz
        </h2>

        {/* Content */}
        <div className="process-content">
          {/* Left Image with Ellipse */}
          <div className="process-image">
             <img src={ellipse} alt="" className="ellipse-overlay" />
            <img src={doctorImg} alt="Doctor" className="doctor-img" />
          </div>

          {/* Steps */}
          <div className="process-steps">
            {steps.map((step) => (
              <div className="step" key={step.no}>
                <div className="step-number">{step.no}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="consult-btn">
          Book A Consultation 
            <img src={arrow} alt="arrow" className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}