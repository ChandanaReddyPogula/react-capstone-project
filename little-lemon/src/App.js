import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import BookingForm from './Components/BookingForm';
import ReservationsPage from './Components/ReservationsPage';
import { useState } from 'react';
import About from './Components/About';
import Specials from './Components/Specials';

function App() {

  const [reservations, setReservations] = useState([]);

  const handleAddReservation = (reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Specials/>} />
          <Route path="/booking" element={<BookingForm onSubmit={handleAddReservation} />} />
          <Route path="/reservations" element={<ReservationsPage reservations={reservations} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
