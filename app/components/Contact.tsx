'use client';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email sending functionality
    console.log('Form submitted:', formData);
    alert('Mulțumim pentru mesajul tău! Te vom contacta în curând.');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-28 h-28 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-orange-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl animate-bounce inline-block">💬</span>
            <span className="text-4xl animate-pulse inline-block ml-2">✨</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">Solicită o Ofertă</h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">Gata să-ți transporti bunurile? Contactează-ne pentru o ofertă gratuită! 🚀</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-purple-200 to-pink-200">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-purple-700 text-lg font-black mb-3">
                  👤 Nume Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-3 border-purple-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-purple-50 to-pink-50"
                  placeholder="Introdu numele tău complet"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-pink-700 text-lg font-black mb-3">
                  📧 Adresa de Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-3 border-pink-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-pink-50 to-orange-50"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="phone" className="block text-orange-700 text-lg font-black mb-3">
                  📱 Număr de Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-3 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-orange-50 to-yellow-50"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-purple-700 text-lg font-black mb-3">
                  🚛 Tipul Serviciului
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-3 border-purple-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-purple-50 to-pink-50"
                >
                  <option value="">🎯 Selectează un serviciu</option>
                  <option value="local-delivery">🏠 Livrare Locală</option>
                  <option value="long-distance">🛣️ Transport pe Distanțe Lungi</option>
                  <option value="freight">📦 Servicii de Marfă</option>
                  <option value="moving">🏡 Servicii de Mutare</option>
                  <option value="other">✨ Altele</option>
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-pink-700 text-lg font-black mb-3">
                💭 Mesaj / Detalii *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-4 border-3 border-pink-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all duration-300 text-lg font-medium bg-gradient-to-r from-pink-50 to-purple-50 resize-none"
                placeholder="🚛 Te rugăm să descrii nevoile tale de transport, locațiile de ridicare/livrare și orice cerințe speciale... Suntem nerăbdători să te ajutăm! ✨"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-5 px-8 rounded-2xl hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 font-black text-xl shadow-2xl hover:shadow-3xl animate-pulse"
            >
              🚀 Trimite Cererea de Ofertă Acum!
            </button>
          </form>
          
          <div className="text-center mt-10">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border-2 border-purple-200">
              <p className="text-purple-700 text-lg font-semibold">
                📧 Email: <span className="text-pink-600 font-black">pcs.shutle@yahoo.com</span><br/>
                📞 <span className="text-pink-600 font-black">+40 726 725 111</span> – Claudiu<br/>
                📞 <span className="text-pink-600 font-black">+40 725 723 432</span> – Vlad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;