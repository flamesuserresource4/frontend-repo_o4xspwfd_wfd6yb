import React from 'react';

const points = [
  {
    title: 'Color-Forward Design',
    body: 'Cyan, fuchsia and violet accents guide attention and make signal strength obvious at a glance.',
  },
  {
    title: 'Live Interaction',
    body: 'The hero’s firefly responds to your cursor, creating a delightful sense of depth and motion.',
  },
  {
    title: 'Accessible by Default',
    body: 'High-contrast text, larger targets, and strong focus rings keep navigation effortless.'
  },
];

export default function Explainer() {
  return (
    <section className="relative w-full bg-[#0B0D17] text-white">
      {/* stronger accent blurs */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute left-4 top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-10 bottom-8 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Why Evident</h2>
        <p className="mt-3 max-w-2xl text-white/70">A crisp, playful system that celebrates color while keeping your focus on what matters.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/0 via-fuchsia-500/15 to-cyan-400/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              <h3 className="relative z-10 text-lg font-medium">{p.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-white/70">{p.body}</p>
              {/* underline accent */}
              <div className="relative z-10 mt-6 h-px w-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
