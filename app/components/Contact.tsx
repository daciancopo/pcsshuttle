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
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFeedback({ type: null, message: '' });
  };

  // Formatăm telefonul: doar cifre și spațiere în blocuri (ex: +40 700 000 000)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, '');

    if (!digits) {
      setFormData({ ...formData, phone: '' });
      setFeedback({ type: null, message: '' });
      return;
    }

    let formatted = '';
    if (digits.startsWith('40') && digits.length > 2) {
      const cc = digits.slice(0, 2);
      const rest = digits.slice(2);
      const restBlocks = rest.match(/.{1,3}/g) || [];
      formatted = `+${cc}${restBlocks.length ? ' ' + restBlocks.join(' ') : ''}`;
    } else {
      const blocks = digits.match(/.{1,3}/g) || [];
      if (blocks.length > 0) {
        formatted = `+${blocks[0]}`;
        if (blocks.length > 1) {
          formatted += ' ' + blocks.slice(1).join(' ');
        }
      }
    }

    setFormData({ ...formData, phone: formatted });
    setFeedback({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Eroare la trimiterea mesajului.');
      }
      setFeedback({ type: 'success', message: 'Mesajul a fost trimis cu succes! Îți mulțumim.' });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: any) {
      setFeedback({ type: 'error', message: err.message || 'A apărut o eroare neașteptată.' });
    } finally {
      setSubmitting(false);
    }
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
                  onChange={handlePhoneChange}
                  inputMode="tel"
                  pattern="^[+0-9 ]+$"
                  title="Include prefixul cu '+'; spațierea se aplică automat în blocuri"
                  maxLength={15}
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
                  <option value="Livrare Locală">Livrare Locală</option>
                  <option value="Transport pe Distanțe Lungi">Transport pe Distanțe Lungi</option>
                  <option value="Servicii de Marfă">Servicii de Marfă</option>
                  <option value="Servicii de Mutare">Servicii de Mutare</option>
                  <option value="Altele">Altele</option>
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
              className="w-full btn btn-primary px-6 py-4 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Se trimite...' : 'Trimite Cererea de Ofertă'}
            </button>

            {feedback.type && (
              <div className={`mt-4 text-sm ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {feedback.message}
              </div>
            )}
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