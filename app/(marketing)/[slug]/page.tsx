import { notFound } from "next/navigation";

export default async function DynamicMarketingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "forbidden") {
    notFound();
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Pagină dinamică</h1>
      <p className="opacity-80">Ai navigat la: {slug}</p>
    </section>
  );
}