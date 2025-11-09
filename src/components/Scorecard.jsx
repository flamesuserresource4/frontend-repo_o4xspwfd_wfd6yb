import React from 'react';

const metrics = [
  { label: 'Clarity', value: 84 },
  { label: 'Delight', value: 92 },
  { label: 'Speed', value: 76 },
];

export default function Scorecard() {
  return (
    <section className="relative w-full bg-[#0B0D17] text-white">
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute left-1/3 top-6 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Scorecard</h2>
        <p className="mt-3 max-w-2xl text-white/70">A vivid gradient language communicates signal strength instantly.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {metrics.map((m) => (
              <div key={m.label} className="mb-6 last:mb-0">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/80">{m.label}</span>
                  <span className="text-white/60">{m.value}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-cyan-300 via-40% via-fuchsia-400 to-fuchsia-500"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 p-6 [background:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.04))]">
            <h3 className="text-lg font-medium">Gradient Border Card</h3>
            <p className="mt-2 text-sm text-white/70">Hover to see a soft glow accentuating the cyan→fuchsia spectrum.</p>
            <div className="mt-6 rounded-xl border border-transparent p-[2px] [background:linear-gradient(90deg,rgba(0,232,255,0.6),rgba(236,72,153,0.6))]">
              <div className="rounded-[10px] bg-[#0B0D17] p-4">
                <p className="text-sm text-white/80">Consistent accents reinforce hierarchy and movement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
