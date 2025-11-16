import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import BookingForm from "./components/BookingForm/BookingForm.jsx";
import { RestaurantProvider } from "./RestaurantContext/restaurantContext.jsx";
import { timesReducer } from "./RestaurantContext/restaurantContext.jsx";
import { MemoryRouter } from "react-router-dom";
import { initializeTimes } from "./RestaurantContext/restaurantContext.jsx";

// Helper para renderizar con Provider
const renderWithProvider = (ui) => {
  return render(<RestaurantProvider>{ui}</RestaurantProvider>);
};

describe("Restaurant App Tests", () => {
  //
  // 📌 TEST 1 — Render del formulario
  //
  test("renders the Booking Form title", () => {
    renderWithProvider(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>);
    const heading = screen.getByText("Choose Your Table");
    expect(heading).toBeInTheDocument();
  });

  //
  // 📌 TEST 2 — fetchAPI retorna array de horarios
  //
  test("fetchAPI returns array of times in HH:MM format", () => {
    
    const result = initializeTimes(new Date());

    // Verificar que es un array
    expect(Array.isArray(result)).toBe(true);

    // Verificar que tiene elementos
    expect(result.length).toBeGreaterThan(0);

    // Verificar que cada elemento tiene formato HH:MM
    result.forEach((time) => {
      expect(time).toMatch(/^\d{2}:\d{2}$/);
    });

    // Verificar que los horarios están entre 17:00 y 23:30
    result.forEach((time) => {
      const [hours] = time.split(":").map(Number);
      expect(hours).toBeGreaterThanOrEqual(17);
      expect(hours).toBeLessThanOrEqual(23);
    });
  });

  //
  // 📌 TEST 3 — fetchAPI es determinista (mismo resultado para misma fecha)
  //
 describe("timesReducer — UPDATE_TIMES determinism", () => {
  test("returns identical arrays for the same date", () => {
    const initialState = []; 
    const date = "2025-11-12";

    const action = { type: "UPDATE_TIMES", payload: date };

    const state1 = timesReducer(initialState, action);
    const state2 = timesReducer(initialState, action);

    // Debe ser exactamente el mismo resultado
    expect(state1).toEqual(state2);

    // Opcional: si esperás strings HH:MM
    expect(Array.isArray(state1)).toBe(true);
    state1.forEach((time) => expect(time).toMatch(/^\d{2}:\d{2}$/));
  });
});
});