import './Hero.css';
import heroImage from './hero-image.jpg'; // replace with actual path

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, <br />
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="hero-button">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Appetizers served at Little Lemon" />
      </div>
    </section>
  );
}

export default Hero;
