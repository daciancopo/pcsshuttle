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
  <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4 animate-bounce">🗺️</div>
      <p className="text-gray-700 font-medium text-lg">Se încarcă Harta Interactivă...</p>
      <div className="mt-4 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    </div>
  </div>
);

// Error component
const MapError = () => (
  <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">❌</div>
      <p className="text-gray-700 font-medium text-lg">Eroare la Încărcarea Hărții</p>
      <p className="text-gray-500 mt-2">Te rugăm să verifici conexiunea la internet</p>
    </div>
  </div>
);

const Map = () => {
  // Default location (you can change these coordinates to your actual location)
  const center = { lat: 40.7128, lng: -74.0060 }; // New York City coordinates
  const zoom = 15;
  
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
    <section id="location" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-float opacity-20">🚛</div>
        <div className="absolute top-32 right-20 text-3xl animate-float-delayed opacity-20">📍</div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-float opacity-10">🗺️</div>
        <div className="absolute bottom-32 right-10 text-3xl animate-float-delayed opacity-20">🌟</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-gradient">
            🗺️ Găsește-ne
          </h2>
          <p className="text-xl text-gray-700 font-medium">Vizitează sediul nostru sau contactează-ne pentru servicii de ridicare ✨</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              📞 Informații de Contact
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                <div className="text-3xl mr-4 animate-bounce">📍</div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Companie</p>
                  <p className="text-gray-600 font-medium">PERIAN CLAUDIU SORIN SRL</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                <div className="text-3xl mr-4 animate-pulse">📞</div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Telefon - Claudiu</p>
                  <p className="text-gray-600 font-medium">+40 726 725 111</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                <div className="text-3xl mr-4 animate-pulse">📞</div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Telefon - Vlad</p>
                  <p className="text-gray-600 font-medium">+40 725 723 432</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                <div className="text-3xl mr-4 animate-bounce">✉️</div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Email</p>
                  <p className="text-gray-600 font-medium">pcs.shutle@yahoo.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl hover:from-yellow-100 hover:to-orange-100 transition-all duration-300">
                <div className="text-3xl mr-4 animate-pulse">🕒</div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Program de Lucru</p>
                  <p className="text-gray-600 font-medium">Lun-Vin: 8:00 - 18:00</p>
                  <p className="text-gray-600 font-medium">Sâm: 9:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-96 lg:h-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 hover:shadow-2xl transition-all duration-300">
            <Wrapper
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}
              render={render}
              libraries={['marker', 'places']}
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 inline-block">
            <p className="text-lg font-medium text-gray-700 mb-2">
              🚛 <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ai nevoie de indicații?</span> 🗺️
            </p>
            <p className="text-gray-600">
              Apasă pe marcatorul de pe hartă pentru mai multe detalii și opțiuni de navigare! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;