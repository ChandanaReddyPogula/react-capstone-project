import '../css/About.css';
import chef1 from '../images/chef1.jpg'
import chef2 from '../images/chef2.jpg';

function About() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. 
          Founded by brothers Adrian and Mario, the restaurant brings together traditional recipes 
          passed down for generations with a fresh, modern twist. Our mission is to provide authentic 
          and flavorful meals that celebrate our heritage and bring people together.
        </p>
      </div>
      <div className="about-images">
        <img src={chef2} alt="Chef Adrian" className="about-img img-1" />
        <img src={chef1} alt="Chef Mario" className="about-img img-2" />
      </div>
    </section>
  );
}

export default About;
