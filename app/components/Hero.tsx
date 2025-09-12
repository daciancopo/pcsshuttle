'use client';

import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';
import About from './About';
import Map from './Map';
import Contact from './Contact';
import Services from './Services';

// Subcomponents pentru modularitate și lizibilitate
const DecorativeSpots = () => (
  <>
    <span aria-hidden="true" className="radial-spot -top-24 -left-24 hidden md:block animate-float" />
    <span aria-hidden="true" className="radial-spot bottom-[-10rem] right-[-10rem] hidden lg:block animate-float-delayed" />
  </>
);

const BadgePill = () => (
  <span className="badge animate-float">Transport rapid · 24/7</span>
);

const Title = () => (
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-balance text-[#d4cbc6]">
    Soluții Transport PCS
  </h1>
);

const Description = () => (
  <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-foreground/70">
    PERIAN CLAUDIU SORIN SRL — Partenerul tău de încredere pentru servicii profesionale de transport. Ore suplimentare la 50 lei/oră, cu opțiuni flexibile de plată.
  </p>
);

const CTAButtons = () => (
  <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
    <Link
      href="/contact"
      className="group btn btn-primary px-6 py-3 md:px-8 md:py-3.5 text-sm sm:text-base"
      aria-label="Solicită ofertă — mergi la pagina de contact"
    >
      <span className="mr-2" aria-hidden="true">🚀</span>
      Solicită ofertă
      <svg aria-hidden="true" className="ml-2 h-4 w-4 opacity-90 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </Link>
    <Link
      href="/about"
      className="btn btn-secondary px-6 py-3 md:px-8 md:py-3.5 text-sm sm:text-base"
      aria-label="Află mai mult — mergi la pagina Despre"
    >
      <span className="mr-2" aria-hidden="true">💡</span>
      Află mai mult
    </Link>
  </div>
);

function MotionItem({ children, delayMs, reduceMotion, mounted, className = '' }: { children: ReactNode; delayMs: number; reduceMotion: boolean; mounted: boolean; className?: string }) {
  const base = reduceMotion ? '' : 'transform-gpu transition-all duration-700 ease-out will-change-transform';
  const hidden = reduceMotion ? '' : (mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2');
  return (
    <div className={`${className} ${base} ${hidden}`} style={{ transitionDelay: reduceMotion ? undefined : `${delayMs}ms` }}>
      {children}
    </div>
  );
}

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mq.matches);
      const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
      mq.addEventListener('change', onChange);
      const raf = requestAnimationFrame(() => setMounted(true));
      return () => {
        mq.removeEventListener('change', onChange);
        cancelAnimationFrame(raf);
      };
    } else {
      const raf = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(raf);
    }
  }, []);

  return (
    <div id="hero" className='bg-[#1E1919]'>
      <section className="relative px-4 isolate w-full bg-background text-foreground overflow-hidden flex items-center justify-center">
        {/* Elemente decorative subtile */}
        <DecorativeSpots />

        <div className="container grid place-items-center place-content-center py-16 sm:py-12 md:py-12 lg:py-12 text-center relative z-10 mx-auto">
          <div className="w-full mx-auto space-y-2 sm:space-y-3 md:space-y-4">
            <MotionItem delayMs={100} reduceMotion={reduceMotion} mounted={mounted} className="flex justify-center">
              <BadgePill />
            </MotionItem>

            <MotionItem delayMs={240} reduceMotion={reduceMotion} mounted={mounted}>
              <Title />
            </MotionItem>

            <MotionItem delayMs={320} reduceMotion={reduceMotion} mounted={mounted}>
              <Description />
            </MotionItem>

            <MotionItem delayMs={400} reduceMotion={reduceMotion} mounted={mounted}>
              <CTAButtons />
            </MotionItem>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Contact />
      <Map />
      
    </div>
  );
};

export default Hero;