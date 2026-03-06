import './Home.css';

const Home = () => {
  return (
    <section id="home" className="banner">
      <img src="img/noivos1.png" alt="Couple" className="banner-img" />
      <div className="banner-text">
        <p>
          Francisca <br></br> 
          <span className='e'>e </span>
          André <br /> 
          <span className='subtitulo'>25 de Julho de 2026 <br></br> Quinta da Portela, Coimbra</span>
        </p> 
      </div>
    </section>
  );
};

export default Home;