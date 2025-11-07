import React, { useContext } from "react";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";

const BookingForm = () => {
    // 1. Obtener todos los estados, setters, el dispatcher y availableTimes del Context
    const { 
        data, times, guests, occasion, 
        setData, setTimes, setGuests, setOccasion, 
        dispatch,
        availableTimes // 👈 ¡Nuevo: Obtenemos el estado gestionado por el Reducer!
    } = useContext(RestaurantContext);

    // 2. Manejador para ACTUALIZAR el estado de los campos al cambiar
    const handleInputChange = (e, setter) => {
        const newValue = e.target.value;
        setter(newValue); // Actualiza el estado local del formulario

        // 🎯 LÓGICA CLAVE: Si se cambia la fecha, despacha la acción UPDATE_TIMES
        if (e.target.id === 'res-date') {
            dispatch({
                type: 'UPDATE_TIMES',
                payload: newValue // Enviamos la fecha seleccionada al Reducer
            });
            
            // Opcional: Reiniciar el campo de hora al cambiar la fecha
            setTimes(""); 
        }
    };

    // 3. Manejador para el ENVÍO FINAL del formulario (Lógica de Reserva)
    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        
        // El resto de la lógica de envío permanece igual
        if (data && times) {
            dispatch({
                type: "MARK_TIME_AS_BOOKED",
                payload: { date: data, time: times },
            });
            alert(`¡Reserva confirmada!\nFecha: ${data}, Hora: ${times}, Invitados: ${guests}, Ocasión: ${occasion}`);
        } else {
            alert("Por favor, selecciona una fecha y hora para continuar.");
        }
    };

    return (
        <div>
            <h2>Reserva tu Mesa</h2>
            <form onSubmit={handleFormSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
                
                {/* Campo Fecha */}
                <label htmlFor="res-date">Elige la fecha</label>
                <input 
                    type="date" 
                    id="res-date" 
                    name="res-date"
                    value={data}
                    // Aquí despachamos la acción para actualizar horarios
                    onChange={(e) => handleInputChange(e, setData)} 
                    required
                />
                
                {/* Campo Hora: Ahora se llena dinámicamente con availableTimes */}
                <label htmlFor="res-time">Elige la hora</label>
                <select 
                    id="res-time" 
                    name="res-time"
                    value={times}
                    onChange={(e) => handleInputChange(e, setTimes)}
                    required
                >
                    <option value="">Selecciona...</option>
                    {/* Mapeamos los horarios disponibles del Reducer */}
                    {availableTimes
                        // Filtramos para mostrar solo los slots que NO están reservados
                        .filter(slot => slot.isBooked === false)
                        .map(slot => (
                            // Usamos la hora como valor y como texto de la opción
                            <option key={slot.key} value={slot.time}>
                                {slot.time}
                            </option>
                        ))}
                </select>
                
                {/* Campo Invitados */}
                <label htmlFor="guests">Número de invitados</label>
                <input 
                    type="number" 
                    placeholder="2" 
                    min="1" max="6" 
                    id="guests" 
                    name="guests"
                    value={guests}
                    onChange={(e) => handleInputChange(e, setGuests)}
                    required
                />
                
                {/* Campo Ocasión */}
                <label htmlFor="occasion">Ocasión</label>
                <select 
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e) => handleInputChange(e, setOccasion)}
                >
                    <option value="Birthday">Cumpleaños</option>
                    <option value="Anniversary">Aniversario</option>
                </select>
                
                <input type="submit" value="Hacer mi Reserva" />
            </form>
            <p>Datos en Contexto (debug): Fecha: {data}, Hora: {times}</p>
        </div>
    );
};

export default BookingForm;