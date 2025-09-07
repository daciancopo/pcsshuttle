import Link from 'next/link'
export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">404 — Pagina nu a fost găsită</h1>
        <p className="opacity-80 mb-6">Verifică adresa sau întoarce-te la pagina principală.</p>
        <Link href="/" className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 hover:bg-white/20 transition">Înapoi acasă</Link>
      </div>
    </main>
  );
}