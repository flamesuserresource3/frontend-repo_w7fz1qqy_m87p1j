import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download } from 'lucide-react';

export default function Hero() {
  const handleScrollToBuy = () => {
    const el = document.getElementById('buy');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0d0620] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#0d0620]/40 to-[#0d0620]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          I AM: как Вселенная работает через нас
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          Книга о пробуждении внутренней силы, осознанности и связи с бесконечным источником Вселенной.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={handleScrollToBuy}
            className="rounded-md bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0d0620]"
          >
            Купить сейчас
          </button>
          <a
            href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#0d0620]"
          >
            <Download className="h-5 w-5" />
            Скачать отрывок (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}
