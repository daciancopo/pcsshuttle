const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-800 via-pink-700 to-orange-600 text-white py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-300 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              🚚 PCS Transport
            </h3>
            <p className="text-black text-lg font-medium leading-relaxed">
              PERIAN CLAUDIU SORIN SRL - Partenerul tău de încredere pentru servicii profesionale de transport. Ore suplimentare la 50 lei/oră cu opțiuni flexibile de plată! ✨
            </p>
          </div>
          
          <div>
            <h4 className="text-2xl font-black mb-6 text-yellow-300">🚛 Servicii</h4>
            <ul className="space-y-3 text-lg font-medium">
              <li className="hover:text-yellow-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">🚐 Transport Pasageri</li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">🛣️ Călătorii pe Distanțe Lungi</li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">📦 Servicii de Marfă</li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">💳 Plată Flexibilă</li>
              <li className="hover:text-yellow-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">⏰ Ore Suplimentare (50 lei/h)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-black mb-6 text-pink-300">🔗 Link-uri Rapide</h4>
            <ul className="space-y-3 text-lg font-medium">
              <li><a href="#about" className="hover:text-pink-300 transition-all duration-300 transform hover:scale-105 inline-block">🎯 Despre Noi</a></li>
              <li><a href="#services" className="hover:text-pink-300 transition-all duration-300 transform hover:scale-105 inline-block">💼 Servicii & Prețuri</a></li>
              <li><a href="#gallery" className="hover:text-pink-300 transition-all duration-300 transform hover:scale-105 inline-block">📸 Flota Noastră</a></li>
              <li><a href="#location" className="hover:text-pink-300 transition-all duration-300 transform hover:scale-105 inline-block">📍 Locație</a></li>
              <li><a href="#contact" className="hover:text-pink-300 transition-all duration-300 transform hover:scale-105 inline-block">💬 Solicită Ofertă</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-2xl font-black mb-6 text-orange-300">📞 Informații Contact</h4>
            <div className="space-y-3 text-lg font-medium">
              <p className="hover:text-orange-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">📞 Claudiu: +40 726 725 111</p>
              <p className="hover:text-orange-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">📞 Vlad: +40 725 723 432</p>
              <p className="hover:text-orange-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">✉️ pcs.shutle@yahoo.com</p>
              <p className="hover:text-orange-300 transition-colors cursor-pointer transform hover:scale-105 duration-300">🏢 PERIAN CLAUDIU SORIN SRL</p>
            </div>
          </div>
        </div>
        
        <div className="border-t-4 border-gradient-to-r from-yellow-300 to-pink-300 mt-12 pt-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-white text-lg font-black">
              &copy; 2024 PCS Transport (PERIAN CLAUDIU SORIN SRL). Toate drepturile rezervate. ✨<br/>
              <span className="text-yellow-300">Fiabil</span> • <span className="text-pink-300">Plată Flexibilă</span> • <span className="text-orange-300">Profesional</span> 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;