import React from 'react';

const posts = [
  { title: 'Training Neural Nets on Pulsar Data', date: 'Nov 2024' },
  { title: 'Why Pluto Still Has My Heart', date: 'Sep 2024' },
  { title: 'Simulating Black Hole Accretion Disks in WebGL', date: 'Jul 2024' },
];

const Blog = () => {
  return (
    <section id="blog" className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(255,215,0,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Deep Space Dispatches</h2>
        <p className="mt-2 text-white/80 max-w-2xl">Notes from the edge—research, experiments, and cosmic musings.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="text-sm text-white/60">{p.date}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">Read the log →</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
