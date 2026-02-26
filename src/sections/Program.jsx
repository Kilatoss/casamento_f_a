import './Program.css';

const Program = () => {
  return (
    <section id="program" className="program-section">
      <span className="section-title" style={{marginLeft:'165px'}}>O PROGRAMA</span>
      
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
              Juntem-se a nós para a cerimônia de casamento na histórica Capela da Universidade.
              Por favor, cheguem 15 minutos antes para encontrarem o vosso lugar.
            </p>
            <a 
              href="https://maps.google.com/?q=Capela+de+São+Miguel+Coimbra" 
              target="_blank" 
              rel="noreferrer" 
              className="map-link"
            >
              Ver Mapa &rarr;
            </a>
          </div>
        </div>

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
              Jantar, dançar e muito mais para celebrar. 
            </p>
            <div className="info-box">
              <strong>Dress Code:</strong> Formal (Fato e gravata, Vestido)<br/>
              <strong>Para as senhoras:</strong> O jantar será numa zona com relva, por isso recomendamos sapatos de salto largo.


            </div>
            <a 
              href="https://maps.app.goo.gl/1efCUaNaNNejTJT18" 
              target="_blank" 
              rel="noreferrer" 
              className="map-link"
            >
              Ver Mapa &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Program;