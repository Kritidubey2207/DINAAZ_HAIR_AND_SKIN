import React from "react";
import "./ConsultationModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-content">
          {/* Left */}
          <div className="modal-left">
            <h1>
              Glow.<br />
              Grow.<br />
              Transform.
            </h1>
            <p>Book An Appointment Today!</p>
          </div>

          {/* Right Form */}
          <form className="modal-form">
            <label>Full Name</label>
            <input placeholder="Enter your full name" />

            <label>Phone Number</label>
            <input placeholder="Enter your phone number" />

            <label>Email ID</label>
            <input placeholder="Enter your email ID" />

            <button type="submit" className="modal-btn">
              Book A Call ↗
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}