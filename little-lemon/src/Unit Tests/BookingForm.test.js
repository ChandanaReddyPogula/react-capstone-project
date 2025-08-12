import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('BookingForm', () => {
  const mockOnSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];

  beforeEach(() => {
    mockOnSubmit.mockClear();
    mockDispatch.mockClear();
  });

  test('renders static text content', () => {
    renderWithRouter(
      <BookingForm
        onSubmit={mockOnSubmit}
        dispatch={mockDispatch}
        availableTimes={mockAvailableTimes}
      />
    );

    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText('Find a table for any occasion')).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Diners/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByText(/Seating options/i)).toBeInTheDocument();
  });

  test('submits form when all fields are filled', () => {
    renderWithRouter(
      <BookingForm
        onSubmit={mockOnSubmit}
        dispatch={mockDispatch}
        availableTimes={mockAvailableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-09-01' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of Diners/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByLabelText(/Standard/i)); // radio button

    fireEvent.click(screen.getByRole('button', { name: /Let's go/i }));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      time: '18:00',
      availableTimes: mockAvailableTimes,
    });

    expect(mockOnSubmit).toHaveBeenCalledWith({
      date: '2025-09-01',
      time: '18:00',
      guests: '4',
      occasion: 'Birthday',
      seating: 'Standard',
    });
  });

  test('alerts if fields are missing', () => {
    window.alert = jest.fn(); // Mock alert

    renderWithRouter(
      <BookingForm
        onSubmit={mockOnSubmit}
        dispatch={mockDispatch}
        availableTimes={mockAvailableTimes}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /Let's go/i }));

    expect(window.alert).toHaveBeenCalledWith('Please fill out all fields');
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});
