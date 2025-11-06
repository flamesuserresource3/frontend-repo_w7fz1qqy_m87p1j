import React from 'react';
import { Star, Sparkles } from 'lucide-react';

const topics = [
  'Пробуждение «Я ЕСМЬ»',
  'Осознанность как естественное состояние',
  'Единое сознание и природа реальности',
  'Творческая сила намерения',
  'Практики присутствия и наблюдения',
  'Свобода от ложного «я»',
  'Путь доверия и посвящения',
];

export default function Contents() {
  return (
    <section className="w-full bg-[#0d0620] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-orange-400" />
          <h2 className="text-3xl font-bold sm:text-4xl">Что внутри</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {topics.map((t) => (
            <div
              key={t}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="mb-2 flex items-center gap-2 text-orange-400">
                <Star className="h-5 w-5" />
                <span className="text-sm uppercase tracking-wide">Глава</span>
              </div>
              <p className="text-white/90">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
