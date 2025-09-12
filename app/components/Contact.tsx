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
    console.log('Form submitted:', formData);
    alert('Mulțumim pentru mesajul tău! Te vom contacta în curând.');
  };

  return (
    <section id="contact" className="py-12 bg-background relative">
      {/* Decorative background elements removed for simplicity */}
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-3xl sm:text-4xl">💬</span>
            <span className="text-3xl sm:text-4xl">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3">Hai sa ne contactezi!</h2>
          <div className="flex justify-center mb-5"><span className="badge">Răspundem rapid</span></div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 font-medium">Gata să-ți transporti bunurile? Contactează-ne pentru o ofertă gratuită! 🚀</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nume Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Introdu numele tău complet"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Adresa de Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Număr de Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+40 700 000 000"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                  Tipul Serviciului
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Selectează un serviciu</option>
                  <option value="local-delivery">Livrare Locală</option>
                  <option value="long-distance">Transport pe Distanțe Lungi</option>
                  <option value="freight">Servicii de Marfă</option>
                  <option value="moving">Servicii de Mutare</option>
                  <option value="other">Altele</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Mesaj / Detalii *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background/60 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent resize-y"
                placeholder="Descrie nevoile tale de transport, locațiile de ridicare/livrare și orice cerințe speciale..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary px-6 py-4"
            >
              Trimite Cererea de Ofertă
            </button>
          </form>
          
          <div className="text-center mt-8">
            <div className="card p-6 inline-block">
              <p className="text-foreground text-base font-medium">
                Email: <span className="font-semibold">pcs.shuttle@yahoo.com</span><br/>
                Telefon: <span className="font-semibold">+40 726 725 111</span> – Claudiu<br/>
                Telefon: <span className="font-semibold">+40 725 723 432</span> – Vlad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;