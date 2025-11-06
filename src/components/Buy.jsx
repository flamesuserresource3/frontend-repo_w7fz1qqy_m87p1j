import React, { useMemo, useState } from 'react';
import { CreditCard, DollarSign, Euro, Wallet } from 'lucide-react';

const PRICES = {
  UAH: 399,
  EUR: 12,
  USD: 13,
};

export default function Buy() {
  const [currency, setCurrency] = useState('UAH');
  const price = useMemo(() => PRICES[currency], [currency]);

  const handleLiqPay = () => {
    // Redirect to LiqPay checkout or show instructions
    window.open('https://www.liqpay.ua/en/checkout/card/', '_blank');
  };

  const handlePayPal = () => {
    // Replace with real PayPal link/me button
    window.open('https://www.paypal.com/paypalme/', '_blank');
  };

  const handleVenmo = () => {
    // Replace with real Venmo link/username
    window.open('https://venmo.com/', '_blank');
  };

  return (
    <section id="buy" className="w-full bg-[#0d0620] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Купить</h2>
          <p className="mt-2 text-white/70">Выберите удобную валюту и способ оплаты</p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {['UAH', 'EUR', 'USD'].map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                currency === c
                  ? 'border-orange-500 bg-orange-500 text-white'
                  : 'border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-orange-400">
              <Wallet className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">Карта (Украина)</span>
            </div>
            <p className="text-3xl font-bold">
              {currency === 'UAH' ? `${PRICES.UAH} ₴` : `${PRICES.UAH} ₴`}
            </p>
            <p className="mt-2 text-sm text-white/70">Оплата на карту через LiqPay</p>
            <button
              onClick={handleLiqPay}
              className="mt-4 w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              Оплатить на карту
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-orange-400">
              <Euro className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">PayPal (Европа)</span>
            </div>
            <p className="text-3xl font-bold">{PRICES.EUR} €</p>
            <p className="mt-2 text-sm text-white/70">Безопасная оплата через PayPal</p>
            <button
              onClick={handlePayPal}
              className="mt-4 w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              PayPal
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 flex items-center gap-2 text-orange-400">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">Venmo (США)</span>
            </div>
            <p className="text-3xl font-bold">{PRICES.USD} $</p>
            <p className="mt-2 text-sm text-white/70">Оплата в приложении Venmo</p>
            <button
              onClick={handleVenmo}
              className="mt-4 w-full rounded-md bg-orange-500 px-4 py-2 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
            >
              Venmo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
