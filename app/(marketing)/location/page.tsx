import type { Metadata } from 'next';
import Map from '../../components/Map';

export const metadata: Metadata = {
  title: 'Locație | PCS Shuttle',
  description: 'Găsește locația PCS Shuttle și vizualizează harta interactivă.',
};

export default function LocationPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <Map />
    </section>
  );
}