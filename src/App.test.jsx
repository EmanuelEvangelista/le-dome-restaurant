import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm/BookingForm.jsx';
import { RestaurantContext } from './RestaurantContext/restaurantContext.jsx';
import '@testing-library/jest-dom';
import { vi, test, expect } from 'vitest';
import { initializeTimes } from './RestaurantContext/restaurantContext.jsx';
import { updateTimes } from './RestaurantContext/restaurantContext.jsx';

// Creamos un "mock" (simulación) del contexto:
const mockContextValue = {
  data: {},
  times: ['19:00', '20:00'],
  guests: 2,
  occasion: 'Birthday',
  setData: vi.fn(),
  setTimes: vi.fn(),
  setGuests: vi.fn(),
  setOccasion: vi.fn(),
  dispatch: vi.fn(),
   availableTimes: [
    { time: "17:00", isBooked: false },
    { time: "18:00", isBooked: true },
  ],
};

test('Renders the BookingForm heading', () => {
    render(
        <RestaurantContext.Provider value={mockContextValue}>
            <BookingForm />
        </RestaurantContext.Provider>
    );
    const headingElement = screen.getByText("Choose Your Table");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns initialState as-is', () => {
  const fakeInitial = [{ time: '17:00', key: 1, isBooked: false, date: '2025-11-01' }];
  const result = initializeTimes(fakeInitial);
  expect(result).toBe(fakeInitial); // returns same reference in current implementation
  // or deep-equal
  expect(result).toEqual(fakeInitial);
});

 // Asegúrate de importar la función

test('updateTimes returns the same value that is provided', () => {
  const fakeInitial = [{ time: '17:00', key: 1, isBooked: false, date: '2025-11-01' }];
  const result = updateTimes(fakeInitial);
  expect(result).toBe(fakeInitial); // We check that the result is the same reference
});