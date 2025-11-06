import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend. Here we simulate success.
    setTimeout(() => setSent(true), 600);
  };

  return (
    <section id="contact" className="w-full bg-[#0d0620] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Контакты и заказ</h2>
        <p className="mt-2 text-white/70">Остались вопросы? Напишите нам — поможем с оформлением заказа.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">Email: hello@reginacosmos.com</p>
            <p className="text-white/80">Instagram: @regina.cosmos</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Сообщение"
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="rounded-md bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
              >
                Отправить
              </button>
              {sent && (
                <p className="text-sm text-green-400">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
