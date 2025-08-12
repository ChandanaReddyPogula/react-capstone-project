import '../css/Testimonials.css';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <img src={user1} alt="User 1" className="user-photo" />
          <div className="user-name">Maria</div>
          <div className="user-rating">⭐⭐⭐⭐⭐</div>
          <p className="user-review">The food is amazing and the atmosphere is cozy. Highly recommend the lemon dessert!</p>
        </div>

        <div className="testimonial-card">
          <img src={user2} alt="User 2" className="user-photo" />
          <div className="user-name">Liam</div>
          <div className="user-rating">⭐⭐⭐⭐</div>
          <p className="user-review">Great service and delicious Mediterranean dishes. Will definitely come back!</p>
        </div>

        <div className="testimonial-card">
          <img src={user3} alt="User 3" className="user-photo" />
          <div className="user-name">Ava</div>
          <div className="user-rating">⭐⭐⭐⭐⭐</div>
          <p className="user-review">A gem in the city! The staff is lovely and the food is full of flavor and freshness.</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
