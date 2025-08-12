import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import BookingForm from './Components/BookingForm';
import ReservationsPage from './Components/ReservationsPage';
import CustomerDetails from './Components/CustomerDetails';
import { useState } from 'react';
import About from './Components/About';
import Specials from './Components/Specials';
import React, { useReducer } from 'react';
import { fetchAPI } from './apis/mockApi';

function App() {

  const [currentBooking, setCurrentBooking] = useState(null);
  const [reservations, setReservations] = useState([]);
  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today); // This returns an array of times for today
  };

  const updateTimes = (state, action) => {
    const selectedDate = action.date;
    return action.availableTimes.filter(time => time !== action.time);
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const handleBookingSubmit = (bookingData) => {
    setCurrentBooking(bookingData);
  };

  const handleCustomerSubmit = (customerData) => {
    const newReservation = {
      ...currentBooking,
      customer: customerData,
      id: Date.now(),
    };

    setReservations((prev) => [...prev, newReservation]);
    setCurrentBooking(null);
  };

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Specials/>} />
          <Route path="/book" element={<BookingForm onSubmit={handleBookingSubmit} availableTimes={availableTimes} dispatch={dispatch}/>} />
          <Route path="/customer" element={<CustomerDetails onSubmit={handleCustomerSubmit} />} />
          <Route path="/reservations" element={<ReservationsPage reservations={reservations} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
