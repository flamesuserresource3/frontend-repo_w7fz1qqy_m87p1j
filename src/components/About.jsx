import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b051b] py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#11092e] via-transparent to-[#0b051b] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">О книге</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              «I AM: Как Вселенная работает через нас» — это книга о пробуждении внутренней силы, осознанности и связи человека с бесконечным источником Вселенной. Она помогает понять, что каждый из нас — не отдельная личность, а проявление Единого сознания, через которое жизнь творит саму себя.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-2xl font-semibold">Об авторе</h3>
            <p className="mt-3 text-white/80">
              Regina Cosmos — писатель духовной исследовательской литературы. Её работы посвящены осознанности, внутренней трансформации и пути к целостности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
