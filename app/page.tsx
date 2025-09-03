import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Carousel />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

