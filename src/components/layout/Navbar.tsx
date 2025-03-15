
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Star, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Obsługa przewijania strony i dodanie cienia do nawigacji
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
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

  // Zamknij menu mobilne po kliknięciu w link
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-semibold' : 'text-foreground';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold transform transition-transform group-hover:scale-110">
              KC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Komputerowy</span>
              <span className="text-xs text-muted-foreground">Kontakt</span>
            </div>
          </Link>

          {/* Menu desktopowe */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`nav-item flex items-center gap-1 ${isActive('/')}`}>
              <Home size={16} />
              <span>Strona główna</span>
            </Link>
            
            <Link to="/opinie" className={`nav-item flex items-center gap-1 ${isActive('/opinie')}`}>
              <Star size={16} />
              <span>Opinie klientów</span>
            </Link>
            
            <Link to="/kontakt" className={`nav-item flex items-center gap-1 ${isActive('/kontakt')}`}>
              <Phone size={16} />
              <span>Kontakt</span>
            </Link>
          </div>

          {/* Przycisk menu mobilnego */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobilne */}
      <div className={`md:hidden absolute left-0 w-full px-4 py-2 transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 top-16 bg-white/90 backdrop-blur-md border-b border-border shadow-md' 
          : 'opacity-0 -top-96'
      }`}>
        <div className="flex flex-col space-y-3 pb-3">
          <Link to="/" className={`flex items-center gap-2 p-2 rounded-md hover:bg-secondary ${isActive('/')}`}>
            <Home size={18} />
            <span>Strona główna</span>
          </Link>
          
          <Link to="/opinie" className={`flex items-center gap-2 p-2 rounded-md hover:bg-secondary ${isActive('/opinie')}`}>
            <Star size={18} />
            <span>Opinie klientów</span>
          </Link>
          
          <Link to="/kontakt" className={`flex items-center gap-2 p-2 rounded-md hover:bg-secondary ${isActive('/kontakt')}`}>
            <Phone size={18} />
            <span>Kontakt</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
