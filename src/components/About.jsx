import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(106,13,173,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,215,0,0.15),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Mission Profile</h2>
        <p className="mt-2 text-white/80 max-w-2xl">A quick overview of who you are, where you're currently in orbit, and the systems you specialize in.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold">Current Orbit</h3>
            <p className="mt-2 text-white/80">Earth • Your City, Country</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold">Cosmic Specialties</h3>
            <p className="mt-2 text-white/80">Python, React, Data Analysis, Computer Vision, Aerospace Systems</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="font-semibold">Cosmic Anomaly</h3>
            <p className="mt-2 text-white/80">I once calculated how many lattes it would take to power a Falcon 9.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
