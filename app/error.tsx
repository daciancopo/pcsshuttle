"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <main className="min-h-[60vh] flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ceva nu a mers bine</h1>
            <p className="opacity-80 mb-6">Încercați din nou sau reveniți la pagina principală.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={() => reset()} className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20 transition">Reîncearcă</button>
              <Link href="/" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20 transition">Acasă</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}