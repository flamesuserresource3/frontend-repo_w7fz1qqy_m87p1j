import React from 'react';

const faqs = [
  {
    q: 'Как осуществляется доставка?',
    a: 'Электронная версия доступна сразу после оплаты. Печатная версия (если выбрана) доставляется почтой в течение 5–14 дней в зависимости от региона.'
  },
  {
    q: 'Какие способы оплаты доступны?',
    a: 'Вы можете оплатить через LiqPay (картой, Украина), PayPal (Европа) и Venmo (США).'
  },
  {
    q: 'Можно ли вернуть деньги?',
    a: 'Для электронной версии возврат невозможен после отправки файла. Для печатной версии — в течение 14 дней при сохранении товарного вида.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-[#0b051b] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
                {item.q}
              </summary>
              <p className="mt-3 text-white/80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
