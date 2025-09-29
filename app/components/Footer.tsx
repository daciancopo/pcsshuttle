// Architectural notes:
// - Mobile-first column layout that enhances to grid on md+.
// - Dark theme with subtle borders and neutral text for readability.
// - Performance: removed heavy gradients/animations; commented out decorative elements.
// - Accessibility: explicit headings hierarchy and focus states for links.

import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="relative isolate bg-background text-foreground py-14 sm:py-16 pb-[calc(env(safe-area-inset-bottom)+4.5rem)] md:pb-16 overflow-hidden">
      {/* Mobile bottom navigation (app-like) */}
      <nav
        aria-label="Navigație mobilă"
        className="fixed inset-x-0 bottom-0 z-50 md:hidden bg-[#1e1919] supports-[backdrop-filter]:bg-background/70 border-t border-[#ecba9f]"
      >
        <div className="container px-4 py-3 [padding-bottom:calc(env(safe-area-inset-bottom)+0.5rem)]">
          <ul className="flex items-center justify-between gap-4">
            <li>
              <Link href="/" className="flex flex-col items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 rounded">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z" /></svg>
                <span>Acasă</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex flex-col items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 rounded">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.33 0-8 1.94-8 4.33V21h16v-2.67C20 15.94 16.33 14 12 14z"/></svg>
                <span>Despre</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex flex-col items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 rounded">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/></svg>
                <span>Servicii</span>
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="flex flex-col items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 rounded">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4 4 4 4-4 6 6zM8.5 13A2.5 2.5 0 1 1 11 10.5 2.5 2.5 0 0 1 8.5 13z"/></svg>
                <span>Galerie</span>
              </Link>
            </li>
            <li>
              <Link href="/location" className="flex flex-col items-center gap-1 text-xs font-medium text-foreground/80 hover:text-foreground transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 rounded">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/></svg>
                <span>Locație</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer content (all sizes) */}
      <div className="w-full px-4 py-0 relative z-10">
        {/* Centralized CTA container replacing redundant info */}


        <div className="w-full pt-5 pb-5 border-t border-[#ecba9f] flex justify-center">
          <p className="text-center text-sm text-[#ecba9f]">
            © 2025 PCS Shuttle. Toate drepturile rezervate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;