import React from "react";
import "./FooterSection.css";

import ctaImage from "../assets/Ellipse 16 (1).png";
import logo from "../assets/logo'.png";
type Props = {
  openConsultation: () => void;
};

export default function FooterSection({ openConsultation }: Props) {
  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

  return (
    <footer className="footer-section">
      {/* ---------- CTA Card ---------- */}
      <div className="cta-card">
        <div className="cta-content">
          <h2>
            Your Skin & Hair Deserve <br />
            Medical Expertise, <br />
            Not Experiments
          </h2>

          <button onClick={openConsultation}>
      Book A Consultation
    </button>
        </div>

        <div className="cta-image-wrapper">
          <img src={ctaImage} alt="Consultation" />
        </div>
      </div>

      {/* ---------- Footer Content ---------- */}
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-col brand">
          <img src={logo} alt="Dinaaz" className="footer-logo" />
        
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a onClick={() => scrollToSection("hero")}>Home</a></li>
            <li><a onClick={() => scrollToSection("about")}>About</a></li>
            <li><a onClick={() => scrollToSection("services")}>Skin Treatments</a></li>
            <li><a onClick={() => scrollToSection("results")}>Results</a></li>
            <li><a onClick={() => scrollToSection("contact")}>Contact Us</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li>Hair Transplant</li>
            <li>PRP Therapy</li>
            <li>GFC Therapy</li>
            <li>Stem Cell Therapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>+91 7338422548</p>
          <p>dinaazhair@gmail.com</p>
          <p>Bangalore, Karnataka</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        ©Copyright 2026 Dinaaz Hair and Skin. All rights reserved.
      </div>
    </footer>
  );
}