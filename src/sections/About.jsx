import { useState, useEffect } from 'react';
import './About.css';

const images = [
  "url(./public/img/noivos4.jpg)",
  "url(./public/img/noivos5.jpg)",
  "url(./public/img/noivos6.jpg)",
  "url(./public/img/noivos7.jpg)",
  "url(./public/img/noivos8.jpg)"
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
        <span className="section-title">OS NOIVOS</span>
        <h1>Francisca & André</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
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