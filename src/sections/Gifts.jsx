import { useState, useEffect } from 'react';
import './Gifts.css';

const Gifts = () => {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/gifts.json') // Renamed from prendas.json
      .then((res) => res.json())
      .then((data) => {
        setGifts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gifts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="gifts" className="gifts-section">
      <span className="section-title">Gift Registry</span>
      
      {loading ? (
        <p>Loading registry...</p>
      ) : (
        <div className="gifts-grid">
          {gifts.map((item, index) => (
            <div key={index} className="gift-card">
              <img src={item.imagem} alt={item.nome} />
              <h4>{item.nome}</h4>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                View at {item.loja}
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gifts;