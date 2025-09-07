import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 top-0 md:pb-0 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}