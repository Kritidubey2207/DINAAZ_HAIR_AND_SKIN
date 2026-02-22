import React, { createContext, useContext, useState } from "react";

type ConsultationContextType = {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
};

const ConsultationContext = createContext<ConsultationContextType | null>(null);

export const useConsultation = () => {
  const context = useContext(ConsultationContext);
  if (!context) throw new Error("useConsultation must be used inside Provider");
  return context;
};

export const ConsultationProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ConsultationContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ConsultationContext.Provider>
  );
};