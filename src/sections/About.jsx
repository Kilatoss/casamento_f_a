import { useState, useEffect } from 'react';
import './About.css';

const images = [
  "url(img/noivos4.jpg)",
  "url(img/noivos5.jpg)",
  "url(img/noivos6.jpg)",
  "url(img/noivos7.jpg)",
  "url(img/noivos8.jpg)"
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
        <h1>Convite de Casamento</h1>
        <p>
          É como muita alegria que vos convidamos para o nosso casamento, no dia 25 de julho de 2026, em Coimbra. 
Estamos certos que a vossa presença irá completar este grande dia que tanto ansiamos
A cerimónia irá realizar-se na capela de S.Miguel da Universidade de Coimbra.
 A cerimónia terá início às 15:00 horas, já a contar com os 15 minutos académicos da noiva.
 O copo d’água e a festa serão realizados no palácio da quinta da Portela, Coimbra.
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