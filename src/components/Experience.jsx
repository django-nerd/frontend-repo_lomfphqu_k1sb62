import React from 'react';

const experiences = [
  { title: 'Apollo Internships', time: 'Summer 2023', role: 'Software Intern' },
  { title: 'Mars Rover Sim Team', time: '2024–2025', role: 'Lead Developer' },
  { title: 'Hubble Data Hackathon', time: '2024', role: '1st Place' },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(106,13,173,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Flight History</h2>
        <p className="mt-2 text-white/80 max-w-2xl">A timeline of orbital missions and milestones.</p>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
          <div className="space-y-6">
            {experiences.map((e, idx) => (
              <div key={idx} className="relative pl-10">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-purple-400 to-amber-300 shadow-[0_0_18px_rgba(168,85,247,0.6)]" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-semibold">{e.title}</div>
                    <div className="text-white/60">{e.time}</div>
                  </div>
                  <div className="mt-1 text-white/80">{e.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
