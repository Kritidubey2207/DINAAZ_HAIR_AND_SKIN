import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Correct path
import { ConsultationProvider } from "./components/ConsultationContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConsultationProvider>
      <App />
    </ConsultationProvider>
  </React.StrictMode>
);