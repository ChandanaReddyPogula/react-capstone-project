import React, { useState } from 'react';
import '../css/BookingForm.css';
import outdoorImage from '../images/outdoor.jpg';
import chefImage from '../images/chef.jpg';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ onSubmit, availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [seating, setSeating] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      date,
      time,
      guests,
      occasion,
      seating,
    };

    if (date && time && guests && occasion && seating) {
      dispatch({ type: 'UPDATE_TIMES', time: time });
      onSubmit(reservation); 
      navigate('/customer');
    } else {
      alert("Please fill out all fields");
    }

    // Optionally reset form
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('');
    setSeating('');
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-header">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Find a table for any occasion</p>
        </div>

        <div className="booking-images">
          <img src={outdoorImage} alt="Outdoor seating" />
          <img src={chefImage} alt="Chef preparing dish" />
        </div>

        <div className="form-grid">
          <div className="form-control">
            <label htmlFor="res-date">Date</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="res-time">Time</label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select Time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control full-width">
            <label htmlFor="guests">Number of Diners</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>

          <div className="form-control full-width">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className="form-control full-width">
            <label>Seating options</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="standard"
                  name="seating"
                  value="Standard"
                  checked={seating === 'Standard'}
                  onChange={(e) => setSeating(e.target.value)}
                />
                <label htmlFor="standard">Standard</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="outside"
                  name="seating"
                  value="Outside"
                  checked={seating === 'Outside'}
                  onChange={(e) => setSeating(e.target.value)}
                />
                <label htmlFor="outside">Outside</label>
              </div>
            </div>
          </div>

          <div className="form-control full-width">
            <button type="submit" className="submit-btn">Let's go</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
