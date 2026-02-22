import React from "react";

interface Props {
  icon: string;
  title: string;
  points?: string[];
  variant: "hair" | "skin" | "derma";
}

export default function ServiceCard({
  icon,
  title,
  points,
  variant,
}: Props) {
  return (
    <div className={`service-card ${variant}`}>
      <div className="card-content">
        <img src={icon} alt={title} className="service-icon" />
        <h3>{title}</h3>

        {points && (
          <ul>
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom Arrow Button */}
      <button className="card-arrow">
        ↗
      </button>
    </div>
  );
}