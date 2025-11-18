import React from 'react';

const missions = [
  { name: 'Project Andromeda', date: 'Jan 2025', payload: 'Python, TensorFlow, NASA API', status: 'Deployed', details: 'ML model predicting exoplanet habitability' },
  { name: 'Nebula UI Kit', date: 'Oct 2024', payload: 'Figma, React', status: 'In Orbit', details: 'Dark-mode design system inspired by deep space' },
  { name: 'Pulsar Vision', date: 'Aug 2024', payload: 'PyTorch, OpenCV', status: 'Docked', details: 'Computer vision pipeline for pulsar signal imagery' },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(106,13,173,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Mission Log</h2>
        <p className="mt-2 text-white/80 max-w-2xl">Each project is a mission—complete with launch date, payload, status, and debrief.</p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="text-white/70">
              <tr>
                <th className="px-6 py-4">Mission Name</th>
                <th className="px-6 py-4">Launch Date</th>
                <th className="px-6 py-4">Payload</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Details</th>
              </tr>
            </thead>
            <tbody>
              {missions.map((m, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                  <td className="px-6 py-4">{m.name}</td>
                  <td className="px-6 py-4">{m.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{m.payload}</td>
                  <td className="px-6 py-4">{m.status}</td>
                  <td className="px-6 py-4 text-white/80">{m.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Projects;
