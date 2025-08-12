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

function App() {

  const [currentBooking, setCurrentBooking] = useState(null);
  const [reservations, setReservations] = useState([]);

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
          <Route path="/book" element={<BookingForm onSubmit={handleBookingSubmit} />} />
          <Route path="/customer" element={<CustomerDetails onSubmit={handleCustomerSubmit} />} />
          <Route path="/reservations" element={<ReservationsPage reservations={reservations} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
