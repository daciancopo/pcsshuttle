import Link from 'next/link';
import { Quicksand } from 'next/font/google';

// Architectural notes:
// - Mobile-first: primary controls optimized for small screens; nav expands progressively for md+.
// - Dark theme: simplified translucent dark header with subtle hover/focus states for elegance and readability.
// - Performance: removed heavy gradient background; reduced shadows/animations; kept sticky header for UX.
// - Accessibility: semantic elements, aria attributes on menu button, focus-visible rings.

const quicksand = Quicksand({ subsets: ['latin'], weight: ['600', '700'], display: 'swap' });

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 text-foreground">
      <div className="container mx-auto">
        <div className="h-14 md:h-16 grid grid-cols-3 items-center">
          {/* Left: Brand */}
          <Link
            href="/"
            className="col-span-2 md:col-span-1 px-4 py-2 justify-self-start md:justify-self-start font-extrabold tracking-tight leading-none text-2xl md:text-2xl lg:text-3xl hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-4 rounded"
          >
            <img src="/logo1.svg" alt="PCS Shuttle" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center justify-center text-[#d4cbc6]">
            <div className="flex items-center rounded-full bg-[#252525] ring-2 ring-foreground/40 divide-x-1 divide-foreground/10 shadow-lg ">
              <Link href="/" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2">Acasă</Link>
              <Link href="/about" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2">Despre</Link>
              <Link href="/services" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2">Servicii</Link>
              <Link href="/gallery" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2">Galerie</Link>
              <Link href="/location" className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2">Locație</Link>
            </div>
          </nav>

          {/* Right: CTA (desktop) */}
          <Link
            href="/contact"
            aria-label="Contactează-ne"
            className={`hidden md:inline-flex justify-self-end items-center gap-2 rounded-full bg-[#F1B663] px-3 py-2 text-sm font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition will-change-transform focus:outline-none focus-visible:ring-2 text-[#1E1919] ${quicksand.className}`}
          >
            Contactează-ne
          </Link>

          {/* Right: CTA (mobile) */}
          <Link
            href="/contact"
            aria-label="Contactează-ne"
            className={`md:hidden inline-flex mr-2 mt-2 justify-self-end items-center gap-2 rounded-full bg-[#F1B663] px-3 py-2 text-xs shadow-lg hover:shadow-md hover:-translate-y-2 active:translate-y-0 transition will-change-transform focus:outline-none focus-visible:ring-2 font-bold text-[#1E1919] ${quicksand.className}`}
          >
            Contactează-ne
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;