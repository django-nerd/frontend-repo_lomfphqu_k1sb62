import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown, Rocket, Satellite } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top navigation */}
      <div className="relative z-10">
        <nav className="mx-auto max-w-7xl px-6 pt-6 flex items-center justify-between text-white/90">
          <div className="flex items-center gap-2 font-semibold tracking-wide">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <Rocket size={16} />
            </span>
            <span className="uppercase">Cosmic Portfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">Mission Profile</a>
            <a href="#projects" className="hover:text-white transition-colors">Mission Log</a>
            <a href="#skills" className="hover:text-white transition-colors">Starship Systems</a>
            <a href="#experience" className="hover:text-white transition-colors">Flight History</a>
            <a href="#blog" className="hover:text-white transition-colors">Dispatches</a>
            <a href="#contact" className="hover:text-white transition-colors">Hail Frequency</a>
          </div>
        </nav>
      </div>

      {/* Gradient veil to improve text contrast (doesn't block 3D) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b1bcc]/60 via-[#0b0b1b]/60 to-[#0b0b1b]" />

      {/* Hero copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-40 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <Satellite size={14} />
            <span>Dark space • Purple galaxy • Abstract</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Exploring the frontiers of your craft — one light‑year at a time
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            A 3D‑animated portfolio for astronomy, aerospace, data science, or anyone with a cosmic passion.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="rounded-xl bg-white/90 text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white transition-colors">View Mission Log</a>
            <a href="#contact" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Open Hail Frequency</a>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center text-white/70">
          <ArrowDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
