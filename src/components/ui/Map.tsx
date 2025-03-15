
import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Inicjalizacja mapy Google
    const initMap = () => {
      const mapOptions = {
        center: { lat: 52.2297, lng: 21.0122 }, // Warszawa
        zoom: 15,
        mapId: 'DEMO_MAP_ID', // Przykładowy ID, w prawdziwej aplikacji należy użyć własnego ID
        disableDefaultUI: true, // Ukryj domyślne kontrolki
        zoomControl: true,
        mapTypeControl: false,
        styles: [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6c7b88' }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ visibility: 'on' }]
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f2f2f2' }]
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: 'transit',
            elementType: 'all',
            stylers: [{ visibility: 'simplified' }]
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#b4d0e7' }, { visibility: 'on' }]
          }
        ]
      };

      // Symulacja Google Maps
      const mockMap = document.createElement('div');
      mockMap.style.width = '100%';
      mockMap.style.height = '100%';
      mockMap.style.backgroundColor = '#f2f2f2';
      mockMap.style.borderRadius = '0.5rem';
      mockMap.style.position = 'relative';
      mockMap.style.overflow = 'hidden';

      // Dodanie zawartości mapy
      mockMap.innerHTML = `
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url('https://maps.googleapis.com/maps/api/staticmap?center=52.2297,21.0122&zoom=15&size=600x400&key=YOUR_API_KEY'); background-size: cover; background-position: center; filter: grayscale(20%);"></div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -100%); width: 20px; height: 20px;">
          <div style="width: 40px; height: 40px; background-color: rgba(0, 123, 255, 0.8); border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); transform: translate(-50%, -50%);"></div>
        </div>
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -20px); background-color: white; padding: 5px 10px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); font-weight: 500; font-size: 14px;">
          Komputerowy Kontakt
        </div>
      `;

      // Przypnij wiadomość na dole mapy
      const messageElement = document.createElement('div');
      messageElement.style.position = 'absolute';
      messageElement.style.bottom = '10px';
      messageElement.style.left = '50%';
      messageElement.style.transform = 'translateX(-50%)';
      messageElement.style.backgroundColor = 'white';
      messageElement.style.padding = '8px 12px';
      messageElement.style.borderRadius = '4px';
      messageElement.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
      messageElement.style.fontSize = '12px';
      messageElement.style.fontWeight = '500';
      messageElement.style.color = '#666';
      messageElement.textContent = 'To jest symulacja mapy (brak klucza API Google Maps)';
      mockMap.appendChild(messageElement);

      // Wyczyść i dodaj makiety mapy
      if (mapRef.current) {
        mapRef.current.innerHTML = '';
        mapRef.current.appendChild(mockMap);
      }
    };

    initMap();
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden">
      <div ref={mapRef} className="w-full h-full bg-secondary"></div>
    </div>
  );
};

export default Map;
