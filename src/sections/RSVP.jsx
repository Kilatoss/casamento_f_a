import { useState } from "react";
import "./RSVP.css";

const RSVP = () => {
  const [formData, setFormData] = useState({
    nome: "",
    presenca: "",
    alergias: "",
    alergiasDetalhe: "",
    restricoes: "",
    restricoesDetalhe: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      nome: formData.nome,
      presenca: formData.presenca,
      alergias: formData.alergias === "Sim" ? formData.alergiasDetalhe : formData.alergias,
      restricoes: formData.restricoes === "Outro" ? formData.restricoesDetalhe : formData.restricoes,
      message: formData.message,
    };

    const API_URL = "https://sheetdb.io/api/v1/w9p0npio3p0fk";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [dataToSend],
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
        <span className="form-title">Formulário de Presença</span>

        {!isSubmitted ? (
          <>
            <p className="rsvp-text">
              Agradecemos que respondam de forma mais célere possível e nos
              confirmem a vossa presença de forma individual.
            </p>

            <form className="rsvp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nome e Sobrenome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="..."
                />
              </div>

              <div className="form-group">
                <label>Confirmo a minha presença *</label>
                <span style={{ marginBottom: "10px" }}>
                  <input
                    type="radio"
                    name="presenca"
                    value="Sim"
                    required
                    checked={formData.presenca === "Sim"}
                    onChange={handleChange}
                  />
                  Sim
                </span>
                <span>
                  <input
                    type="radio"
                    name="presenca"
                    value="Nao"
                    required
                    checked={formData.presenca === "Nao"}
                    onChange={handleChange}
                  />
                  Não
                </span>
              </div>

              <div className="form-group">
                <label>Tens alguma Alergia? *</label>
                <span style={{ marginBottom: "10px" }}>
                  <input
                    type="radio"
                    name="alergias"
                    value="Sim"
                    required
                    checked={formData.alergias === "Sim"}
                    onChange={handleChange}
                  />
                  Sim
                </span>
                <span>
                  <input
                    type="radio"
                    name="alergias"
                    value="Nao"
                    required
                    checked={formData.alergias === "Nao"}
                    onChange={handleChange}
                  />
                  Não
                </span>
                
                {/* Espaço reservado para não expandir o fundo */}
                <div style={{ height: "48px", marginTop: "10px", width: "100%" }}>
                  {formData.alergias === "Sim" && (
                    <input
                      type="text"
                      name="alergiasDetalhe"
                      value={formData.alergiasDetalhe}
                      onChange={handleChange}
                      required
                      placeholder="Quais alergias?"
                      style={{ width: "100%", boxSizing: "border-box", margin: "0" }}
                    />
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Restrições Alimentares *</label>
                <span style={{ marginBottom: "10px" }}>
                  <input
                    type="radio"
                    name="restricoes"
                    value="Nao"
                    required
                    checked={formData.restricoes === "Nao"}
                    onChange={handleChange}
                  />
                  Não
                </span>
                <span style={{ marginBottom: "10px" }}>
                  <input
                    type="radio"
                    name="restricoes"
                    value="Vegetariano"
                    required
                    checked={formData.restricoes === "Vegetariano"}
                    onChange={handleChange}
                  />
                  Vegetariano
                </span>
                <span style={{ marginBottom: "10px" }}>
                  <input
                    type="radio"
                    name="restricoes"
                    value="Vegan"
                    required
                    checked={formData.restricoes === "Vegan"}
                    onChange={handleChange}
                  />
                  Vegan
                </span>
                <span>
                  <input
                    type="radio"
                    name="restricoes"
                    value="Outro"
                    required
                    checked={formData.restricoes === "Outro"}
                    onChange={handleChange}
                  />
                  Outro
                </span>

                {/* Espaço reservado para não expandir o fundo */}
                <div style={{ height: "48px", marginTop: "10px", width: "100%" }}>
                  {formData.restricoes === "Outro" && (
                    <input
                      type="text"
                      name="restricoesDetalhe"
                      value={formData.restricoesDetalhe}
                      onChange={handleChange}
                      required
                      placeholder="Quais restrições?"
                      style={{ width: "100%", boxSizing: "border-box", margin: "0" }}
                    />
                  )}
                </div>
              </div>

              <div className="form-group">
                <label>Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Deixa uma mensagem aos noivos..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Confirmar Presença
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h3>Obrigado!</h3>
            <p>A sua confirmação foi recebida.</p>
            <p>Mal podemos esperar por te ver lá!</p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  nome: "",
                  presenca: "",
                  alergias: "",
                  alergiasDetalhe: "",
                  restricoes: "",
                  restricoesDetalhe: "",
                  message: "",
                });
              }}
              className="reset-btn"
            >
              Enviar outra resposta
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;