import React from "react";
import "./AboutSection.css";
import aboutImg from "../assets/image 7.png";

export default function AboutSection() {
  const handleCall = () => {
    // Option 1: Phone call
    window.location.href = "tel:+919999999999";

    // Option 2 (if you want navigation instead)
    // window.location.href = "/contact";
  };

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Content */}
        <div className="about-content">
          <p className="about-tag">ABOUT US</p>
          <h2 className="about-title">
            The Story Behind <br /> Dinaaz
          </h2>

          <p className="about-text">
            Dinaaz Hair & Skin Clinic was founded by Dr. Munna after
            experiencing early hair loss himself. After navigating misleading
            treatments and expensive promises, he envisioned a clinic built on:
          </p>

          <ul className="about-points">
            <li>Honest medical advice</li>
            <li>Affordable, science-based care</li>
            <li>Respect for patient trust</li>
          </ul>

          <p className="about-text">
            Dinaaz was created to make ethical dermatological care accessible to
            everyone.
          </p>

          <button className="about-btn" onClick={handleCall}>
            Call The Clinic ↗
          </button>
        </div>

        {/* Right Image */}
        <div className="about-image-wrapper">
          <div className="image-frame">
            <img src={aboutImg} alt="About Dinaaz" />
          </div>
        </div>
      </div>
    </section>
  );
}