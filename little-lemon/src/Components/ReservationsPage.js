function ReservationsPage({ reservations }) {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>All Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reservations.map((r, index) => (
            <li key={index} style={{
              background: '#EDEFEE',
              marginBottom: '1rem',
              padding: '1rem',
              borderRadius: '8px'
            }}>
              <strong>Date:</strong> {r.date}<br />
              <strong>Time:</strong> {r.time}<br />
              <strong>Guests:</strong> {r.guests}<br />
              <strong>Occasion:</strong> {r.occasion}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default ReservationsPage;
