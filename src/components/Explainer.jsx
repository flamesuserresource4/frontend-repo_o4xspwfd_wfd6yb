import { motion } from 'framer-motion';

export default function Explainer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8FBFF] py-24 text-[#0A0F1F]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(159,240,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-2xl font-semibold tracking-tight text-[#0A0F1F] sm:text-3xl"
        >
          Understand your visibility across humans, algorithms, and AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-relaxed text-[#1F2937]"
        >
          Evident analyzes how your brand is understood by humans, algorithms, and AI to
          quantify your discoverability. We map signals across content, structure, and
          context to surface what makes you findable — and what holds you back.
        </motion.p>

        {/* Subtle data glyphs / lines implying scanning */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Human Signals',
              text: 'Clarity, intent, and brand narrative across key surfaces.',
            },
            {
              title: 'Algorithmic Signals',
              text: 'Technical health, structure, and network resonance.',
            },
            {
              title: 'AI Signals',
              text: 'Model grounding, entity coherence, and semantic coverage.',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(2,6,23,0.04)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#9FF0FF]/20 blur-2xl" />
              <div className="mb-2 h-[2px] w-12 bg-gradient-to-r from-[#9FF0FF] to-transparent" />
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{card.text}</p>

              {/* Scanning line */}
              <motion.div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9FF0FF] to-transparent"
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
