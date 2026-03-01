import { useState } from 'react';
import './Gifts.css';

const Gifts = () => {
  const [isCopied, setIsCopied] = useState(false);
  
  const iban = "PT50 0035 0833 0001 0357 6304 0"; 

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setIsCopied(true);
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    } catch (err) {
      console.error("Erro ao copiar IBAN: ", err);
    }
  };

  return (
    <section id="gifts" className="gifts-section">
      <span className="section-title">Presentes</span>
      
      <div className="gifts-content">
        <p className="gifts-text">
          A vossa presença e animação no nosso dia, é a melhor prenda que podemos pedir!! 
          No entanto para quem quer acrescentar alguma coisa ao ‘recheio’ da nossa casa ou para a nossa lua de mel deixamos o nosso IBAN.
        </p>

        <div className="iban-wrapper">
          <div className="iban-container" onClick={handleCopy} title="Clicar para copiar">
            <img src="img/beach.png" className="bank-icon" />

            <span className="iban-text">{iban}</span>
            <svg className="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </div>
          
          {isCopied && <div className="copy-popup">IBAN copiado!</div>}
        </div>

        <p className="gifts-text mt-2">
          Para quem gosta da forma tradicional selecionámos um conjunto de peças que irão embelezar a nossa casa, que está disponível online ou em qualquer loja Vista Alegre.
        </p>

        <a href="#" target="_blank" rel="noopener noreferrer" className="vista-alegre-btn disabled">
          Ver Lista na Vista Alegre
        </a>
      </div>
    </section>
  );
};

export default Gifts;