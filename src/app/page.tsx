import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import PowerSection from './components/PowerSection';
import TokenSection from './components/TokenSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-[#090112]">
      <Header />
      <Hero />
      <Features />
      <PowerSection />
      <TokenSection />
      <Footer />
    </main>
  );
}
