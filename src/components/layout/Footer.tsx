
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-12 pb-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* O firmie */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                KC
              </div>
              <h3 className="font-bold text-lg">Komputerowy Kontakt</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Profesjonalny serwis komputerów, drukarek i kas fiskalnych, działający na rynku od 2005 roku.
              Zapewniamy szybką i fachową pomoc w rozwiązywaniu problemów technicznych.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Szybkie linki */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/opinie" className="text-muted-foreground hover:text-primary transition-colors">
                  Opinie klientów
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground">ul. Przykładowa 123<br />00-000 Warszawa</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:kontakt@komputerowykontakt.pl" className="text-muted-foreground hover:text-primary transition-colors">
                  kontakt@komputerowykontakt.pl
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-0.5" />
                <div className="text-muted-foreground">
                  <p>Pon-Pt: 9:00 - 17:00</p>
                  <p>Sob: 10:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Komputerowy Kontakt. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
