import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import AppRoutes from './routes/AppRoutes.jsx'
import { RestaurantProvider } from './RestaurantContext/restaurantContext.jsx';

function App() {

  return (
    <RestaurantProvider>
      <AppRoutes />
    </RestaurantProvider>
  )
}

export default App
