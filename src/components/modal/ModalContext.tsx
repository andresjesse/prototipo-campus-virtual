import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
  type ReactNode,
} from "react";

//------------------------------------------- Step 1: Define the Context

interface ModalContextProps {
  show: (content: ReactNode) => void;
  hide: () => void;
  isVisible: boolean;
  content: ReactNode;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);

//------------------------------------------- Step 2: Define the Provider

export function ModalContainer({ children }: PropsWithChildren) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const modal = {
    show: (content: ReactNode) => {
      setModalVisible(true);
      setModalContent(content);
    },
    hide: () => {
      setModalVisible(false);
    },
    isVisible: modalVisible,
    content: modalContent,
  };

  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
}

//------------------------------------------- Step 3: Define the Hook

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModalContext must be used inside ModalContextProvider!"
    );
  }

  return context;
}
