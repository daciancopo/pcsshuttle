const About = () => {
  return (
    <section id="about" className="py-12 bg-background relative">
      {/* Decorative elements removed for a cleaner layout */}
      
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="mb-6 flex items-center justify-center">
            <span className="text-5xl sm:text-6xl">🎯</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-3 text-[#F1B663]">Despre Noi</h2>
          <div className="flex justify-center mb-5"><span className="badge">Profesional · Flexibil</span></div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
            PERIAN CLAUDIU SORIN SRL (PCS Transport) este partenerul tău de încredere în transport, oferind servicii profesionale cu opțiuni flexibile de plată (numerar sau card). Contactează-l pe Claudiu (+40 726 725 111) sau pe Vlad (+40 725 723 432) pentru soluții de transport fiabile. ✨
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 items-stretch gap-6 md:gap-8">
          <div className="text-center p-8 rounded-2xl border border-border shadow-sm bg-white/80 dark:bg-white/5 backdrop-blur-sm h-full flex flex-col card">
            <div className="text-5xl md:text-6xl mb-6">🚚</div>
            <h3 className="text-2xl font-semibold mb-4">Servicii Fiabile</h3>
            <p className="text-base font-medium text-foreground/70">Servicii profesionale de transport cu șoferii experimentați Claudiu și Vlad. Anulare gratuită cu până la 2 zile înainte! 🎯</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl border border-border shadow-sm bg-white/80 dark:bg-white/5 backdrop-blur-sm h-full flex flex-col card">
            <div className="text-5xl md:text-6xl mb-6">🛡️</div>
            <h3 className="text-2xl font-semibold mb-4">Plată Flexibilă</h3>
            <p className="text-base font-medium text-foreground/70">Plătește cu numerar sau card, fie în avans, fie la sfârșitul călătoriei. Ore suplimentare la doar 50 lei/oră! 🔒</p>
          </div>
          
          <div className="text-center p-8 rounded-2xl border border-border shadow-sm bg-white/80 dark:bg-white/5 backdrop-blur-sm h-full flex flex-col card">
            <div className="text-5xl md:text-6xl mb-6">⚡</div>
            <h3 className="text-2xl font-semibold mb-4">Echipă Profesională</h3>
            <p className="text-base font-medium text-foreground/70">Contactează-ne la pcs.shutle@yahoo.com sau sună șoferii noștri profesioniști pentru asistență imediată. 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;