import Home from './sections/Home';
import About from './sections/About';
import Program from './sections/Program';
import RSVP from './sections/RSVP';
import Gifts from './sections/Gifts';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Home />
      <About />
      <Program />
      <RSVP />
      <Gifts />
      <Footer />
    </main>
  );
}

export default App;