"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Define the modal state type
type State = boolean;

type ModalContextType = {
  modalState: State;
  toggleModalState: () => void;
};

// Create the context
const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalState, setModalState] = useState<State>(false);

  const toggleModalState = () => {
    setModalState((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Modal state updated:", modalState);
  }, [modalState]);

  return (
    <ModalContext.Provider value={{ modalState, toggleModalState }}>
      {children}
    </ModalContext.Provider>
  );
}

// Custom hook to access the context
export function useModal() {
  const context = useContext(ModalContext);
  if (context === null) {
    throw new Error("useModal must be used within a ModalContextProvider");
  }
  return context;
}
