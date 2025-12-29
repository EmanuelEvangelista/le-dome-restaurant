import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      borderRadius="full"
      size="md"
      variant="ghost"
      fontSize="1.5rem"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
};

export default ThemeToggleButton;
