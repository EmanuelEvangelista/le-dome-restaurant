import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import AppRoutes from './routes/AppRoutes.jsx'
import { RestaurantProvider } from './contexts/restaurantContext.jsx';
import { AlertProvider } from './contexts/alertContext.jsx';

function App() {

  return (
    <RestaurantProvider>
    <AlertProvider>
      <AppRoutes />
    </AlertProvider>
    </RestaurantProvider>
  )
}

export default App
