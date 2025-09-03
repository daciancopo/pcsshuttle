const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-pink-500 via-orange-400 to-yellow-400 text-white py-24 md:py-40 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-purple-300 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          <span className="text-6xl md:text-8xl animate-bounce inline-block">🚛</span>
          <span className="text-4xl md:text-6xl animate-pulse inline-block ml-4">✨</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-yellow-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          Soluții Transport PCS
        </h1>
        <p className="text-xl md:text-3xl mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
          PERIAN CLAUDIU SORIN SRL - Partenerul tău de încredere pentru servicii profesionale de transport. Ore suplimentare la 50 lei/oră cu opțiuni flexibile de plată! 🌟
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="#contact" 
            className="bg-white text-purple-600 px-10 py-4 rounded-full font-black text-lg hover:bg-yellow-300 hover:text-purple-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl animate-pulse"
          >
            🚀 Solicită Ofertă!
          </a>
          <a 
            href="#about" 
            className="border-4 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-purple-600 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            💡 Află Mai Mult
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;