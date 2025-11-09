import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <section id="signup" className="relative bg-gradient-to-t from-[#13162B] via-[#161A24] to-[#0B0D17] py-24 text-[#F8FAFC]">
      {/* Ambient color wash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_80%,rgba(196,78,255,0.28),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_90%,rgba(0,232,255,0.18),transparent_65%)]" />
      </div>

      <div className="relative mx-auto max-w-xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold"
        >
          Get your free Evident Score
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-sm text-slate-200"
        >
          Join the pilot to measure and improve your discoverability across humans, algorithms, and AI.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            className="w-full flex-1 rounded-full border border-fuchsia-600/40 bg-[#0E1226] px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40 outline-none"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center rounded-full bg-[conic-gradient(at_0%_0%,theme(colors.cyan.300),theme(colors.cyan.200),theme(colors.fuchsia.400),theme(colors.fuchsia.600),theme(colors.cyan.300))] px-6 py-3 text-sm font-semibold text-[#0B0D17] shadow-[0_10px_30px_rgba(236,72,153,0.35)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-[#0B0D17]"
          >
            <span className="relative">
              Get Your Free Evident Score
              <span className="absolute inset-x-0 -bottom-0.5 block h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </button>
        </motion.form>

        <p className="mt-6 text-[12px] text-slate-300">Built by Scalelabs. © Evident.so 2025.</p>
      </div>
    </section>
  );
}
