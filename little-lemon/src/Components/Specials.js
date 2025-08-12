import './Specials.css';
import saladImg from './greek-salad.jpg';
import bruschettaImg from './bruschetta.svg';
import dessertImg from './lemon-dessert.jpg';

function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>

      <div className="specials-cards">
        <div className="special-card">
          <img src={saladImg} alt="Greek Salad" />
          <div className="card-content">
            <div className="card-header">
              <h3>Greek salad</h3>
              <span className="price">$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <a href="/" className="delivery-link">Order a delivery 🚚</a>
          </div>
        </div>

        <div className="special-card">
          <img src={bruschettaImg} alt="Bruschetta" />
          <div className="card-content">
            <div className="card-header">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <a href="/" className="delivery-link">Order a delivery 🚚</a>
          </div>
        </div>

        <div className="special-card">
          <img src={dessertImg} alt="Lemon Dessert" />
          <div className="card-content">
            <div className="card-header">
              <h3>Lemon Dessert</h3>
              <span className="price">$5.00</span>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="/" className="delivery-link">Order a delivery 🚚</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
