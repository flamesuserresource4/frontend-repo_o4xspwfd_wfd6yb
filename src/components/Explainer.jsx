import { motion } from 'framer-motion';

export default function Explainer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#12142A] via-[#14182A] to-[#0B0D17] py-24 text-[#F8FAFC]">
      {/* Vibrant color accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_15%_0%,rgba(196,78,255,0.35),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_500px_at_85%_15%,rgba(255,0,128,0.26),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_50%_30%,rgba(0,232,255,0.18),transparent_68%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-2xl font-extrabold tracking-tight text-[#F8FAFC] sm:text-3xl"
        >
          Signal clarity across humans, algorithms, and AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-relaxed text-slate-200"
        >
          We quantify how your brand is perceived and understood by different systems.
          Our scoring model maps the surfaces that matter most for discoverability.
        </motion.p>

        {/* Three cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Human Signals',
              text: 'Narrative, clarity, and brand comprehension across key touchpoints.',
            },
            {
              title: 'Algorithmic Signals',
              text: 'Technical health, site structure, and network authority.',
            },
            {
              title: 'AI Signals',
              text: 'Entity grounding, semantic coverage, and model alignment.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-800/70 bg-[#11132A]/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              {/* Stronger fuchsia/cyan accents */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-fuchsia-500/30 blur-2xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-10 h-44 w-44 rounded-full bg-cyan-400/25 blur-2xl" />

              <div className="mb-3 h-[2px] w-16 bg-gradient-to-r from-cyan-400 via-cyan-300 via-fuchsia-400 to-fuchsia-600" />
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{card.text}</p>

              {/* Scanning line */}
              <motion.div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                animate={{ x: ['-10%', '10%', '-10%'] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
