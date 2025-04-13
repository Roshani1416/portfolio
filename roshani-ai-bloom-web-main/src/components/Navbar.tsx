
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <NavLink to="/" className="text-xl font-bold text-roshani-purple hover:opacity-90 transition-opacity">
            Roshani
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "nav-link active-link" : "nav-link"
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "nav-link active-link" : "nav-link"
            }>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              isActive ? "nav-link active-link" : "nav-link"
            }>
              Projects
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => 
              isActive ? "nav-link active-link" : "nav-link"
            }>
              Skills
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "nav-link active-link" : "nav-link"
            }>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="bg-white shadow-lg border-t border-roshani-gray/10 px-4 pt-2 pb-4 space-y-2">
          <NavLink to="/" className={({ isActive }) => 
            `block py-3 px-4 rounded-lg hover:bg-roshani-gray/20 transition-colors ${isActive ? 'bg-roshani-gray/30 font-medium' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `block py-3 px-4 rounded-lg hover:bg-roshani-gray/20 transition-colors ${isActive ? 'bg-roshani-gray/30 font-medium' : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            `block py-3 px-4 rounded-lg hover:bg-roshani-gray/20 transition-colors ${isActive ? 'bg-roshani-gray/30 font-medium' : ''}`
          }>
            Projects
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => 
            `block py-3 px-4 rounded-lg hover:bg-roshani-gray/20 transition-colors ${isActive ? 'bg-roshani-gray/30 font-medium' : ''}`
          }>
            Skills
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `block py-3 px-4 rounded-lg hover:bg-roshani-gray/20 transition-colors ${isActive ? 'bg-roshani-gray/30 font-medium' : ''}`
          }>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
