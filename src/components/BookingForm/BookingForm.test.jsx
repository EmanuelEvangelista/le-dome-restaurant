import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { RestaurantContext } from "../../RestaurantContext/restaurantContext.jsx";
import { describe, test, expect, vi } from "vitest";
// Mock del contexto
const renderWithContext = (contextValue) => {
  return render(
    <BrowserRouter>
      <RestaurantContext.Provider value={contextValue}>
        <BookingForm />
      </RestaurantContext.Provider>
    </BrowserRouter>
  );
};

describe("BookingForm", () => {
  const baseContext = {
    data: "",
    times: "",
    guests: 2,
    occasion: "Birthday",
    isSubmitted: false,
    setData: vi.fn(),
    setTimes: vi.fn(),
    setGuests: vi.fn(),
    setOccasion: vi.fn(),
    handleUpdateTimes: vi.fn(),
    setBookingData: vi.fn(),
    setIsSubmitted: vi.fn(),
  };

  test("❌ Botón deshabilitado cuando faltan datos (estado inválido)", () => {
    renderWithContext(baseContext);

    const button = screen.getByRole("button", { name: /make my reservation/i });
    expect(button).toBeDisabled();
  });

  test("✅ Botón habilitado cuando todos los datos están completos (estado válido)", () => {
    const validContext = {
      ...baseContext,
      data: "2025-11-20",
      times: "19:00",
      guests: 4,
      occasion: "Anniversary",
    };

    renderWithContext(validContext);

    const button = screen.getByRole("button", { name: /make my reservation/i });
    expect(button).toBeEnabled();
  });

  test("📌 Envío exitoso llama a setBookingData y setIsSubmitted", () => {
  const validContext = {
    ...baseContext,
    data: "2025-11-20",
    times: "19:00",
    guests: 4,
    occasion: "Anniversary",
  };

  renderWithContext(validContext);

  const form = screen.getByTestId("booking-form");
form.checkValidity = () => true;
fireEvent.submit(form);

    expect(validContext.setBookingData).toHaveBeenCalled();
    expect(validContext.setIsSubmitted).toHaveBeenCalled();
});
});