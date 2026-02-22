import React, { useState } from "react";
import "./TestimonialsResults.css";

// Patient images
import patient1 from "../assets/Ellipse 13 (1).png";

// Result images (before-after collage)
import r1 from "../assets/Frame 1707335255.png";
import r2 from "../assets/Frame 1707335256.png";
import r3 from "../assets/Frame 1707335257.png";
import r4 from "../assets/Frame 1707335258.png";
import r5 from "../assets/Frame 1707335259.png";
import r6 from "../assets/Rectangle 8823.png"
import circle from "../assets/Group 8.png";

const testimonials = [
  {
    name: "Sandeep",
    rating: "4.9",
    date: "26/12/2025",
    image: patient1,
  },
  {
    name: "Sandeep II",
    rating: "4.9",
    date: "26/12/2025",
    image: patient1,
  },
  {
    name: "Sandeep III",
    rating: "4.8",
    date: "26/12/2025",
    image: patient1
  },
];

const resultImages = [r1, r2, r3, r4, r5, r6];

export default function TestimonialsResults() {
  const [active, setActive] = useState(0);

  return (
    <section className="tr-section">
      <div className="container">
        {/* ---------------- Testimonials ---------------- */}
        <p className="tag">TESTIMONIALS</p>
        <h2 className="title">
          What Our Patients Say <br /> About Our Services
        </h2>

        <div className="testimonial-wrapper">
          {/* Left list */}
          <div className="testimonial-list">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`testimonial-item ${
                  active === index ? "active" : ""
                }`}
                onClick={() => setActive(index)}
              >
                <img src={t.image} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <p>
                    ⭐ {t.rating} | {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right content */}
          <div className="testimonial-content">
            <div className="quote">
              <span className="quote-icon">“</span>
              <p>
                Comparing to other clinics I personally preferred this clinic.
                Consultation was good and I got better results after treatment.
              </p>
              <span className="quote-icon right">”</span>
            </div>

          <div className="testimonial-image">
  <img src={r6} alt="patient result" />
</div>
          </div>
        </div>

        {/* ---------------- Results ---------------- */}
        <p className="tag results-tag">RESULTS</p>
        <h2 className="title">Our Results Speaks For Themselves</h2>

        <div className="results-collage">
          {resultImages.map((img, index) => (
            <div className={`result-card card-${index}`} key={index}>
              <img src={img} alt={`result-${index}`} />
            </div>
          ))}

          {/* Circle Badge */}
          <div className="results-circle">
            <img src={circle} alt="Before After" />
           
          </div>
        </div>
      </div>
    </section>
  );
}