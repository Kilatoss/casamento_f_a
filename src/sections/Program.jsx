import './Program.css';

const Program = () => {
  return (
    <section id="program" className="program-section">
      
      <div className="program-container">
        
        {/* Event 1: Ceremony */}
        <div className="event-row">
          <div className="event-image">
            <img src="img/localcerimonia.jpg" alt="São Miguel Chapel" />
          </div>
          <div className="event-details">
            <span className="time-badge">15:00</span>
            <h3>A Cerimónia</h3>
            <h4>Capela de São Miguel</h4>
            <p>
              A cerimónia irá realizar-se na capela de S.Miguel da Universidade de Coimbra.
 A cerimónia terá início às 15:00 horas, já a contar com os 15 minutos académicos da noiva.
            </p>
            <a 
              href="https://maps.google.com/?q=Capela+de+São+Miguel+Coimbra" 
              target="_blank" 
              rel="noreferrer" 
              className="map-link"
            >
              Ver no Mapa &rarr;
            </a>
          </div>
        </div>
<hr></hr>
        {/* Event 2: Reception */}
        <div className="event-row reverse">
          <div className="event-image">
            <img src="img/localfesta.jpg" alt="Quinta da Portela" />
          </div>
          <div className="event-details">
            <span className="time-badge">17:30</span>
            <h3>Jantar e Festa</h3>
            <h4>Palácio da Quinta da Portela</h4>
            <p>
               O copo d’água e a festa serão realizados no Palácio da Quinta da Portela, Coimbra. 
            </p>
            <div className="info-box">
              <span style={{fontVariant: "small-caps", fontWeight: "bold", fontSize: "14pt", color: "#5a835c"}}>Nota Adicional</span> <br/>
              <strong>Dress Code:</strong> Formal (Fato e gravata, Vestido)<br/>
              <strong>Para as senhoras:</strong> O jantar será numa zona com relva, por isso recomendamos sapatos de salto largo.


            </div>
            <a 
              href="https://maps.app.goo.gl/1efCUaNaNNejTJT18" 
              target="_blank" 
              rel="noreferrer" 
              className="map-link"
            >
              Ver no Mapa &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Program;