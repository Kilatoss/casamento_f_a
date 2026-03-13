import './Home.css';

const Home = () => {
  return (
    <section id="home" className="banner">
      <img src="img/noivos1.png" alt="Couple" className="banner-img" />
      <div className="banner-text">
        <p>Francisca e André <br /> 25 de Julho de 2026 <br /> <span style={{fontSize: '0.75em', letterSpacing: '1px'}}>Quinta da Portela, Coimbra</span></p> 
      </div>
    </section>
  );
};

export default Home;