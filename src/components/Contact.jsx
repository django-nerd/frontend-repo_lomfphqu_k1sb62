import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 800); // mock
  };

  return (
    <section id="contact" className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(106,13,173,0.2),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Hail Frequency</h2>
        <p className="mt-2 text-white/80 max-w-2xl">Open a comms channel. Wormhole stable—awaiting your transmission.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60" placeholder="Your Callsign (Name)" required />
          <input type="email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60" placeholder="Uplink (Email)" required />
          <input className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60" placeholder="Subject" />
          <textarea rows={5} className="md:col-span-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60" placeholder="Message payload" />
          <div className="md:col-span-2">
            <button disabled={status!=='idle'} className="rounded-xl bg-white/90 text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white transition-colors disabled:opacity-60">
              {status==='sending' ? 'Transmitting…' : status==='sent' ? 'Signal Received' : 'Transmit Message'}
            </button>
          </div>
        </form>

        <div className="mt-8 flex items-center gap-4 text-sm text-white/70">
          <a href="#" className="hover:text-white">🪐 GitHub: Signal Received</a>
          <a href="#" className="hover:text-white">📡 LinkedIn: Uplink Established</a>
          <a href="#" className="hover:text-white">🛰️ Email: Transmit Message</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
