
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/CustomButton';
import ServiceCard from '@/components/ui/ServiceCard';
import PriceList from '@/components/ui/PriceList';
import { 
  Computer, Printer, Calculator, 
  Server, Cpu, HardDrive, Shield, 
  Settings, ArrowRight
} from 'lucide-react';

const Home = () => {
  // Dane usług
  const services = [
    {
      id: 1,
      icon: <Computer size={32} />,
      title: 'Naprawa komputerów',
      description: 'Profesjonalna diagnostyka i naprawa komputerów stacjonarnych i laptopów różnych marek.'
    },
    {
      id: 2,
      icon: <Printer size={32} />,
      title: 'Serwis drukarek',
      description: 'Naprawa, konserwacja i regeneracja drukarek laserowych, atramentowych i wielofunkcyjnych.'
    },
    {
      id: 3,
      icon: <Calculator size={32} />,
      title: 'Kasy fiskalne',
      description: 'Sprzedaż, serwis i fiskalizacja kas i drukarek fiskalnych zgodnych z przepisami.'
    },
    {
      id: 4,
      icon: <Server size={32} />,
      title: 'Instalacja oprogramowania',
      description: 'Instalacja systemów operacyjnych, programów biurowych i specjalistycznych aplikacji.'
    },
    {
      id: 5,
      icon: <Cpu size={32} />,
      title: 'Modernizacja sprzętu',
      description: 'Wymiana i rozbudowa podzespołów komputerowych dla zwiększenia wydajności.'
    },
    {
      id: 6,
      icon: <Shield size={32} />,
      title: 'Bezpieczeństwo IT',
      description: 'Zabezpieczanie komputerów przed wirusami, instalacja i konfiguracja oprogramowania antywirusowego.'
    }
  ];

  // Dane cennika
  const priceItems = [
    {
      id: 'price1',
      service: 'Diagnostyka komputera',
      price: '50-100 zł',
      description: 'Profesjonalna diagnostyka sprzętowa i programowa komputerów stacjonarnych oraz laptopów. Cena zależna od stopnia skomplikowania problemu.'
    },
    {
      id: 'price2',
      service: 'Usuwanie wirusów',
      price: '100-200 zł',
      description: 'Kompleksowe usuwanie wirusów, złośliwego oprogramowania i zabezpieczenie systemu. Obejmuje instalację oprogramowania antywirusowego.'
    },
    {
      id: 'price3',
      service: 'Instalacja systemu operacyjnego',
      price: '120-150 zł',
      description: 'Instalacja systemu Windows lub Linux wraz z niezbędnymi sterownikami i podstawowym oprogramowaniem.'
    },
    {
      id: 'price4',
      service: 'Czyszczenie i konserwacja laptopa',
      price: '100-200 zł',
      description: 'Demontaż laptopa, czyszczenie układu chłodzenia, wymiana pasty termoprzewodzącej, usuwanie kurzu z wnętrza.'
    },
    {
      id: 'price5',
      service: 'Naprawa drukarki',
      price: 'od 80 zł',
      description: 'Diagnostyka i naprawa różnego rodzaju drukarek. Cena zależna od modelu i rodzaju usterki.'
    },
    {
      id: 'price6',
      service: 'Serwis kas fiskalnych',
      price: 'od 100 zł',
      description: 'Przeglądy, naprawy i fiskalizacja kas fiskalnych zgodnie z obowiązującymi przepisami.'
    }
  ];

  return (
    <div className="page-transition min-h-screen">
      {/* Hero sekcja */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50 to-transparent">
        <div className="absolute right-0 top-1/3 w-2/3 h-64 bg-blue-100/50 rounded-full filter blur-3xl -z-10 animate-pulse" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 bg-blue-100 text-primary rounded-full mb-5 animate-fade-in">
              <span className="text-sm font-medium">Profesjonalny serwis komputerowy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 animate-fade-up">
              Komputerowy Kontakt <br />
              <span className="text-primary">Serwis komputerowy</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Zapewniamy profesjonalne usługi naprawy i serwisu komputerów, drukarek oraz 
              kas fiskalnych. Gwarantujemy szybką i rzetelną pomoc techniczną.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CustomButton to="/kontakt" size="lg">
                Skontaktuj się z nami
              </CustomButton>
              <CustomButton to="/opinie" variant="outline" size="lg">
                Zobacz opinie klientów
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja o firmie */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Serwis komputerowy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 p-5 bg-white rounded-xl shadow-neuro border border-border/40 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Settings className="h-7 w-7 text-green-600" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Od 2005 roku</div>
                      <div className="text-muted-foreground">na rynku</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-5">Zaufany serwis komputerowy <span className="text-primary">z tradycjami</span></h2>
              <p className="text-muted-foreground mb-6">
                Komputerowy Kontakt to firma z wieloletnim doświadczeniem w branży IT. Od 2005 roku świadczymy profesjonalne usługi naprawy i serwisowania sprzętu komputerowego.
              </p>
              <p className="text-muted-foreground mb-6">
                Specjalizujemy się w naprawie komputerów, laptopów, drukarek oraz kas fiskalnych. Nasz zespół to doświadczeni technicy, którzy stale podnoszą swoje kwalifikacje.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="font-medium">Ekspresowa naprawa</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="font-medium">Fachowe doradztwo</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="font-medium">Gwarancja jakości</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className="font-medium">Konkurencyjne ceny</div>
                </div>
              </div>
              
              <CustomButton to="/kontakt">
                Dowiedz się więcej <ArrowRight className="ml-2 h-4 w-4" />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja usług */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-5">Nasze <span className="text-primary">usługi</span></h2>
            <p className="text-muted-foreground">
              Oferujemy kompleksowe usługi z zakresu naprawy i serwisu sprzętu komputerowego. 
              Nasza oferta skierowana jest zarówno do klientów indywidualnych, jak i firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja cennika */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-5">Nasz <span className="text-primary">cennik</span></h2>
            <p className="text-muted-foreground">
              Oferujemy przystępne ceny dostosowane do zakresu prac. Poniżej przedstawiamy orientacyjny cennik naszych usług.
              Dokładna wycena zawsze następuje po zdiagnozowaniu problemu.
            </p>
          </div>

          <PriceList title="Cennik usług" items={priceItems} />
        </div>
      </section>

      {/* Zachęta do kontaktu */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Potrzebujesz pomocy technicznej?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Nie zwlekaj - skontaktuj się z nami już dziś. Oferujemy szybką i profesjonalną pomoc 
            w rozwiązywaniu problemów z komputerami, drukarkami i kasami fiskalnymi.
          </p>
          <CustomButton to="/kontakt" variant="secondary" size="lg">
            Skontaktuj się z nami
          </CustomButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
