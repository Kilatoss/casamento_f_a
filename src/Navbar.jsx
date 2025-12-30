import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Couple', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Gifts', href: '#gifts' },
  ];

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.name} className="navbar-item">
            <a 
              href={link.href} 
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;