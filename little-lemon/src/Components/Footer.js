import './Footer.css';
import logo from './Logo.svg'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column logo-column">
        <img src={logo} alt="Little Lemon logo" className="footer-logo" />
      </div>

      <div className="footer-column">
        <h4>Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <ul>
          <li>123 Main Street, Chicago</li>
          <li>(123) 456-7890</li>
          <li>contact@littlelemon.com</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Social Media</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
