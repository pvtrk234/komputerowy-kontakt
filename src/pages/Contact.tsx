
import React from 'react';
import ContactForm from '@/components/ui/ContactForm';
import Map from '@/components/ui/Map';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-transition min-h-screen pt-28 pb-20">
      {/* Nagłówek sekcji */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
          <p className="text-muted-foreground mb-8">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie, mailowo lub odwiedź nasz serwis osobiście.
          </p>
        </div>
      </section>
      
      {/* Sekcja informacji kontaktowych i mapy */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dane kontaktowe */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-neuro border border-border/40">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-muted-foreground">ul. Przykładowa 123</p>
                    <p className="text-muted-foreground">00-000 Warszawa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+48123456789" className="hover:text-primary transition-colors">
                        +48 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:kontakt@komputerowykontakt.pl" className="hover:text-primary transition-colors">
                        kontakt@komputerowykontakt.pl
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Godziny otwarcia</h3>
                    <p className="text-muted-foreground">Poniedziałek - Piątek: 9:00 - 17:00</p>
                    <p className="text-muted-foreground">Sobota: 10:00 - 14:00</p>
                    <p className="text-muted-foreground">Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-neuro border border-border/40">
              <h3 className="font-semibold mb-3">Krótka informacja</h3>
              <p className="text-muted-foreground mb-4">
                W przypadku pytań dotyczących napraw, wycen lub dostępności części, prosimy o kontakt telefoniczny 
                lub mailowy. Na wszystkie zapytania staramy się odpowiadać w ciągu 24 godzin w dni robocze.
              </p>
              <p className="text-muted-foreground">
                W nagłych przypadkach preferujemy kontakt telefoniczny.
              </p>
            </div>
          </div>
          
          {/* Formularz kontaktowy */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Mapa */}
      <section className="container mx-auto px-6 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-neuro border border-border/40">
          <h2 className="text-2xl font-bold mb-6 text-center">Nasza lokalizacja</h2>
          <Map />
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-neuro border border-border/40">
          <h2 className="text-2xl font-bold mb-6 text-center">Najczęściej zadawane pytania</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Jak długo trwa naprawa komputera?</h3>
              <p className="text-muted-foreground">
                Czas naprawy zależy od rodzaju usterki. Drobne problemy rozwiązujemy często "od ręki", bardziej 
                złożone naprawy mogą zająć 1-3 dni robocze. W przypadku konieczności zamówienia części, czas może się wydłużyć.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Czy wystawiacie faktury VAT?</h3>
              <p className="text-muted-foreground">
                Tak, na wszystkie usługi i produkty wystawiamy faktury VAT.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Czy jest możliwość naprawy komputera w domu klienta?</h3>
              <p className="text-muted-foreground">
                Tak, oferujemy usługi naprawy i konfiguracji sprzętu u klienta. Usługa ta wymaga wcześniejszego umówienia się.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Jak mogę dostarczyć sprzęt do serwisu?</h3>
              <p className="text-muted-foreground">
                Możesz osobiście dostarczyć sprzęt do naszego punktu serwisowego. W przypadku większych urządzeń lub 
                problemów z transportem, możemy również zorganizować odbiór sprzętu od klienta (usługa dodatkowo płatna).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
