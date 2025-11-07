// src/hooks/useUpdateTimes.jsx
import { useContext, useEffect } from "react";
import { RestaurantContext } from "../RestaurantContext/restaurantContext.jsx";

function useUpdateTimes() {
  const { dispatch, bookingData, availableTimes } = useContext(RestaurantContext);

  useEffect(() => {
    // Si aún no hay datos de reserva, no hacemos nada
    if (!bookingData?.date || !bookingData?.time) return;

    console.log("Booking data changed:", bookingData);

    // Creamos un nuevo array de horarios actualizados
    const newTimes = availableTimes.map((slot) => {
      // Si la fecha y hora coinciden con la reserva
      if (slot.date === bookingData.date && slot.time === bookingData.time) {
        return { ...slot, isBooked: true }; // Marcamos como reservado
      }
      return slot; // De lo contrario, lo dejamos igual
    });

    // Enviamos al reducer la lista actualizada
    dispatch({
      type: "UPDATE_TIMES",
      payload: newTimes,
    });
  }, [bookingData, availableTimes, dispatch]);

  return availableTimes;
}

export default useUpdateTimes;
