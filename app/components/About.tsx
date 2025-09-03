const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="text-6xl animate-bounce inline-block">🎯</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">Despre Noi</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            PERIAN CLAUDIU SORIN SRL (PCS Transport) este partenerul tău de încredere în transport, oferind servicii profesionale cu opțiuni flexibile de plată (numerar sau card). Contactează-l pe Claudiu (+40 726 725 111) sau pe Vlad (+40 725 723 432) pentru soluții de transport fiabile. ✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300 text-white">
            <div className="text-6xl mb-6 animate-bounce">🚚</div>
            <h3 className="text-2xl font-black mb-4">Servicii Fiabile</h3>
            <p className="text-lg font-medium opacity-90">Servicii profesionale de transport cu șoferii experimentați Claudiu și Vlad. Anulare gratuită cu până la 2 zile înainte! 🎯</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-pink-500 to-orange-400 rounded-3xl shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-300 text-white">
            <div className="text-6xl mb-6 animate-pulse">🛡️</div>
            <h3 className="text-2xl font-black mb-4">Plată Flexibilă</h3>
            <p className="text-lg font-medium opacity-90">Plătește cu numerar sau card, fie în avans, fie la sfârșitul călătoriei. Ore suplimentare la doar 50 lei/oră! 🔒</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-300 text-white">
            <div className="text-6xl mb-6 animate-bounce">⚡</div>
            <h3 className="text-2xl font-black mb-4">Echipă Profesională</h3>
            <p className="text-lg font-medium opacity-90">Contactează-ne la pcs.shutle@yahoo.com sau sună șoferii noștri profesioniști pentru asistență imediată. 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;