import { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restrictions: '',
    companion: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="rsvp-section" style={{ backgroundImage: 'url(img/bg-art.png)' }}>
      <div className="rsvp-card">
        <span className="form-title">Formulario de Presenca</span>
        
        {!isSubmitted ? (
          <>
            <p className="rsvp-text">
              Estamos muito felizes em convidá-lo(a) para fazer parte do nosso dia especial!
              Por favor, confirme sua presença abaixo.
            </p>

            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Nome Completo"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label>Restricoes Alimentares </label>
                <input 
                  type="text" 
                  name="restrictions" 
                  value={formData.restrictions} 
                  onChange={handleChange} 
                  placeholder="Alergias, Vegetariano, etc."
                />
              </div>

              <div className="form-group">
                <label>Acompanhantes </label>
                <input 
                  type="number" 
                  name="companion" 
                  value={formData.companion} 
                  onChange={handleChange} 
                  placeholder="0"
                />
              </div>

              <div className="form-group">
                <label>Mensagem</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  placeholder="Deixe uma nota para os noivos..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Confirmar Presenca</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h3>Obrigado!</h3>
            <p>A sua confirmação foi recebida.</p>
            <p>Mal podemos esperar por te ver lá!</p>
            <button onClick={() => setIsSubmitted(false)} className="reset-btn">
              Enviar outra resposta
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;