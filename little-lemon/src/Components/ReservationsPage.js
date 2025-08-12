// Reservations.js
import React from 'react';

const ReservationsPage = ({ reservations }) => {
  if (reservations.length === 0) {
    return <p style={{ padding: '2rem' }}>No reservations found.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>All Reservations</h2>
      {reservations.map((res) => (
        <div key={res.id} style={{
          border: '1px solid #ccc',
          padding: '1rem',
          marginBottom: '1rem',
          borderRadius: '8px'
        }}>
          <p><strong>Name:</strong> {res.customer.firstName} {res.customer.lastName}</p>
          <p><strong>Email:</strong> {res.customer.email}</p>
          <p><strong>Phone:</strong> {res.customer.phone}</p>
          <p><strong>Date:</strong> {res.date}</p>
          <p><strong>Time:</strong> {res.time}</p>
          <p><strong>Guests:</strong> {res.guests}</p>
          <p><strong>Occasion:</strong> {res.occasion}</p>
          <p><strong>Seating:</strong> {res.seating}</p>
          {res.customer.specialRequest && (
            <p><strong>Special Request:</strong> {res.customer.specialRequest}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReservationsPage;
