'use client';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-28 h-28 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-purple-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl animate-bounce inline-block">💰</span>
            <span className="text-4xl animate-pulse inline-block ml-2">🚛</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">Serviciile & Prețurile Noastre</h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">Prețuri transparente pentru servicii de transport fiabile 🌟</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Transport Service */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-blue-200 to-indigo-200 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4 animate-bounce">🚐</div>
              <h3 className="text-2xl font-black text-blue-600 mb-2">Servicii Transport</h3>
              <p className="text-gray-600 font-medium">Transport profesional de pasageri și marfă</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                <span className="font-semibold text-gray-700">Tarif de Bază</span>
                <span className="font-black text-blue-600">Contactează pentru Ofertă</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-xl">
                <span className="font-semibold text-gray-700">Ore Suplimentare</span>
                <span className="font-black text-indigo-600">50 lei/oră</span>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-green-200 to-emerald-200 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4 animate-pulse">💳</div>
              <h3 className="text-2xl font-black text-green-600 mb-2">Opțiuni de Plată</h3>
              <p className="text-gray-600 font-medium">Metode flexibile de plată</p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">💵</span>
                  <span className="font-semibold text-gray-700">Plată în Numerar</span>
                </div>
                <p className="text-sm text-gray-600">Plătește în avans sau la finalizarea călătoriei</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">💳</span>
                  <span className="font-semibold text-gray-700">Plată cu Cardul</span>
                </div>
                <p className="text-sm text-gray-600">Plăți securizate cu cardul acceptate</p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-orange-200 to-red-200 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4 animate-bounce">📅</div>
              <h3 className="text-2xl font-black text-orange-600 mb-2">Politica de Anulare</h3>
              <p className="text-gray-600 font-medium">Condiții flexibile de rezervare</p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-orange-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">⏰</span>
                  <span className="font-semibold text-gray-700">Anulare Gratuită</span>
                </div>
                <p className="text-sm text-gray-600">Anulează cu până la 2 zile înainte de plecare</p>
              </div>
              <div className="p-3 bg-red-50 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">📞</span>
                  <span className="font-semibold text-gray-700">Proces Simplu</span>
                </div>
                <p className="text-sm text-gray-600">Anulare simplă prin telefon sau email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Booking */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl shadow-xl border-2 border-purple-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-purple-700 mb-4">Gata să Rezervi? 🚀</h3>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Contactează-ne pentru oferte personalizate și aranjamente de rezervare
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl mr-2">📞</span>
                  <span className="font-black text-purple-600">Claudiu</span>
                </div>
                <p className="text-lg font-semibold text-gray-700">+40 726 725 111</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl mr-2">📞</span>
                  <span className="font-black text-purple-600">Vlad</span>
                </div>
                <p className="text-lg font-semibold text-gray-700">+40 725 723 432</p>
              </div>
            </div>
            <div className="mt-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl mr-2">📧</span>
                <span className="font-black text-purple-600">Email</span>
              </div>
              <p className="text-lg font-semibold text-gray-700">pcs.shutle@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;