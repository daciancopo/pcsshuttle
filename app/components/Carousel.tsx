'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  type: 'image' | 'video';
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const mediaItems: CarouselItem[] = [
    {
      src: '/images/WhatsApp Video 2025-07-01 at 21.11.05.mp4',
      alt: 'Video Flotă Transport',
      title: 'Flota în Acțiune 🎬',
      description: 'Urmărește serviciile noastre profesionale de transport în acțiune',
      type: 'video'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.11.jpeg',
      alt: 'Vehicul Transport 1',
      title: 'Flotă Profesională de Transport 🚛',
      description: 'Vehicule moderne pentru servicii de transport fiabile',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.16.jpeg',
      alt: 'Vehicul Transport 2',
      title: 'Transport Confortabil de Pasageri 🚐',
      description: 'Călătorii sigure și confortabile pentru toți pasagerii',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.26.jpeg',
      alt: 'Vehicul Transport 3',
      title: 'Servicii de Marfă & Transport 📦',
      description: 'Soluții eficiente de transport marfă',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.26 (1).jpeg',
      alt: 'Vehicul Transport 4',
      title: 'Transport pentru Sarcini Grele 💪',
      description: 'Vehicule puternice pentru transportul de marfă grea',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.26 (2).jpeg',
      alt: 'Vehicul Transport 5',
      title: 'Management Fiabil al Flotei 🔧',
      description: 'Vehicule bine întreținute pentru servicii constante',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.26 (3).jpeg',
      alt: 'Vehicul Transport 6',
      title: 'Soluții Moderne de Transport 🌟',
      description: 'Vehicule de ultimă generație pentru nevoile moderne de transport',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35.jpeg',
      alt: 'Vehicul Transport 7',
      title: 'Călătorii pe Distanțe Lungi 🛣️',
      description: 'Transport confortabil pe distanțe lungi',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35 (1).jpeg',
      alt: 'Vehicul Transport 8',
      title: 'Șoferi Profesioniști 👨‍💼',
      description: 'Echipă de șoferi experimentați și profesioniști',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35 (2).jpeg',
      alt: 'Transport Vehicle 9',
      title: 'Safety First 🛡️',
      description: 'Safety-focused transport operations',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35 (3).jpeg',
      alt: 'Transport Vehicle 10',
      title: 'Quality Service 🏆',
      description: 'High-quality transport services',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35 (4).jpeg',
      alt: 'Transport Vehicle 11',
      title: 'Efficient Operations ⚡',
      description: 'Streamlined and efficient transport operations',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35 (5).jpeg',
      alt: 'Transport Vehicle 12',
      title: 'Customer Satisfaction 😊',
      description: 'Dedicated to customer satisfaction',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.35 (6).jpeg',
      alt: 'Transport Vehicle 13',
      title: 'Versatile Solutions 🔄',
      description: 'Flexible transport solutions for various needs',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.36.jpeg',
      alt: 'Transport Vehicle 14',
      title: 'Premium Transport Services ⭐',
      description: 'High-quality vehicles for premium service',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.36 (1).jpeg',
      alt: 'Transport Vehicle 15',
      title: 'Reliable Partnership 🤝',
      description: 'Your trusted transport partner',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.36 (2).jpeg',
      alt: 'Transport Vehicle 16',
      title: 'Professional Standards 📋',
      description: 'Maintaining high professional standards',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.58.jpeg',
      alt: 'Transport Vehicle 17',
      title: 'Advanced Fleet 🚀',
      description: 'Advanced vehicles for modern transport',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.59.jpeg',
      alt: 'Transport Vehicle 18',
      title: 'Comprehensive Services 📊',
      description: 'Complete transport service solutions',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.11.59 (1).jpeg',
      alt: 'Transport Vehicle 19',
      title: 'Excellence in Transport 🏅',
      description: 'Committed to transport excellence',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.13.jpeg',
      alt: 'Transport Vehicle 20',
      title: 'Innovation in Motion 💡',
      description: 'Innovative transport solutions',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14.jpeg',
      alt: 'Transport Vehicle 21',
      title: 'Versatile Fleet Options 🚗',
      description: 'Various vehicle types for different needs',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14 (1).jpeg',
      alt: 'Transport Vehicle 22',
      title: 'Dependable Service 🎯',
      description: 'Dependable transport you can count on',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14 (2).jpeg',
      alt: 'Transport Vehicle 23',
      title: 'Strategic Operations 🗺️',
      description: 'Strategic approach to transport operations',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14 (3).jpeg',
      alt: 'Transport Vehicle 24',
      title: 'Quality Assurance ✅',
      description: 'Quality assured transport services',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14 (4).jpeg',
      alt: 'Transport Vehicle 25',
      title: 'Professional Excellence 🌟',
      description: 'Excellence in professional transport',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14 (5).jpeg',
      alt: 'Transport Vehicle 26',
      title: 'Trusted Service Provider 🏢',
      description: 'Your trusted transport service provider',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.14 (6).jpeg',
      alt: 'Transport Vehicle 27',
      title: 'Complete Solutions 🔧',
      description: 'Complete transport solutions package',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15.jpeg',
      alt: 'Transport Vehicle 28',
      title: 'Efficient Logistics 📦',
      description: 'Efficient logistics and transport management',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (1).jpeg',
      alt: 'Transport Vehicle 29',
      title: 'Modern Infrastructure 🏗️',
      description: 'Modern transport infrastructure',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (2).jpeg',
      alt: 'Transport Vehicle 30',
      title: 'Seamless Operations 🔄',
      description: 'Seamless transport operations',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (3).jpeg',
      alt: 'Transport Vehicle 31',
      title: 'Customer Focus 👥',
      description: 'Customer-focused transport services',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (4).jpeg',
      alt: 'Transport Vehicle 32',
      title: 'Reliable Network 🌐',
      description: 'Reliable transport network coverage',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (5).jpeg',
      alt: 'Transport Vehicle 33',
      title: 'Professional Team 👨‍💼👩‍💼',
      description: 'Professional transport team',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (6).jpeg',
      alt: 'Transport Vehicle 34',
      title: 'Service Excellence 🏆',
      description: 'Excellence in transport service delivery',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.15 (7).jpeg',
      alt: 'Transport Vehicle 35',
      title: 'Comprehensive Coverage 📍',
      description: 'Comprehensive transport coverage',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.16.jpeg',
      alt: 'Transport Vehicle 36',
      title: 'Advanced Technology 💻',
      description: 'Technology-enhanced transport services',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.16 (1).jpeg',
      alt: 'Transport Vehicle 37',
      title: 'Operational Excellence 🎯',
      description: 'Excellence in transport operations',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.16 (2).jpeg',
      alt: 'Transport Vehicle 38',
      title: 'Quality Fleet 🚛',
      description: 'High-quality transport fleet',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.16 (3).jpeg',
      alt: 'Transport Vehicle 39',
      title: 'Dedicated Service 💪',
      description: 'Dedicated to superior transport service',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.16 (4).jpeg',
      alt: 'Transport Vehicle 40',
      title: 'Transport Innovation 🚀',
      description: 'Innovation in transport solutions',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.16 (5).jpeg',
      alt: 'Transport Vehicle 41',
      title: 'Complete Fleet 🚐🚛',
      description: 'Complete range of transport vehicles',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.17.jpeg',
      alt: 'Transport Vehicle 42',
      title: 'Professional Standards 📋',
      description: 'Maintaining professional transport standards',
      type: 'image'
    },
    {
      src: '/images/WhatsApp Image 2025-07-01 at 21.12.17 (1).jpeg',
      alt: 'Transport Vehicle 43',
      title: 'Transport Excellence 🌟',
      description: 'Excellence in every transport service',
      type: 'image'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, mediaItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? mediaItems.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === mediaItems.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const currentItem = mediaItems[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 -right-20 w-60 h-60 bg-gradient-to-r from-pink-300/20 to-yellow-300/20 rounded-full animate-float-delayed"></div>
        <div className="absolute -bottom-10 left-1/3 w-32 h-32 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-gradient">
            Our Fleet Gallery 🚛✨
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our modern and well-maintained vehicles through our interactive carousel
          </p>
        </div>
        
        {/* Main Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white">
            {/* Media Display */}
            <div className="relative w-full h-full">
              {currentItem.type === 'video' ? (
                <video
                  src={currentItem.src}
                  className="w-full h-full object-contain p-8"
                  controls
                  muted
                  autoPlay
                  loop
                />
              ) : (
                <Image
                  src={currentItem.src}
                  alt={currentItem.alt}
                  fill
                  className="object-contain p-8"
                  priority
                />
              )}
              
              {/* Overlay with title and description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {currentItem.title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {currentItem.description}
                </p>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group"
              aria-label="Imaginea anterioară"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 group"
              aria-label="Imaginea următoare"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots Indicator */}
           <div className="flex justify-center mt-6 space-x-3">
             {mediaItems.map((item, index) => (
               <button
                 key={index}
                 onClick={() => goToSlide(index)}
                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
                   index === currentIndex
                     ? 'bg-blue-600 scale-125'
                     : 'bg-gray-300 hover:bg-gray-400'
                 }`}
                 aria-label={`Mergi la ${item.type === 'image' ? 'imaginea' : 'videoul'} ${index + 1}: ${item.title}`}
               />
             ))}
           </div>
          
          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
              }`}></div>
              <span>{isAutoPlaying ? 'Redare automată' : 'Întrerupt'}</span>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-600 mb-4">
              🚀 <strong>Galerie Interactivă:</strong> Apasă săgețile sau punctele pentru navigare, redare automată la fiecare 4 secunde
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📱 Compatibil Mobil</span>
              <span>⚡ Încărcare Rapidă</span>
              <span>🎨 Design Modern</span>
              <span>♿ Accesibil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;