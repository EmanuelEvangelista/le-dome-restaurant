import { createContext, useContext } from "react";
import { useToast } from "@chakra-ui/react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const toast = useToast();

  const onOpen = (status, message) => {
    toast({
      title: message,
      status,          // "success" | "error" | "info" | "warning"
      duration: 3000,
      isClosable: true,
    });
  };

  const onClose = () => {
    // con toast no hace falta cerrar manualmente, se cierra solo
  };

  return (
    <AlertContext.Provider value={{ onOpen, onClose }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);