/**
 * Services section
 * Server component for improved performance; purely presentational.
 */
const Services = () => {
  return (
    <section id="services" className="py-12 bg-background relative">
      {/* Decorative background elements removed for a cleaner, less distracting layout */}
      
      <div className="container relative">
        <div className="text-center mb-10">
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="text-3xl sm:text-4xl">💰</span>
            <span className="text-3xl sm:text-4xl">🚛</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3 text-[#473C33]">Serviciile & Prețurile Noastre</h2>
          <div className="flex justify-center mb-5"><span className="badge">Transparent · Fiabil</span></div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 font-medium">Prețuri transparente pentru servicii de transport fiabile 🌟</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 md:gap-8 mb-12">
          {/* Main Transport Service */}
          <div className="card p-8 h-full flex flex-col">
            <div className="text-center mb-6">
              <div className="text-4xl md:text-5xl mb-4">🚐</div>
              <h3 className="text-2xl font-semibold mb-2">Servicii Transport</h3>
              <p className="text-foreground/70 font-medium">Transport profesional de pasageri și marfă</p>
            </div>
            <div className="space-y-4 mt-auto">
              <div className="flex justify-between items-center p-3 rounded-xl border border-border">
                <span className="font-semibold text-foreground">Tarif de Bază</span>
                <span className="font-semibold text-foreground">Contactează pentru Ofertă</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl border border-border">
                <span className="font-semibold text-foreground">Ore Suplimentare</span>
                <span className="font-semibold text-foreground">50 lei/oră</span>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="card p-8 h-full flex flex-col">
            <div className="text-center mb-6">
              <div className="text-4xl md:text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-semibold mb-2">Opțiuni de Plată</h3>
              <p className="text-foreground/70 font-medium">Metode flexibile de plată</p>
            </div>
            <div className="space-y-4 mt-auto">
              <div className="p-3 rounded-xl border border-border">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">💵</span>
                  <span className="font-semibold text-foreground">Plată în Numerar</span>
                </div>
                <p className="text-sm text-foreground/70">Plătește în avans sau la finalizarea călătoriei</p>
              </div>
              <div className="p-3 rounded-xl border border-border">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">💳</span>
                  <span className="font-semibold text-foreground">Plată cu Cardul</span>
                </div>
                <p className="text-sm text-foreground/70">Plăți securizate cu cardul acceptate</p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="card p-8 h-full flex flex-col">
            <div className="text-center mb-6">
              <div className="text-4xl md:text-5xl mb-4">📅</div>
              <h3 className="text-2xl font-semibold mb-2">Politica de Anulare</h3>
              <p className="text-foreground/70 font-medium">Condiții flexibile de rezervare</p>
            </div>
            <div className="space-y-4 mt-auto">
              <div className="p-3 rounded-xl border border-border">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">⏰</span>
                  <span className="font-semibold text-foreground">Anulare Gratuită</span>
                </div>
                <p className="text-sm text-foreground/70">Anulează cu până la 2 zile înainte de plecare</p>
              </div>
              <div className="p-3 rounded-xl border border-border">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">📞</span>
                  <span className="font-semibold text-foreground">Proces Simplu</span>
                </div>
                <p className="text-sm text-foreground/70">Anulare simplă prin telefon sau email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Booking */}
        <div className="text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-1">Gata să Rezervi? 🚀</h3>
            <div className="flex justify-center mb-5"><span className="badge">Răspuns rapid</span></div>
            <p className="text-base text-foreground/70 mb-6 font-medium">
              Contactează-ne pentru oferte personalizate și aranjamente de rezervare
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">📞</span>
                  <span className="font-semibold text-foreground">Claudiu</span>
                </div>
                <p className="text-lg font-semibold text-foreground">+40 726 725 111</p>
              </div>
              <div className="card p-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">📞</span>
                  <span className="font-semibold text-foreground">Vlad</span>
                </div>
                <p className="text-lg font-semibold text-foreground">+40 725 723 432</p>
              </div>
            </div>
            <div className="mt-4 card p-4">
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl mr-2">📧</span>
                <span className="font-semibold text-foreground">Email</span>
              </div>
              <p className="text-lg font-semibold text-foreground">pcs.shuttle@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;