import Logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

function Nav() {
  return (
    <nav>
        <img src={Logo} alt="Little Lemon Logo" className="logo"/>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/reservations" className="nav-link">Reservations</Link>
        <Link to="/order-online" className="nav-link">Order Online</Link>
        <Link to="/login" className="nav-link">Login</Link>
    </nav>
  );
};

export default Nav;