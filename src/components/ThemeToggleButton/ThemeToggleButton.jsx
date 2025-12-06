import { IconButton, useColorMode } from "@chakra-ui/react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Importa los íconos

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Define los colores según el tema
  const iconColor = colorMode === "light" ? "black" : "orange";

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      borderRadius="full"
      size="md"
      variant="ghost"
      fontSize="1.5rem"
      icon={
        <i
          className={colorMode === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill"}
          style={{ color: iconColor }}
        />
      }
      _hover={{ color: iconColor }}
    />
  );
};

export default ThemeToggleButton;