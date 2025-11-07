import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import './index.css'
import App from './App.jsx'
import { RestaurantProvider } from './RestaurantContext/restaurantContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestaurantProvider>
        <App />
    </RestaurantProvider>
  </StrictMode>,
)
