import { motion } from 'framer-motion';

export default function Signup() {
  return (
    <section id="signup" className="relative bg-gradient-to-t from-white via-[#F8FBFF] to-white py-24">
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-semibold text-[#0A0F1F]"
        >
          Get your free Evident Score
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-sm text-slate-600"
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
            className="w-full flex-1 rounded-full border border-slate-200/70 bg-white px-5 py-3 text-sm text-[#0A0F1F] shadow-[0_6px_20px_rgba(2,6,23,0.04)] outline-none placeholder:text-slate-400 focus:border-[#9FF0FF] focus:ring-2 focus:ring-[#9FF0FF]/30"
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center rounded-full bg-[#0A0F1F] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(2,6,23,0.2)] transition-transform duration-200 hover:scale-[1.02]"
          >
            <span className="relative">
              Get Your Free Evident Score
              <span className="absolute inset-x-0 -bottom-0.5 block h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#9FF0FF] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </button>
        </motion.form>

        <p className="mt-6 text-[12px] text-slate-500">Built by Scalelabs. © Evident.so 2025.</p>
      </div>
    </section>
  );
}
