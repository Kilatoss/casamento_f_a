import { useState } from "react";
import "./RSVP.css";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restrictions: "",
    companion: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = "https://sheetdb.io/api/v1/w9p0npio3p0fk";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [formData],
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        console.error("Failed to save RSVP: ", errorData);
        alert("Ocorreu um erro ao enviar. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error("Error connecting to the database:", error);
      alert("Erro de conexão. Verifique a sua internet e tente novamente.");
    }
  };

  return (
    <section
      id="rsvp"
      className="rsvp-section"
      style={{ backgroundImage: "url(img/bg-art.png)" }}
    >
      <div className="rsvp-card">
        <span className="form-title">Formulario de Presenca</span>

        {!isSubmitted ? (
          <>
            <p className="rsvp-text">
              Agradecemos que respondam de forma mais célere possível e nos
              confirmem a vossa presença de forma individual.
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
                <label>Acompanhantes</label>

                <span style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name="companion"
                    value="yes"
                    required
                    checked={formData.companion === "yes"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        companion: e.target.value,
                      }))
                    }
                  />
                  Sim
                </span>

                <span>
                  <input
                    type="radio"
                    name="companion"
                    value="no"
                    required
                    checked={formData.companion === "no"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        companion: e.target.value,
                      }))
                    }
                  />
                  Não
                </span>
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

              <button type="submit" className="submit-btn">
                Confirmar Presenca
              </button>
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
