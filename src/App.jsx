import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Program from './sections/Program';
import RSVP from './sections/RSVP';
import Gifts from './sections/Gifts';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <About />
        <Program />
        <RSVP />
        <Gifts />
      </main>
    </div>
  );
}

export default App;