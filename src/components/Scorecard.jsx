import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Scorecard() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const light = useTransform(rotateY, [-15, 15], [0.2, 0.8]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const rX = (y / card.height - 0.5) * -10;
    const rY = (x / card.width - 0.5) * 10;
    rotateX.set(rX);
    rotateY.set(rY);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="relative bg-gradient-to-b from-[#161A24] via-[#111522] to-[#0B0D17] py-24 text-[#F8FAFC]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,244,224,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl"
        >
          Evident Scorecard
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-300">
          A composite visibility score spanning Human, Algorithmic, and AI signals.
        </p>

        <div className="mt-12 flex w-full items-center justify-center">
          <motion.div
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="group relative w-full max-w-3xl cursor-pointer rounded-3xl border border-slate-800/70 bg-[#0F1320]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-[#00E8FF]/40 via-transparent to-[#00E8FF]/40 opacity-50 blur transition-opacity duration-300 group-hover:opacity-80"
              aria-hidden
            />
            <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { label: 'Human', score: 82 },
                { label: 'Algorithmic', score: 76 },
                { label: 'AI', score: 88 },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-800/70 bg-[#0E1220]/70 p-5">
                  <div className="text-xs uppercase tracking-wide text-slate-400">{item.label}</div>
                  <div className="mt-2 flex items-end gap-2">
                    <div className="text-3xl font-extrabold">{item.score}</div>
                    <div className="mb-1 text-xs text-slate-400">/100</div>
                  </div>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-[#00E8FF] to-[#7CF4E0]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-2xl border border-slate-800/70 bg-[#0E1220]/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">Overall</div>
                  <div className="mt-1 text-2xl font-extrabold">Evident Score: 82</div>
                </div>
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                  style={{ filter: `brightness(${light.get()})` }}
                  className="h-10 w-10 rounded-full bg-[#00E8FF] shadow-[0_0_30px_8px_rgba(0,232,255,0.6)]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 text-center text-sm text-slate-400">
          <span className="border-b border-[#00E8FF]/60 pb-0.5">Currently in pilot with select brands and agencies</span>
        </div>
      </div>
    </section>
  );
}
