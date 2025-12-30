import { useState, useEffect } from 'react';
import './About.css';

const images = [
  "url(/img/noivos4.jpg)",
  "url(/img/noivos5.jpg)",
  "url(/img/noivos6.jpg)",
  "url(/img/noivos7.jpg)",
  "url(/img/noivos8.jpg)"
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="intro">
      <div className="intro-content">
        <span className="section-title">The Couple</span>
        <h1>Francisca & André</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
          eveniet amet excepturi voluptates dolorem totam ad quod hic.
        </p>
      </div>

      <div className="slider-container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: img }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;