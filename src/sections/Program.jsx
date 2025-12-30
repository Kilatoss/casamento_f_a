import './Program.css';

const Program = () => {
  return (
    <section id="program" className="program-section">
      <span className="section-title">Program</span>
      <div className="program-grid">
        <div className="grid-item img-wrapper">
          <img src="/img/localcerimonia.jpg" alt="Ceremony Location" />
        </div>
        <div className="grid-item info">
          <p>Ceremony:</p>
          <h4>São Miguel Chapel</h4>
          <p>Time:</p>
          <h4>15:00</h4>
        </div>
        <div className="grid-item info">
          <p>Reception:</p>
          <h4>Quinta da Portela Palace</h4>
          <p>Dress Code:</p>
          <h4>Formal</h4>
          <small>Note: Cocktail and Dinner will be on grass.</small>
        </div>
        <div className="grid-item img-wrapper">
          <img src="/img/localfesta.jpg" alt="Party Location" />
        </div>
      </div>
    </section>
  );
};

export default Program;