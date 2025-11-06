import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Анна',
    text: 'Эта книга мягко напомнила мне о том, кто я есть на самом деле. Очень вдохновляюще и глубоко.'
  },
  {
    name: 'Дмитрий',
    text: 'Редко встречаю тексты такой чистоты. Практики простые, но дают мощный сдвиг в восприятии.'
  },
  {
    name: 'Мария',
    text: 'С любовью и ясностью о главном. Хочется перечитывать и делиться с близкими.'
  }
];

export default function Reviews() {
  return (
    <section className="w-full bg-[#0b051b] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Quote className="h-6 w-6 text-orange-400" />
          <h2 className="text-3xl font-bold sm:text-4xl">Отзывы читателей</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90">“{r.text}”</p>
              <p className="mt-4 text-sm text-white/60">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
