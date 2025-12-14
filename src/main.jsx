import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import './index.css'
import App from './App.jsx'
import { RestaurantProvider } from './contexts/restaurantContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme/theme.js';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </ChakraProvider>
  </StrictMode>
);
