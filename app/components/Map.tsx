'use client';

import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useRef, useState } from 'react';

// Google Maps component
const GoogleMapComponent = ({ center, zoom }: { center: google.maps.LatLngLiteral; zoom: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        mapId: 'DEMO_MAP_ID', // Required for AdvancedMarkerElement
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f3f4f6' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#3b82f6' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#e5e7eb' }]
          }
        ]
      });
      
      // Initialize the advanced marker after importing the marker library
      const initAdvancedMarker = async () => {
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;
        
        // Create custom marker content
        const markerContent = document.createElement('div');
        markerContent.innerHTML = `
          <div style="
            background: #3b82f6;
            border: 4px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          ">🚛</div>
        `;
        
        // Add the advanced marker
        new AdvancedMarkerElement({
          map: newMap,
          position: center,
          title: 'Transport Inc. Headquarters',
          content: markerContent
        });
      };
      
      initAdvancedMarker();
      setMap(newMap);
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} className="w-full h-full rounded-2xl" />;
};

// Loading component
const MapLoading = () => (
  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <div className="text-5xl md:text-6xl mb-4">🗺️</div>
      <p className="text-foreground/80 font-medium text-base md:text-lg">Se încarcă Harta Interactivă...</p>
      <div className="mt-4 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
      </div>
    </div>
  </div>
);

// Error component
const MapError = () => (
  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <div className="text-5xl md:text-6xl mb-4">❌</div>
      <p className="text-foreground font-semibold text-base md:text-lg">Eroare la Încărcarea Hărții</p>
      <p className="text-foreground/70 mt-2">Te rugăm să verifici conexiunea la internet</p>
    </div>
  </div>
);

/**
 * Map section: Google Maps wrapper with custom marker, loading, and error states.
 * Uses @googlemaps/react-wrapper and adheres to accessible, high-contrast UI.
 */
const Map = () => {
  // Default location (you can change these coordinates to your actual location)
  const center = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates
  const zoom = 15;
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE';

  // Dev warning if API key is missing or placeholder
  if (process.env.NODE_ENV !== 'production' && (!apiKey || apiKey === 'YOUR_API_KEY_HERE')) {
    // eslint-disable-next-line no-console
    console.warn('[Map] NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is missing or using placeholder. Map may fail to load in production.');
  }
  
  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <MapLoading />;
      case Status.FAILURE:
        return <MapError />;
      case Status.SUCCESS:
        return <GoogleMapComponent center={center} zoom={zoom} />;
    }
  };

  return (
    <section id="location" className="w-full relative isolate bg-background overflow-hidden min-h-[80svh] md:min-h-[85svh] flex items-center py-20 md:py-24">
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">Găsește-ne</h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 font-medium">Vizitează sediul nostru sau contactează-ne pentru servicii de ridicare</p>
        </div>
        
        <div className="grid items-stretch lg:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-6">Informații de Contact</h3>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 rounded-xl border border-border">
                <div className="text-2xl mr-3">📍</div>
                <div>
                  <p className="font-semibold text-foreground">Companie</p>
                  <p className="text-foreground/70 font-medium">PERIAN CLAUDIU SORIN SRL</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 rounded-xl border border-border">
                <div className="text-2xl mr-3">📞</div>
                <div>
                  <p className="font-semibold text-foreground">Telefon - Claudiu</p>
                  <p className="text-foreground/70 font-medium">+40 726 725 111</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 rounded-xl border border-border">
                <div className="text-2xl mr-3">📞</div>
                <div>
                  <p className="font-semibold text-foreground">Telefon - Vlad</p>
                  <p className="text-foreground/70 font-medium">+40 725 723 432</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 rounded-xl border border-border">
                <div className="text-2xl mr-3">✉️</div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-foreground/70 font-medium">pcs.shuttle@yahoo.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 rounded-xl border border-border">
                <div className="text-2xl mr-3">🕒</div>
                <div>
                  <p className="font-semibold text-foreground">Program de Lucru</p>
                  <p className="text-foreground/70 font-medium">Lun-Vin: 8:00 - 18:00</p>
                  <p className="text-foreground/70 font-medium">Sâm: 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="min-h-[22rem] sm:min-h-[24rem] lg:min-h-[28rem] h-full bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl shadow-sm border border-border p-4">
            <Wrapper
              apiKey={apiKey}
              render={render}
              libraries={['marker', 'places']}
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-border inline-block">
            <p className="text-base font-medium text-foreground mb-1">
              🚛 <span className="font-semibold">Ai nevoie de indicații?</span>
            </p>
            <p className="text-foreground/70 text-sm md:text-base">
              Apasă pe marcatorul de pe hartă pentru mai multe detalii și opțiuni de navigare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;