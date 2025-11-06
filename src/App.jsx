import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Contents from './components/Contents';
import Reviews from './components/Reviews';
import Buy from './components/Buy';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0d0620] font-inter text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Contents />
        <Reviews />
        <Buy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d0620]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="text-sm font-semibold tracking-wider text-white/80">I AM</div>
        <nav className="hidden gap-6 text-sm text-white/80 md:flex">
          <button onClick={() => scrollTo('about')} className="hover:text-white">О книге</button>
          <button onClick={() => scrollTo('buy')} className="hover:text-white">Купить</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-white">FAQ</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white">Контакты</button>
        </nav>
        <button onClick={() => scrollTo('buy')} className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-400">Купить</button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b051b] py-8 text-center text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <p>© {new Date().getFullYear()} Regina Cosmos. Все права защищены.</p>
      </div>
    </footer>
  );
}
