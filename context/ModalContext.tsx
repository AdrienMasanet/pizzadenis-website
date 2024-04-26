import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext<{
  openModal: (modal: React.ReactNode) => void;
  closeModal: () => void;
}>({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (modal: React.ReactNode) => setModalContent(modal);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {modalContent && (
        <div
          className="fixed z-50 flex items-center justify-center w-full h-full p-10 bg-stone-50/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative flex min-w-34 max-h-full rounded-lg bg-white border border-black/20 shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-1 right-1 p-1 bg-white rounded-lg border border-black/20 shadow-lg"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {modalContent}
          </div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};
