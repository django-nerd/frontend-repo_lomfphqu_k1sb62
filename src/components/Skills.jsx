import React from 'react';

const skills = [
  { group: 'Navigation Suite', items: [
    { name: 'Problem Solving', level: 92 },
    { name: 'Critical Thinking', level: 90 },
  ]},
  { group: 'Propulsion Array', items: [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'C++', level: 75 },
  ]},
  { group: 'Sensor Array', items: [
    { name: 'Data Analysis', level: 89 },
    { name: 'Computer Vision', level: 82 },
    { name: 'GIS', level: 70 },
  ]},
  { group: 'Shield Generators', items: [
    { name: 'Cybersecurity', level: 68 },
    { name: 'Testing & QA', level: 80 },
  ]},
  { group: 'Comms Array', items: [
    { name: 'Technical Writing', level: 86 },
    { name: 'Public Speaking', level: 78 },
    { name: 'Collaboration', level: 88 },
  ]},
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(255,215,0,0.1),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Starship Systems</h2>
        <p className="mt-2 text-white/80 max-w-2xl">Subsystems that keep the craft on course and operating at peak power.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.group} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="font-semibold">{group.group}</h3>
              <div className="mt-4 space-y-3">
                {group.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">{s.name}</span>
                      <span className="text-white/60">{s.level}% power</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-amber-300" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
